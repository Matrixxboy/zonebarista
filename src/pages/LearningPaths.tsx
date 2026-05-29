import GridPattern from '@/components/common/GridPattern';
import Card from '@/components/common/Card';
import SectionLabel from '@/components/common/SectionLabel';
import { files } from '@/data/knowledge';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function LearningPaths() {
  const learningFiles = files.filter(f => f.domainId === 'D12');

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <GridPattern className="mb-16 p-12" opacity={3}>
        <h1 className="heading-display text-6xl md:text-8xl mb-6 uppercase">
          PERFECT<br />LEARNING
        </h1>
        <p className="text-lg max-w-2xl flush-left leading-relaxed">
          Structured pathways designed to take you from a beginner enthusiast to a coffee professional. Select a path below to view the curriculum.
        </p>
      </GridPattern>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learningFiles.map((file, index) => (
          <Card key={file.id} variant={index === 0 ? "solid" : "default"} className="flex flex-col h-full">
            <SectionLabel number={index + 1} text={file.difficulty === 'all' ? 'FOUNDATION' : 'ADVANCED'} className="mb-4" />
            <h2 className="text-2xl font-bold uppercase mb-3 flex-1">{file.title}</h2>
            <p className="text-sm leading-relaxed mb-6 border-l-4 border-black pl-4">
              <span className="font-bold uppercase text-xs mb-1 block">Key Topics</span>
              {file.keyTopics}
            </p>
            <div className="mt-auto">
              <Link to="/knowledge-base" className={`inline-flex items-center gap-2 font-mono uppercase text-sm font-bold border-b-2 pb-1 ${index === 0 ? 'border-white hover:text-gray-300' : 'border-black hover:text-gray-600'} transition-colors`}>
                <BookOpen size={16} />
                Open Curriculum <ArrowRight size={16} />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
