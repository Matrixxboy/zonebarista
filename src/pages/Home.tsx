import GridPattern from '@/components/common/GridPattern';
import Card from '@/components/common/Card';
import SectionLabel from '@/components/common/SectionLabel';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <GridPattern className="mb-16 p-12" opacity={3}>
        <h1 className="heading-display text-7xl md:text-9xl mb-6">
          COFFEE<br />FORMULA<br />SYSTEM
        </h1>
        <p className="text-lg max-w-2xl flush-left leading-relaxed">
          Structured knowledge base for coffee brewing science, chemistry, roasting, and sensory analysis.
        </p>
      </GridPattern>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card variant="default">
          <SectionLabel number={1} text="LEARNING SYSTEM" className="mb-4" />
          <p className="text-sm leading-relaxed">
            Explore structured coffee knowledge modules organized by topic, difficulty, and application.
          </p>
        </Card>

        <Card variant="default">
          <SectionLabel number={2} text="FORMULAS" className="mb-4" />
          <p className="text-sm leading-relaxed">
            Interactive calculators for brewing ratios, water chemistry, roasting curves, and more.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
