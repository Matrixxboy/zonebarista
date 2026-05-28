---
title: Roast Curves, Profiles & Development Reference
category: Roasting Science
subcategory: Profiles & Analysis
difficulty: Advanced
tags: [roast-curves, roast-profiles, DTR, RoR, Cropster, Artisan, turning-point, first-crack, development, charge-temp]
summary: Complete roast curve reference — profile architecture, key turning points, RoR management, DTR targets, profile comparison by roast level, and software tools.
sources:
  - "Rao, S. (2014). The Coffee Roaster's Companion."
  - "Cropster — roasting analytics documentation"
  - "Baggenstoss, J. et al. (2008). Coffee roasting and freshness. JAFC."
  - "Schenker, S. (2000). Investigations on hot air roasting. ETH Zurich."
created_at: 2025-01-01
scientific_accuracy_score: 10/10
verification_status: verified
related_topics: [roasting-science, roast-defects, sensory-cupping, extraction-theory]
reading_time: 16 min
---

# Roast Curves, Profiles & Development Reference

## 📍 Parent Topics
- [Roasting Science](roast-science.md)
- [Roast Defects](roast-defects.md)

---

## Anatomy of a Roast Curve

A roast curve plots **bean temperature** (and often inlet air temperature) vs **time**. Understanding its shape is the roaster's primary diagnostic tool.

```
Temperature (°C)
│
230│                              ●● Second Crack (224–230°C)
225│                           ●●
220│                        ●●   ← Drop point (medium-dark)
215│                     ●●
210│                  ●●         ← Drop point (medium)
205│               ●●●● First Crack (196–205°C)
200│             ●●
195│           ●●
190│         ●●
185│       ●●  Maillard Phase
180│     ●●
175│   ●●
170│ ●●
165│●
160│● ← Turning Point (when bean temp stops falling)
 90│● ← Charge temperature (hot drum)
   └───────────────────────────────────────────
   0   1   2   3   4   5   6   7   8   9  10 min
```

---

## Key Turning Points

### 1. Charge Temperature

The temperature of the drum when beans are loaded:

| Charge Temp | Effect |
|------------|--------|
| High (220–240°C) | Fast drying; risk of scorching surface; more Maillard intensity |
| Medium (200–210°C) | Standard; predictable drying phase |
| Low (180–195°C) | Slower start; longer roast time; risk of baking if mismanaged |

**Rule:** Charge temp should be matched to batch size and bean density. Dense, high-altitude beans → higher charge temp to penetrate efficiently.

---

### 2. Turning Point (TP)

The moment when bean temperature stops falling (from cooling effect of cold beans entering hot drum) and begins rising:

| TP Timing | Interpretation |
|-----------|---------------|
| Very fast TP (< 1 min) | Charge temp too high; risk of scorching |
| Standard TP (60–90s) | Normal |
| Slow TP (> 2 min) | Under-charged; drum too cold; extend drying phase carefully |

---

### 3. Yellow Point (~160°C)

Bean colour transitions from green to yellow — **Maillard reaction begins**.

- Record the time of yellowing
- Consistency here = consistency in aroma development
- Very early yellowing = too-high charge or fast heat

---

### 4. First Crack Onset / Full First Crack

| Marker | Detail |
|--------|--------|
| **FC Onset** | First audible pop/crack sound |
| **FC Full** | Rapid, consistent cracking — bean structure fully rupturing |
| **Temperature** | 196–205°C (varies by origin, density, roast machine) |
| **Duration** | 30–90s (characteristic per bean/roaster) |

The roaster **must listen and log** both FC onset and FC full:
- Time from FC onset to drop = development time
- Temperature at FC = calibration marker between batches

---

### 5. Development Phase

Post-first crack until drop:

$$DTR\% = \frac{t_{drop} - t_{FC\text{ onset}}}{t_{total}} \times 100$$

| DTR % | Typical Result |
|-------|---------------|
| < 15% | Underdeveloped — grassy, astringent, papery |
| 18–22% | Light roast specialty sweet spot |
| 20–25% | Medium roast target |
| 25–30% | Medium-dark; more body; less brightness |
| > 30% | Risk of over-development/baking |

---

## Rate of Rise (RoR) Management

RoR is the **derivative of the temperature curve** — how fast temperature is rising per unit time:

$$RoR = \frac{\Delta T_{bean}}{\Delta t} \quad [°C/\text{min}]$$

### Ideal RoR Curve Shape

```
RoR (°C/min)
│
25│●● ← Drying phase (fast rise normal)
20│  ●●
15│    ●●
12│      ●● Maillard (steady decline)
10│        ●●
 8│          ●● ← FC onset zone
 6│            ●● Development (low but positive)
 4│              ●●
 2│                ●● (minimum; avoid crash to zero)
   └────────────────────────────────────────
   0   2   4   6   8  10 min
```

### RoR Problem Patterns

| Pattern | Name | Effect |
|---------|------|--------|
| RoR rises approaching FC | "RoR flick" | Harsh, rough aftertaste; unclean cup |
| RoR crashes to near-zero | "Stall" | Baked, hollow, lifeless cup |
| Flat RoR throughout | "Flat profile" | Baked; no sweetness development |
| Steep decline, then sharp rise | "Crash and flick" | Combined defects — worst outcome |
| Smooth, continuous decline | ✅ Ideal | Clean, sweet, well-developed |

---

## Profile Templates by Roast Level

### Profile A: Specialty Light Roast (9–11 min)

```
Charge: 205°C
TP: 75s
Yellow: 5:00 (300s)
FC onset: 8:00
FC full: 8:30
Drop: 9:30 (90s post-crack)
Drop temp: ~200–205°C
DTR: 90s / 570s = 15.8%
Agtron: ~78–85
```

**Cup result:** Floral, fruity, bright acidity; origin character dominant; tea-like body

---

### Profile B: Specialty Medium-Light Roast (10–12 min)

```
Charge: 200°C
TP: 80s
Yellow: 5:30
FC onset: 8:30
FC full: 9:00
Drop: 10:30 (120s post-crack)
Drop temp: ~207–210°C
DTR: 120s / 630s = 19%
Agtron: ~68–76
```

**Cup result:** Balance of origin + roast; caramel, fruit, bright but not sharp; excellent for espresso and filter

---

### Profile C: Medium Roast (11–13 min)

```
Charge: 195°C
TP: 85s
Yellow: 5:45
FC onset: 8:45
FC full: 9:15
Drop: 11:00 (135s post-crack)
Drop temp: ~210–215°C
DTR: 135s / 660s = 20.5%
Agtron: ~58–66
```

**Cup result:** Classic balance; caramel, chocolate, mild fruit; crowd-pleasing espresso

---

### Profile D: Medium-Dark Roast (12–14 min)

```
Charge: 190°C
TP: 90s
Yellow: 6:00
FC onset: 9:15
FC full: 9:45
Drop: 12:30 (165s post-crack) — just before or at 2nd crack signs
Drop temp: ~220–225°C
DTR: 165s / 750s = 22%
Agtron: ~48–56
```

**Cup result:** Bittersweet chocolate, reduced acidity, heavy body; classic espresso blend base

---

## Drum vs Fluid-Bed Profiles

### Drum Roaster (Most Common)

```
Heat transfer: Conduction (bean-drum contact) + Convection (airflow)
Control: Gas pressure (heat), drum RPM (conduction:convection ratio), airflow (convection)
RoR behaviour: Slower to respond to changes (thermal lag)
Best profiles: Medium-long development; good sweetness
Examples: Probat, Giesen, Loring (hybrid), Mill City
```

### Fluid-Bed Roaster

```
Heat transfer: Convection only (hot air suspends and roasts beans)
Control: Air temperature, airflow volume
RoR behaviour: Faster response; more precise
Profile character: Cleaner, brighter; less body than drum at same development
Examples: Sivetz, Huky, Bullet R1, Ikawa (sample)
```

### Hybrid Roasters

```
Loring Smart Roast: Recirculating hot air; very consistent; clean
Stronghold S7 Pro: Infrared + convection; precise profile control
Artisan: Software for any machine type
```

---

## Logging Standards — What to Record Every Roast

### Minimum Required Data

| Parameter | Unit | When |
|---------|------|------|
| Green coffee name | — | Before |
| Green weight | g | Before |
| Moisture % | % | Before (if meter available) |
| Charge temperature | °C | At charge |
| Turning point temp + time | °C / min:s | During |
| Yellow point time | min:s | During |
| FC onset temp + time | °C / min:s | During |
| FC full time | min:s | During |
| Drop temp + time | °C / min:s | At drop |
| Roasted weight | g | After |
| Roast loss % | % | After (calculate) |
| DTR% | % | After (calculate) |
| Agtron / color | score | After resting |
| Cup notes (after rest) | text | 3–7 days later |

---

## Cropster Profile Reading Guide

Key overlays available in Cropster (and Artisan):

| Overlay | Reading |
|---------|---------|
| **BT curve** (Bean Temp) | Primary roast curve — must be smooth |
| **ET curve** (Environmental/Inlet) | Air temp entering drum — leads BT |
| **RoR line** | Derivative of BT — must decline smoothly |
| **Gas/heat input** | Correlation with RoR response |
| **Airflow** | Affects convective heat transfer |
| **Reference profile** | Overlay previous successful roast for comparison |

**Colour coding (Cropster):**
- Blue line: Bean temperature
- Red line: Inlet air temperature
- Green line: RoR
- Vertical lines: FC onset, FC full, drop

---

## Post-Roast Analysis

### Rest Period Before Cupping

| Roast Level | Minimum Rest | Optimal Cup Evaluation |
|------------|-------------|----------------------|
| Light | 24 hours | 5–7 days |
| Medium | 24 hours | 3–5 days |
| Medium-Dark | 12 hours | 2–4 days |
| Espresso (any level) | 7 days | 10–21 days |

Reason: CO₂ off-gassing distorts flavour perception. Cupping too fresh = false sourness, muted sweetness, harsh aromatics.

---

## 🔗 Related Topics
- [Roasting Science](roast-science.md)
- [Roast Defects](roast-defects.md)
- [Extraction Theory](../espresso/extraction-theory.md)
- [Sensory & Cupping](../sensory-cupping/cupping-protocol.md)
- [Formula Library](../formulas/formula-library.md)
