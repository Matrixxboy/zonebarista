import { useState, useMemo } from 'react';
import { CoffeeRecipe } from '@/types';
import { top20Recipes, categorizedRecipeNames } from '@/data/recipes';
import { ArrowRight, Sparkles, RefreshCcw } from 'lucide-react';

interface RecipeMatchmakerProps {
  onSelectRecipe: (recipe: CoffeeRecipe) => void;
}

type QuestionId = 'time' | 'temp' | 'flavor' | 'adventure';

const QUESTIONS = [
  {
    id: 'time' as QuestionId,
    title: 'Time of Day?',
    options: [
      { label: 'Morning Wake-up', value: 'morning' },
      { label: 'Afternoon Lift', value: 'afternoon' },
      { label: 'Evening/Night', value: 'evening' },
    ]
  },
  {
    id: 'temp' as QuestionId,
    title: 'Temperature?',
    options: [
      { label: 'Hot & Cozy', value: 'hot' },
      { label: 'Ice Cold', value: 'cold' },
      { label: 'Surprise Me', value: 'any' },
    ]
  },
  {
    id: 'flavor' as QuestionId,
    title: 'Flavor Profile?',
    options: [
      { label: 'Sweet & Decadent', value: 'sweet' },
      { label: 'Bright & Refreshing', value: 'bright' },
      { label: 'Spiced & Complex', value: 'spiced' },
    ]
  },
  {
    id: 'adventure' as QuestionId,
    title: 'Adventure Level?',
    options: [
      { label: 'Keep it Classic', value: 'classic' },
      { label: 'A Little Weird', value: 'experimental' },
      { label: 'Boozy/Spiked', value: 'boozy' },
    ]
  }
];

function RecipeMatchmaker({ onSelectRecipe }: RecipeMatchmakerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<QuestionId, string | null>>({
    time: null,
    temp: null,
    flavor: null,
    adventure: null,
  });
  const [showResults, setShowResults] = useState(false);

  // Generate a unified list of all 100+ recipes to search through
  const allRecipesOracle = useMemo(() => {
    const all: CoffeeRecipe[] = [...top20Recipes];
    
    const mapCategory = (arr: string[], catName: string, defaultOccasion: string, defaultSeason: string, defaultMood: string) => {
      arr.forEach(name => {
        if (!all.find(r => r.name === name)) {
          all.push({
            id: name.toLowerCase().replace(/\s+/g, '-'),
            name,
            category: catName,
            ingredients: [],
            steps: [],
            metadata: {
              occasion: defaultOccasion,
              season: defaultSeason,
              mood: defaultMood
            }
          });
        }
      });
    };

    mapCategory(categorizedRecipeNames.spirits, 'Coffee + Spirits', 'Evening/Late Night', 'All Year', 'Boozy & Dark');
    mapCategory(categorizedRecipeNames.cold, 'Cold Coffee', 'Hot Afternoon', 'Summer', 'Refreshing & Bright');
    mapCategory(categorizedRecipeNames.global, 'Global Traditional', 'Morning Commute', 'All Year', 'Traditional & Spiced');
    mapCategory(categorizedRecipeNames.spiced, 'Spiced & Herbal', 'Chilly Morning', 'Winter', 'Spiced & Complex');
    mapCategory(categorizedRecipeNames.dessert, 'Dessert-Inspired', 'Afternoon Snack', 'All Year', 'Sweet & Decadent');
    mapCategory(categorizedRecipeNames.experimental, 'Experimental & Modern', 'Weekend Adventure', 'All Year', 'Funky & Weird');
    mapCategory(categorizedRecipeNames.luxury, 'Signature Luxury', 'Morning Treat', 'Spring', 'Luxurious & Rich');

    return all;
  }, []);

  const handleSelect = (qId: QuestionId, value: string) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  };

  const getRecommendations = (): CoffeeRecipe[] => {
    return allRecipesOracle.filter(recipe => {
      let score = 0;
      const { occasion, season, mood } = recipe.metadata;
      const o = occasion.toLowerCase();
      const s = season.toLowerCase();
      const m = mood.toLowerCase();
      const cat = recipe.category.toLowerCase();

      // Time Match
      if (answers.time === 'morning' && (o.includes('morning') || o.includes('commute') || o.includes('treat'))) score++;
      if (answers.time === 'afternoon' && (o.includes('afternoon') || o.includes('snack') || o.includes('lift'))) score++;
      if (answers.time === 'evening' && (o.includes('evening') || o.includes('night') || o.includes('hour'))) score++;

      // Temp Match
      if (answers.temp === 'hot' && (s.includes('winter') || s.includes('autumn') || cat.includes('traditional'))) score++;
      if (answers.temp === 'cold' && (s.includes('summer') || s.includes('spring') || cat.includes('cold'))) score++;
      if (answers.temp === 'any') score++;

      // Flavor Match
      if (answers.flavor === 'sweet' && (m.includes('sweet') || m.includes('rich') || m.includes('luxurious') || cat.includes('dessert'))) score++;
      if (answers.flavor === 'bright' && (m.includes('refreshing') || m.includes('bright') || m.includes('zesty'))) score++;
      if (answers.flavor === 'spiced' && (m.includes('spiced') || m.includes('complex') || m.includes('dark') || cat.includes('spiced'))) score++;

      // Adventure Match
      if (answers.adventure === 'classic' && (cat.includes('global') || cat.includes('cold'))) score++;
      if (answers.adventure === 'experimental' && (cat.includes('experimental') || m.includes('funky') || m.includes('weird'))) score++;
      if (answers.adventure === 'boozy' && (cat.includes('spirits') || m.includes('boozy'))) score++;

      return score >= 2; // Require at least 2 matching criteria for accuracy
    }).sort((a, b) => {
      // Recompute exact score to sort
      let scoreA = 0, scoreB = 0;
      const evalScore = (recipe: CoffeeRecipe) => {
        let sc = 0;
        const o = recipe.metadata.occasion.toLowerCase();
        const s = recipe.metadata.season.toLowerCase();
        const m = recipe.metadata.mood.toLowerCase();
        const cat = recipe.category.toLowerCase();

        if (answers.time === 'morning' && (o.includes('morning') || o.includes('treat'))) sc++;
        if (answers.time === 'afternoon' && (o.includes('afternoon') || o.includes('snack'))) sc++;
        if (answers.time === 'evening' && (o.includes('evening') || o.includes('night'))) sc++;
        
        if (answers.temp === 'hot' && (s.includes('winter') || s.includes('autumn'))) sc++;
        if (answers.temp === 'cold' && (s.includes('summer') || s.includes('spring') || cat.includes('cold'))) sc++;
        if (answers.temp === 'any') sc++;
        
        if (answers.flavor === 'sweet' && (m.includes('sweet') || m.includes('rich') || cat.includes('dessert'))) sc++;
        if (answers.flavor === 'bright' && (m.includes('refreshing') || m.includes('bright'))) sc++;
        if (answers.flavor === 'spiced' && (m.includes('spiced') || m.includes('complex') || cat.includes('spiced'))) sc++;

        if (answers.adventure === 'classic' && cat.includes('global')) sc++;
        if (answers.adventure === 'experimental' && cat.includes('experimental')) sc += 2; // weigh this heavier
        if (answers.adventure === 'boozy' && cat.includes('spirits')) sc += 2; // weigh this heavier
        return sc;
      };
      
      scoreA = evalScore(a);
      scoreB = evalScore(b);

      return scoreB - scoreA;
    });
  };

  const reset = () => {
    setAnswers({ time: null, temp: null, flavor: null, adventure: null });
    setShowResults(false);
  };

  const recommendations = showResults ? getRecommendations() : [];
  const topRecommendations = recommendations.slice(0, 3);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-accent text-white p-6 border-4 border-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <Sparkles size={32} className="group-hover:rotate-12 transition-transform" />
          <div className="text-left">
            <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight">The Oracle Matchmaker</h3>
            <p className="font-mono text-sm opacity-90 uppercase tracking-widest mt-1">Answer 4 questions to search our entire 100+ recipe database</p>
          </div>
        </div>
        <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform hidden md:block" />
      </button>
    );
  }

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex justify-between items-start mb-8 border-b-4 border-black pb-6">
        <div>
          <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tight flex items-center gap-3">
            <Sparkles className="text-accent" size={32} />
            The Oracle
          </h3>
          <p className="font-mono text-gray-500 uppercase tracking-widest mt-2">Searching 100+ recipes</p>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="font-mono text-sm uppercase tracking-widest font-bold hover:text-accent transition-colors underline underline-offset-4"
        >
          Close
        </button>
      </div>

      {!showResults ? (
        <div className="space-y-10">
          {QUESTIONS.map((q, idx) => (
            <div key={q.id} className="animate-in fade-in duration-500" style={{ animationDelay: `${idx * 150}ms` }}>
              <p className="font-bold text-xl mb-4">
                <span className="text-accent mr-2">{idx + 1}.</span> {q.title}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {q.options.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(q.id, opt.value)}
                    className={`p-4 border-2 font-bold uppercase text-sm tracking-wide transition-all ${
                      answers[q.id] === opt.value 
                        ? 'border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]' 
                        : 'border-gray-200 hover:border-black bg-white text-gray-600 hover:text-black'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-6 border-t-2 border-dashed border-gray-300">
            <button
              onClick={() => setShowResults(true)}
              disabled={!answers.time || !answers.temp || !answers.flavor || !answers.adventure}
              className="w-full py-6 bg-accent text-white font-black text-xl md:text-2xl uppercase tracking-widest border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:cursor-not-allowed"
            >
              Consult The Oracle
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-in zoom-in-95 duration-500">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-bold text-2xl uppercase">Your Matches</h4>
            <button 
              onClick={reset}
              className="flex items-center gap-2 font-mono text-sm uppercase font-bold hover:text-accent transition-colors"
            >
              <RefreshCcw size={16} /> Start Over
            </button>
          </div>

          {topRecommendations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRecommendations.map((recipe, idx) => (
                <div key={recipe.id} className={`border-4 border-black p-6 flex flex-col justify-between ${idx === 0 ? 'bg-[#fdfbf7] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:-translate-y-2' : 'bg-white'}`}>
                  <div>
                    {idx === 0 && <span className="bg-accent text-white px-2 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4 inline-block">Top Match</span>}
                    <h5 className="font-black text-2xl uppercase leading-none mb-4">{recipe.name}</h5>
                    <p className="font-mono text-sm text-gray-600 mb-2">Category: {recipe.category}</p>
                    <p className="font-mono text-sm text-accent mb-6 border-l-2 border-accent pl-2">Vibe: {recipe.metadata.mood}</p>
                  </div>
                  
                  <button 
                    onClick={() => onSelectRecipe(recipe)}
                    className="flex items-center gap-2 font-bold uppercase text-sm group"
                  >
                    View Recipe <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 border-4 border-dashed border-gray-300 text-center">
              <p className="font-bold text-xl mb-4">The Oracle is confused.</p>
              <p className="text-gray-500 mb-6">No perfect match found for that combination. Try adjusting your preferences.</p>
              <button onClick={reset} className="underline font-bold uppercase">Try Again</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RecipeMatchmaker;
