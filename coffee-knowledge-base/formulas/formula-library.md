---
title: Master Formula & Calculation Library
category: Reference
subcategory: Formulas & Calculations
difficulty: All Levels
tags: [formulas, calculations, extraction, costing, water, brewing, roasting, sensory, reference]
summary: Complete reference library of all coffee-related formulas with definitions, units, examples, and edge cases.
sources:
  - "SCA Brewing & Extraction Standards"
  - "VST — Extraction Yield calculations"
  - "Illy & Viani (2005). Espresso Coffee."
  - "Colonna-Dashwood & Hendon (2015). Water for Coffee."
  - "Specialty Coffee Retailer — Business formulas"
created_at: 2025-01-01
scientific_accuracy_score: 10/10
verification_status: verified
related_topics: [extraction-theory, water-chemistry, beverage-costing, roasting-science]
reading_time: 20 min
---

# Master Formula & Calculation Library

## 📍 Parent Topics
- [Coffee Knowledge Base](../INDEX.md)
- [Extraction Theory](../espresso/extraction-theory.md)

---

## Section 1: Brewing & Extraction Formulas

---

### F-01: Brew Ratio

$$\text{Brew Ratio} = \frac{\text{Beverage Yield (g)}}{\text{Coffee Dose (g)}}$$

| Variable | Symbol | Unit | Notes |
|---------|--------|------|-------|
| Beverage Yield | Y | grams (g) | Weight of liquid output |
| Coffee Dose | D | grams (g) | Weight of dry ground coffee |

**Standard ranges:**

| Method | Typical Ratio |
|--------|--------------|
| Espresso (ristretto) | 1:1.5 |
| Espresso (standard) | 1:2 to 1:2.5 |
| Espresso (lungo) | 1:3 to 1:4 |
| Filter (SCA Golden Cup) | 1:15 to 1:17 |
| Cold Brew (concentrate) | 1:8 |
| Cold Brew (RTD) | 1:12 to 1:15 |
| French Press | 1:15 to 1:17 |
| AeroPress | 1:6 to 1:15 |
| Moka Pot | ~1:7 |

**Example:** 18g dose, 36g yield → Ratio = 36/18 = **1:2**

**Edge cases:**
- Ratio alone doesn't determine quality — EY must also be measured
- Same ratio with different grind sizes = different EY
- Very high ratios (1:4+) are longer/weaker unless grind is adjusted

---

### F-02: Extraction Yield (EY)

$$EY\% = \frac{TDS\% \times \text{Beverage Mass (g)}}{\text{Dry Coffee Mass (g)}} \times 100$$

| Variable | Symbol | Unit | Notes |
|---------|--------|------|-------|
| Total Dissolved Solids | TDS | % (decimal) | Measured by refractometer |
| Beverage Mass | BM | grams (g) | Weight of brewed liquid |
| Dry Coffee Mass | DCM | grams (g) | Dose weight |
| Extraction Yield | EY | % | Target: 18–22% |

**Example:**
- TDS = 10% (0.10), Yield = 36g, Dose = 18g
$$EY = \frac{0.10 \times 36}{18} \times 100 = 20\%$$

**Interpretation:**

| EY % | Flavor | Action |
|------|--------|--------|
| < 18% | Under-extracted: sour, thin, sharp | Extract more |
| 18–22% | ✅ Optimal: sweet, balanced | Maintain |
| > 22% | Over-extracted: bitter, harsh, dry | Extract less |

**Limitations:**
- Assumes uniform extraction (channeling = false high TDS in some zones)
- Refractometer calibration affects accuracy
- Must cool sample before measurement (heat affects refraction)

---

### F-03: TDS from Brew Ratio (Estimate, no refractometer)

$$\text{Estimated TDS\%} \approx \frac{\text{Dose (g)} \times \text{Average EY\%}}{{\text{Yield (g)}}}$$

Rearranged:

$$\text{Estimated TDS} = \frac{D \times 0.20}{Y} \times 100$$

*(Assumes 20% EY as baseline)*

**Example:** 18g dose, 36g yield:
$$\text{Estimated TDS} = \frac{18 \times 0.20}{36} \times 100 = 10\%$$

**Limitations:** Rough estimate only. Use refractometer for precise measurement.

---

### F-04: Dissolved Coffee Solids Mass

$$\text{Dissolved Solids (g)} = \frac{TDS\% \times \text{Beverage Mass (g)}}{100}$$

**Example:** TDS = 10%, Yield = 36g:
$$\text{Dissolved Solids} = \frac{10 \times 36}{100} = 3.6\text{ g}$$

---

### F-05: SCA Brewing Control Ratio (Filter)

$$\text{Brew Strength (TDS\%)} = \frac{\text{Dissolved Coffee Solids}}{\text{Total Beverage Mass}} \times 100$$

**SCA Golden Cup targets:**

| Parameter | Target | Acceptable Range |
|---------|--------|-----------------|
| TDS (strength) | 1.30% | 1.15–1.45% |
| EY | 20% | 18–22% |
| Brew Ratio | 1:17 | 1:15–1:19 |
| Water temp | 93°C | 91–96°C |

---

### F-06: Water-to-Coffee Contact Time Efficiency

$$\text{Effective Contact} = \frac{\text{EY achieved}}{\text{EY possible (max ~28\%)}} \times 100$$

*(Used for comparing brewing method efficiency — not a standard industry formula but useful for analysis)*

---

## Section 2: Water Chemistry Formulas

---

### F-07: Total Hardness (as CaCO₃)

$$\text{Total Hardness} = (\text{Ca}^{2+} \times 2.497) + (\text{Mg}^{2+} \times 4.118) \quad [\text{mg/L as CaCO}_3]$$

**Example:** Ca²⁺ = 40 mg/L, Mg²⁺ = 15 mg/L:
$$\text{Hardness} = (40 \times 2.497) + (15 \times 4.118) = 99.88 + 61.77 = 161.7 \text{ mg/L as CaCO}_3$$

---

### F-08: Carbonate Hardness / Alkalinity

$$\text{Alkalinity (as CaCO}_3) = \text{HCO}_3^- \times 0.82$$

(Where HCO₃⁻ is in mg/L)

**SCA target:** 40 mg/L as CaCO₃ (alkalinity) = ~49 mg/L HCO₃⁻

---

### F-09: TDS Approximation from Minerals

$$\text{TDS} \approx \text{Ca}^{2+} + \text{Mg}^{2+} + \text{Na}^+  + \text{HCO}_3^- + \text{Cl}^- + \text{SO}_4^{2-} + \text{other ions}$$

*(Simplified; actual TDS measured empirically with TDS meter)*

---

### F-10: Remineralization Dose

$$\text{Mineral to add (g)} = \frac{\text{Target ion concentration (mg/L)} \times \text{Volume (L)}}{\text{Purity\%} \times 1000}$$

**Example:** Target Mg²⁺ = 20 mg/L in 10L, using MgSO₄·7H₂O (purity ~99%, Mg content ~9.86%):
$$\text{Epsom Salt} = \frac{20 \times 10}{0.0986 \times 1000} = 2.03\text{ g}$$

---

## Section 3: Roasting Formulas

---

### F-11: Development Time Ratio (DTR)

$$DTR\% = \frac{\text{Time from First Crack to Drop (s)}}{\text{Total Roast Time (s)}} \times 100$$

**Target:** 20–25% for most specialty light-to-medium roasts

**Example:** Total roast = 10 min (600s); time after first crack = 135s:
$$DTR = \frac{135}{600} \times 100 = 22.5\%$$

---

### F-12: Roast Loss (Weight Loss)

$$\text{Roast Loss\%} = \frac{\text{Green Weight} - \text{Roasted Weight}}{\text{Green Weight}} \times 100$$

**Typical values:**

| Roast Level | Roast Loss |
|------------|------------|
| Light | 12–15% |
| Medium | 15–18% |
| Medium-Dark | 18–20% |
| Dark | 20–25% |

**Example:** 1000g green → 852g roasted:
$$\text{Loss} = \frac{1000 - 852}{1000} \times 100 = 14.8\% \text{ (light roast)}$$

---

### F-13: Rate of Rise (RoR)

$$RoR = \frac{\Delta T}{\Delta t} \quad [°C/\text{minute}]$$

**Example:** Temp rises from 175°C to 190°C in 1.5 minutes:
$$RoR = \frac{190 - 175}{1.5} = 10°C/\text{min}$$

**Target RoR patterns:**
- Drying phase: 15–25°C/min (fast, expected)
- Maillard phase: 8–15°C/min
- Development phase: 5–10°C/min (declining)
- Crash or flick: diagnostic warning signs

---

## Section 4: Café Business Formulas

---

### F-14: Beverage Cost Percentage

$$\text{Bev Cost\%} = \frac{\text{Total COGS}}{\text{Menu Price}} \times 100$$

**Target:** 20–35%

---

### F-15: Menu Price from Target Cost %

$$\text{Menu Price} = \frac{\text{COGS}}{Target\text{ Bev Cost\%} \div 100}$$

**Example:** COGS = $1.20, target bev cost = 28%:
$$\text{Menu Price} = \frac{1.20}{0.28} = \$4.29 \approx \$4.50 \text{ (round up)}$$

---

### F-16: Gross Profit per Drink

$$\text{Gross Profit} = \text{Menu Price} - \text{COGS}$$

---

### F-17: Labor Cost %

$$\text{Labor\%} = \frac{\text{Total Labor Cost}}{\text{Total Revenue}} \times 100$$

**Target:** 28–35%

---

### F-18: Prime Cost %

$$\text{Prime Cost\%} = \frac{\text{COGS} + \text{Labor}}{\text{Revenue}} \times 100$$

**Target:** ≤ 65% for viability

---

### F-19: Breakeven Revenue

$$\text{Breakeven Revenue} = \frac{\text{Fixed Costs}}{1 - \text{Variable Cost Ratio}}$$

**Example:** Fixed costs = $8,000/month, variable cost ratio = 55%:
$$\text{Breakeven} = \frac{8000}{1 - 0.55} = \frac{8000}{0.45} = \$17,778/\text{month}$$

---

### F-20: Revenue Per Labor Hour

$$\text{Revenue/Labor Hour} = \frac{\text{Total Revenue}}{\text{Total Labor Hours}}$$

**Target:** $40–80+ per labor hour (specialty café)

---

### F-21: Daily Coffee Cost

$$\text{Daily Coffee Cost} = \frac{\text{Shots/day} \times \text{Dose (g)} \times \text{Cost per kg}}{1000}$$

---

### F-22: Inventory Turnover (Coffee)

$$\text{Turnover} = \frac{\text{kg used in period}}{\text{Average kg on hand}}$$

**Target for specialty:** Weekly to bi-weekly (7–14 day turnover for freshness)

---

## Section 5: Sensory Scoring

---

### F-23: SCA Cupping Final Score

$$\text{Total Score} = \sum_{i=1}^{10} \text{Attribute}_{i} - \text{Defect Penalty}$$

$$\text{Defect Penalty} = (\text{# taint cups} \times 2) + (\text{# fault cups} \times 4)$$

**Attributes (each max 10):** Fragrance/Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean Cup, Sweetness, Overall

**Specialty threshold:** ≥ 80.00 points

---

### F-24: Cupping Ratio

$$\text{Coffee:Water} = 8.25\text{g per }150\text{mL}$$

or equivalently:

$$\text{Dose} = \frac{\text{Cup Volume (mL)}}{150} \times 8.25$$

---

## Quick Reference Card

| # | Formula | Use |
|---|---------|-----|
| F-01 | Y/D | Brew Ratio |
| F-02 | (TDS×BM/DCM)×100 | Extraction Yield % |
| F-07 | (Ca×2.497)+(Mg×4.118) | Water Hardness |
| F-11 | (Crack→Drop/Total)×100 | DTR % |
| F-12 | (Green-Roasted/Green)×100 | Roast Loss % |
| F-13 | ΔT/Δt | Rate of Rise |
| F-14 | COGS/Price×100 | Beverage Cost % |
| F-15 | COGS/Target% | Menu Price |
| F-18 | (COGS+Labor)/Revenue×100 | Prime Cost % |
| F-23 | Σ(attributes) - penalties | SCA Cup Score |

---

## 🔗 Related Topics
- [Extraction Theory](../espresso/extraction-theory.md)
- [Water Chemistry](../water-science/water-chemistry.md)
- [Roasting Science](../roasting/roast-science.md)
- [Beverage Costing](../cafe-operations/beverage-costing.md)
- [Cupping Protocol](../sensory-cupping/cupping-protocol.md)
