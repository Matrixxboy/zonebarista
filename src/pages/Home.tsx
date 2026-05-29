import { useState, useEffect } from 'react';
import GridPattern from '@/components/common/GridPattern';
import Card from '@/components/common/Card';
import SectionLabel from '@/components/common/SectionLabel';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Sigma, Beaker, CheckCircle2, Star, Lightbulb, User } from 'lucide-react';
import { files, domains } from '@/data/knowledge';
import { formulas } from '@/data/formulas';

const didYouKnowFacts = [
  {
    title: "Water composition can drastically change the flavor of coffee.",
    desc: "High bicarbonate alkalinity buffers acidity, making coffee taste completely flat—even if extracted perfectly at a 20% yield. Understanding the chemistry is half the battle."
  },
  {
    title: "The Maillard reaction accelerates significantly at 150°C.",
    desc: "This chemical reaction between amino acids and reducing sugars is responsible for browning and creates hundreds of different flavor compounds critical to roasted coffee."
  },
  {
    title: "Extraction Yield and TDS measure completely different things.",
    desc: "Yield is the percentage of the dry coffee bean that dissolved into the water (ideally 18-22%), while TDS measures how concentrated the final beverage is in the cup."
  },
  {
    title: "Espresso is a brewing method, not a roast level.",
    desc: "Any coffee bean can be brewed as espresso. However, roasters often blend and roast specifically to balance the intense concentration of the extraction process."
  },
  {
    title: "A coffee bean is actually the seed of a cherry.",
    desc: "The processing method (Washed, Natural, Honey) used to remove the fruit at the farm level drastically alters the final cup profile before it ever reaches a roaster."
  }
];

function Home() {
  const totalFiles = files.length;
  const totalDomains = domains.length;
  const totalFormulas = formulas.length;

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % didYouKnowFacts.length);
    }, 15000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-24">
      
      {/* 1. HERO */}
      <section>
        <GridPattern
            className="relative overflow-hidden border-4 border-black bg-white px-8 py-16 md:px-16 md:py-24 group"
            opacity={4}
          >
            {/* Background Coffee Beans */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="/beans.png"
                alt="Coffee Beans"
                className="absolute -top-20 -right-20 w-[400px] md:w-[600px] opacity-[0.08] rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>

            {/* Decorative Label */}
            <div className="absolute top-0 left-0 border-r-2 border-b-2 border-black bg-black text-white px-4 py-2 font-mono text-xs tracking-[0.3em] uppercase z-10">
              Coffee Engineering Platform
            </div>

            <div className="relative z-20 flex flex-col lg:flex-row justify-between gap-12 items-start lg:items-end">
              <div className="max-w-4xl">
                <h1 className="heading-display uppercase leading-[0.9] tracking-[-0.06em] text-[15vw] sm:text-6xl md:text-8xl lg:text-[9rem] font-black mb-8 break-words">
                  ZONE<br />BARISTA
                </h1>
                <div className="max-w-2xl border-l-4 border-black pl-6">
                  <p className="text-lg md:text-2xl leading-relaxed font-medium">
                    A science-first knowledge base, brewing calculator,
                    and engineering platform built for specialty coffee
                    professionals, researchers, and enthusiasts.
                  </p>
                </div>
              </div>
            </div>
          </GridPattern>
      </section>

      {/* 2. System Statistics */}
      <section className="border-y-4 border-black py-12 bg-[#fdfbf7]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-[15vw] sm:text-6xl md:text-7xl font-black text-accent mb-2">{totalFiles}</span>
            <span className="font-mono text-sm font-bold tracking-widest uppercase">Files Indexed</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-[15vw] sm:text-6xl md:text-7xl font-black text-accent mb-2">{totalDomains}</span>
            <span className="font-mono text-sm font-bold tracking-widest uppercase">Core Domains</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-[15vw] sm:text-6xl md:text-7xl font-black text-accent mb-2">{totalFormulas}</span>
            <span className="font-mono text-sm font-bold tracking-widest uppercase">Active Formulas</span>
          </div>
        </div>
      </section>

      {/* 3. What You'll Learn */}
      <section>
        <SectionLabel number={1} text="WHAT YOU'LL LEARN" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Extraction Dynamics', desc: 'Master TDS, Yield, and optimal brew ratios.' },
            { title: 'Water Chemistry', desc: 'Understand alkalinity, hardness, and mineral buffering.' },
            { title: 'Roasting Science', desc: 'Thermal dynamics, Maillard reactions, and DTR.' },
            { title: 'Sensory Analysis', desc: 'SCA cupping protocols and defect identification.' }
          ].map((item, idx) => (
            <div key={idx} className="border-4 border-black p-6 bg-white hover:-translate-y-1 transition-transform">
              <CheckCircle2 size={32} className="text-accent mb-4" />
              <h3 className="font-bold text-xl uppercase mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Topics */}
      <section>
        <SectionLabel number={2} text="FEATURED TOPICS" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'E01', title: 'The Perfect Extraction', path: '/knowledge-base' },
            { id: 'W02', title: 'SCA Water Standards', path: '/knowledge-base' },
            { id: 'R04', title: 'Maillard Reaction', path: '/knowledge-base' }
          ].map((topic, idx) => (
            <Link key={idx} to={topic.path} className="flex items-center gap-4 border-2 border-black p-4 bg-white hover:bg-black hover:text-white transition-colors group">
              <div className="bg-accent text-black font-black px-3 py-1 font-mono">{topic.id}</div>
              <span className="font-bold uppercase tracking-tight flex-1">{topic.title}</span>
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Knowledge / Calculator / Explainers */}
      <section>
        <SectionLabel number={3} text="CORE PLATFORM" className="mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="default" className="flex flex-col hover:-translate-y-2 transition-transform duration-300 bg-white group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Database size={48} strokeWidth={1} className="mb-6 group-hover:text-accent transition-colors" />
            <h2 className="text-2xl font-bold uppercase mb-3">Master Index</h2>
            <p className="text-sm leading-relaxed mb-8 flex-1">
              Access meticulously structured markdown documents covering everything from bean intelligence to café operations.
            </p>
            <Link to="/knowledge-base" className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold hover:text-accent transition-colors">
              ENTER ARCHIVE <ArrowRight size={16} />
            </Link>
          </Card>

          <Card variant="default" className="flex flex-col hover:-translate-y-2 transition-transform duration-300 bg-white group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Sigma size={48} strokeWidth={1} className="mb-6 group-hover:text-accent transition-colors" />
            <h2 className="text-2xl font-bold uppercase mb-3">Calculators</h2>
            <p className="text-sm leading-relaxed mb-8 flex-1">
              Interactive mathematical tools for dialing in extraction yield, water chemistry, roasting metrics, and beverage costing.
            </p>
            <Link to="/calculators" className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold hover:text-accent transition-colors">
              RUN CALCULATIONS <ArrowRight size={16} />
            </Link>
          </Card>

          <Card variant="default" className="flex flex-col hover:-translate-y-2 transition-transform duration-300 bg-white group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Beaker size={48} strokeWidth={1} className="mb-6 group-hover:text-accent transition-colors" />
            <h2 className="text-2xl font-bold uppercase mb-3">Deep Dives</h2>
            <p className="text-sm leading-relaxed mb-8 flex-1">
              Advanced explorations of the fundamental scientific principles governing extraction dynamics and thermal chemistry.
            </p>
            <Link to="/explainers" className="inline-flex items-center gap-2 font-mono uppercase text-sm font-bold hover:text-accent transition-colors">
              READ EXPLORATIONS <ArrowRight size={16} />
            </Link>
          </Card>
        </div>
      </section>

      {/* 6. Did You Know? */}
      <section className="bg-black text-white p-8 md:p-12 border-4 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[10rem] -mt-10 -mr-4 pointer-events-none">
          ?
        </div>
        <SectionLabel number={4} text="DID YOU KNOW?" className="mb-6 text-white" inverted />
        <div className="flex flex-col md:flex-row gap-8 items-center min-h-[200px]">
          <Lightbulb size={64} className="text-accent flex-shrink-0 animate-pulse" />
          <div key={currentFactIndex} className="animate-in fade-in slide-in-from-right-8 duration-700 ease-out">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 leading-tight">
              {didYouKnowFacts[currentFactIndex].title}
            </h3>
            <p className="text-lg md:text-xl font-medium text-gray-300 leading-relaxed max-w-3xl">
              {didYouKnowFacts[currentFactIndex].desc}
            </p>
          </div>
        </div>
      </section>

      {/* 7. About Creator + Mission */}
      <section className="border-4 border-black p-4 sm:p-6 md:p-12 bg-white relative">
        <SectionLabel number={5} text="CREATOR & MISSION" className="mb-8" />
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-1 min-w-0">
            <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl uppercase mb-6 leading-none">
              Democratizing
              <span className="block text-accent">
                Coffee Science
              </span>
            </h2>
            <p className="text-lg leading-relaxed font-medium mb-6">
              Zone Barista was engineered to bridge the gap between abstract coffee science and practical barista application. The mission is to provide an open-source, mathematically rigorous platform for professionals to elevate their craft.
            </p>
          </div>
          <div className="w-full md:w-1/3 border-t-4 md:border-t-0 md:border-l-4 border-black pt-8 md:pt-0 md:pl-8">
            <User size={48} className="mb-4 text-accent" />
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
              Created & Maintained By
            </p>
            <h3 className="text-2xl font-black tracking-tight mb-2">
              <a href="/developer" className="text-black hover:text-accent transition-colors">
                Utsav Lankapati
              </a>
            </h3>
            <p className="text-sm font-bold text-gray-600 leading-relaxed">
              Computer Engineer • AI/ML Developer
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
