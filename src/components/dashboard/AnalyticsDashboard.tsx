import KnowledgeGraph from './KnowledgeGraph';
import AnalyticsCharts from './AnalyticsCharts';
import SectionLabel from '../common/SectionLabel';

interface Props {
  onNodeClick?: (id: string) => void;
}

export default function AnalyticsDashboard({ onNodeClick }: Props) {
  return (
    <div className="flex flex-col h-full space-y-12 pb-12">
      <div className="space-y-4">
        <h1 className="heading-display text-[12vw] sm:text-5xl uppercase border-b-4 border-black pb-4 break-words leading-none">
          Master System Index
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed bg-[#fdfbf7] p-6 border-4 border-black font-semibold">
          System overview and structural intelligence graph mapping the relationships between all domains and formulas.
        </p>
      </div>

      <div className="card border-4 p-0 overflow-hidden bg-white">
        <div className="p-4 border-b-4 border-black bg-black text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <SectionLabel number={1} text="CONSTELLATION GRAPH" className="text-white" inverted />
          <div className="text-xs font-mono opacity-80">INTERACTIVE D3.JS MAP</div>
        </div>
        <div className="h-[500px] w-full bg-[#fdfbf7] relative">
          <KnowledgeGraph onNodeClick={onNodeClick} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnalyticsCharts />
      </div>
    </div>
  );
}
