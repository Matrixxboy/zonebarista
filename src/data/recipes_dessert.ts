import { CoffeeRecipe } from '@/types';

export const dessertRecipes: CoffeeRecipe[] = [
  {
    id: 'd-01',
    name: 'Tiramisu Coffee',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Mascarpone Cheese', volume: '1 tbsp', weight: '15g' },
      { name: 'Ladyfinger Cookie', volume: '1 piece', weight: '10g' },
      { name: 'Cocoa Powder', volume: '1 dusting', weight: '1g' },
      { name: 'Whole Milk', volume: '6 oz', weight: '180g' }
    ],
    steps: [
      'Whisk the mascarpone cheese into the hot espresso until completely melted and smooth.',
      'Steam the whole milk to a latte consistency.',
      'Pour the milk into the mascarpone-espresso mixture.',
      'Dust the top heavily with cocoa powder.',
      'Serve with a ladyfinger cookie on the saucer for dipping.'
    ],
    metadata: { occasion: 'After Dinner', season: 'Autumn', mood: 'Rich & Decadent' }
  },
  {
    id: 'd-02',
    name: 'Crème Brûlée Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Vanilla Bean Syrup', volume: '1 oz', weight: '30g' },
      { name: 'Whole Milk', volume: '8 oz', weight: '240g' },
      { name: 'Raw Sugar (Turbinado)', volume: '1 tbsp', weight: '15g' }
    ],
    steps: [
      'Mix the vanilla bean syrup and espresso in a heat-proof ceramic mug.',
      'Steam the milk and pour it into the mug, filling it to the very brim.',
      'Sprinkle a thick, even layer of raw sugar over the milk foam.',
      'Use a culinary blowtorch to carefully caramelize the sugar until it forms a hard, glass-like crust.'
    ],
    metadata: { occasion: 'Dessert Alternative', season: 'Winter', mood: 'Sweet & Crunchy' }
  },
  {
    id: 'd-03',
    name: 'Cheesecake Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Cream Cheese Foam', volume: '2 oz', weight: '60g' },
      { name: 'Graham Cracker Crumbs', volume: '1 tbsp', weight: '10g' },
      { name: 'Strawberry Syrup (Optional)', volume: '0.5 oz', weight: '15g' }
    ],
    steps: [
      'To make the foam, blend 1 part cream cheese with 2 parts milk and a splash of simple syrup until aerated.',
      'Pour the espresso into a glass (over ice or hot).',
      'Add strawberry syrup if using.',
      'Top heavily with the cream cheese foam and garnish with graham cracker crumbs.'
    ],
    metadata: { occasion: 'Afternoon Indulgence', season: 'Spring', mood: 'Tangy & Sweet' }
  },
  {
    id: 'd-04',
    name: 'Chocolate Hazelnut Mocha',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Nutella or Hazelnut Spread', volume: '1.5 tbsp', weight: '25g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Crushed Hazelnuts', volume: '1 tsp', weight: '4g' }
    ],
    steps: [
      'Smear the hazelnut spread generously around the inside walls of the mug.',
      'Pull the hot double espresso directly into the mug to help melt the spread at the bottom.',
      'Pour in the steamed milk.',
      'Garnish with crushed hazelnuts.'
    ],
    metadata: { occasion: 'Morning Treat', season: 'Winter', mood: 'Nutty & Luxurious' }
  },
  {
    id: 'd-05',
    name: 'Cookies & Cream Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'White Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Crushed Oreo Cookies', volume: '2 tbsp', weight: '15g' },
      { name: 'Milk', volume: '8 oz', weight: '240g' },
      { name: 'Whipped Cream', volume: '1 dollop', weight: '15g' }
    ],
    steps: [
      'Mix the white chocolate sauce with the espresso in the cup.',
      'Add half of the crushed cookies to the cup.',
      'Pour in the hot steamed milk or cold milk over ice.',
      'Top with whipped cream and the remaining crushed cookies.'
    ],
    metadata: { occasion: 'Sugar Craving', season: 'All Year', mood: 'Playful & Sweet' }
  },
  {
    id: 'd-06',
    name: 'Salted Caramel Mocha',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Dark Chocolate Sauce', volume: '0.5 oz', weight: '15g' },
      { name: 'Caramel Sauce', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Flaky Sea Salt', volume: '1 large pinch', weight: '0.5g' }
    ],
    steps: [
      'Combine the chocolate and caramel sauces in the bottom of a mug.',
      'Pull the espresso over the sauces and stir well.',
      'Pour in the steamed milk.',
      'Drizzle additional caramel on top and finish with a pinch of flaky sea salt.'
    ],
    metadata: { occasion: 'Autumn Walk', season: 'Autumn', mood: 'Salty & Rich' }
  },
  {
    id: 'd-07',
    name: 'Red Velvet Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Red Food Coloring or Beetroot Powder', volume: '1/4 tsp', weight: '1g' },
      { name: 'Vanilla Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Cocoa Powder', volume: '1/2 tsp', weight: '2g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'Mix the cocoa powder, vanilla syrup, and beetroot powder/coloring into a paste in the mug.',
      'Add the hot espresso and stir until fully dissolved.',
      'Pour in the steamed milk, which will turn a vibrant pink/red color.',
      'Top with a dollop of cream cheese foam if desired.'
    ],
    metadata: { occasion: 'Valentine\'s Day', season: 'Winter', mood: 'Romantic & Velvety' }
  },
  {
    id: 'd-08',
    name: 'Ferrero Rocher Coffee',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Hazelnut Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Chocolate Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Ferrero Rocher Truffle', volume: '1 piece', weight: '12g' }
    ],
    steps: [
      'Stir the hazelnut and chocolate syrups into the espresso.',
      'Pour the steamed milk over the mixture.',
      'Serve with a whole Ferrero Rocher truffle on a small spoon resting across the rim of the cup.'
    ],
    metadata: { occasion: 'Holiday Season', season: 'Winter', mood: 'Luxurious & Nutty' }
  },
  {
    id: 'd-09',
    name: 'S\'mores Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Toasted Marshmallow Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Large Marshmallow', volume: '1 piece', weight: '7g' }
    ],
    steps: [
      'Combine chocolate sauce, marshmallow syrup, and espresso in a mug.',
      'Pour in the steamed milk.',
      'Float a large marshmallow on top and briefly toast it with a culinary blowtorch until golden and gooey.'
    ],
    metadata: { occasion: 'Campfire', season: 'Autumn', mood: 'Nostalgic & Gooey' }
  },
  {
    id: 'd-10',
    name: 'Banoffee Coffee',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Banana Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Toffee or Caramel Sauce', volume: '0.5 oz', weight: '15g' },
      { name: 'Milk', volume: '8 oz', weight: '240g' },
      { name: 'Crushed Digestive Biscuits', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Mix the banana and toffee syrups with the hot espresso.',
      'Add milk (hot or iced).',
      'Top with whipped cream, a drizzle of toffee, and crushed digestive biscuits.'
    ],
    metadata: { occasion: 'Afternoon Tea', season: 'Spring', mood: 'Fruity & Caramelized' }
  },
  {
    id: 'd-11',
    name: 'Almond Croissant Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Almond Syrup (Orgeat)', volume: '0.5 oz', weight: '15g' },
      { name: 'Vanilla Syrup', volume: '0.25 oz', weight: '7g' },
      { name: 'Steamed Oat Milk', volume: '8 oz', weight: '240g' },
      { name: 'Powdered Sugar', volume: '1 dusting', weight: '1g' },
      { name: 'Sliced Almonds', volume: '1 tsp', weight: '2g' }
    ],
    steps: [
      'Combine the almond and vanilla syrups with the espresso in a mug.',
      'Pour the steamed oat milk over the mixture.',
      'Dust the top of the foam lightly with powdered sugar and garnish with a few sliced almonds.'
    ],
    metadata: { occasion: 'Parisian Morning', season: 'Spring', mood: 'Nutty & Flaky' }
  },
  {
    id: 'd-12',
    name: 'Brownie Espresso Shake',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Fudge Brownie', volume: '1 small square', weight: '40g' },
      { name: 'Vanilla Ice Cream', volume: '2 scoops', weight: '100g' },
      { name: 'Milk', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'In a blender, combine the espresso, ice cream, milk, and half of the brownie.',
      'Blend until smooth and thick.',
      'Pour into a glass and crumble the remaining half of the brownie over the top.'
    ],
    metadata: { occasion: 'Cheat Day', season: 'Summer', mood: 'Thick & Chocolatey' }
  },
  {
    id: 'd-13',
    name: 'White Chocolate Raspberry Mocha',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'White Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Raspberry Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'Whisk the white chocolate and raspberry syrup into the hot espresso.',
      'Pour in the steamed milk.',
      'Optional: Garnish with freeze-dried raspberry powder.'
    ],
    metadata: { occasion: 'Spring Afternoon', season: 'Spring', mood: 'Tart & Sweet' }
  },
  {
    id: 'd-14',
    name: 'Pistachio Cream Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Pistachio Cream (or Paste)', volume: '1 tbsp', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'In the bottom of the mug, vigorously mix the pistachio cream and simple syrup into the espresso until smooth.',
      'Slowly pour the steamed milk over the mixture.',
      'Garnish with crushed, unsalted pistachios.'
    ],
    metadata: { occasion: 'Morning Treat', season: 'Winter', mood: 'Earthy & Creamy' }
  },
  {
    id: 'd-15',
    name: 'Biscoff Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Lotus Biscoff Spread (Cookie Butter)', volume: '1 heaping tbsp', weight: '20g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Crushed Biscoff Cookie', volume: '1 cookie', weight: '8g' }
    ],
    steps: [
      'Smear the Biscoff spread around the inside of the mug.',
      'Pull the hot espresso directly over the spread to melt it.',
      'Stir well, then pour in the steamed milk.',
      'Top with a crushed Biscoff cookie.'
    ],
    metadata: { occasion: 'Afternoon Lift', season: 'Autumn', mood: 'Spiced & Sweet' }
  },
  {
    id: 'd-16',
    name: 'Oreo Mocha',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Dark Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Oreo Crumbs', volume: '2 tbsp', weight: '15g' }
    ],
    steps: [
      'Mix the chocolate sauce and espresso in a mug.',
      'Add 1 tbsp of Oreo crumbs into the bottom of the mug.',
      'Pour in the steamed milk.',
      'Top with the remaining Oreo crumbs.'
    ],
    metadata: { occasion: 'Sugar Craving', season: 'All Year', mood: 'Chocolatey & Fun' }
  },
  {
    id: 'd-17',
    name: 'Coconut Cream Affogato',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Coconut Sorbet or Dairy-Free Ice Cream', volume: '1 scoop', weight: '60g' },
      { name: 'Toasted Coconut Flakes', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Place a large scoop of coconut sorbet into a small bowl or wide glass.',
      'Pull a fresh espresso.',
      'Pour the hot espresso over the sorbet.',
      'Quickly garnish with toasted coconut flakes and serve.'
    ],
    metadata: { occasion: 'Summer Evening', season: 'Summer', mood: 'Tropical & Cold' }
  },
  {
    id: 'd-18',
    name: 'Carrot Cake Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Carrot Juice (Freshly Pressed)', volume: '1 oz', weight: '30g' },
      { name: 'Cinnamon/Nutmeg/Ginger Blend', volume: '1/2 tsp', weight: '2g' },
      { name: 'Vanilla Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Oat Milk', volume: '6 oz', weight: '180g' }
    ],
    steps: [
      'In a mug, combine the espresso, carrot juice, vanilla syrup, and spices.',
      'Steam the oat milk and pour it over the spiced coffee mixture.',
      'Garnish with a very light dusting of cinnamon and a tiny pinch of finely grated fresh carrot.'
    ],
    metadata: { occasion: 'Spring Brunch', season: 'Spring', mood: 'Earthy & Spiced' }
  },
  {
    id: 'd-19',
    name: 'Black Forest Mocha',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Dark Chocolate Sauce', volume: '1 oz', weight: '30g' },
      { name: 'Cherry Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' },
      { name: 'Whipped Cream', volume: '1 dollop', weight: '15g' },
      { name: 'Maraschino Cherry', volume: '1 piece', weight: '5g' }
    ],
    steps: [
      'Whisk the chocolate sauce, cherry syrup, and espresso together in a mug.',
      'Pour in the steamed milk.',
      'Top with whipped cream, chocolate shavings, and a cherry.'
    ],
    metadata: { occasion: 'Winter Night', season: 'Winter', mood: 'Fruity & Dark' }
  },
  {
    id: 'd-20',
    name: 'Peanut Butter Cup Latte',
    category: 'Dessert-Inspired',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Peanut Butter (Smooth)', volume: '1 tbsp', weight: '15g' },
      { name: 'Chocolate Sauce', volume: '1 tbsp', weight: '15g' },
      { name: 'Steamed Milk', volume: '8 oz', weight: '240g' }
    ],
    steps: [
      'In the bottom of a mug, forcefully whisk the peanut butter and chocolate sauce into the hot espresso until the peanut butter completely melts into a smooth syrup.',
      'Pour in the steamed milk.',
      'Garnish with a mini peanut butter cup.'
    ],
    metadata: { occasion: 'Indulgent Afternoon', season: 'All Year', mood: 'Salty & Sweet' }
  }
];
