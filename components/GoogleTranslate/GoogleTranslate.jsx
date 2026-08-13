"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const languages = [
  { code: "en", label: "English", native: "EN", script: "Aa" },
  { code: "kn", label: "ಕನ್ನಡ", native: "Kannada", script: "ಕ" },
  { code: "hi", label: "हिंदी", native: "Hindi", script: "हि" },
];

const SUPPORTED = ["en", "kn", "hi"];

const STORAGE_KEY = "chirag-lang";

// Save language preference (localStorage as primary, cookie as fallback)
function saveLangPreference(code) {
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // localStorage blocked (iOS private browsing) — use cookie
  }
  document.cookie = `${STORAGE_KEY}=${code};path=/;max-age=31536000;SameSite=Lax`;
}

// Read saved language preference
function getSavedLang() {
  try {
    const ls = localStorage.getItem(STORAGE_KEY);
    if (ls && SUPPORTED.includes(ls)) return ls;
  } catch {
    // localStorage blocked
  }
  const match = document.cookie.match(new RegExp(`${STORAGE_KEY}=(\\w+)`));
  if (match?.[1] && SUPPORTED.includes(match[1])) return match[1];
  return "en";
}

// Every domain scope a googtrans cookie could have been written on.
// Google's own widget writes it on the registrable domain (".example.com"),
// which is NOT cleared by only targeting the current hostname — that is why
// switching back to English used to leave the page translated.
function cookieDomains() {
  const host = window.location.hostname;
  const domains = [null]; // host-only cookie (no domain attribute)
  // Skip domain-scoped cookies for localhost / raw IPs — browsers reject them.
  if (host === "localhost" || /^[\d.]+$/.test(host) || host.includes(":")) {
    return domains;
  }
  const parts = host.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    const d = parts.slice(i).join(".");
    domains.push(d, `.${d}`);
  }
  return domains;
}

// Clear Google Translate's googtrans cookie on every host/domain variant
function clearGoogTransCookie() {
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
  for (const domain of cookieDomains()) {
    document.cookie = `googtrans=; ${expired}; path=/;${domain ? ` domain=${domain};` : ""}`;
  }
}

// Persist the chosen language in Google's googtrans cookie so the
// translation survives page navigations / fresh loads.
function setGoogTransCookie(langCode) {
  clearGoogTransCookie();
  if (langCode !== "en") {
    const value = `/en/${langCode}`;
    for (const domain of cookieDomains()) {
      document.cookie = `googtrans=${value}; path=/;${domain ? ` domain=${domain};` : ""}`;
    }
  }
}

// Apply a language change. Google Translate can neither cleanly revert an
// already-translated page nor re-translate translated text into a second
// language, so every switch goes through the cookie + a reload — that is the
// only path that works identically for English, Kannada and Hindi.
function applyGoogleTranslate(langCode) {
  setGoogTransCookie(langCode);
  window.location.reload();
}

export default function FloatingLanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("en");
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);

  // On mount: restore the saved language. The googtrans cookie is what makes
  // Google Translate apply it on load, so we only re-write the cookie when it
  // has drifted out of sync with the saved preference (e.g. Google cleared it).
  useEffect(() => {
    setMounted(true);
    const saved = getSavedLang();
    setActive(saved);
    const current = document.cookie.match(/googtrans=\/[^/]*\/(\w+)/)?.[1] || "en";
    if (current !== saved) {
      setGoogTransCookie(saved);
      // Only reload if the cookie actually took — otherwise we'd loop forever.
      const now = document.cookie.match(/googtrans=\/[^/]*\/(\w+)/)?.[1] || "en";
      if (now === saved) window.location.reload();
    }
  }, []);

  // Close on outside tap/click (works on iOS with touchstart)
  useEffect(() => {
    function handleClose(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) {
      document.addEventListener("mousedown", handleClose);
      document.addEventListener("touchstart", handleClose, { passive: true });
    }
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("touchstart", handleClose);
    };
  }, [open]);

  const handleSelect = useCallback(
    (code) => {
      if (code === active) {
        setOpen(false);
        return;
      }
      setActive(code);
      saveLangPreference(code);
      setOpen(false);
      applyGoogleTranslate(code); // sets googtrans cookie + reloads
    },
    [active],
  );

  if (!mounted) return null;

  const activeLang = languages.find((l) => l.code === active) || languages[0];

  return (
    <div ref={ref} className="fixed bottom-7 left-7 z-[9999] font-[var(--font-dmsans)] max-md:bottom-[115px] max-md:left-4">
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="hidden" />

      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`
          group relative flex items-center gap-2.5 py-3 pl-4 pr-5 rounded-full border-[1.5px]
          font-semibold text-sm cursor-pointer overflow-hidden select-none
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.04)]
          hover:-translate-y-[3px] hover:shadow-[0_4px_20px_rgba(98,85,135,0.18),0_12px_40px_rgba(98,85,135,0.08)]
          hover:border-violet-300 active:-translate-y-[1px]
          max-md:py-2.5 max-md:pl-3 max-md:pr-4 max-md:text-[13px] max-md:gap-2
          max-md:shadow-[0_2px_16px_rgba(0,0,0,0.1)]
          [-webkit-tap-highlight-color:transparent]
          ${open
            ? "bg-gradient-to-br from-[#625587] to-violet-500 border-violet-300 text-white"
            : "bg-white border-slate-200 text-slate-800"
          }
        `}
        aria-label="Change language"
      >
        {/* Hover gradient overlay */}
        <span className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#625587] to-violet-500 opacity-0 transition-opacity duration-300 ${open ? "" : "group-hover:opacity-100"}`} />

        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full border-2 border-violet-300 opacity-0 pointer-events-none -z-10 animate-[lswPulse_2s_ease-out_1s_2]" />

        {/* Globe icon */}
        <span className={`relative z-10 w-[22px] h-[22px] shrink-0 transition-colors duration-300 max-md:w-[19px] max-md:h-[19px] `}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
          </svg>
        </span>

        {/* Label */}
        <span className={`relative z-10 whitespace-nowrap transition-colors duration-300`}>
          {activeLang.label}
        </span>

        {/* Arrow */}
        <span className={`relative z-10 flex items-center transition-all duration-300 `}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {/* ── Panel ── */}
      {open && (
        <div className="absolute bottom-[calc(100%+14px)] left-0 bg-white/95 backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)] rounded-[20px] min-w-[260px] overflow-hidden border border-white/60 shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.06),0_20px_60px_rgba(98,85,135,0.12)] origin-bottom-left animate-[lswPanelIn_0.28s_cubic-bezier(0.32,0.72,0,1)] max-md:min-w-[240px] max-md:rounded-[18px]">
          {/* Gradient bar */}
          <div className="h-[3px] bg-gradient-to-r from-[#625587] via-violet-500 to-[#F8B956] rounded-t-[3px]" />

          {/* Header */}
          <div className="flex items-center gap-2 px-5 pt-4 pb-2 text-[11.5px] font-bold text-[#625587] uppercase tracking-[1px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#625587" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
            </svg>
            <span>Choose Language</span>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-0.5 p-1.5 px-2">
            {languages.map((lang) => {
              const isActive = active === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`
                    flex items-center justify-between w-full py-3 px-3.5 border-2 rounded-[14px] cursor-pointer
                    transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] select-none
                    [-webkit-tap-highlight-color:transparent]
                    max-md:py-2.5 max-md:px-3
                    ${isActive
                      ? "bg-gradient-to-br from-violet-50 to-violet-100 border-violet-300"
                      : "bg-transparent border-transparent hover:bg-violet-50 hover:border-violet-100 active:bg-violet-50"
                    }
                  `}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Script badge */}
                    <span
                      className={`
                        flex items-center justify-center w-[42px] h-[42px] rounded-xl text-white text-[17px] font-bold shrink-0
                        max-md:w-[38px] max-md:h-[38px] max-md:text-[15px] max-md:rounded-[10px]
                        ${isActive
                          ? "bg-gradient-to-br from-violet-500 to-violet-400 shadow-[0_4px_14px_rgba(139,92,246,0.35)]"
                          : "bg-gradient-to-br from-[#625587] to-[#7c6b9e] shadow-[0_2px_8px_rgba(98,85,135,0.25)]"
                        }
                      `}
                    >
                      {lang.script}
                    </span>

                    <div className="flex flex-col items-start gap-px">
                      <span className="text-[15px] font-semibold text-slate-800 leading-tight max-md:text-sm">
                        {lang.label}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {lang.native}
                      </span>
                    </div>
                  </div>

                  {/* Check */}
                  {isActive && (
                    <span className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#625587] text-white shrink-0 animate-[lswCheckPop_0.3s_cubic-bezier(0.34,1.56,0.64,1)]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="py-2.5 px-5 pb-3.5 text-[10.5px] text-slate-300 text-center tracking-wide">
            Powered by Google Translate
          </div>
        </div>
      )}
    </div>
  );
}
