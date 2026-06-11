import { CoffeeRecipe } from '@/types';

export const spicedRecipes: CoffeeRecipe[] = [
  {
    id: 'sp-01',
    name: 'Cardamom Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Ground Coffee (Medium)', volume: '2 tbsp', weight: '15g' },
      { name: 'Green Cardamom Pods', volume: '3 pods', weight: '1g' },
      { name: 'Water', volume: '8 oz', weight: '240g' },
      { name: 'Brown Sugar', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Crush the cardamom pods gently to expose the seeds inside.',
      'Add the crushed pods and ground coffee to a French press.',
      'Pour hot water just off the boil over the grounds.',
      'Steep for 4 minutes, then plunge and serve with a touch of brown sugar.'
    ],
    metadata: { occasion: 'Morning Quiet', season: 'Autumn', mood: 'Fragrant & Earthy' }
  },
  {
    id: 'sp-02',
    name: 'Cinnamon Honey Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Honey', volume: '1 tbsp', weight: '21g' },
      { name: 'Ground Cinnamon', volume: '1/2 tsp', weight: '2g' },
      { name: 'Cinnamon Stick', volume: '1 piece', weight: '3g' },
      { name: 'Oat Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'In a warm mug, whisk the honey and ground cinnamon together into a paste.',
      'Pour in the hot coffee and stir until the paste dissolves.',
      'Top with warm oat milk and garnish with a cinnamon stick.'
    ],
    metadata: { occasion: 'Cozy Afternoon', season: 'Autumn/Winter', mood: 'Sweet & Comforting' }
  },
  {
    id: 'sp-03',
    name: 'Gingerbread Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Gingerbread Syrup', volume: '1 oz', weight: '30g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Whipped Cream', volume: '2 tbsp', weight: '15g' },
      { name: 'Nutmeg & Ginger', volume: '1 dash', weight: '0.5g' }
    ],
    steps: [
      'Add the gingerbread syrup to the bottom of a mug.',
      'Pull a double espresso directly over the syrup.',
      'Pour the steamed milk into the mug.',
      'Top generously with whipped cream and a dash of mixed nutmeg and ginger.'
    ],
    metadata: { occasion: 'Holiday Treat', season: 'Winter', mood: 'Festive & Spiced' }
  },
  {
    id: 'sp-04',
    name: 'Chai-Spiced Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Masala Chai Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Whole Milk', volume: '4 oz', weight: '120g' },
      { name: 'Star Anise', volume: '1 pod', weight: '1g' }
    ],
    steps: [
      'Steam the milk and chai concentrate together until hot and frothy.',
      'Pour the hot filter coffee into a mug.',
      'Top with the steamed chai milk.',
      'Float a star anise pod on the foam.'
    ],
    metadata: { occasion: 'Cold Morning', season: 'Winter', mood: 'Complex & Warming' }
  },
  {
    id: 'sp-05',
    name: 'Star Anise Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Ground Coffee', volume: '2 tbsp', weight: '15g' },
      { name: 'Star Anise', volume: '2 pods', weight: '2g' },
      { name: 'Water', volume: '8 oz', weight: '240g' },
      { name: 'Vanilla Extract', volume: '1/4 tsp', weight: '1g' }
    ],
    steps: [
      'Add the star anise pods directly into the coffee grounds before brewing.',
      'Brew using your preferred pour-over or drip method.',
      'Stir in the vanilla extract before serving.'
    ],
    metadata: { occasion: 'Evening Reading', season: 'Autumn', mood: 'Licorice & Bold' }
  },
  {
    id: 'sp-06',
    name: 'Clove & Nutmeg Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Whole Cloves', volume: '2 pieces', weight: '0.5g' },
      { name: 'Freshly Grated Nutmeg', volume: '1 pinch', weight: '0.5g' },
      { name: 'Demerara Sugar', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Place the whole cloves at the bottom of the mug.',
      'Pour in the hot coffee and let it steep for 2 minutes.',
      'Remove the cloves with a spoon.',
      'Stir in the sugar and grate fresh nutmeg over the top.'
    ],
    metadata: { occasion: 'Winter Walk', season: 'Winter', mood: 'Pungent & Warm' }
  },
  {
    id: 'sp-07',
    name: 'Turmeric Latte Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Golden Milk Paste (Turmeric, Pepper, Coconut Oil)', volume: '1 tsp', weight: '5g' },
      { name: 'Oat Milk', volume: '8 oz', weight: '240g' },
      { name: 'Honey', volume: '1 tsp', weight: '7g' }
    ],
    steps: [
      'Whisk the golden milk paste and honey into the hot espresso until dissolved.',
      'Steam the oat milk to a thick microfoam.',
      'Pour the milk over the spiced espresso.'
    ],
    metadata: { occasion: 'Health Boost', season: 'All Year', mood: 'Earthy & Golden' }
  },
  {
    id: 'sp-08',
    name: 'Black Pepper Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Dark Roast Coffee (Brewed)', volume: '8 oz', weight: '240g' },
      { name: 'Freshly Cracked Black Pepper', volume: '1 pinch', weight: '0.2g' },
      { name: 'Dark Chocolate Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Heavy Cream', volume: '1 splash', weight: '15g' }
    ],
    steps: [
      'Stir the dark chocolate syrup into the hot coffee.',
      'Add a small splash of heavy cream.',
      'Crack black pepper directly over the top of the coffee to provide a sharp, aromatic contrast to the chocolate.'
    ],
    metadata: { occasion: 'Midday Kick', season: 'Winter', mood: 'Sharp & Dark' }
  },
  {
    id: 'sp-09',
    name: 'Rose Petal Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Light Roast Pour Over', volume: '8 oz', weight: '240g' },
      { name: 'Edible Dried Rose Petals', volume: '1 tsp', weight: '1g' },
      { name: 'Rose Water', volume: '2 drops', weight: '0.1g' },
      { name: 'White Sugar', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Add the dried rose petals to the coffee grounds before performing the pour-over.',
      'Brew normally.',
      'Stir in the sugar and exactly two drops of rose water (do not over-pour or it will taste like perfume).'
    ],
    metadata: { occasion: 'Spring Morning', season: 'Spring', mood: 'Delicate & Floral' }
  },
  {
    id: 'sp-10',
    name: 'Vanilla Cardamom Latte',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Vanilla Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Ground Cardamom', volume: '1 pinch', weight: '0.5g' },
      { name: 'Whole Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'Add the vanilla syrup and a pinch of cardamom to the espresso cup.',
      'Pull the espresso directly over the spices.',
      'Steam the milk and pour latte art over the spiced espresso.'
    ],
    metadata: { occasion: 'Cafe Date', season: 'Autumn', mood: 'Sweet & Aromatic' }
  },
  {
    id: 'sp-11',
    name: 'Orange Peel Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Medium Roast Pour Over', volume: '8 oz', weight: '240g' },
      { name: 'Fresh Orange Peel', volume: '1 large strip', weight: '3g' },
      { name: 'Brown Sugar', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Place the orange peel at the bottom of the mug.',
      'Muddle it slightly with the brown sugar to release the citrus oils.',
      'Brew the hot pour-over directly into the mug.',
      'Remove the peel before drinking.'
    ],
    metadata: { occasion: 'Bright Morning', season: 'Summer', mood: 'Zesty & Clean' }
  },
  {
    id: 'sp-12',
    name: 'Maple Cinnamon Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Real Maple Syrup', volume: '1 tbsp', weight: '20g' },
      { name: 'Cinnamon Stick', volume: '1 piece', weight: '3g' },
      { name: 'Half and Half', volume: '2 tbsp', weight: '30g' }
    ],
    steps: [
      'Stir the maple syrup into the hot coffee.',
      'Add the half and half.',
      'Use the cinnamon stick as a stirrer, leaving it in the mug to steep.'
    ],
    metadata: { occasion: 'Autumn Walk', season: 'Autumn', mood: 'Woodsy & Sweet' }
  },
  {
    id: 'sp-13',
    name: 'Chili Mocha',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Dark Chocolate Powder', volume: '1.5 tbsp', weight: '10g' },
      { name: 'Cayenne Pepper', volume: '1 tiny pinch', weight: '0.1g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'Mix the dark chocolate powder and cayenne pepper in the bottom of a mug.',
      'Pull the espresso over the powder and whisk until it forms a smooth, spicy syrup.',
      'Pour the steamed milk over the mixture.'
    ],
    metadata: { occasion: 'Cold Night', season: 'Winter', mood: 'Fiery & Rich' }
  },
  {
    id: 'sp-14',
    name: 'Smoked Cinnamon Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Hot Black Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Cinnamon Stick', volume: '1 large', weight: '5g' },
      { name: 'Vanilla Syrup', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Using a culinary torch, carefully scorch one end of the cinnamon stick until it begins to smoke.',
      'Place the smoking stick under an inverted glass for 30 seconds to capture the smoke.',
      'Flip the glass, quickly add the vanilla syrup and hot coffee.',
      'Stir with the burnt cinnamon stick.'
    ],
    metadata: { occasion: 'Campfire', season: 'Autumn', mood: 'Smoky & Intense' }
  },
  {
    id: 'sp-15',
    name: 'Basil Coffee Cooler',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Fresh Basil Leaves', volume: '3-4 leaves', weight: '1g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Tonic Water', volume: '4 oz', weight: '120g' }
    ],
    steps: [
      'Gently smack the basil leaves to release their aroma, then place them in a glass.',
      'Add simple syrup and cold brew, then muddle lightly.',
      'Add ice and top with tonic water.',
      'Stir gently.'
    ],
    metadata: { occasion: 'Garden Party', season: 'Summer', mood: 'Herbal & Refreshing' }
  },
  {
    id: 'sp-16',
    name: 'Rosemary Vanilla Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Fresh Rosemary Sprig', volume: '1 piece', weight: '2g' },
      { name: 'Vanilla Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Cream', volume: '1 splash', weight: '15g' }
    ],
    steps: [
      'Add the vanilla syrup to the mug.',
      'Bruise the rosemary sprig slightly and place it in the mug.',
      'Pour the hot coffee over the rosemary and let it steep for 1 minute.',
      'Add cream to taste, leaving the sprig in as a garnish.'
    ],
    metadata: { occasion: 'Winter Morning', season: 'Winter', mood: 'Piney & Sweet' }
  },
  {
    id: 'sp-17',
    name: 'Mint Espresso',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Fresh Mint Leaves', volume: '5 leaves', weight: '1g' },
      { name: 'Agave Syrup', volume: '1 tsp', weight: '5g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'In a shaker, muddle the mint leaves with the agave syrup.',
      'Add the fresh hot espresso and ice.',
      'Shake vigorously to flash-chill the espresso (Shakerato style).',
      'Double strain into a chilled martini glass.'
    ],
    metadata: { occasion: 'Afternoon Refresh', season: 'Summer', mood: 'Cooling & Bold' }
  },
  {
    id: 'sp-18',
    name: 'Masala Coffee',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Ground Coffee', volume: '2 tbsp', weight: '15g' },
      { name: 'Masala Spice Blend (Cardamom, Cinnamon, Cloves, Ginger, Pepper)', volume: '1/2 tsp', weight: '2g' },
      { name: 'Water', volume: '8 oz', weight: '240g' },
      { name: 'Jaggery or Sugar', volume: '1 tbsp', weight: '15g' }
    ],
    steps: [
      'Mix the masala spice blend into the coffee grounds.',
      'Brew using a French Press or pour-over.',
      'Stir in the jaggery until completely dissolved. Serve hot.'
    ],
    metadata: { occasion: 'Monsoon Break', season: 'Monsoon', mood: 'Spiced & Complex' }
  }
];
