function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="heading-display text-[12vw] sm:text-6xl md:text-7xl mb-12 break-words">PRIVACY POLICY</h1>

      <div className="space-y-8 flush-left">
        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">01.</span> INTRODUCTION
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            ZONE BARISTA respects your privacy. This policy explains how we collect, use, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">02.</span> DATA COLLECTION
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            We collect minimal data. Calculations performed locally in your browser are not transmitted to our servers. No personal information is required to use this application.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">03.</span> LOCAL STORAGE
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            Your calculation history is stored locally in your browser using localStorage. This data never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">04.</span> EXTERNAL LINKS
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            This site contains links to external websites. We are not responsible for their privacy practices.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">05.</span> CONTACT
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            Questions about privacy? Contact us at matrix.utsav.lankapati@gmail.com
          </p>
        </section>

        <p className="text-xs text-muted mt-12 pt-6 border-t border-black">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Privacy;
