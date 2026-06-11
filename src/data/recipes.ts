import { CoffeeRecipe } from '@/types';
import { spiritsRecipes } from './recipes_spirits';
import { coldRecipes } from './recipes_cold';
import { globalRecipes } from './recipes_global';
import { spicedRecipes } from './recipes_spiced';
import { dessertRecipes } from './recipes_dessert';
import { experimentalRecipes } from './recipes_experimental';
import { luxuryRecipes } from './recipes_luxury';

export { spiritsRecipes, coldRecipes, globalRecipes, spicedRecipes, dessertRecipes, experimentalRecipes, luxuryRecipes };

export const top20Recipes: CoffeeRecipe[] = [
  {
    id: 'r-01',
    name: 'Spiced Butter Rum Coffee',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Dark Roast Coffee (Brewed)', volume: '6 oz', weight: '180g' },
      { name: 'Dark Rum', volume: '1.5 oz', weight: '45g' },
      { name: 'Unsalted Butter', volume: '1 tbsp', weight: '14g' },
      { name: 'Brown Sugar', volume: '1 tbsp', weight: '12g' },
      { name: 'Cinnamon & Nutmeg (Ground)', volume: '1 pinch', weight: '1g' }
    ],
    steps: [
      'Brew a strong 6oz cup of dark roast filter coffee.',
      'In a mug, vigorously whisk the brown sugar, spices, and butter together until a paste forms.',
      'Pour the hot coffee over the paste and stir until the butter completely melts.',
      'Stir in the dark rum.',
      'Garnish with a cinnamon stick and serve immediately.'
    ],
    metadata: { occasion: 'Winter Evening', season: 'Winter', mood: 'Cozy & Warming' }
  },
  {
    id: 'r-02',
    name: 'Cold Brew Whisky Highball',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Japanese Whisky or Bourbon', volume: '1.5 oz', weight: '45g' },
      { name: 'Soda Water (Highly Carbonated)', volume: '4 oz', weight: '120g' },
      { name: 'Lemon Peel', volume: '1 strip', weight: '2g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'Fill a highball glass to the brim with clear, dense ice.',
      'Pour in the whisky and cold brew concentrate.',
      'Stir gently to chill the liquid without aerating it too much.',
      'Top with soda water, pouring gently down the side of the glass to preserve carbonation.',
      'Express the lemon peel oils over the top and drop it in.'
    ],
    metadata: { occasion: 'Happy Hour', season: 'Summer', mood: 'Crisp & Refreshing' }
  },
  {
    id: 'r-03',
    name: 'Orange Espresso Tonic',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Premium Tonic Water', volume: '5 oz', weight: '150g' },
      { name: 'Fresh Orange Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Orange Slice', volume: '1 wheel', weight: '5g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'Pull a bright, fruity double espresso and set aside.',
      'Fill a glass with ice and add the tonic water.',
      'Stir in the fresh orange juice.',
      'Slowly pour the espresso over the ice so it layers beautifully on top of the tonic.',
      'Garnish with an orange wheel.'
    ],
    metadata: { occasion: 'Brunch', season: 'Spring/Summer', mood: 'Vibrant & Uplifting' }
  },
  {
    id: 'r-04',
    name: 'Vietnamese Egg Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Robusta Phin Coffee (Brewed)', volume: '4 oz', weight: '120g' },
      { name: 'Egg Yolks', volume: '2 large', weight: '35g' },
      { name: 'Sweetened Condensed Milk', volume: '2 tbsp', weight: '30g' },
      { name: 'Vanilla Extract', volume: '1/4 tsp', weight: '1g' }
    ],
    steps: [
      'Brew a strong cup of Vietnamese Robusta coffee using a Phin filter.',
      'In a separate bowl, whisk the egg yolks and condensed milk together using an electric frother for 3-5 minutes until thick, pale, and fluffy.',
      'Add the vanilla extract and whisk for another 30 seconds.',
      'Pour the hot coffee into a cup.',
      'Gently spoon the fluffy egg cream over the top of the coffee. Do not stir before serving.'
    ],
    metadata: { occasion: 'Dessert Alternative', season: 'All Year', mood: 'Indulgent & Rich' }
  },
  {
    id: 'r-05',
    name: 'Rose Cardamom Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Rose Water', volume: '1/2 tsp', weight: '2g' },
      { name: 'Simple Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Ground Cardamom', volume: '1/4 tsp', weight: '1g' },
      { name: 'Oat Milk (Optional)', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'In a shaker, combine cold brew, simple syrup, rose water, and cardamom.',
      'Add a small handful of ice and shake vigorously to aerate.',
      'Strain into a glass filled with fresh ice.',
      'Optionally, float oat milk on top for a creamy finish.'
    ],
    metadata: { occasion: 'Afternoon Lift', season: 'Spring', mood: 'Floral & Elegant' }
  },
  {
    id: 'r-06',
    name: 'Coffee Mojito',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Cold Brew Concentrate', volume: '2 oz', weight: '60g' },
      { name: 'Fresh Mint Leaves', volume: '8-10 leaves', weight: '2g' },
      { name: 'Lime Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Simple Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'White Rum (Optional)', volume: '1.5 oz', weight: '45g' },
      { name: 'Soda Water', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'Muddle the mint leaves gently with the simple syrup and lime juice in the bottom of a shaker.',
      'Add the cold brew (and rum if using) along with ice.',
      'Shake hard for 10 seconds to chill.',
      'Strain into a glass filled with crushed ice.',
      'Top with soda water and garnish with a mint sprig.'
    ],
    metadata: { occasion: 'Poolside', season: 'Summer', mood: 'Festive & Minty' }
  },
  {
    id: 'r-07',
    name: 'Saffron Pistachio Latte',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Whole Milk', volume: '8 oz', weight: '240g' },
      { name: 'Saffron Threads', volume: '3-4 threads', weight: '0.1g' },
      { name: 'Pistachio Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Crushed Pistachios', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Steep the saffron threads in 1 tsp of hot water for 3 minutes to extract the color and flavor.',
      'Pull a double espresso into a mug.',
      'Add the saffron liquid and pistachio syrup to the espresso and stir.',
      'Steam the milk to a velvety microfoam and pour over the espresso.',
      'Garnish with crushed pistachios on top of the foam.'
    ],
    metadata: { occasion: 'Morning Treat', season: 'Autumn', mood: 'Luxurious & Nutty' }
  },
  {
    id: 'r-08',
    name: 'Smoked Maple Cold Brew',
    category: 'Experimental',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '8 oz', weight: '240g' },
      { name: 'Real Maple Syrup', volume: '1 tbsp', weight: '20g' },
      { name: 'Liquid Smoke (Hickory)', volume: '1-2 drops', weight: '0.1g' },
      { name: 'Heavy Cream', volume: '1 tbsp', weight: '15g' },
      { name: 'Sea Salt', volume: '1 pinch', weight: '0.5g' }
    ],
    steps: [
      'In a glass, whisk the maple syrup and liquid smoke into the cold brew until dissolved.',
      'Add ice to the glass.',
      'In a separate small pitcher, lightly whip the heavy cream with a pinch of sea salt until it thickens slightly but is still pourable.',
      'Float the salted cream over the back of a spoon onto the cold brew.'
    ],
    metadata: { occasion: 'Weekend Morning', season: 'Autumn', mood: 'Woodsy & Sweet' }
  },
  {
    id: 'r-09',
    name: 'Coffee Lemonade',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Light Roast Filter Coffee (Chilled)', volume: '4 oz', weight: '120g' },
      { name: 'Fresh Lemon Juice', volume: '1 oz', weight: '30g' },
      { name: 'Simple Syrup', volume: '1 oz', weight: '30g' },
      { name: 'Water', volume: '2 oz', weight: '60g' },
      { name: 'Lemon Wheel', volume: '1 slice', weight: '5g' }
    ],
    steps: [
      'In a shaker, combine lemon juice, simple syrup, water, and ice. Shake well to create lemonade.',
      'Strain the lemonade into a tall glass filled with fresh ice.',
      'Gently pour the chilled light roast coffee over the lemonade so it forms a distinct dark layer on top.',
      'Garnish with a lemon wheel.'
    ],
    metadata: { occasion: 'Hot Afternoon', season: 'Summer', mood: 'Zesty & Bold' }
  },
  {
    id: 'r-10',
    name: 'Coffee Milk Punch',
    category: 'Experimental',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '4 oz', weight: '120g' },
      { name: 'Whole Milk', volume: '2 oz', weight: '60g' },
      { name: 'Bourbon or Brandy', volume: '1.5 oz', weight: '45g' },
      { name: 'Vanilla Syrup', volume: '0.5 oz', weight: '15g' },
      { name: 'Fresh Nutmeg', volume: '1 dusting', weight: '0.5g' }
    ],
    steps: [
      'Combine cold brew, milk, bourbon, and vanilla syrup in a shaker with plenty of ice.',
      'Shake vigorously for 15 seconds to create a frothy texture.',
      'Strain into a chilled rocks glass over a single large ice cube.',
      'Grate fresh nutmeg generously over the top.'
    ],
    metadata: { occasion: 'Evening Digestif', season: 'Winter', mood: 'Creamy & Smooth' }
  },
  {
    id: 'r-11',
    name: 'Espresso Tonic with Grapefruit',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Tonic Water', volume: '4 oz', weight: '120g' },
      { name: 'Grapefruit Syrup or Juice', volume: '0.5 oz', weight: '15g' },
      { name: 'Grapefruit Peel', volume: '1 strip', weight: '2g' }
    ],
    steps: [
      'Add the grapefruit syrup/juice to the bottom of a glass.',
      'Fill with ice and add the tonic water.',
      'Pull a double espresso and slowly pour it over the back of a spoon onto the tonic water to layer it.',
      'Express the grapefruit peel oils over the drink and drop it in.'
    ],
    metadata: { occasion: 'Mid-Morning', season: 'Summer', mood: 'Bright & Bitter' }
  },
  {
    id: 'r-12',
    name: 'Mexican Café de Olla',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Ground Coffee (Medium-Coarse)', volume: '4 tbsp', weight: '30g' },
      { name: 'Piloncillo or Dark Brown Sugar', volume: '2 tbsp', weight: '30g' },
      { name: 'Cinnamon Stick', volume: '1 stick', weight: '3g' },
      { name: 'Cloves', volume: '2 whole', weight: '0.5g' },
      { name: 'Water', volume: '16 oz', weight: '480g' }
    ],
    steps: [
      'In a saucepan (traditionally an earthen clay pot), bring the water, cinnamon, cloves, and piloncillo to a boil until the sugar dissolves.',
      'Stir in the ground coffee and immediately remove from heat.',
      'Cover the pot and let it steep for 5 minutes.',
      'Strain through a fine mesh sieve into mugs and serve hot.'
    ],
    metadata: { occasion: 'Chilly Morning', season: 'Autumn/Winter', mood: 'Spiced & Traditional' }
  },
  {
    id: 'r-13',
    name: 'Coconut Cold Brew',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Coconut Water', volume: '2 oz', weight: '60g' },
      { name: 'Coconut Cream', volume: '1 tbsp', weight: '15g' },
      { name: 'Toasted Coconut Flakes', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Combine cold brew and coconut water in a glass over ice.',
      'In a separate container, whisk the coconut cream until smooth.',
      'Pour the coconut cream over the coffee so it mixes slowly.',
      'Top with toasted coconut flakes.'
    ],
    metadata: { occasion: 'Beach Day', season: 'Summer', mood: 'Tropical & Hydrating' }
  },
  {
    id: 'r-14',
    name: 'Lavender Honey Latte',
    category: 'Spiced & Herbal',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Oat Milk', volume: '8 oz', weight: '240g' },
      { name: 'Honey', volume: '1 tbsp', weight: '21g' },
      { name: 'Culinary Lavender (Dried)', volume: '1/2 tsp', weight: '1g' }
    ],
    steps: [
      'Muddle the dried lavender into the honey in the bottom of a mug, or create a quick lavender-infused honey syrup beforehand.',
      'Pull a double espresso directly over the lavender honey and stir to dissolve.',
      'Steam the oat milk and pour over the espresso.',
      'Garnish with a single tiny sprig of dried lavender.'
    ],
    metadata: { occasion: 'Relaxing Afternoon', season: 'Spring', mood: 'Calm & Soothing' }
  },
  {
    id: 'r-15',
    name: 'Coffee Kombucha',
    category: 'Experimental',
    ingredients: [
      { name: 'Cold Brew Coffee (Sweetened)', volume: '16 oz', weight: '480g' },
      { name: 'Active Kombucha SCOBY', volume: '1 piece', weight: '50g' },
      { name: 'Starter Tea (Unflavored Kombucha)', volume: '2 oz', weight: '60g' }
    ],
    steps: [
      'Brew a sweet batch of cold brew (using about 10% sugar by weight).',
      'Add the sweetened cold brew to a sterilized glass jar along with the starter tea and SCOBY.',
      'Cover with a breathable cloth and let ferment at room temperature for 3-5 days.',
      'Taste daily. Once it achieves a tart, effervescent tang, bottle it and refrigerate.',
      'Serve chilled in a wine glass.'
    ],
    metadata: { occasion: 'Health Kick', season: 'All Year', mood: 'Funky & Probiotic' }
  },
  {
    id: 'r-16',
    name: 'Smoked Coffee Manhattan',
    category: 'Coffee + Spirits',
    ingredients: [
      { name: 'Rye Whiskey', volume: '2 oz', weight: '60g' },
      { name: 'Cold Brew Concentrate', volume: '1 oz', weight: '30g' },
      { name: 'Sweet Vermouth', volume: '0.5 oz', weight: '15g' },
      { name: 'Angostura Bitters', volume: '2 dashes', weight: '1g' },
      { name: 'Wood Chips (for smoking)', volume: '1 pinch', weight: '1g' }
    ],
    steps: [
      'Using a smoking cloche or smoking board, smoke a coupe glass with wood chips.',
      'In a mixing glass, combine the rye, cold brew, vermouth, and bitters with ice.',
      'Stir for 30 seconds until extremely cold.',
      'Strain into the smoke-filled coupe glass.',
      'Garnish with a Luxardo cherry.'
    ],
    metadata: { occasion: 'Late Night', season: 'Winter', mood: 'Sophisticated & Dark' }
  },
  {
    id: 'r-17',
    name: 'Honey Lavender Cappuccino',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Whole Milk', volume: '4 oz', weight: '120g' },
      { name: 'Lavender Syrup', volume: '1 tsp', weight: '5g' },
      { name: 'Honey', volume: '1 tsp', weight: '7g' }
    ],
    steps: [
      'Pull a double espresso into a cappuccino cup.',
      'Stir the honey and lavender syrup into the hot espresso.',
      'Steam the milk aggressively to create a thick, glossy microfoam.',
      'Pour the milk into the cup, ensuring a thick cap of foam sits on top.'
    ],
    metadata: { occasion: 'Morning Commute', season: 'Spring', mood: 'Balanced & Floral' }
  },
  {
    id: 'r-18',
    name: 'Sea Salt Coffee',
    category: 'Experimental',
    ingredients: [
      { name: 'Iced Americano or Cold Brew', volume: '8 oz', weight: '240g' },
      { name: 'Heavy Whipping Cream', volume: '2 oz', weight: '60g' },
      { name: 'Flaky Sea Salt', volume: '1/4 tsp', weight: '1g' },
      { name: 'Simple Syrup', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'In a bowl, whip the heavy cream, simple syrup, and sea salt until it reaches a thick, pourable consistency (not stiff peaks).',
      'Fill a glass with ice and add the cold coffee.',
      'Float the salted cream heavily on top of the coffee.',
      'Do not use a straw; drink directly from the rim so the salty cream mixes with the black coffee.'
    ],
    metadata: { occasion: 'Afternoon Snack', season: 'All Year', mood: 'Savory & Sweet' }
  },
  {
    id: 'r-19',
    name: 'Nitro Orange Espresso',
    category: 'Cold Coffee',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Orange Bitters', volume: '2 dashes', weight: '1g' },
      { name: 'Nitrogen (via Keg or Whipper)', volume: 'N/A', weight: 'N/A' },
      { name: 'Dehydrated Orange Wheel', volume: '1 piece', weight: '2g' }
    ],
    steps: [
      'Combine cold brew and orange bitters in a nitro whipper or keg system.',
      'Charge with Nitrogen (N2) gas and shake violently.',
      'Dispense hard into a glass to create a cascading, Guinness-like head.',
      'Float a dehydrated orange wheel on the dense foam.'
    ],
    metadata: { occasion: 'Quick Energy', season: 'Summer', mood: 'Velvety & Zesty' }
  },
  {
    id: 'r-20',
    name: 'Almond Rose Cold Brew',
    category: 'Signature Luxury',
    ingredients: [
      { name: 'Cold Brew Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Almond Milk', volume: '2 oz', weight: '60g' },
      { name: 'Rose Syrup', volume: '1 tbsp', weight: '15g' },
      { name: 'Crushed Almonds', volume: '1 tsp', weight: '4g' }
    ],
    steps: [
      'Fill a glass with ice and add the cold brew.',
      'Stir in the rose syrup.',
      'Slowly pour the almond milk over the back of a spoon to create a layered effect.',
      'Garnish with crushed almonds before serving.'
    ],
    metadata: { occasion: 'Cafe Date', season: 'Spring', mood: 'Nutty & Fragrant' }
  }
];

export const categorizedRecipeNames = {
  spirits: [
    'Spiced Butter Rum Coffee', 'Cold Brew Whisky Highball', 'Coffee Mojito', 'Smoked Coffee Manhattan',
    ...spiritsRecipes.map(r => r.name)
  ],
  cold: [
    'Orange Espresso Tonic', 'Coconut Cold Brew', 'Rose Cardamom Cold Brew', 'Coffee Lemonade', 'Nitro Orange Espresso',
    ...coldRecipes.map(r => r.name)
  ],
  global: [
    'Vietnamese Egg Coffee', 'Mexican Café de Olla',
    ...globalRecipes.map(r => r.name)
  ],
  spiced: [
    'Saffron Pistachio Latte', 'Lavender Honey Latte',
    ...spicedRecipes.map(r => r.name)
  ],
  dessert: [
    ...dessertRecipes.map(r => r.name)
  ],
  experimental: [
    'Sea Salt Coffee', 'Espresso & Tonic with Grapefruit', 'Smoked Maple Cold Brew',
    'Coffee Kombucha', 'Nitro Orange Espresso', 'Coffee Milk Punch',
    ...experimentalRecipes.map(r => r.name)
  ],
  luxury: [
    'Almond Rose Cold Brew', 'Honey Lavender Cappuccino',
    ...luxuryRecipes.map(r => r.name)
  ]
};
