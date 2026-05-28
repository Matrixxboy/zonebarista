---
title: Roast Defects, Roast Profiles & Roast Logging
category: Roasting Science
subcategory: Defects & Profiles
difficulty: Advanced
tags: [roast-defects, roast-profile, roast-log, scorching, baked, underdeveloped, Cropster, Artisan]
summary: Complete guide to roast defects (causes, detection, prevention), profile types, and roast logging systems.
sources:
  - "Rao, S. (2014). The Coffee Roaster's Companion."
  - "Cropster — Roast profile documentation"
  - "SCA Roasting Skills curriculum"
  - "Baggenstoss, J. (2008). Coffee roasting and freshness. JAFC."
created_at: 2025-01-01
scientific_accuracy_score: 9/10
verification_status: verified
related_topics: [roasting-science, species-overview, sensory-cupping, extraction-theory]
reading_time: 14 min
---

# Roast Defects, Roast Profiles & Roast Logging

## 📍 Parent Topics
- [Roasting Science](roast-science.md)
- [Coffee Knowledge Base](../INDEX.md)

---

## Roast Defect Reference Table

| Defect | Visual Sign | Cause | Cup Impact | Prevention |
|--------|------------|-------|-----------|-----------|
| **Scorching** | Dark burn spots on bean face | Charge temp too high; drum contact at high heat | Acrid, char, bitter, harsh | Lower charge temp; check drum speed |
| **Tipping** | Darkened/burnt bean tips | High airflow at high temp; fast early development | Dry, papery, harsh | Reduce airflow in early phase |
| **Baked** | Pale, dull surface; poor color development | Flat or stalling RoR; too long roast | Flat, cardboard, hollow, lifeless | Maintain declining-but-active RoR |
| **Underdeveloped** | Light outside; greener inside (cut bean test) | Too fast through Maillard; short total time | Grassy, astringent, papery, sour |Extend roast time; lower charge temp |
| **Quakers** | Pale blond beans in roasted batch | Unripe green coffee beans | Peanut, bland spots in cup | Better green coffee sourcing; hand-sort |
| **Face cracking** | Excessive surface cracking | High bean moisture + fast roast | Irregular extraction surface | Slow drying phase; check green moisture |
| **Spongy texture** | Bean feels soft, spongy | Excessive moisture + slow roast | Over-extracted easily; inconsistent | Correct drying phase RoR |

---

## The Baked Defect — Deep Dive

**Most common defect in specialty roasting.** Caused by insufficient Rate of Rise (RoR) in the development phase — the roast proceeds but flavor development stalls.

**Diagnosis:**
- Cup: Flat, dull, no complexity
- Not bitter, not sour — just *nothing*
- Aroma: Weak despite roast level
- Color may look normal; defect is internal

**Root causes:**
1. Too small a charge weight (insufficient thermal mass)
2. Too much airflow cooling the drum during development
3. Heat input reduced too aggressively before crack
4. Prolonged plateau in RoR (RoR crashes to near-zero)

**Fix:**
- Ensure declining but consistently positive RoR through development
- Target: RoR at 5–8°C/min through development phase
- Shorten total roast time if possible; heat more aggressively in Maillard phase

---

## Roast Profile Types

### 1. Fast Roast (8–10 min total)

```
Temp │        ●●●● First Crack ─● ●Drop
     │     ●●●
     │   ●●
     │ ●●  Maillard (compressed)
     │●
     └──────────────────────
       0   2   4   6   8  min
```

**Characteristics:**
- More caramelization per unit time
- Brighter, more acidic flavor preserved
- Less roasty notes
- Risk: uneven interior/exterior if too fast
- Best for: light roast specialty (Scandinavian style)

---

### 2. Medium Roast (10–12 min total)

```
Temp │           ●●● First Crack ──●Drop
     │        ●●●
     │      ●●
     │   ●●●  Good Maillard zone
     │ ●●
     │●
     └──────────────────────────
       0   2   4   6   8  10  min
```

**Characteristics:**
- Classic balance
- Origin character + roast sweetness both present
- Target for most specialty espresso
- DTR 20–25%

---

### 3. Development-Forward (Longer Post-Crack)

```
Temp │                ●● First Crack
     │                  ●●●●●●●●●● Extended → ●Drop
     │         ●●●
     │     ●●●
     │  ●●
     │●
     └──────────────────────────────
       0   2   4   6   8  10  12  min
```

**Characteristics:**
- Higher DTR (25–30%)
- More body, sweetness
- Less bright acidity
- Better for darker roasts / espresso blends

---

### 4. Charge Temperature Comparison

| Charge Temp | Effect |
|------------|--------|
| High (220°C+) | Fast drying; risk of scorching; more Maillard intensity |
| Medium (200–210°C) | Standard; predictable drying |
| Low (180–190°C) | Slower start; longer roast; risk of baking if RoR not managed |

**Rule:** Charge temp should be matched to batch size. Larger batches → higher charge temp to compensate thermal mass.

---

## Roast Logging

### Key Data Points to Log Per Roast

| Parameter | Frequency | Tool |
|---------|-----------|------|
| Bean temperature (BT) | Every 30s | Probe + data logger |
| Rate of Rise (RoR) | Every 30s (calculated) | Cropster/Artisan software |
| Inlet air temperature | Continuous | Machine sensor |
| Drum speed (if variable) | Log changes | Manual note |
| Gas/heat setting | Log changes | Manual note |
| Airflow setting | Log changes | Manual note |
| Time to yellowing | Once | Visual/verbal |
| Time to first crack onset | Once | Audible + log |
| Time to first crack full | Once | Audible + log |
| Drop time | Once | Timer |
| Drop temperature | Once | Digital probe |
| DTR% | Post-roast calculation | Formula F-11 |
| Roast loss % | Post-roast | Scale |
| Color (Agtron) | After cooling | Agtron/colorimeter |
| Cup notes | After rest | Cupping |

---

## Roast Software Overview

| Software | Type | Best For |
|---------|------|---------|
| **Cropster** | Cloud-based, professional | Commercial roasteries; team sharing |
| **Artisan** | Free, open-source | Home/small roasters; all roaster types |
| **Roastr One** | Bullet R1 native | Bullet R1 users |
| **Ikawa Pro** | Ikawa sample roaster | Sample roasting, R&D |
| **Mill City Roaster app** | Mill City machines | Mill City users |

---

## Green Coffee Defect Classification

Primary defects (SCA Grade 1 = zero primary defects allowed):

| Defect | Visual | Cup Impact |
|--------|--------|-----------|
| **Full black bean** | Entirely black | Severe: sour, rotten, phenolic |
| **Full sour bean** | Brown, vinegar smell | Severe: fermented, vinegar |
| **Dried cherry/pod** | Whole dried cherry | Severe: fermented |
| **Fungus damage** | Mold growth | Severe: moldy, musty |
| **Foreign material** | Rocks, sticks, shells | Physical contamination |
| **Severe insect damage** | >1/3 bean damaged | Fermented, sour |

Secondary defects (max 5 for Grade 1):

| Defect | Visual |
|--------|--------|
| Partial black | Part of bean black |
| Partial sour | Part of bean brown |
| Floater | Light, wrinkled, floats in water |
| Immature/unripe | Pale, silverskin attached |
| Withered | Thin, irregular |
| Shell | Elephant ear shape (genetic) |
| Broken/chipped | Physical damage |
| Slight insect damage | Small holes |

---

## 🔗 Related Topics
- [Roasting Science](roast-science.md)
- [Species Overview](../beans/species-overview.md)
- [Sensory & Cupping](../sensory-cupping/cupping-protocol.md)
- [Formula Library](../formulas/formula-library.md)
