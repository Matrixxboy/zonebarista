---
title: Roast Color, Agtron & Visual Analysis
category: Roasting Science
subcategory: Color Analysis
difficulty: Intermediate
tags: [roast-color, Agtron, colorimeter, Maillard, caramelization, brown-color, light-roast, dark-roast, SCA-tiles]
summary: Complete guide to roast color analysis — Agtron scale, SCA color tiles, colorimeter use, ground vs whole bean measurement, color-to-cup mapping, and visual roast assessment techniques.
sources:
  - "Agtron — application notes and calibration documentation"
  - "SCA Roast Color Classification System"
  - "Illy, A. & Viani, R. (2005). Espresso Coffee: The Science of Quality."
  - "Schenker, S. (2000). Investigations on hot air roasting. ETH Zurich."
created_at: 2025-01-01
scientific_accuracy_score: 10/10
verification_status: verified
related_topics: [roast-science, roast-curves-profiles, roastery-operations, coffee-lab-tools]
reading_time: 10 min
---

# Roast Color, Agtron & Visual Analysis

## 📍 Parent Topics
- [Roasting Science](../INDEX.md)
- [Roast Science](roast-science.md)

---

## Why Roast Color Matters

Roast color is the most accessible **proxy for roast development** — it correlates with:
- **Maillard reaction extent** (browning = more Maillard products)
- **Sugar caramelisation level**
- **Acid degradation** (darker = fewer acids)
- **Volatile aroma development**
- **Caffeine content** (relatively stable; slightly less in very dark)
- **Cup character** (origin vs roast flavour dominance)

While roast color is imperfect (same color ≠ same profile), it is the fastest and most repeatable quality checkpoint in roasting.

---

## The Agtron Scale

### Scale Fundamentals

The **Agtron Scale** was developed by Carl Staub (Agtron Inc.) and adopted by the SCA as the industry standard for roast color measurement:

| Scale | Range | Principle |
|-------|-------|-----------|
| **Agtron number** | 0–100 | Higher = lighter; Lower = darker |
| **Measurement method** | Near-infrared spectrophotometry | Measures light reflectance |
| **Physical standard** | SCA 8-tile set | Visual calibration reference |

### Complete Agtron Reference Table

| Agtron Score | SCA Roast Level | Visual | Drop Temp (°C) | Cup Character |
|-------------|----------------|--------|----------------|---------------|
| **95–100** | Very Light | Blue-green tinge; raw | ~190–195 | Grassy, raw, papery; not drinkable |
| **85–94** | Light | Pale tan | ~195–200 | Very bright; floral; high acidity; thin |
| **75–84** | Light | Tan | ~200–207 | Specialty light; floral; fruit forward |
| **65–74** | Medium-Light | Light brown | ~207–212 | Balance beginning; caramel; origin clear |
| **55–64** | Medium | Medium brown | ~212–218 | Classic balance; caramel; chocolate; mild acidity |
| **45–54** | Medium-Dark | Darker brown | ~218–224 | Bittersweet; lower acidity; full body |
| **25–44** | Dark | Dark brown; slight oil | ~224–235 | Roast character dominant; smoky; bold |
| **0–24** | Very Dark | Black; oily | ~235+ | Charred; bitter; carbon notes; origin gone |

---

## Ground vs Whole Bean Measurement

**Critical distinction:** Agtron measurements differ significantly between whole bean and ground coffee:

| Measurement Type | What It Shows | Typical Difference |
|-----------------|---------------|-------------------|
| **Whole bean** | Surface roast development (exterior) | Higher number (lighter reading) |
| **Ground coffee** | Average of exterior + interior | ~20–30 points lower than whole bean |

### Why They Differ

During roasting, the bean exterior develops faster than the interior:

```
Cross-section view at drop:
                    ┌─────────────────────┐
Exterior (darker) → │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Whole bean Agtron reads this
                    │▓▓░░░░░░░░░░░░░░░░▓▓│
Interior (lighter)→ │▓░░░░░░░░░░░░░░░░░▓▓│ ← Grinding reveals this
                    │▓▓░░░░░░░░░░░░░░░░▓▓│
                    │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
                    └─────────────────────┘
Ground Agtron = average of exterior + interior = much lower number
```

**Professional standard:** Always measure **both** and report both values with the Agtron score.

---

## SCA Color Tiles — Physical Reference

The SCA developed **8 physical tile standards** for visual calibration:

| Tile | Agtron Equivalent | Use |
|------|------------------|-----|
| Tile #25 | 25 | Very dark / Italian roast reference |
| Tile #35 | 35 | Dark roast |
| Tile #45 | 45 | Medium-dark |
| Tile #55 | 55 | Medium |
| Tile #65 | 65 | Medium-light |
| Tile #75 | 75 | Light |
| Tile #85 | 85 | Very light |
| Tile #95 | 95 | Extra light / nearly raw |

**How to use:**
1. Cool roasted coffee to room temperature (minimum 20 min)
2. Place whole beans next to physical tiles under consistent lighting
3. Match to nearest tile; interpolate between tiles for fine reading
4. For ground: grind at medium setting; compare ground colour to tiles

---

## Alternative Colorimeters

### Tonino Coffee Roast Analyser

- Handheld; portable
- Measures ground coffee only
- Output: Tonino units (calibrated against Agtron scale)
- Price: ~$500
- Best for: Small roasteries; field use; reliable portable option

### ColorTrack (Nix Mini + Coffee App)

- Smartphone + colour sensor clip
- Outputs Agtron-equivalent reading
- Price: ~$150
- Best for: Home roasters; budget professional; research

### Cropster Roast Eye

- USB colorimeter designed for café and roastery
- Integrated with Cropster software
- Price: ~$400
- Best for: Roasteries already using Cropster

### DiFluid Omni (Integrated System)

- Combined TDS refractometer + colorimeter
- App integration; data logging
- Price: ~$350
- Best for: Extraction-focused cafés and roasters wanting integrated data

---

## Roast Color Measurement SOP

```
STANDARD ROAST COLOR MEASUREMENT PROTOCOL

WHOLE BEAN:
1. Allow batch to cool completely (room temp, 20+ min minimum)
2. Select 30–50 representative beans from the batch
3. Place in Agtron sample cup or spread on white tile
4. Scan or visually compare to SCA tiles
5. Record whole bean Agtron number
6. Time stamp: batch ID + roast date

GROUND:
1. From same cooled batch, grind 20g at medium-fine setting
2. Allow 2 min for CO₂ to dissipate
3. Fill sample cup; level with spatula; do not compress
4. Scan or visually compare
5. Record ground Agtron number
6. Discard grounds after measurement

LOGGING FORMAT:
  Date: _____ Batch: _____ Coffee: _____
  Whole bean Agtron: _____
  Ground Agtron: _____
  Roast loss %: _____  DTR%: _____
  Notes: _____
```

---

## Color → Cup Correlation Guide

### For Single-Origin Specialty

| Agtron (Ground) | Best For | Cup Character |
|----------------|---------|---------------|
| 80–90 | Very light; experimental | Grassy risk; floral; high acidity if well-developed |
| 70–80 | Light specialty | Floral; fruit; bright; origin-forward; specialty sweet spot |
| 60–70 | Medium-light specialty | Balance of origin + roast; caramel; fruit preserved |
| 50–60 | Medium specialty/espresso | Caramel; chocolate; mild fruit; great all-rounder |
| 40–50 | Medium-dark espresso | Bittersweet chocolate; low acidity; full body |
| 25–40 | Dark roast | Roast-dominant; smoky; origin masked |

### For Espresso (considering milk)

Milk drinks require bolder extraction to cut through milk. Typical espresso blend roast:
- **Ground Agtron 55–70** = most specialty espresso
- **Ground Agtron 45–55** = Italian/traditional style
- **> 70** = very light espresso (Nordic style; espresso-on-ice; turbo shots)

---

## Visual Roast Assessment (No Equipment)

When equipment isn't available, assess visually:

### Surface Appearance

| Surface | Roast Level |
|---------|-------------|
| Dry, matt, no oil | Light to medium |
| Slightly shiny edges | Medium-dark |
| Uniform oil sheen | Dark |
| Heavy oil coating | Very dark / French |

### Break Analysis (Cut Bean Test)

Cut a bean in half with a sharp knife:
```
Interior colour relative to exterior:

1 shade lighter  = Well-developed light roast (ideal for specialty)
2 shades lighter = Underdeveloped — needs more development time
Same colour      = Fully developed (medium-dark)
Darker interior  = Impossible; but very uniform = very dark roast
```

---

## Roast Color Over Time (Staling Indicator)

Roast color is relatively stable post-roast, but **surface appearance** changes:
- Fresh roasted (days 1–7): Surface matt; bright colour; CO₂ visible
- Optimal (days 7–30): Stable colour; no new oil development
- Staling (days 30–60): Slight surface dulling; oils may appear on previously dry beans
- Old (60+ days): Significant oil migration; surface change

**Agtron number itself** does not change significantly post-roast (within normal timeframe). Colour change as described above is primarily a surface oil migration phenomenon, not continued browning.

---

## 🔗 Related Topics
- [Roast Science](roast-science.md)
- [Roast Curves & Profiles](roast-curves-profiles.md)
- [Roastery Operations](roastery-operations.md)
- [Coffee Lab Tools](../equipment/coffee-lab-tools.md)
- [Formula Library](../formulas/formula-library.md)
