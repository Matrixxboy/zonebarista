import GridPattern from '@/components/common/GridPattern';
import Card from '@/components/common/Card';
import SectionLabel from '@/components/common/SectionLabel';
import { files } from '@/data/knowledge';
import { Link } from 'react-router-dom';
import { ArrowRight, Beaker, Droplet, Flame } from 'lucide-react';

export default function Explainers() {
  const explainerDomains = ['D06', 'D07', 'D08']; // Chemistry, Water, Roasting
  const explainerFiles = files.filter(f => explainerDomains.includes(f.domainId) && f.difficulty === 'advanced');

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <GridPattern className="mb-16 p-12" opacity={3}>
        <h1 className="heading-display text-6xl md:text-8xl mb-6 uppercase">
          SCIENCE<br />EXPLAINERS
        </h1>
        <p className="text-lg max-w-2xl flush-left leading-relaxed">
          Deep-dive explorations of the fundamental scientific principles governing coffee extraction, water chemistry, and thermal dynamics.
        </p>
      </GridPattern>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {explainerFiles.map((file, index) => {
          let Icon = Beaker;
          if (file.domainId === 'D07') Icon = Droplet;
          if (file.domainId === 'D08') Icon = Flame;

          return (
            <Card key={file.id} variant="default" className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold bg-black text-white self-start px-2 py-1">
                <Icon size={12} />
                <span>{file.domainId} • {file.id}</span>
              </div>
              
              <h2 className="text-xl font-bold uppercase mb-3 flex-1">{file.title}</h2>
              
              <p className="text-sm leading-relaxed mb-6 text-gray-600 line-clamp-3 border-l-2 border-black pl-3">
                {file.keyTopics}
              </p>
              
              <div className="mt-auto">
                <Link to="/knowledge-base" className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold hover:text-accent transition-colors group">
                  READ EXPLORATION <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
