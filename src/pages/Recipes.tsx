import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import SectionLabel from '../components/common/SectionLabel';
import RecipeModal from '../components/recipes/RecipeModal';
import RecipeMatchmaker from '../components/recipes/RecipeMatchmaker';
import { top20Recipes, categorizedRecipeNames, spiritsRecipes, coldRecipes, globalRecipes, spicedRecipes, dessertRecipes, experimentalRecipes, luxuryRecipes } from '../data/recipes';
import { CoffeeRecipe } from '../types';

function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<CoffeeRecipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategorizedList = (title: string, recipes: string[], number: number) => {
    const filteredRecipes = recipes.filter(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (filteredRecipes.length === 0) return null;

    return (
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
        <SectionLabel number={number} text={title} className="mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRecipes.map((recipeName, rIdx) => {
          // Check if this recipe exists in the Top 20 or expanded batches so we can make it clickable
          const fullRecipe = [...top20Recipes, ...spiritsRecipes, ...coldRecipes, ...globalRecipes, ...spicedRecipes, ...dessertRecipes, ...experimentalRecipes, ...luxuryRecipes].find(r => r.name === recipeName);
          
          if (fullRecipe) {
            return (
              <button 
                key={rIdx} 
                onClick={() => setSelectedRecipe(fullRecipe)}
                className="bg-white text-left text-black hover:text-white p-6 border-2 border-black hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
              >
                <p className="font-bold text-lg leading-tight mb-4">{recipeName}</p>
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold group-hover:text-white flex items-center gap-1">
                  View Recipe <ArrowRight size={12} />
                </span>
              </button>
            );
          }

          return (
            <div 
              key={rIdx} 
              className="bg-white p-6 border-2 border-black hover:bg-gray-100 transition-colors group shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default"
            >
              <p className="font-bold text-lg leading-tight">{recipeName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
  };

  const filteredTop20 = top20Recipes.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-20 font-sans">
      <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <p className="font-mono text-sm uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-0.5 bg-black"></span>
          MENU INNOVATION
        </p>
        <h1 className="heading-display text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-[0.9]">
          Unique Coffee <br/><span className="text-accent">Recipes.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-2xl font-light mb-12">
          Beyond regular lattes, cappuccinos, and cold brews. Explore creative coffee drinks inspired by cocktails, spices, desserts, global traditions, and specialty cafés.
        </p>
      </div>

      <div className="mb-24">
        <RecipeMatchmaker onSelectRecipe={setSelectedRecipe} />
      </div>

      <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full bg-white border-4 border-black p-4 pl-12 text-lg font-bold font-mono uppercase tracking-widest placeholder:text-gray-400 focus:outline-none focus:border-accent shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] transition-colors"
            placeholder="Search all 100+ recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
        
        <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
          <SectionLabel number={1} text="Top 20 Menu Standouts" className="text-white mb-8 border-white" />
          <p className="text-gray-300 font-mono mb-8 uppercase tracking-widest text-sm">
            Particularly unique combinations that stand out on a menu. Click any recipe to view precise measurements, methods, and metadata.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTop20.length > 0 ? (
              filteredTop20.map((recipe, idx) => (
                <button 
                  key={recipe.id} 
                  onClick={() => setSelectedRecipe(recipe)}
                  className="flex items-center gap-4 p-4 border-2 border-white/20 hover:border-accent hover:bg-accent/10 transition-all group text-left"
                >
                  <span className="font-mono text-accent font-black text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="font-bold text-lg group-hover:text-accent transition-colors">{recipe.name}</span>
                  <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 text-accent transition-opacity" />
                </button>
              ))
            ) : (
              <p className="font-mono text-gray-400">No top 20 matches found.</p>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-24">
        {renderCategorizedList('Coffee + Spirits Inspired', categorizedRecipeNames.spirits, 2)}
        {renderCategorizedList('Cold Coffee & Specialty Café', categorizedRecipeNames.cold, 3)}
        {renderCategorizedList('Global Traditional', categorizedRecipeNames.global, 4)}
        {renderCategorizedList('Spiced & Herbal Creations', categorizedRecipeNames.spiced, 5)}
        {renderCategorizedList('Dessert-Inspired Recipes', categorizedRecipeNames.dessert, 6)}
        {renderCategorizedList('Experimental & Modern', categorizedRecipeNames.experimental, 7)}
        {renderCategorizedList('Signature Luxury', categorizedRecipeNames.luxury, 8)}
      </div>

      <RecipeModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </div>
  );
}

export default Recipes;
