import { CoffeeRecipe } from '@/types';

export const coldRecipes: CoffeeRecipe[] = [
  {
    id: 'c-01',
    name: 'Yuzu Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '3 oz', weight: '90g' },
      { name: 'Yuzu Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Sparkling Water', volume: '3 oz', weight: '90g' },
      { name: 'Lemon Wheel', volume: '1 slice', weight: '5g' }
    ],
    steps: [
      'Fill a tall glass with ice.',
      'Add yuzu juice and simple syrup to the glass and stir well.',
      'Pour in the sparkling water.',
      'Slowly pour the cold brew concentrate over the back of a spoon to create a dark top layer.',
      'Garnish with a lemon wheel.'
    ],
    metadata: { occasion: 'Morning Lift', season: 'Summer', mood: 'Bright & Citrusy' }
  },
  {
    id: 'c-02',
    name: 'Vanilla Bean Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Real Vanilla Bean Paste', volume: '1/2 tsp', weight: '3g' },
      { name: 'Simple Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Oat Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'In a small pitcher, whisk the vanilla bean paste and simple syrup into the oat milk until thoroughly combined and slightly frothy.',
      'Fill a glass with ice and add the cold brew.',
      'Pour the vanilla oat milk over the cold brew and watch it cascade down.'
    ],
    metadata: { occasion: 'Daily Driver', season: 'All Year', mood: 'Classic & Sweet' }
  },
  {
    id: 'c-03',
    name: 'Honey Cinnamon Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Honey', volume: '1 tbsp', weight: '21g' },
      { name: 'Ground Cinnamon', volume: '1/4 tsp', weight: '1g' },
      { name: 'Hot Water (to melt honey)', volume: '1 tbsp', weight: '15g' },
      { name: 'Almond Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'In a small cup, mix the honey, cinnamon, and hot water until it forms a smooth syrup.',
      'Pour the honey-cinnamon syrup into a glass and fill with ice.',
      'Add the cold brew and stir vigorously.',
      'Top with almond milk.'
    ],
    metadata: { occasion: 'Afternoon Lift', season: 'Autumn', mood: 'Spiced & Cozy' }
  },
  {
    id: 'c-04',
    name: 'Salted Caramel Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Caramel Syrup', volume: '1.5 tbsp', weight: '22g' },
      { name: 'Sea Salt', volume: '1 pinch', weight: '0.5g' },
      { name: 'Heavy Cream', volume: '2 tbsp', weight: '30g' }
    ],
    steps: [
      'Stir 1 tbsp of caramel syrup into the cold brew in a glass filled with ice.',
      'In a shaker, combine the heavy cream, the remaining 0.5 tbsp of caramel, and a pinch of sea salt. Shake until it thickens into a cold foam.',
      'Pour the salted caramel foam over the cold brew.',
      'Garnish with an extra pinch of sea salt.'
    ],
    metadata: { occasion: 'Dessert Alternative', season: 'All Year', mood: 'Decadent & Salty' }
  },
  {
    id: 'c-05',
    name: 'Lavender Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Lavender Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Whole Milk', volume: '2 oz', weight: '60g' },
      { name: 'Dried Lavender Buds', volume: '1 pinch', weight: '1g' }
    ],
    steps: [
      'Fill a glass with ice and add the cold brew.',
      'Stir in the lavender syrup.',
      'Add the whole milk.',
      'Sprinkle dried lavender buds on top for an aromatic garnish.'
    ],
    metadata: { occasion: 'Relaxing Walk', season: 'Spring', mood: 'Floral & Calming' }
  },
  {
    id: 'c-06',
    name: 'Brown Sugar Shaken Espresso',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Brown Sugar', volume: '1 tbsp', weight: '12g' },
      { name: 'Cinnamon', volume: '1 dash', weight: '0.5g' },
      { name: 'Oat Milk', volume: '4 oz', weight: '120g' },
      { name: 'Ice', volume: '1.5 cups', weight: '220g' }
    ],
    steps: [
      'Pull a double espresso directly over the brown sugar and cinnamon in a shaker.',
      'Stir briefly to dissolve the sugar.',
      'Add a large scoop of ice and shake vigorously for 15 seconds until very frothy.',
      'Pour the entire contents (including the foamy ice) into a glass.',
      'Top with oat milk so it cascades through the foam.'
    ],
    metadata: { occasion: 'Morning Commute', season: 'Autumn', mood: 'Bold & Frothy' }
  },
  {
    id: 'c-07',
    name: 'Cream Soda Coffee',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Vanilla Syrup', volume: '0.75 oz', weight: '22g' },
      { name: 'Soda Water', volume: '4 oz', weight: '120g' },
      { name: 'Heavy Cream', volume: '1 oz', weight: '30g' }
    ],
    steps: [
      'Fill a tall glass with ice.',
      'Add the vanilla syrup and soda water, stirring gently.',
      'Slowly pour the cold brew concentrate over the soda.',
      'Float the heavy cream on top for a rich, creamy finish.'
    ],
    metadata: { occasion: 'Afternoon Snack', season: 'Summer', mood: 'Nostalgic & Sweet' }
  },
  {
    id: 'c-08',
    name: 'Sparkling Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '3 oz', weight: '90g' },
      { name: 'Sparkling Water', volume: '5 oz', weight: '150g' },
      { name: 'Orange Peel', volume: '1 strip', weight: '2g' }
    ],
    steps: [
      'Fill a glass with ice and add the sparkling water.',
      'Gently pour the cold brew concentrate over the sparkling water.',
      'Express the orange peel over the glass and drop it in.',
      'Stir gently before drinking.'
    ],
    metadata: { occasion: 'Hot Afternoon', season: 'Summer', mood: 'Crisp & Refreshing' }
  },
  {
    id: 'c-09',
    name: 'Cascara Coffee Cooler',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cascara Syrup (Coffee Cherry)', volume: '1 oz', weight: '30g' },
      { name: 'Cold Brew Coffee', volume: '3 oz', weight: '90g' },
      { name: 'Sparkling Water', volume: '4 oz', weight: '120g' },
      { name: 'Lemon Wedge', volume: '1 piece', weight: '10g' }
    ],
    steps: [
      'In a tall glass filled with ice, add the Cascara syrup.',
      'Pour in the sparkling water.',
      'Slowly layer the cold brew on top.',
      'Squeeze the lemon wedge over the drink and drop it in.'
    ],
    metadata: { occasion: 'Mid-Morning', season: 'Spring', mood: 'Fruity & Unique' }
  },
  {
    id: 'c-10',
    name: 'Mint Chocolate Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Chocolate Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Peppermint Extract', volume: '1 drop', weight: '0.1g' },
      { name: 'Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'Stir the chocolate syrup and peppermint extract into the cold brew in a glass.',
      'Add ice to the glass.',
      'Pour the milk over the top and stir gently.'
    ],
    metadata: { occasion: 'Holiday Season', season: 'Winter', mood: 'Festive & Minty' }
  },
  {
    id: 'c-11',
    name: 'Affogato Float',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Vanilla Gelato', volume: '2 scoops', weight: '100g' },
      { name: 'Cold Milk', volume: '3 oz', weight: '90g' },
      { name: 'Dark Chocolate Shavings', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Place two scoops of vanilla gelato in a large glass.',
      'Pour the cold milk around the gelato.',
      'Pull a fresh double espresso and immediately pour it over the gelato.',
      'Garnish with dark chocolate shavings.'
    ],
    metadata: { occasion: 'Dessert', season: 'Summer', mood: 'Rich & Creamy' }
  },
  {
    id: 'c-12',
    name: 'Peanut Butter Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Peanut Butter Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Chocolate Milk', volume: '2 oz', weight: '60g' },
      { name: 'Crushed Peanuts', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Stir the peanut butter syrup into the cold brew.',
      'Add ice to the glass.',
      'Pour the chocolate milk over the top.',
      'Garnish with crushed peanuts.'
    ],
    metadata: { occasion: 'Post-Workout', season: 'All Year', mood: 'Nutty & Indulgent' }
  },
  {
    id: 'c-13',
    name: 'Banana Cream Coffee',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Banana Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Vanilla Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Oat Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'Combine cold brew, banana syrup, and vanilla syrup in a shaker with ice.',
      'Shake vigorously and strain into a glass filled with fresh ice.',
      'Top with oat milk.'
    ],
    metadata: { occasion: 'Morning Treat', season: 'Spring', mood: 'Fruity & Sweet' }
  },
  {
    id: 'c-14',
    name: 'Tiramisu Iced Latte',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Tiramisu Syrup', volume: '1 oz', weight: '30g' },
      { name: 'Whole Milk', volume: '6 oz', weight: '180g' },
      { name: 'Mascarpone Foam', volume: '2 tbsp', weight: '30g' },
      { name: 'Cocoa Powder', volume: '1 dusting', weight: '1g' }
    ],
    steps: [
      'Add the tiramisu syrup and milk to a glass filled with ice.',
      'Pull a double espresso and pour it over the milk.',
      'Top with a dollop of mascarpone cold foam.',
      'Dust generously with cocoa powder.'
    ],
    metadata: { occasion: 'Afternoon Pick-Me-Up', season: 'All Year', mood: 'Decadent & Layered' }
  },
  {
    id: 'c-15',
    name: 'Matcha Espresso Fusion',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Matcha Powder (Ceremonial)', volume: '1 tsp', weight: '3g' },
      { name: 'Hot Water (for Matcha)', volume: '2 oz', weight: '60g' },
      { name: 'Oat Milk', volume: '6 oz', weight: '180g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' }
    ],
    steps: [
      'Whisk the matcha powder and hot water together until smooth and frothy.',
      'In a tall glass, add ice, simple syrup, and oat milk. Stir to combine.',
      'Pour the matcha over the milk to create a green layer.',
      'Gently pour the double espresso over the back of a spoon to create the top dark layer.',
      'Stir before drinking.'
    ],
    metadata: { occasion: 'Morning Focus', season: 'Spring', mood: 'Earthy & Energizing' }
  }
];
