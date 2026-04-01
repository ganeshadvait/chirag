// File: components/medicalTourism/mtBottomCta.jsx

export default function MtBottomCta() {
  return (
    <section className="relative overflow-hidden bg-[#625587] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-white/[0.02]" />

      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.4rem]">
          Ready to Begin Your Healing Journey?
        </h2>

        <p className="mx-auto mt-4 max-w-[520px] text-base leading-7 !text-white/70">
          Join thousands of international patients who chose India&apos;s
          specialist colorectal hospital. Send us your reports today — book a
          consultation, fast response, no commitment.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/+919380498256?text=I'm%20an%20international%20patient%20and%20want%20to%20enquire%20about%20treatment%20at%20Chirag%20Global%20Hospitals"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-4xl bg-[#F8B956] px-8 py-4 text-base font-bold text-white transition hover:bg-[#c95520]"
          >
            💬 WhatsApp Us Now
          </a>

          <a
            href="tel:08065916422"
            className="inline-flex items-center justify-center rounded-4xl border border-white/25 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            📞 Call: +91-80659 16422
          </a>
        </div>
      </div>
    </section>
  );
}