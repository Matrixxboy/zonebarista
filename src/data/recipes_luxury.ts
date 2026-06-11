import { CoffeeRecipe } from '@/types';

export const luxuryRecipes: CoffeeRecipe[] = [
  {
    id: 'l-01',
    name: 'Saffron Gold Latte',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Saffron Threads', volume: '4-5 threads', weight: '0.1g' },
      { name: 'Edible Gold Leaf', volume: '1 sheet', weight: '0.1g' },
      { name: 'Whole Milk', volume: '8 oz', weight: '240g' },
      { name: 'Raw Honey', volume: '1 tbsp', weight: '21g' }
    ],
    steps: [
      'Steep the saffron threads in the honey and a splash of hot water for 5 minutes.',
      'Pull the espresso directly over the saffron honey mixture.',
      'Steam the milk to a velvety microfoam and pour into the espresso.',
      'Using tweezers, carefully place a piece of edible gold leaf on the foam.'
    ],
    metadata: { occasion: 'Celebration', season: 'Winter', mood: 'Opulent & Rich' }
  },
  {
    id: 'l-02',
    name: 'Rose Pistachio Latte',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Pistachio Paste (Unsweetened)', volume: '1 tbsp', weight: '15g' },
      { name: 'Rose Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Oat Milk', volume: '8 oz', weight: '240g' },
      { name: 'Dried Rose Petals', volume: '1 pinch', weight: '1g' }
    ],
    steps: [
      'Whisk the pistachio paste and rose syrup into the hot espresso.',
      'Steam the oat milk and pour it over the mixture to create latte art.',
      'Garnish the rim of the cup with crushed pistachios and a pinch of dried rose petals.'
    ],
    metadata: { occasion: 'Morning Treat', season: 'Spring', mood: 'Floral & Nutty' }
  },
  {
    id: 'l-03',
    name: 'Black Truffle Coffee',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Single Origin Espresso (Earth/Chocolate Notes)', volume: '2 oz', weight: '36g' },
      { name: 'Black Truffle Oil (High Quality)', volume: '1-2 drops', weight: '0.1g' },
      { name: 'Heavy Cream', volume: '1 oz', weight: '30g' },
      { name: 'Dark Chocolate Shavings', volume: '1 tsp', weight: '2g' }
    ],
    steps: [
      'Lightly whip the heavy cream with exactly 1-2 drops of black truffle oil.',
      'Pull the espresso into a small, warm cup.',
      'Spoon the truffle cream over the espresso.',
      'Garnish with dark chocolate shavings. Drink immediately.'
    ],
    metadata: { occasion: 'Fine Dining', season: 'Autumn', mood: 'Savory & Exclusive' }
  },
  {
    id: 'l-04',
    name: 'Vanilla Bean Bourbon Latte',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Bourbon Vanilla Extract (Non-alcoholic)', volume: '1/2 tsp', weight: '2g' },
      { name: 'Real Vanilla Bean Caviar', volume: '1 scrape', weight: '1g' },
      { name: 'Whole Milk', volume: '8 oz', weight: '240g' },
      { name: 'Demerara Sugar', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Mix the vanilla extract, vanilla caviar, and sugar into the espresso.',
      'Steam the milk to a thick, glossy consistency.',
      'Pour the milk into the cup, allowing the black vanilla specks to swirl through the white foam.'
    ],
    metadata: { occasion: 'Weekend Morning', season: 'Winter', mood: 'Classic & Rich' }
  },
  {
    id: 'l-05',
    name: 'Salted Honey Espresso',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Raw Local Honey', volume: '1 tbsp', weight: '21g' },
      { name: 'Flaky Sea Salt (Maldon)', volume: '1 large pinch', weight: '0.5g' },
      { name: 'Sparkling Water (on the side)', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'Place the honey in the bottom of a demitasse cup.',
      'Pull the double espresso directly over the honey and stir well.',
      'Sprinkle the flaky sea salt on the crema.',
      'Serve with a small side glass of sparkling water as a palate cleanser.'
    ],
    metadata: { occasion: 'Afternoon Pick-Me-Up', season: 'All Year', mood: 'Intense & Balanced' }
  },
  {
    id: 'l-06',
    name: 'Toasted Marshmallow Mocha',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Artisan Dark Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Marshmallow Fluff', volume: '2 tbsp', weight: '30g' }
    ],
    steps: [
      'Mix the chocolate sauce and espresso in a large mug.',
      'Pour in the steamed milk.',
      'Spoon a thick layer of marshmallow fluff over the entire top of the mug.',
      'Use a culinary blowtorch to toast the fluff until it is dark brown and caramelized.'
    ],
    metadata: { occasion: 'Winter Evening', season: 'Winter', mood: 'Gooey & Decadent' }
  },
  {
    id: 'l-07',
    name: 'Dark Chocolate Orange Espresso',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Dark Chocolate (70%+ Cacao)', volume: '1 square', weight: '10g' },
      { name: 'Orange Zest', volume: '1 pinch', weight: '1g' },
      { name: 'Steamed Milk', volume: '4 oz', weight: '120g' }
    ],
    steps: [
      'Place the square of dark chocolate in the bottom of a cortado glass.',
      'Pull the espresso directly over the chocolate and let it sit for 30 seconds to melt, then stir.',
      'Pour the steamed milk over the mixture.',
      'Garnish with freshly grated orange zest.'
    ],
    metadata: { occasion: 'Post-Dinner', season: 'Autumn', mood: 'Bitter & Citrusy' }
  },
  {
    id: 'l-08',
    name: 'Smoked Oak Coffee',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'French Press Coffee (Sumatra or Dark Roast)', volume: '8 oz', weight: '240g' },
      { name: 'Oak Wood Chips', volume: '1 pinch', weight: '2g' },
      { name: 'Maple Syrup', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Using a smoking gun, smoke the empty mug with oak wood chips.',
      'Cover the mug for 1 minute to let the smoke bind to the glass walls.',
      'Quickly pour in the maple syrup and hot French Press coffee.',
      'Stir and serve immediately.'
    ],
    metadata: { occasion: 'Campfire', season: 'Autumn', mood: 'Smoky & Earthy' }
  },
  {
    id: 'l-09',
    name: 'Coconut Caramel Affogato',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Coconut Gelato or Ice Cream', volume: '1 large scoop', weight: '60g' },
      { name: 'Salted Caramel Sauce', volume: '1 tbsp', weight: '15g' },
      { name: 'Toasted Coconut', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Drizzle the salted caramel sauce along the inside of a chilled glass.',
      'Add the scoop of coconut gelato.',
      'Pour the hot espresso over the gelato.',
      'Garnish with toasted coconut.'
    ],
    metadata: { occasion: 'Summer Dessert', season: 'Summer', mood: 'Tropical & Sweet' }
  },
  {
    id: 'l-10',
    name: 'Hazelnut Praline Latte',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Hazelnut Praline Paste', volume: '1 tbsp', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Crushed Caramelized Hazelnuts', volume: '1 tsp', weight: '4g' }
    ],
    steps: [
      'Whisk the praline paste into the hot espresso until smooth.',
      'Pour in the steamed milk.',
      'Garnish the foam with crushed caramelized hazelnuts.'
    ],
    metadata: { occasion: 'Morning Pastry Pairing', season: 'Autumn', mood: 'Nutty & Crunchy' }
  },
  {
    id: 'l-11',
    name: 'Maple Pecan Latte',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Real Maple Syrup', volume: '1 tbsp', weight: '20g' },
      { name: 'Pecan Extract or Butter', volume: '1/4 tsp', weight: '1g' },
      { name: 'Steamed Oat Milk', volume: '8 oz', weight: '240g' },
      { name: 'Crushed Pecans', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Combine the maple syrup and pecan extract with the espresso.',
      'Pour in the steamed oat milk.',
      'Garnish with crushed toasted pecans and an extra drizzle of maple syrup.'
    ],
    metadata: { occasion: 'Autumn Walk', season: 'Autumn', mood: 'Woodsy & Sweet' }
  },
  {
    id: 'l-12',
    name: 'White Chocolate Pistachio Mocha',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'White Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Pistachio Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'Mix the white chocolate and pistachio syrup into the espresso.',
      'Pour in the steamed milk.',
      'Garnish with crushed pistachios.'
    ],
    metadata: { occasion: 'Holiday Season', season: 'Winter', mood: 'Creamy & Nutty' }
  },
  {
    id: 'l-13',
    name: 'Spiced Orange Mocha',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Dark Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Orange Zest', volume: '1 tsp', weight: '2g' },
      { name: 'Ground Cinnamon', volume: '1 pinch', weight: '0.5g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'Muddle the orange zest into the chocolate sauce in the mug.',
      'Pull the espresso over the chocolate and stir.',
      'Pour in the steamed milk.',
      'Dust with cinnamon and garnish with a curl of fresh orange peel.'
    ],
    metadata: { occasion: 'Winter Evening', season: 'Winter', mood: 'Dark & Citrusy' }
  }
];
