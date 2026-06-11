import { CoffeeRecipe } from '@/types';

export const experimentalRecipes: CoffeeRecipe[] = [
  {
    id: 'e-01',
    name: 'Charcoal Cold Brew',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Activated Charcoal Powder (Food Grade)', volume: '1/4 tsp', weight: '1g' },
      { name: 'Vanilla Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Oat Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'In a glass, whisk the activated charcoal powder and vanilla syrup into the cold brew until completely dissolved.',
      'Add ice to the glass.',
      'Pour the oat milk over the top to create a striking contrast against the pitch-black coffee.'
    ],
    metadata: { occasion: 'Morning Detox', season: 'All Year', mood: 'Edgy & Smooth' }
  },
  {
    id: 'e-02',
    name: 'Butter Coffee (Bulletproof)',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Grass-Fed Unsalted Butter', volume: '1 tbsp', weight: '15g' },
      { name: 'MCT Oil or Coconut Oil', volume: '1 tbsp', weight: '15g' }
    ],
    steps: [
      'Add the hot coffee, butter, and MCT oil to a high-speed blender.',
      'Blend on high for 20-30 seconds until the fats completely emulsify with the coffee, creating a thick, frothy, latte-like head.',
      'Pour immediately into a warm mug and drink before the fats begin to separate.'
    ],
    metadata: { occasion: 'Fasting Window', season: 'All Year', mood: 'Rich & Energizing' }
  },
  {
    id: 'e-03',
    name: 'Mushroom Coffee',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Medicinal Mushroom Extract Powder (Lion\'s Mane / Chaga)', volume: '1 tsp', weight: '2g' },
      { name: 'Cacao Powder', volume: '1/2 tsp', weight: '1g' },
      { name: 'Stevia or Agave', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'In the bottom of a mug, whisk the mushroom extract, cacao, and sweetener with a splash of hot coffee to form a paste.',
      'Pour in the remaining hot coffee and stir vigorously.',
      'Serve immediately.'
    ],
    metadata: { occasion: 'Morning Focus', season: 'Winter', mood: 'Earthy & Functional' }
  },
  {
    id: 'e-04',
    name: 'Protein Cold Brew',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '4 oz', weight: '120g' },
      { name: 'Vanilla Protein Powder', volume: '1 scoop', weight: '30g' },
      { name: 'Almond Milk', volume: '4 oz', weight: '120g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'In a shaker bottle or blender, combine the protein powder, almond milk, and cold brew.',
      'Shake or blend until completely smooth and frothy with no clumps.',
      'Pour over ice into a tall glass.'
    ],
    metadata: { occasion: 'Post-Workout', season: 'Summer', mood: 'Functional & Thick' }
  },
  {
    id: 'e-05',
    name: 'Avocado Coffee',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Ripe Avocado', volume: '1/2 piece', weight: '50g' },
      { name: 'Double Espresso (Chilled)', volume: '2 oz', weight: '36g' },
      { name: 'Sweetened Condensed Milk', volume: '2 tbsp', weight: '30g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'Scoop the avocado into a blender.',
      'Add the condensed milk, ice, and chilled espresso.',
      'Blend on high until extremely smooth, creamy, and thick (like a milkshake).',
      'Pour into a glass and serve with a thick straw.'
    ],
    metadata: { occasion: 'Afternoon Snack', season: 'Spring/Summer', mood: 'Creamy & Tropical' }
  },
  {
    id: 'e-06',
    name: 'Cheese Foam Coffee',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Iced Black Coffee (Americano or Cold Brew)', volume: '8 oz', weight: '240g' },
      { name: 'Cream Cheese (Softened)', volume: '2 tbsp', weight: '30g' },
      { name: 'Heavy Whipping Cream', volume: '2 tbsp', weight: '30g' },
      { name: 'Sugar', volume: '1 tbsp', weight: '15g' },
      { name: 'Sea Salt', volume: '1 pinch', weight: '0.5g' }
    ],
    steps: [
      'In a bowl, whip the cream cheese, heavy cream, sugar, and salt together until it forms a thick, pourable, salty-sweet foam.',
      'Pour the iced black coffee into a glass.',
      'Float the heavy cheese foam over the top of the coffee.',
      'Drink without a straw, allowing the coffee to pass through the foam.'
    ],
    metadata: { occasion: 'Boba Run', season: 'Summer', mood: 'Savory & Sweet' }
  },
  {
    id: 'e-07',
    name: 'Activated Coconut Coffee',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Coconut Butter', volume: '1 tbsp', weight: '15g' },
      { name: 'Maca Powder', volume: '1 tsp', weight: '5g' },
      { name: 'Cinnamon', volume: '1 dash', weight: '0.5g' }
    ],
    steps: [
      'Add all ingredients to a blender.',
      'Blend on high for 20 seconds to emulsify the coconut butter and activate the maca powder.',
      'Pour the frothy, creamy coffee into a mug and top with a dash of cinnamon.'
    ],
    metadata: { occasion: 'Morning Energy', season: 'Winter', mood: 'Nutty & Adaptogenic' }
  },
  {
    id: 'e-08',
    name: 'Nitro Espresso Float',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Nitro Cold Brew', volume: '6 oz', weight: '180g' },
      { name: 'Double Espresso (Hot)', volume: '2 oz', weight: '36g' },
      { name: 'Vanilla Ice Cream', volume: '1 scoop', weight: '50g' }
    ],
    steps: [
      'Pour the cascading nitro cold brew into a glass.',
      'Carefully drop a scoop of vanilla ice cream into the nitro coffee.',
      'Pull a hot double espresso and immediately pour it over the ice cream.',
      'Serve with a spoon.'
    ],
    metadata: { occasion: 'Dessert', season: 'Summer', mood: 'Creamy & Caffeinated' }
  },
  {
    id: 'e-09',
    name: 'Espresso Cola',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Craft Cola (e.g., Fentimans or Mexican Coke)', volume: '6 oz', weight: '180g' },
      { name: 'Vanilla Syrup', volume: '0.25 oz', weight: '7g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' },
      { name: 'Lemon Twist', volume: '1 piece', weight: '1g' }
    ],
    steps: [
      'Fill a tall glass with ice and pour in the cola.',
      'Stir in the vanilla syrup.',
      'Pull a double espresso and pour it slowly over the cola (it will foam up significantly, pour carefully).',
      'Express a lemon twist over the top and drop it in.'
    ],
    metadata: { occasion: 'Afternoon Lift', season: 'Summer', mood: 'Bubbly & Dark' }
  },
  {
    id: 'e-10',
    name: 'Cold Brew Energy Tonic',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '3 oz', weight: '90g' },
      { name: 'Tonic Water', volume: '4 oz', weight: '120g' },
      { name: 'Liquid B12 or Ginseng Extract', volume: '1 dropper', weight: '1g' },
      { name: 'Lemon Juice', volume: '0.5 oz', weight: '15g' }
    ],
    steps: [
      'Fill a glass with ice and add the tonic water and lemon juice.',
      'Add the functional extract (B12 or Ginseng).',
      'Pour the cold brew concentrate over the top.',
      'Stir well before drinking.'
    ],
    metadata: { occasion: 'Pre-Workout', season: 'Spring', mood: 'Crisp & Functional' }
  },
  {
    id: 'e-11',
    name: 'Coffee Matcha Sparkler',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Matcha Powder', volume: '1 tsp', weight: '3g' },
      { name: 'Water (for Matcha)', volume: '2 oz', weight: '60g' },
      { name: 'Cold Brew Coffee', volume: '2 oz', weight: '60g' },
      { name: 'Sparkling Water', volume: '4 oz', weight: '120g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' }
    ],
    steps: [
      'Whisk the matcha and water together until frothy.',
      'In a tall glass filled with ice, add the sparkling water and simple syrup.',
      'Pour the matcha in as the middle layer.',
      'Float the cold brew coffee on top.'
    ],
    metadata: { occasion: 'Brunch', season: 'Summer', mood: 'Earthy & Bubbly' }
  },
  {
    id: 'e-12',
    name: 'Coffee Tea Fusion (Yuenyeung)',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Strong Black Tea (Ceylon)', volume: '4 oz', weight: '120g' },
      { name: 'Strong Filter Coffee', volume: '4 oz', weight: '120g' },
      { name: 'Sweetened Condensed Milk', volume: '2 tbsp', weight: '30g' }
    ],
    steps: [
      'Brew a very strong, astringent black tea and a strong drip coffee.',
      'In a mug, mix the hot tea and hot coffee in a 1:1 ratio.',
      'Stir in the sweetened condensed milk until completely dissolved.',
      'Serve hot or pour over ice.'
    ],
    metadata: { occasion: 'Afternoon Tea', season: 'Autumn', mood: 'Complex & Syrupy' }
  },
  {
    id: 'e-13',
    name: 'Coffee Shrub Mocktail',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Apple Cider Vinegar or Berry Shrub', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Soda Water', volume: '3 oz', weight: '90g' }
    ],
    steps: [
      'In a glass with ice, combine the vinegar/shrub, simple syrup, and cold brew.',
      'Stir well.',
      'Top with soda water and garnish with a sprig of thyme or a lemon wheel.'
    ],
    metadata: { occasion: 'Happy Hour', season: 'Summer', mood: 'Tart & Funky' }
  },
  {
    id: 'e-14',
    name: 'Coffee Kefir',
    category: 'Experimental & Modern',
    ingredients: [
      { name: 'Milk Kefir (Plain)', volume: '6 oz', weight: '180g' },
      { name: 'Cold Brew Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Honey or Maple Syrup', volume: '1 tbsp', weight: '21g' }
    ],
    steps: [
      'In a glass, whisk the kefir and honey together until smooth.',
      'Add a small handful of ice.',
      'Stir in the cold brew concentrate.',
      'Enjoy the tangy, probiotic-rich iced latte.'
    ],
    metadata: { occasion: 'Breakfast', season: 'Spring', mood: 'Tangy & Creamy' }
  }
];
