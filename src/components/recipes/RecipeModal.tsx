import { X } from 'lucide-react';
import { CoffeeRecipe } from '@/types';

interface RecipeModalProps {
  recipe: CoffeeRecipe | null;
  onClose: () => void;
}

function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="sticky top-0 z-10 flex justify-between items-start bg-black text-white p-6 md:p-8">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-accent mb-2">
              {recipe.category}
            </p>
            <h2 className="heading-display text-4xl md:text-5xl uppercase leading-none">
              {recipe.name}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white text-black hover:bg-accent hover:text-white transition-colors border-2 border-transparent hover:border-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-12">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col border-2 border-black p-3">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1">Occasion</span>
              <span className="font-bold uppercase text-sm">{recipe.metadata.occasion}</span>
            </div>
            <div className="flex flex-col border-2 border-black p-3 bg-gray-100">
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1">Season</span>
              <span className="font-bold uppercase text-sm">{recipe.metadata.season}</span>
            </div>
            <div className="flex flex-col border-2 border-black p-3 bg-accent text-white">
              <span className="font-mono text-xs uppercase tracking-widest text-white/70 mb-1">Mood</span>
              <span className="font-bold uppercase text-sm">{recipe.metadata.mood}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ingredients */}
            <div>
              <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold font-mono">1</div>
                <h3 className="text-2xl font-black uppercase tracking-tight">Ingredients</h3>
              </div>
              {recipe.ingredients.length > 0 ? (
                <ul className="space-y-4">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex justify-between items-end border-b-2 border-dashed border-gray-300 pb-2">
                      <span className="font-bold text-lg leading-tight w-2/3">{ing.name}</span>
                      <div className="text-right flex flex-col items-end">
                        <span className="font-mono font-bold bg-black text-white px-2 py-0.5 text-sm">{ing.volume}</span>
                        <span className="font-mono text-xs text-gray-500 mt-1">{ing.weight}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-gray-100 p-6 border-2 border-dashed border-gray-400 text-center">
                  <p className="font-mono font-bold uppercase tracking-widest text-gray-500">Formulating Recipe...</p>
                  <p className="mt-2 text-sm">Exact volumetric measurements are currently being calculated.</p>
                </div>
              )}
            </div>

            {/* Steps */}
            <div>
              <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold font-mono">2</div>
                <h3 className="text-2xl font-black uppercase tracking-tight">Method</h3>
              </div>
              {recipe.steps.length > 0 ? (
                <ol className="space-y-6">
                  {recipe.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="font-mono font-bold text-accent text-xl">{idx + 1}.</span>
                      <p className="font-medium text-lg leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <div className="bg-gray-100 p-6 border-2 border-dashed border-gray-400 text-center">
                  <p className="font-mono font-bold uppercase tracking-widest text-gray-500">Method Pending...</p>
                  <p className="mt-2 text-sm">Step-by-step instructions are currently being finalized.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
