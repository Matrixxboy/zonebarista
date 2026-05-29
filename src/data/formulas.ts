import { Formula } from '@/types';

export const formulas: Formula[] = [
  {
    id: 'f-01',
    name: 'Brew Ratio',
    category: 'brewing',
    equation: 'Brew Ratio = Beverage Yield (g) / Coffee Dose (g)',
    variables: [
      { symbol: 'Y', name: 'Beverage Yield', unit: 'grams (g)', notes: 'Weight of liquid output' },
      { symbol: 'D', name: 'Coffee Dose', unit: 'grams (g)', notes: 'Weight of dry ground coffee' },
    ],
    standardRanges: {
      espresso_ristretto: '1:1.5',
      espresso_standard: '1:2 to 1:2.5',
      espresso_lungo: '1:3 to 1:4',
      filter_sca: '1:15 to 1:17',
      cold_brew: '1:8 to 1:15',
    },
    examples: [
      {
        description: 'Espresso pull: 18g dose, 36g yield',
        inputs: { Y: 36, D: 18 },
        output: 2,
        explanation: '1. Identify Yield (Y) = 36g\n2. Identify Dose (D) = 18g\n3. Divide Yield by Dose: 36 / 18 = 2\n4. The ratio is 1:2. This is a standard espresso ratio.'
      },
      {
        description: 'Filter coffee: 30g dose, 500g yield',
        inputs: { Y: 500, D: 30 },
        output: 16.67,
      },
    ],
    sources: ['SCA Brewing & Extraction Standards'],
    description: 'The ratio of liquid output to coffee input. Foundation of brewing consistency.',
    inDepth: `### The Physics & Chemistry of Brew Ratios

The Brew Ratio is the fundamental thermodynamic control knob of coffee extraction. It dictates the total volume of solvent (water) available to dissolve the soluble compounds within the solute (roasted coffee). 

When water meets ground coffee, it acts as a universal solvent. However, coffee compounds dissolve at different rates:
1. **Fruity & Floral Acids:** Dissolve almost immediately.
2. **Sugars & Maillard Compounds:** Dissolve in the middle phase, providing sweetness and body.
3. **Heavy Bitter Compounds (Tannins/Caffeine):** Dissolve last.

By strictly controlling the ratio of water to coffee, you control *how far* into this solubility chain you travel.

### Why We Use It
Without a brew ratio, brewing coffee is entirely random. Volumetric measurements (like "one scoop" or "two fluid ounces") are highly inaccurate because coffee beans vary wildly in density based on roast level and origin. By weighing the dose and the yield in grams, we lock the thermodynamic potential of the brew.

- **For Espresso (1:2):** We use a highly concentrated ratio because the intense 9 bars of pressure drastically accelerate extraction. A tight ratio prevents the rapid over-extraction of bitter tannins.
- **For Filter (1:16):** Without mechanical pressure, gravity-fed percolation requires a massive amount of solvent (water) to pull the sugars and acids out of the cellular matrix. `
  },
  {
    id: 'f-02',
    name: 'Extraction Yield (EY)',
    category: 'brewing',
    equation: 'EY% = (TDS% × Beverage Mass (g) / Dry Coffee Mass (g)) × 100',
    variables: [
      { symbol: 'TDS', name: 'Total Dissolved Solids', unit: '%', notes: 'Measured by refractometer' },
      { symbol: 'BM', name: 'Beverage Mass', unit: 'grams (g)', notes: 'Weight of brewed liquid' },
      { symbol: 'DCM', name: 'Dry Coffee Mass', unit: 'grams (g)', notes: 'Dose weight' },
    ],
    standardRanges: {
      underextracted: '< 18%',
      optimal: '18–22%',
      overextracted: '> 22%',
    },
    examples: [
      {
        description: 'Optimal espresso: 10% TDS, 36g yield, 18g dose',
        inputs: { TDS: 10, BM: 36, DCM: 18 },
        output: 20,
        explanation: '1. Calculate Dissolved Solids: 10% of 36g = 3.6g of coffee solids in the cup.\n2. Divide solids by original dry dose: 3.6g / 18g = 0.20\n3. Multiply by 100 for percentage: 20% EY.\nThis falls squarely in the optimal 18-22% range.'
      },
    ],
    sources: ['VST Extraction Yield Calculations', 'SCA Brewing Standards'],
    description: 'Percentage of coffee dissolved into the cup. Target: 18–22% for balanced flavor.',
    inDepth: `### The Science of Extraction Yield

Roasted coffee beans are primarily composed of insoluble cellulose (wood fiber). Only about **30%** of a roasted coffee bean is actually soluble in water. The rest is the structural matrix of the seed.

Extraction Yield (EY) is a precise metric that tells you exactly what percentage of the dry coffee bean mass was stripped away and dissolved into the final cup.

* **Under 18% (Under-extracted):** The solvent didn't have enough time or energy to dissolve the sugars. The cup will taste sour, sharp, and salty because only the rapidly-dissolving acids made it into the cup.
* **18% - 22% (Optimal):** The "Goldilocks Zone" where acids are perfectly balanced by dissolved sugars and complex Maillard reaction compounds.
* **Over 22% (Over-extracted):** The solvent penetrated deeply into the cellular matrix, breaking down heavy, astringent tannins and dry, bitter alkaloids. 

### Why We Use It
Taste is subjective, but Extraction Yield is objective. Before refractometers, baristas relied entirely on taste, which is easily swayed by fatigue or bias. By calculating EY%, you map the physical reality of what is happening inside the portafilter or brew bed. It allows you to troubleshoot scientifically—if a coffee tastes hollow and the EY is 16%, you objectively know you need to grind finer or increase water temperature to drive up the extraction efficiency.`
  },
  {
    id: 'f-03',
    name: 'Dissolved Coffee Solids Mass',
    category: 'brewing',
    equation: 'Dissolved Solids (g) = (TDS% × Beverage Mass (g)) / 100',
    variables: [
      { symbol: 'TDS', name: 'Total Dissolved Solids', unit: '%', notes: 'Measured by refractometer' },
      { symbol: 'BM', name: 'Beverage Mass', unit: 'grams (g)', notes: 'Weight of brewed liquid' },
    ],
    standardRanges: {},
    examples: [
      {
        description: '10% TDS in 36g cup',
        inputs: { TDS: 10, BM: 36 },
        output: 3.6,
      },
    ],
    sources: ['SCA Brewing Standards'],
    description: 'Absolute mass of extracted coffee solids in the beverage.',
    inDepth: `### The Reality of the Cup

Total Dissolved Solids (TDS) is a percentage that tells us the concentration of a liquid, but it doesn't give us the absolute mass. This formula isolates the physical, tangible weight of the coffee that was extracted from the bean and is now floating in the water.

If you have a 36-gram espresso shot with a TDS of 10%, that means 90% of the liquid in the cup is just pure water. Exactly 3.6 grams of the liquid consists of caramelized sugars, caffeine, lipids, and organic acids.

### Why We Use It
This is the intermediate step required to calculate Extraction Yield. However, looking at the absolute mass of dissolved solids is also an eye-opening exercise in efficiency. If you dose 20g of coffee into a portafilter and end up with 4g of dissolved solids, it starkly illustrates that you are throwing away 16g of wet cellulose waste.`
  },
  {
    id: 'f-07',
    name: 'Total Water Hardness',
    category: 'water',
    equation: 'Total Hardness = (Ca²⁺ × 2.497) + (Mg²⁺ × 4.118)',
    variables: [
      { symbol: 'Ca', name: 'Calcium', unit: 'mg/L', notes: 'Calcium ion concentration' },
      { symbol: 'Mg', name: 'Magnesium', unit: 'mg/L', notes: 'Magnesium ion concentration' },
    ],
    standardRanges: {
      soft: '0–60 mg/L',
      moderately_hard: '61–120 mg/L',
      hard: '121–180 mg/L',
      very_hard: '> 180 mg/L',
    },
    examples: [
      {
        description: 'Ca²⁺ = 40 mg/L, Mg²⁺ = 15 mg/L',
        inputs: { Ca: 40, Mg: 15 },
        output: 161.65,
        explanation: '1. Calcium contribution: 40 × 2.497 = 99.88 mg/L as CaCO3\n2. Magnesium contribution: 15 × 4.118 = 61.77 mg/L as CaCO3\n3. Total Hardness: 99.88 + 61.77 = 161.65 mg/L.\nThis is on the higher end of the SCA target (hard water), which may mute acidity.'
      },
    ],
    sources: ['Colonna-Dashwood & Hendon (2015). Water for Coffee.'],
    description: 'Total mineral hardness as mg/L CaCO₃ equivalent. Critical for extraction quality.',
    inDepth: `### The Role of Bivalent Cations

Water is never just H₂O. It is a solvent packed with dissolved minerals. In coffee brewing, Calcium (Ca²⁺) and Magnesium (Mg²⁺) are bivalent cations—meaning they have a positive +2 charge.

Many of the most desirable flavor compounds in coffee (like malic acid, citric acid, and complex sugars) have negatively charged oxygen atoms. Because opposites attract, the Calcium and Magnesium in the brew water act as "magnets," actively pulling these flavorful compounds out of the coffee bean matrix and into the liquid. 

* **Magnesium (Mg²⁺):** Has a smaller ionic radius and a very strong pull on small, fruity oxygen-rich compounds. It generally creates sweeter, fruitier extractions.
* **Calcium (Ca²⁺):** Has a larger radius and bonds heavily with heavier compounds, often increasing perceived body and mouthfeel.

### Why We Use It
Brewing coffee with pure distilled water (0 hardness) results in a flat, hollow, and lifeless cup because the water lacks the "magnets" required to pull the flavor out of the beans. By calculating and controlling Total Hardness, we can engineer our water to aggressively extract the exact flavor profile we want.`
  },
  {
    id: 'f-08',
    name: 'Carbonate Hardness / Alkalinity',
    category: 'water',
    equation: 'Alkalinity (as CaCO₃) = HCO₃⁻ × 0.82',
    variables: [
      { symbol: 'HCO3', name: 'Bicarbonate', unit: 'mg/L', notes: 'Bicarbonate ion concentration' },
    ],
    standardRanges: {
      sca_target: '40 mg/L CaCO₃',
      equivalent_hco3: '~49 mg/L',
    },
    examples: [
      {
        description: 'HCO₃⁻ = 50 mg/L',
        inputs: { HCO3: 50 },
        output: 41,
      },
    ],
    sources: ['Colonna-Dashwood & Hendon (2015). Water for Coffee.'],
    description: 'Alkalinity affects pH and extraction. SCA target: ~40 mg/L CaCO₃.',
    inDepth: `### The Science of Acid Buffering

While Calcium and Magnesium act as magnets to pull flavor *out*, Alkalinity (primarily Bicarbonate, HCO₃⁻) dictates how you actually *perceive* that flavor once it's in the cup.

Coffee is an acidic beverage (usually sitting around 5.0 pH). When you brew coffee, you are extracting dozens of different organic acids (citric, malic, acetic, quinic). 

Bicarbonate acts as an **acid buffer**. When it encounters acids in the brew, it reacts with the Hydrogen ions (H⁺) to neutralize them, turning into water and CO₂.

### Why We Use It
If your water has **zero alkalinity**, the coffee will taste overwhelmingly sour and sharply acidic, because there is no buffer to soften the blow.
If your water has **high alkalinity (e.g., >80 mg/L)**, the bicarbonate will neutralize almost all of the delicate fruity acids in the coffee. You could brew an incredibly vibrant, expensive Ethiopian Gesha, but high alkalinity water will make it taste like flat, boring, muddy diner coffee. 

Calculating your exact Carbonate Hardness allows you to dial in the buffer. The SCA recommends ~40 mg/L to take the sharp edge off the acidity while preserving the sparkling fruit notes.`
  },
  {
    id: 'f-11',
    name: 'Development Time Ratio (DTR)',
    category: 'roasting',
    equation: 'DTR% = (Time from First Crack to Drop (s) / Total Roast Time (s)) × 100',
    variables: [
      { symbol: 'FC', name: 'First Crack to Drop', unit: 'seconds (s)', notes: 'Development phase duration' },
      { symbol: 'TR', name: 'Total Roast Time', unit: 'seconds (s)', notes: 'From heat on to drop' },
    ],
    standardRanges: {
      target: '20–25%',
      light_roast: '15–20%',
      medium_roast: '20–25%',
      dark_roast: '25–35%',
    },
    examples: [
      {
        description: '10-minute roast, 135 seconds after first crack',
        inputs: { FC: 135, TR: 600 },
        output: 22.5,
      },
    ],
    sources: ['Roasting Science Standards'],
    description: 'Percentage of roast time spent in development phase. Higher DTR = darker roast.',
    inDepth: `### The Thermodynamics of Development

A coffee roast is broadly divided into three phases: Drying, Maillard, and Development. 

The "Development Phase" begins exactly at **First Crack**—the moment the internal pressure of water vapor and CO₂ inside the bean overcomes the structural integrity of the cellulose, causing it to violently fracture (pop). 

Once First Crack occurs, the bean becomes exothermic (releasing heat), and the chemical reactions occurring inside the bean fundamentally shift. The sugars begin to actively caramelize, and the delicate organic acids begin to degrade into heavier, bitter compounds. 

### Why We Use It
Development Time Ratio (DTR) is the golden metric for consistency in roasting. If a roaster wants to replicate a specific flavor profile across different batch sizes or environmental conditions, maintaining the DTR is critical. 
- A **very low DTR (<15%)** means the inside of the bean may remain raw and grassy.
- A **very high DTR (>25%)** means the sugars have heavily caramelized or burned, resulting in traditional dark-roast flavors (chocolate, ash, smoke) while destroying the origin characteristics (floral, fruity).`
  },
  {
    id: 'f-12',
    name: 'Roast Loss (Weight Loss)',
    category: 'roasting',
    equation: 'Roast Loss% = ((Green Weight - Roasted Weight) / Green Weight) × 100',
    variables: [
      { symbol: 'GW', name: 'Green Weight', unit: 'grams (g)', notes: 'Pre-roast coffee weight' },
      { symbol: 'RW', name: 'Roasted Weight', unit: 'grams (g)', notes: 'Post-roast coffee weight' },
    ],
    standardRanges: {
      light: '12–15%',
      medium: '15–18%',
      medium_dark: '18–20%',
      dark: '20–25%',
    },
    examples: [
      {
        description: '1000g green becomes 852g roasted',
        inputs: { GW: 1000, RW: 852 },
        output: 14.8,
      },
    ],
    sources: ['Roasting Science Standards'],
    description: 'Weight loss from moisture evaporation and CO₂ release. Indicates roast level.',
    inDepth: `### Mass Transfer During Roasting

When a raw (green) coffee bean enters a 200°C roasting drum, two primary things physically leave the bean:
1. **Water:** Green coffee typically holds 10-12% moisture by weight. During the roast, almost all of this water is boiled off and vaporized.
2. **Organic Matter (as CO₂):** As the Maillard reaction and Pyrolysis break down sugars and amino acids, a massive amount of Carbon Dioxide is generated and vented out of the bean.

### Why We Use It
Roast Loss is the most reliable, objective post-roast metric for determining roast degree. Color can be deceiving (some processing methods cause beans to look darker than they actually are), but weight loss never lies. 

If you achieve a 14% weight loss, you objectively know you are in the "Light/Filter" roast category. If you push it to 22% weight loss, you have entered a traditional, oily French Roast territory. Tracking this formula allows roasteries to maintain tight Quality Control tolerances.`
  },
  {
    id: 'f-13',
    name: 'Rate of Rise (RoR)',
    category: 'roasting',
    equation: 'RoR = ΔT / Δt (°C/minute)',
    variables: [
      { symbol: 'DT', name: 'Temperature Change', unit: '°C', notes: 'Final temp - Initial temp' },
      { symbol: 'Dt', name: 'Time Change', unit: 'minutes', notes: 'Duration of measurement' },
    ],
    standardRanges: {
      drying: '15–25°C/min',
      maillard: '8–15°C/min',
      development: '5–10°C/min',
    },
    examples: [
      {
        description: 'Temperature rises from 175°C to 190°C in 1.5 minutes',
        inputs: { DT: 15, Dt: 1.5 },
        output: 10,
      },
    ],
    sources: ['Roasting Science Standards'],
    description: 'Rate of temperature rise. Guides roast curve and development control.',
    inDepth: `### The Derivative of Temperature

Rate of Rise (RoR) is literally the first derivative of the bean temperature curve over time. It measures *momentum*. Instead of looking at what the temperature is right now, RoR tells you how fast the temperature is accelerating or decelerating. 

In a standard, high-quality coffee roast, the RoR should generally follow a smooth, continuously declining curve. This means the bean is always getting hotter, but the *rate* at which it gets hotter is constantly slowing down.

### Why We Use It
The RoR is the steering wheel of the coffee roaster. If your RoR crashes (drops drastically), the beans will bake, resulting in a flat, bready, lifeless coffee. If your RoR flicks (accelerates at the end of the roast), the outside of the bean will burn while the inside remains raw, resulting in sharp, astringent flavors. By monitoring the RoR via thermocouples and software, a roaster can make micro-adjustments to the gas pressure to ensure the thermal momentum remains perfectly smooth.`
  },
  {
    id: 'f-14',
    name: 'Beverage Cost Percentage',
    category: 'business',
    equation: 'Bev Cost% = (Total COGS / Menu Price) × 100',
    variables: [
      { symbol: 'COGS', name: 'Cost of Goods Sold', unit: 'currency ($)', notes: 'Total ingredient cost' },
      { symbol: 'Price', name: 'Menu Price', unit: 'currency ($)', notes: 'Retail selling price' },
    ],
    standardRanges: {
      target: '20–35%',
    },
    examples: [
      {
        description: 'COGS $1.20, Menu Price $4.50',
        inputs: { COGS: 1.20, Price: 4.50 },
        output: 26.67,
      },
    ],
    sources: ['Specialty Coffee Retailer — Business Formulas'],
    description: 'Percentage of revenue spent on ingredients. Target: 20–35% for profitability.',
    inDepth: `### The Economics of the Cup

Beverage Cost Percentage is the most ruthless metric in the coffee business. It is a direct ratio of how much it costs to physically construct a drink (the Cost of Goods Sold, or COGS) versus what you are charging the customer for it.

COGS must include everything that leaves the store with the customer:
- The coffee beans (scaled down to the exact gram per dose)
- The milk (factoring in waste)
- The cup, the lid, and the sleeve
- Syrups or garnishes

### Why We Use It
Many independent coffee shops fail because they base their prices on what the shop across the street is charging, rather than running the math on their own COGS. If your Beverage Cost Percentage creeps above 30-35%, you simply do not have enough gross margin left over to pay for labor, rent, electricity, and taxes. This formula allows you to audit the financial viability of every single item on your menu.`
  },
  {
    id: 'f-15',
    name: 'Menu Price from Target Cost %',
    category: 'business',
    equation: 'Menu Price = COGS / (Target Bev Cost% / 100)',
    variables: [
      { symbol: 'COGS', name: 'Cost of Goods Sold', unit: 'currency ($)', notes: 'Total ingredient cost' },
      { symbol: 'Target', name: 'Target Cost %', unit: '%', notes: 'Desired COGS/Revenue ratio' },
    ],
    standardRanges: {
      specialty_cafe: '28%',
      high_volume: '30–35%',
    },
    examples: [
      {
        description: 'COGS $1.20, target cost 28%',
        inputs: { COGS: 1.20, Target: 28 },
        output: 4.29,
      },
    ],
    sources: ['Specialty Coffee Retailer — Business Formulas'],
    description: 'Calculate menu price to achieve target beverage cost percentage.',
    inDepth: `### Engineering Profitability

Instead of calculating your margins reactively, this formula allows you to calculate them proactively. Once a cafe establishes its operational overhead (rent, labor, utilities), ownership can determine a strict "Target Cost %" that must be maintained across the entire menu to ensure the business stays in the black.

By taking the exact Cost of Goods Sold (COGS) for a new drink and dividing it by the Target Percentage, the formula outputs the exact minimum price you must charge the customer.

### Why We Use It
This takes the emotion and guesswork out of pricing. If you want to introduce a highly expensive, single-origin Gesha pour-over, the COGS might be $3.50 per cup. If your target cost is 25%, this formula dictates you *must* charge $14.00 for the cup. If your local market will not support a $14 cup of coffee, the math has objectively proven that you cannot afford to put that coffee on the menu.`
  },
  {
    id: 'f-18',
    name: 'Prime Cost %',
    category: 'business',
    equation: 'Prime Cost% = ((COGS + Labor) / Revenue) × 100',
    variables: [
      { symbol: 'COGS', name: 'Cost of Goods Sold', unit: 'currency ($)', notes: 'Total ingredient cost' },
      { symbol: 'Labor', name: 'Labor Costs', unit: 'currency ($)', notes: 'Total payroll' },
      { symbol: 'Revenue', name: 'Total Revenue', unit: 'currency ($)', notes: 'Total sales' },
    ],
    standardRanges: {
      target: '≤ 65%',
    },
    examples: [
      {
        description: 'COGS $5000, Labor $8000, Revenue $50000',
        inputs: { COGS: 5000, Labor: 8000, Revenue: 50000 },
        output: 26,
      },
    ],
    sources: ['Specialty Coffee Retailer — Business Formulas'],
    description: 'Combined COGS and labor as % of revenue. Must be ≤65% for café viability.',
    inDepth: `### The Ultimate Viability Metric

Prime Cost represents the two largest, most volatile expenses in any food and beverage business: Cost of Goods Sold (ingredients and packaging) and Labor (payroll, taxes, and benefits). 

Unlike fixed costs (rent and insurance), Prime Costs are dynamic—they fluctuate wildly based on how busy the shop is, how much waste is occurring, and how efficiently the staff is scheduled.

### Why We Use It
In the specialty coffee industry, the golden rule is that Prime Cost must not exceed **60% to 65%** of total revenue. 
- If you run at a 65% Prime Cost, you have 35% of your revenue left to pay rent, utilities, marketing, maintenance, and finally, extract a net profit.
- If your Prime Cost creeps up to 75% (due to overstaffing or wasted milk/coffee), the remaining 25% is almost never enough to cover the fixed overhead, meaning the business is actively bleeding money.

This formula acts as the ultimate canary in the coal mine for the financial health of a cafe.`
  },
  {
    id: 'f-23',
    name: 'SCA Cupping Final Score',
    category: 'sensory',
    equation: 'Total Score = Σ(Attributes) - Defect Penalty',
    variables: [
      { symbol: 'Attr', name: 'Attribute Scores', unit: 'points (max 10 each)', notes: '10 attributes' },
      { symbol: 'Defects', name: 'Defect Penalty', unit: 'points', notes: '2 pts taint, 4 pts fault' },
    ],
    standardRanges: {
      specialty: '≥ 80 points',
      premium: '≥ 85 points',
    },
    examples: [
      {
        description: 'Attributes: 9, 8.5, 8, 8, 8.5, 8.5, 8, 9, 9, 8.5; no defects',
        inputs: { Attr: 84.5, Defects: 0 },
        output: 84.5,
      },
    ],
    sources: ['SCA Cupping Protocol'],
    description: 'Official specialty coffee score. Attributes: Fragrance, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, Overall.',
    inDepth: `### The Global Quality Standard

The Specialty Coffee Association (SCA) Cupping Form is the universally accepted framework for evaluating and pricing green coffee globally. The form quantifies sensory perception into a strictly guarded 100-point scale.

The coffee is evaluated across 10 distinct categories, each worth up to 10 points:
1. Fragrance/Aroma
2. Flavor
3. Aftertaste
4. Acidity
5. Body
6. Balance
7. Uniformity
8. Clean Cup
9. Sweetness
10. Overall

If any defects are detected (like mold, fermentation issues, or phenolic "rubber" tastes), harsh penalties are mathematically subtracted from the total score.

### Why We Use It
This math dictates the global economy of coffee. 
- A score below **80.0** is classified as "Commercial Grade" coffee and trades at volatile, often unsustainably low commodity market prices.
- A score of **80.0 or higher** graduates the coffee into "Specialty Grade," allowing the farmer to charge a premium. 
- A score of **90.0+** is extremely rare and can fetch astronomical prices at auction. 

The formula standardizes a deeply subjective human experience (tasting) into an objective financial metric.`
  },
];

export const formulasByCategory = {
  brewing: formulas.filter((f) => f.category === 'brewing'),
  water: formulas.filter((f) => f.category === 'water'),
  roasting: formulas.filter((f) => f.category === 'roasting'),
  business: formulas.filter((f) => f.category === 'business'),
  sensory: formulas.filter((f) => f.category === 'sensory'),
};
