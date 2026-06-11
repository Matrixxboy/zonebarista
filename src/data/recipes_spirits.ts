import { CoffeeRecipe } from '@/types';

export const spiritsRecipes: CoffeeRecipe[] = [
  {
    id: 's-01',
    name: 'Irish Coffee',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '4 oz', weight: '120g' },
      { name: 'Irish Whiskey', volume: '1.5 oz', weight: '45g' },
      { name: 'Brown Sugar Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Heavy Cream (Lightly Whipped)', volume: '2 oz', weight: '60g' },
      { name: 'Fresh Nutmeg', volume: '1 dusting', weight: '0.5g' }
    ],
    steps: [
      'Pre-heat a stemmed Irish Coffee glass with hot water, then discard the water.',
      'Add the Irish Whiskey and brown sugar syrup to the glass.',
      'Pour in the hot coffee and stir gently to combine.',
      'Lightly whip the heavy cream until it is thick but still pourable (not stiff peaks).',
      'Slowly pour the cream over the back of a warm spoon to float it on top of the coffee.',
      'Grate fresh nutmeg over the cream and serve immediately. Do not stir.'
    ],
    metadata: { occasion: 'Evening Treat', season: 'Winter', mood: 'Classic & Warming' }
  },
  {
    id: 's-02',
    name: 'Spanish Carajillo',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Licor 43', volume: '1.5 oz', weight: '45g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'Fill an old-fashioned or rocks glass with ice.',
      'Pour the Licor 43 directly over the ice.',
      'Pull a fresh double espresso.',
      'Pour the hot espresso slowly over the ice and liqueur. Stir gently before drinking.'
    ],
    metadata: { occasion: 'After Dinner', season: 'All Year', mood: 'Sweet & Boozy' }
  },
  {
    id: 's-03',
    name: 'Espresso Martini',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Fresh Espresso (Cooled slightly)', volume: '1 oz', weight: '30g' },
      { name: 'Vodka', volume: '2 oz', weight: '60g' },
      { name: 'Coffee Liqueur (e.g., Kahlúa)', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.25 oz', weight: '7g' },
      { name: 'Coffee Beans', volume: '3 whole', weight: '1g' }
    ],
    steps: [
      'Add espresso, vodka, coffee liqueur, and simple syrup to a cocktail shaker.',
      'Fill the shaker with ice.',
      'Shake vigorously for 15-20 seconds to create a thick foam.',
      'Double strain into a chilled martini or coupe glass.',
      'Garnish with 3 coffee beans placed gently on the foam.'
    ],
    metadata: { occasion: 'Night Out', season: 'All Year', mood: 'Energizing & Elegant' }
  },
  {
    id: 's-04',
    name: 'Coffee Old Fashioned',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Bourbon or Rye Whiskey', volume: '2 oz', weight: '60g' },
      { name: 'Cold Brew Concentrate', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.25 oz', weight: '7g' },
      { name: 'Orange Bitters', volume: '2 dashes', weight: '1g' },
      { name: 'Orange Peel', volume: '1 strip', weight: '2g' }
    ],
    steps: [
      'In a mixing glass, combine whiskey, cold brew, syrup, and bitters.',
      'Add a large scoop of ice and stir continuously for 30 seconds to chill and dilute.',
      'Strain into a rocks glass over one large ice cube.',
      'Express the oils from the orange peel over the glass and drop it in.'
    ],
    metadata: { occasion: 'Late Night', season: 'Autumn', mood: 'Sophisticated & Dark' }
  },
  {
    id: 's-05',
    name: 'Bourbon Maple Coffee',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '5 oz', weight: '150g' },
      { name: 'Bourbon', volume: '1.5 oz', weight: '45g' },
      { name: 'Real Maple Syrup', volume: '1 tbsp', weight: '20g' },
      { name: 'Heavy Cream', volume: '1 oz', weight: '30g' }
    ],
    steps: [
      'Pour the bourbon and maple syrup into a warm mug.',
      'Add the hot coffee and stir until the syrup is dissolved.',
      'Pour the heavy cream over the back of a spoon to float on top.'
    ],
    metadata: { occasion: 'Weekend Evening', season: 'Winter', mood: 'Sweet & Cozy' }
  },
  {
    id: 's-06',
    name: 'Coffee Negroni',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Gin', volume: '1 oz', weight: '30g' },
      { name: 'Campari', volume: '1 oz', weight: '30g' },
      { name: 'Sweet Vermouth', volume: '1 oz', weight: '30g' },
      { name: 'Cold Brew Concentrate', volume: '0.5 oz', weight: '15g' },
      { name: 'Orange Peel', volume: '1 strip', weight: '2g' }
    ],
    steps: [
      'Combine gin, Campari, sweet vermouth, and cold brew in a mixing glass.',
      'Add ice and stir for 20-30 seconds until extremely chilled.',
      'Strain into a rocks glass over a large clear ice cube.',
      'Garnish with an expressed orange peel.'
    ],
    metadata: { occasion: 'Aperitivo', season: 'Spring/Summer', mood: 'Bitter & Complex' }
  },
  {
    id: 's-07',
    name: 'Black Russian Coffee',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Vodka', volume: '1.5 oz', weight: '45g' },
      { name: 'Coffee Liqueur', volume: '1 oz', weight: '30g' },
      { name: 'Cold Brew Coffee', volume: '1 oz', weight: '30g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'Fill a rocks glass with ice.',
      'Pour in the vodka, coffee liqueur, and cold brew.',
      'Stir gently to combine and chill.'
    ],
    metadata: { occasion: 'After Dinner', season: 'All Year', mood: 'Strong & Dark' }
  },
  {
    id: 's-08',
    name: 'Coffee Mule',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '2 oz', weight: '60g' },
      { name: 'Vodka', volume: '1.5 oz', weight: '45g' },
      { name: 'Ginger Beer', volume: '3 oz', weight: '90g' },
      { name: 'Lime Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Lime Wheel', volume: '1 slice', weight: '5g' }
    ],
    steps: [
      'Fill a copper mug or highball glass with ice.',
      'Add vodka, lime juice, and cold brew.',
      'Top with ginger beer and stir very gently.',
      'Garnish with a lime wheel.'
    ],
    metadata: { occasion: 'Party', season: 'Summer', mood: 'Spicy & Refreshing' }
  },
  {
    id: 's-09',
    name: 'Coffee Sour',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Bourbon', volume: '2 oz', weight: '60g' },
      { name: 'Cold Brew Concentrate', volume: '1 oz', weight: '30g' },
      { name: 'Lemon Juice', volume: '0.75 oz', weight: '22g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Egg White', volume: '1 egg', weight: '30g' }
    ],
    steps: [
      'Combine all ingredients in a shaker without ice.',
      'Dry shake vigorously for 15 seconds to emulsify the egg white.',
      'Add ice and shake again for another 15 seconds to chill.',
      'Double strain into a chilled coupe glass.'
    ],
    metadata: { occasion: 'Happy Hour', season: 'Autumn', mood: 'Tart & Velvety' }
  },
  {
    id: 's-10',
    name: 'Coffee Sangria',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '3 oz', weight: '90g' },
      { name: 'Red Wine (Fruity/Light)', volume: '3 oz', weight: '90g' },
      { name: 'Orange Liqueur (Cointreau)', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Mixed Fruit (Oranges, Berries)', volume: '1/4 cup', weight: '40g' }
    ],
    steps: [
      'In a large wine glass, muddle the mixed fruit slightly with the simple syrup.',
      'Add ice, cold brew, red wine, and orange liqueur.',
      'Stir well to combine.',
      'Let sit for 2 minutes to allow flavors to meld before serving.'
    ],
    metadata: { occasion: 'Brunch', season: 'Summer', mood: 'Fruity & Fun' }
  },
  {
    id: 's-11',
    name: 'Coffee Gin Fizz',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Gin', volume: '1.5 oz', weight: '45g' },
      { name: 'Cold Brew Concentrate', volume: '1 oz', weight: '30g' },
      { name: 'Lemon Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Soda Water', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'Shake gin, cold brew, lemon juice, and simple syrup with ice.',
      'Strain into a highball glass filled with fresh ice.',
      'Top with soda water and stir gently.',
      'Garnish with a lemon twist.'
    ],
    metadata: { occasion: 'Afternoon Refresh', season: 'Spring', mood: 'Bubbly & Bright' }
  },
  {
    id: 's-12',
    name: 'Cold Brew Spritz',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '2 oz', weight: '60g' },
      { name: 'Aperol', volume: '1 oz', weight: '30g' },
      { name: 'Prosecco', volume: '3 oz', weight: '90g' },
      { name: 'Soda Water', volume: '1 oz', weight: '30g' },
      { name: 'Orange Slice', volume: '1 slice', weight: '5g' }
    ],
    steps: [
      'Fill a wine glass with ice.',
      'Pour in the Aperol and cold brew.',
      'Top with Prosecco and soda water.',
      'Stir gently and garnish with an orange slice.'
    ],
    metadata: { occasion: 'Aperitivo', season: 'Summer', mood: 'Sparkling & Bitter' }
  },
  {
    id: 's-13',
    name: 'Coffee Amaretto',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Hot Filter Coffee', volume: '5 oz', weight: '150g' },
      { name: 'Amaretto Liqueur', volume: '1.5 oz', weight: '45g' },
      { name: 'Whipped Cream', volume: '2 tbsp', weight: '15g' },
      { name: 'Crushed Amaretti Cookies', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Pour Amaretto into a warm mug.',
      'Add hot coffee and stir.',
      'Top generously with whipped cream.',
      'Sprinkle crushed amaretti cookies over the cream.'
    ],
    metadata: { occasion: 'Dessert Alternative', season: 'Autumn', mood: 'Sweet & Nutty' }
  },
  {
    id: 's-14',
    name: 'Coffee Baileys Float',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '4 oz', weight: '120g' },
      { name: 'Baileys Irish Cream', volume: '2 oz', weight: '60g' },
      { name: 'Vanilla Ice Cream', volume: '1 scoop', weight: '50g' },
      { name: 'Chocolate Shavings', volume: '1 pinch', weight: '2g' }
    ],
    steps: [
      'Place a scoop of vanilla ice cream in a glass.',
      'Pour the cold brew over the ice cream.',
      'Drizzle the Baileys over the top.',
      'Garnish with chocolate shavings and serve with a spoon and straw.'
    ],
    metadata: { occasion: 'Weekend Indulgence', season: 'Summer', mood: 'Decadent & Creamy' }
  },
  {
    id: 's-15',
    name: 'Coffee Rum Punch',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Dark Rum', volume: '1.5 oz', weight: '45g' },
      { name: 'Cold Brew Coffee', volume: '2 oz', weight: '60g' },
      { name: 'Pineapple Juice', volume: '1.5 oz', weight: '45g' },
      { name: 'Lime Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Orgeat (Almond Syrup)', volume: '0.5 oz', weight: '15g' }
    ],
    steps: [
      'Add all ingredients to a cocktail shaker with ice.',
      'Shake vigorously to chill and dilute.',
      'Strain into a Tiki mug or large rocks glass filled with crushed ice.',
      'Garnish with a pineapple wedge and a mint sprig.'
    ],
    metadata: { occasion: 'Tiki Party', season: 'Summer', mood: 'Tropical & Strong' }
  }
];
