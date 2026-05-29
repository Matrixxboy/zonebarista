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
      },
      {
        description: 'Filter coffee: 30g dose, 500g yield',
        inputs: { Y: 500, D: 30 },
        output: 16.67,
      },
    ],
    sources: ['SCA Brewing & Extraction Standards'],
    description: 'The ratio of liquid output to coffee input. Foundation of brewing consistency.',
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
      },
    ],
    sources: ['VST Extraction Yield Calculations', 'SCA Brewing Standards'],
    description: 'Percentage of coffee dissolved into the cup. Target: 18–22% for balanced flavor.',
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
        output: 160.65,
      },
    ],
    sources: ['Colonna-Dashwood & Hendon (2015). Water for Coffee.'],
    description: 'Total mineral hardness as mg/L CaCO₃ equivalent. Critical for extraction quality.',
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
  },
];

export const formulasByCategory = {
  brewing: formulas.filter((f) => f.category === 'brewing'),
  water: formulas.filter((f) => f.category === 'water'),
  roasting: formulas.filter((f) => f.category === 'roasting'),
  business: formulas.filter((f) => f.category === 'business'),
  sensory: formulas.filter((f) => f.category === 'sensory'),
};
