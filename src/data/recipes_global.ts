import { CoffeeRecipe } from '@/types';

export const globalRecipes: CoffeeRecipe[] = [
  {
    id: 'g-01',
    name: 'Turkish Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Extra Fine Ground Coffee', volume: '1 heaping tsp', weight: '7g' },
      { name: 'Water', volume: '2 oz', weight: '60g' },
      { name: 'Sugar (Optional)', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Add water, sugar, and coffee to a cezve (ibrik). Do not stir.',
      'Place the cezve on low heat.',
      'Once the coffee begins to sink and the sugar dissolves, stir gently once.',
      'As the coffee heats, a dark foam will build. Right before it boils over, remove it from the heat.',
      'Pour slowly into a demitasse cup, keeping the foam intact. Let grounds settle before drinking.'
    ],
    metadata: { occasion: 'After Dinner', season: 'All Year', mood: 'Intense & Historic' }
  },
  {
    id: 'g-02',
    name: 'Arabic Qahwa',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Lightly Roasted Arabic Coffee (Coarse)', volume: '3 tbsp', weight: '20g' },
      { name: 'Water', volume: '3 cups', weight: '700g' },
      { name: 'Crushed Cardamom Pods', volume: '1 tbsp', weight: '5g' },
      { name: 'Saffron Threads', volume: '1 pinch', weight: '0.1g' },
      { name: 'Rose Water', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Boil water in a dallah (traditional pot).',
      'Add the coffee and let it boil over low heat for 10 minutes.',
      'Remove from heat to let grounds settle, then pour the liquid into a new pot containing the cardamom and saffron.',
      'Simmer for another 5 minutes.',
      'Add rose water and strain into small cups. Serve with dates.'
    ],
    metadata: { occasion: 'Welcoming Guests', season: 'All Year', mood: 'Spiced & Aromatic' }
  },
  {
    id: 'g-03',
    name: 'Greek Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Greek Coffee (Extra Fine/Blonde Roast)', volume: '1 heaping tsp', weight: '7g' },
      { name: 'Water', volume: '2.5 oz', weight: '75g' },
      { name: 'Sugar', volume: '1 tsp', weight: '5g' }
    ],
    steps: [
      'Add water, coffee, and sugar to a briki.',
      'Place on medium heat and stir until coffee and sugar dissolve.',
      'Stop stirring. Watch closely as the ring of foam ("kaimaki") rises to the top.',
      'Remove immediately before it boils over.',
      'Pour into a small cup, ensuring the kaimaki is transferred.'
    ],
    metadata: { occasion: 'Morning Catch-up', season: 'Summer', mood: 'Strong & Sweet' }
  },
  {
    id: 'g-04',
    name: 'Vietnamese Coconut Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Vietnamese Coffee (Brewed strong)', volume: '2 oz', weight: '60g' },
      { name: 'Coconut Cream', volume: '2 tbsp', weight: '30g' },
      { name: 'Sweetened Condensed Milk', volume: '1 tbsp', weight: '20g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'Blend the coconut cream, condensed milk, and ice in a blender until it reaches a smoothie-like slushy consistency.',
      'Pour the hot, strong Vietnamese coffee into a glass.',
      'Top with the frozen coconut slush.'
    ],
    metadata: { occasion: 'Hot Afternoon', season: 'Summer', mood: 'Tropical & Refreshing' }
  },
  {
    id: 'g-05',
    name: 'Indian Filter Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Indian Coffee-Chicory Blend', volume: '3 tbsp', weight: '20g' },
      { name: 'Hot Water', volume: '4 oz', weight: '120g' },
      { name: 'Whole Milk (Boiling)', volume: '4 oz', weight: '120g' },
      { name: 'Sugar', volume: '2 tsp', weight: '10g' }
    ],
    steps: [
      'Add the coffee powder to the upper chamber of an Indian coffee filter and press lightly with the plunger.',
      'Pour boiling water over the plunger, cover, and let the decoction drip for 15 minutes.',
      'Boil the milk until it froths.',
      'Pour 1 part decoction to 2 parts hot milk in a dawara (traditional tumbler), add sugar, and pour back and forth from high up to create foam.'
    ],
    metadata: { occasion: 'Morning Ritual', season: 'All Year', mood: 'Earthy & Frothy' }
  },
  {
    id: 'g-06',
    name: 'South Indian Jaggery Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Indian Filter Decoction', volume: '2 oz', weight: '60g' },
      { name: 'Hot Milk', volume: '4 oz', weight: '120g' },
      { name: 'Crushed Jaggery', volume: '1 tbsp', weight: '15g' },
      { name: 'Dry Ginger Powder', volume: '1 pinch', weight: '0.5g' }
    ],
    steps: [
      'Dissolve the jaggery in a small splash of hot water in a cup.',
      'Add the ginger powder and coffee decoction.',
      'Pour in the hot milk from a height to create foam and mix the ingredients.'
    ],
    metadata: { occasion: 'Monsoon Evening', season: 'Monsoon/Autumn', mood: 'Sweet & Restorative' }
  },
  {
    id: 'g-07',
    name: 'Ethiopian Spiced Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Ethiopian Coffee Beans (Freshly Roasted)', volume: '2 tbsp', weight: '15g' },
      { name: 'Water', volume: '8 oz', weight: '240g' },
      { name: 'Ground Cardamom', volume: '1/4 tsp', weight: '1g' },
      { name: 'Ground Cloves', volume: '1 pinch', weight: '0.5g' }
    ],
    steps: [
      'Grind the coffee coarse along with the cardamom and cloves.',
      'Boil water in a jebena (traditional clay pot).',
      'Add the spiced coffee grounds and bring to a boil again.',
      'Remove from heat, let the grounds settle completely.',
      'Pour slowly into small cups.'
    ],
    metadata: { occasion: 'Coffee Ceremony', season: 'All Year', mood: 'Aromatic & Communal' }
  },
  {
    id: 'g-08',
    name: 'Moroccan Spiced Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Dark Roast Coffee (Ground)', volume: '2 tbsp', weight: '15g' },
      { name: 'Water', volume: '8 oz', weight: '240g' },
      { name: 'Cinnamon', volume: '1/4 tsp', weight: '1g' },
      { name: 'Ginger Powder', volume: '1/8 tsp', weight: '0.5g' },
      { name: 'Black Pepper', volume: '1 pinch', weight: '0.1g' },
      { name: 'Nutmeg', volume: '1 pinch', weight: '0.5g' }
    ],
    steps: [
      'Mix all the spices intimately with the ground coffee.',
      'Brew using a French Press or pour-over method with the hot water.',
      'Serve black or with a small amount of sugar.'
    ],
    metadata: { occasion: 'Afternoon Break', season: 'Winter', mood: 'Warm & Pungent' }
  },
  {
    id: 'g-09',
    name: 'Cuban Café Cubano',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Dark Roast Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Demerara or White Sugar', volume: '1.5 tbsp', weight: '20g' }
    ],
    steps: [
      'Place the sugar in a small metal pitcher or cup.',
      'Brew the espresso. As the first few drops of thick, concentrated coffee emerge, pour them into the sugar.',
      'Vigorously whip the sugar and coffee drops until it forms a pale, thick paste (espumita).',
      'Pour the rest of the brewed espresso over the espumita and stir gently so the foam rises to the top.'
    ],
    metadata: { occasion: 'Morning Energy', season: 'All Year', mood: 'Intense & Sweet' }
  },
  {
    id: 'g-10',
    name: 'Swedish Kaffeost',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Light Roast Filter Coffee', volume: '6 oz', weight: '180g' },
      { name: 'Leipäjuusto (Finnish Squeaky Cheese)', volume: '2 chunks', weight: '30g' }
    ],
    steps: [
      'Brew a large, hot cup of Scandinavian light roast coffee.',
      'Cut the Leipäjuusto into small cubes.',
      'Place the cheese cubes at the bottom of a wooden kuksa (cup) or mug.',
      'Pour the hot coffee over the cheese and let it sit for a minute so the cheese softens and absorbs the coffee.',
      'Drink the coffee, then eat the cheese with a spoon.'
    ],
    metadata: { occasion: 'Winter Foraging', season: 'Winter', mood: 'Rustic & Hearty' }
  },
  {
    id: 'g-11',
    name: 'Austrian Einspänner',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Hot Water', volume: '2 oz', weight: '60g' },
      { name: 'Heavy Whipping Cream', volume: '3 tbsp', weight: '45g' },
      { name: 'Powdered Sugar', volume: '1 tsp', weight: '3g' }
    ],
    steps: [
      'Whip the heavy cream with powdered sugar until it forms stiff peaks.',
      'In a tall glass, combine the espresso and hot water to make an Americano.',
      'Spoon a massive, stiff dollop of the whipped cream onto the hot coffee.',
      'Drink the hot coffee through the cold cream without stirring.'
    ],
    metadata: { occasion: 'Cafe Culture', season: 'Winter', mood: 'Elegant & Contrasting' }
  },
  {
    id: 'g-12',
    name: 'Italian Affogato',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Double Espresso', volume: '2 oz', weight: '36g' },
      { name: 'Fior di Latte or Vanilla Gelato', volume: '1 large scoop', weight: '60g' }
    ],
    steps: [
      'Place a firmly frozen scoop of gelato into a chilled small bowl or glass.',
      'Pull a fresh, hot double espresso.',
      'Immediately pour the espresso over the gelato and serve with a spoon.'
    ],
    metadata: { occasion: 'After Dinner', season: 'Summer', mood: 'Simple & Perfect' }
  },
  {
    id: 'g-13',
    name: 'Spanish Café Bombón',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Sweetened Condensed Milk', volume: '1.5 oz', weight: '45g' },
      { name: 'Double Espresso', volume: '1.5 oz', weight: '45g' }
    ],
    steps: [
      'Pour the condensed milk into the bottom of a small, clear glass.',
      'Carefully pour the espresso over the back of a spoon to layer it sharply above the condensed milk.',
      'Serve layered. The drinker must stir it together before consuming.'
    ],
    metadata: { occasion: 'Sweet Craving', season: 'All Year', mood: 'Rich & Layered' }
  },
  {
    id: 'g-14',
    name: 'Korean Dalgona Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Instant Coffee Powder', volume: '2 tbsp', weight: '10g' },
      { name: 'Sugar', volume: '2 tbsp', weight: '25g' },
      { name: 'Hot Water', volume: '2 tbsp', weight: '30g' },
      { name: 'Cold Milk', volume: '6 oz', weight: '180g' },
      { name: 'Ice', volume: '1 cup', weight: '150g' }
    ],
    steps: [
      'In a bowl, combine the instant coffee, sugar, and hot water.',
      'Using a hand mixer or whisk, beat vigorously for 3-5 minutes until the mixture turns golden brown and forms stiff peaks.',
      'Fill a glass with ice and cold milk.',
      'Spoon the whipped coffee foam heavily on top of the milk.'
    ],
    metadata: { occasion: 'Afternoon Fun', season: 'Spring/Summer', mood: 'Fluffy & Aesthetic' }
  },
  {
    id: 'g-15',
    name: 'Indonesian Kopi Tubruk',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Fine Ground Coffee (Robusta blend)', volume: '2 tsp', weight: '10g' },
      { name: 'Boiling Water', volume: '6 oz', weight: '180g' },
      { name: 'Sugar (Palm or Cane)', volume: '2 tsp', weight: '10g' }
    ],
    steps: [
      'Place the coffee grounds and sugar directly into a glass or mug.',
      'Pour boiling water vigorously into the glass to mix the grounds.',
      'Cover the glass and wait for 3-5 minutes to allow the grounds to settle to the bottom.',
      'Drink carefully, leaving the mud-like grounds at the bottom.'
    ],
    metadata: { occasion: 'Morning Kick', season: 'All Year', mood: 'Raw & Earthy' }
  },
  {
    id: 'g-16',
    name: 'Thai Iced Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Strong Brewed Coffee (Oliang blend)', volume: '6 oz', weight: '180g' },
      { name: 'Sweetened Condensed Milk', volume: '2 tbsp', weight: '30g' },
      { name: 'Evaporated Milk', volume: '2 tbsp', weight: '30g' },
      { name: 'Ground Cardamom', volume: '1 pinch', weight: '0.5g' },
      { name: 'Ice', volume: '1.5 cups', weight: '220g' }
    ],
    steps: [
      'Brew the coffee strong and hot with a pinch of cardamom.',
      'Stir in the sweetened condensed milk until completely dissolved.',
      'Fill a tall glass to the brim with crushed ice.',
      'Pour the sweet coffee over the ice.',
      'Float the evaporated milk on top.'
    ],
    metadata: { occasion: 'Spicy Meal Pairing', season: 'Summer', mood: 'Sweet & Creamy' }
  },
  {
    id: 'g-17',
    name: 'Japanese Kyoto Cold Brew',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Light Roast Coffee (Medium-Fine Ground)', volume: '50g', weight: '50g' },
      { name: 'Ice Water', volume: '500ml', weight: '500g' }
    ],
    steps: [
      'Set up a Kyoto slow-drip tower (Oji or Yama).',
      'Place the coffee in the middle chamber, lightly tamp, and place a paper filter on top of the bed.',
      'Fill the top chamber with ice water and set the drip rate to exactly 1 drop per second.',
      'Allow the extraction to take 8-12 hours.',
      'Serve the resulting concentrate over a large clear ice cube.'
    ],
    metadata: { occasion: 'Meditation', season: 'Summer', mood: 'Clean & Syrupy' }
  },
  {
    id: 'g-18',
    name: 'Scandinavian Egg Coffee',
    category: 'Global Traditional',
    ingredients: [
      { name: 'Coarse Ground Coffee', volume: '1/2 cup', weight: '40g' },
      { name: 'Whole Egg (with shell)', volume: '1 egg', weight: '50g' },
      { name: 'Boiling Water', volume: '4 cups', weight: '950g' },
      { name: 'Cold Water', volume: '1 cup', weight: '240g' }
    ],
    steps: [
      'In a bowl, mix the coffee grounds with 1/4 cup of cold water and the entire crushed egg (shell included) until it forms a slurry.',
      'Bring the 4 cups of water to a rolling boil in a saucepan.',
      'Carefully add the egg-coffee slurry to the boiling water and boil for 3 minutes. A massive crust will form.',
      'Remove from heat and immediately pour in the remaining 3/4 cup of cold water to shock the coffee and sink the raft.',
      'Strain through a fine sieve. The resulting coffee will be totally clear and devoid of bitterness.'
    ],
    metadata: { occasion: 'Church Gathering', season: 'Winter', mood: 'Smooth & Clear' }
  }
];
