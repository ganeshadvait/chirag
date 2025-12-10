export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/Chirag-New-logo_.webp"
            alt="HexaHealth"
            className="h-15"
          />
        </div>

        {/* RIGHT: CTA BUTTONS */}
        <div className="flex items-center gap-3">

          {/* Call Button - icon only on mobile */}
          <a
            href="tel:9513168778"
            className="flex items-center gap-2 bg-[#ff7b6b] hover:bg-[#ff6a5a] text-white font-semibold px-4 py-2 rounded-full shadow transition"
          >
            <span className="text-xl">📞</span>
            <span className="hidden md:inline">Call 9513168778</span>
          </a>

          {/* WhatsApp Button - icon only on mobile */}
          <a
            href="https://wa.me/9513168778"
            target="_blank"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-full shadow transition"
          >
            <span className="text-xl">🟢</span>
            <span className="hidden md:inline">Chat With Piles Expert</span>
          </a>
        </div>

      </div>
    </header>
  );
}
