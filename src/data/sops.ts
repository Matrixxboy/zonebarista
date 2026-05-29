import { LabSOP } from '@/types';

export const sops: LabSOP[] = [
  {
    id: 'sop-01',
    title: 'Water Chemistry Modification: Isolating Calcium vs Magnesium',
    category: 'water',
    objective: 'Determine the sensory impact of calcium hardness versus magnesium hardness on coffee acidity and body, holding alkalinity constant.',
    equipment: [
      'Distilled or ZeroWater pitcher water',
      'Calcium Chloride (CaCl2) or Calcium Citrate',
      'Magnesium Sulfate (Epsom Salt) (MgSO4)',
      'Sodium Bicarbonate (Baking Soda) (NaHCO3)',
      'Milligram scale (0.001g resolution)',
      '3 identical cupping bowls'
    ],
    variables: [
      'Total Hardness (GH)',
      'Alkalinity (KH)',
      'Buffer Ratio'
    ],
    procedure: [
      'Prepare Base Buffer: Dissolve 0.84g of Sodium Bicarbonate into 1L of distilled water to create a 1000ppm (as CaCO3) KH concentrate.',
      'Prepare Calcium Concentrate: Dissolve 1.47g of Calcium Chloride (CaCl2 dihydrate) into 1L distilled water for a 1000ppm GH concentrate.',
      'Prepare Magnesium Concentrate: Dissolve 2.46g of Epsom Salt (MgSO4 heptahydrate) into 1L distilled water for a 1000ppm GH concentrate.',
      'Mix Water A (High Ca): 40g Base Buffer + 80g Ca Concentrate + 880g Distilled.',
      'Mix Water B (High Mg): 40g Base Buffer + 80g Mg Concentrate + 880g Distilled.',
      'Mix Water C (Balanced): 40g Base Buffer + 40g Ca Concentrate + 40g Mg Concentrate + 880g Distilled.',
      'Cup exactly the same coffee (preferably a washed Ethiopian or Kenyan to highlight acidity) across the three waters using standard SCA cupping protocol.'
    ],
    analysis: `
### Expected Results
- **Water A (High Ca):** Should produce heavier body and emphasize sweetness, but may mute complex or delicate fruit acids.
- **Water B (High Mg):** Magnesium is highly effective at extracting smaller acidic compounds. Expect sharper, more vibrant, and complex acidity, but potentially a thinner body or astringent finish if over-extracted.
- **Water C (Balanced):** The standard "Barista Hustle" target. A balance of clarity, acidity, and body.

### Actionable Takeaways
If your cafe's tap water is naturally high in calcium, you may need to grind slightly coarser or brew at a lower temperature to avoid muddy, heavy extractions. Conversely, high-magnesium water allows for pushing extractions further to highlight fruit notes.
    `
  },
  {
    id: 'sop-02',
    title: 'The Salami Shot: Temporal Espresso Deconstruction',
    category: 'espresso',
    objective: 'Isolate the sequential stages of espresso extraction to identify exactly when a shot transitions from sweet to bitter, determining the optimal yield cut-off.',
    equipment: [
      'Espresso machine & grinder',
      '5-6 identical small shot glasses or espresso cups',
      'Acaia Lunar or fast-response espresso scale',
      'Stopwatch'
    ],
    variables: [
      'Time (seconds)',
      'Yield (grams)',
      'Extraction Phase'
    ],
    procedure: [
      'Dial in a standard 1:2 ratio espresso (e.g., 18g in, 36g out in ~28 seconds).',
      'Prepare the portafilter exactly as dialed in.',
      'Line up your 5 small cups next to the drip tray.',
      'Start the extraction and the timer simultaneously.',
      'Cup 1: Catch the espresso from 0 to 10 seconds (the thick, syrupy ristretto phase).',
      'Cup 2: Swap cup 1 for cup 2 at exactly 10 seconds. Catch from 10 to 15 seconds.',
      'Cup 3: Swap at 15 seconds. Catch from 15 to 20 seconds.',
      'Cup 4: Swap at 20 seconds. Catch from 20 to 25 seconds.',
      'Cup 5: Swap at 25 seconds. Catch from 25 to 30+ seconds (the blonding phase).',
      'Taste the cups in chronological order, then in reverse order.'
    ],
    analysis: `
### Expected Results
- **Cup 1 (0-10s):** Intensely sour, salty, incredibly viscous, overwhelming acidity. Under-extracted.
- **Cup 2 (10-15s):** Rapid transition to sweetness, thick body, heavy sugars extracting.
- **Cup 3 (15-20s):** Balanced, caramel/chocolate notes, acidity mellowing out.
- **Cup 4 (20-25s):** Thinner texture, dry, beginning to show astringency.
- **Cup 5 (25-30s+):** Bitter, watery, woody, ash flavors. Over-extracted.

### Actionable Takeaways
By identifying exactly which cup introduces bitterness, you can fine-tune your yield. If Cup 4 tastes too bitter, cut your shot at 20 seconds or pull a shorter ratio (e.g., 1:1.8 instead of 1:2). If Cup 4 is still intensely sweet and lacks finish, you can push the yield further to increase extraction.
    `
  },
  {
    id: 'sop-03',
    title: 'Temperature Stepping: Profiling Roast Solubility',
    category: 'brewing',
    objective: 'Determine the optimal brewing temperature for an unknown roast by creating a controlled thermal gradient experiment.',
    equipment: [
      'Variable temperature kettle (e.g., Fellow Stagg EKG or Brewista Artisan)',
      '3 identical drippers (e.g., V60 or Kalita Wave)',
      '3 identical servers/carafes',
      'Thermometer (optional, to verify slurry temp)'
    ],
    variables: [
      'Water Temperature',
      'Slurry Temperature',
      'Extraction Yield (EY%)'
    ],
    procedure: [
      'Prepare 3 doses of the exact same coffee (e.g., 15g each) ground at the exact same setting.',
      'Set your kettle to **85°C (185°F)**. Brew the first dripper using a standard recipe (e.g., 15g to 250g, 5 pours of 50g every 30s).',
      'Set your kettle to **92°C (198°F)**. Brew the second dripper using the exact same recipe and pouring cadence.',
      'Set your kettle to **98°C (208°F)**. Brew the third dripper using the exact same recipe.',
      'Allow all three brews to cool to roughly 50°C (122°F) before tasting, as high heat masks flavor perception.'
    ],
    analysis: `
### Expected Results
- **85°C Brew:** Will likely taste sour, weak, or "hollow" because lower temperatures fail to extract heavier, less soluble compounds. (Unless it is a very dark roast).
- **92°C Brew:** Usually the sweet spot for medium roasts. Balanced acidity, good body, complex sweetness.
- **98°C Brew:** For light roasts, this may be perfect, extracting floral and delicate notes. For medium/dark roasts, this will likely taste dry, astringent, and bitter.

### Actionable Takeaways
Light roasts are physically denser and less soluble; they require high heat (95-100°C) to penetrate the cellular structure. Dark roasts are highly porous and highly soluble; they require low heat (80-88°C) to prevent over-extraction of bitter compounds. Use this protocol whenever you switch roasters or beans to find the thermal "sweet spot."
    `
  },
  {
    id: 'sop-04',
    title: 'Dialing in a New Bean: The Anchor Protocol',
    category: 'espresso',
    objective: 'A standardized, rapid method for dialing in a completely unknown coffee with minimal waste.',
    equipment: [
      'Espresso machine & grinder',
      'Scale (Acaia Lunar or similar)',
      'WDT tool'
    ],
    variables: [
      'Dose (fixed)',
      'Yield (variable)',
      'Time (variable)',
      'Grind Size (variable)'
    ],
    procedure: [
      '**Step 1 (The Anchor):** Lock your DOSE. Choose a dose that fits your basket perfectly (e.g., 18g in an 18g VST basket). Do not change this dose for the rest of the protocol.',
      '**Step 2 (The Benchmark):** Lock your RATIO. Pull a standard 1:2 ratio (18g in, 36g out). Aim for roughly 25-30 seconds by adjusting your grind size.',
      '**Step 3 (The Taste Test):** Taste the 1:2 ratio shot.',
      '**Step 4 (The Yield Adjustment):** If the shot is sour (under-extracted), increase the yield to 1:2.5 (18g in, 45g out). If the shot is bitter (over-extracted), decrease the yield to 1:1.5 (18g in, 27g out).',
      '**Step 5 (The Grind Adjustment):** Once you find the correct ratio (sweetness balance), micro-adjust the grind size to fix the texture/body. Finer grind = thicker body, coarser grind = more clarity.'
    ],
    analysis: `
### Expected Results
By locking variables systematically, you prevent the "chasing your tail" phenomenon where a barista changes dose, yield, and grind simultaneously and gets lost.

### Actionable Takeaways
1. **Dose** dictates basket size and headspace (keep it locked).
2. **Yield** dictates extraction and flavor balance (sour vs bitter).
3. **Grind size** dictates flow resistance and texture/time.
    `
  }
];
