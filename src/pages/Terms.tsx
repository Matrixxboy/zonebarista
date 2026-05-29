function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="heading-display text-6xl md:text-7xl mb-12">TERMS OF SERVICE</h1>

      <div className="space-y-8 flush-left">
        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">01.</span> AGREEMENT
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            By using ZONE BARISTA, you agree to these terms. If you do not agree, do not use this application.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">02.</span> USE LICENSE
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside mt-4 text-base space-y-2 max-w-3xl">
            <li>Modify or copy the materials</li>
            <li>Use materials for commercial purposes or public display</li>
            <li>Attempt to decompile or reverse engineer code</li>
            <li>Remove copyright or proprietary notations</li>
            <li>Transfer materials to another person or "mirror" on other servers</li>
          </ul>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">03.</span> DISCLAIMER
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            The materials on ZONE BARISTA are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties. Further, we do not warrant the accuracy, completeness, or usefulness of any information on this site.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">04.</span> LIMITATIONS
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            In no event shall ZONE BARISTA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">05.</span> ACCURACY OF MATERIALS
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            The materials appearing on ZONE BARISTA could include technical inaccuracies. We do not warrant that any of the materials are accurate, complete, or current. We may make changes without notice.
          </p>
        </section>

        <section>
          <h2 className="section-label mb-4">
            <span className="section-label-number">06.</span> MODIFICATIONS
          </h2>
          <p className="text-base leading-relaxed max-w-3xl">
            We may revise these terms at any time without notice. By using this site, you are agreeing to be bound by the then current version of these terms.
          </p>
        </section>

        <p className="text-xs text-muted mt-12 pt-6 border-t border-black">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Terms;
