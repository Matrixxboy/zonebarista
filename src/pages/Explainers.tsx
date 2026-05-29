function Explainers() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="heading-display text-6xl md:text-8xl mb-12">
        FORMULA<br />EXPLAINERS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="card-muted border-4">
          <h2 className="section-label mb-4">
            <span className="section-label-number">01.</span> DERIVATIONS
          </h2>
          <p className="text-sm leading-relaxed">
            Deep-dive explorations of fundamental formulas and their mathematical foundations.
          </p>
        </article>

        <article className="card-muted border-4">
          <h2 className="section-label mb-4">
            <span className="section-label-number">02.</span> APPLICATIONS
          </h2>
          <p className="text-sm leading-relaxed">
            Real-world use cases, examples, and universal applications across coffee preparation.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Explainers;
