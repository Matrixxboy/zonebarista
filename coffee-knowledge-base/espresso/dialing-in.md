---
title: Dialing In Espresso — Systematic Protocol
category: Espresso Science
subcategory: Calibration & Workflow
difficulty: Intermediate
tags: [dialing-in, calibration, grind-adjustment, espresso, dose, yield, temperature, ratio]
summary: Step-by-step systematic dial-in protocol for espresso — variable hierarchy, decision logic, calibration sheets, and shift management.
sources:
  - "SCA Barista Skills Intermediate curriculum"
  - "Rao, S. (2014). Everything but Espresso."
  - "Barista Hustle — Dialing In Espresso"
created_at: 2025-01-01
scientific_accuracy_score: 9/10
verification_status: verified
related_topics: [extraction-theory, puck-preparation, shot-diagnosis, pressure-flow-profiling, grinders]
reading_time: 12 min
---

# Dialing In Espresso — Systematic Protocol

## 📍 Parent Topics
- [Espresso Science](../INDEX.md)
- [Extraction Theory](extraction-theory.md)
- [Puck Preparation](puck-preparation.md)

---

## What Is Dialing In?

**Dialing in** is the systematic process of adjusting espresso parameters to achieve a specific target: the right balance of extraction yield, taste, flow rate, and appearance for a given coffee, machine, and grinder combination.

Every new bag of coffee, change in humidity, roast date, or equipment service requires a fresh dial-in.

---

## Variable Hierarchy

Always adjust in this priority order — one variable at a time:

```mermaid
graph TD
    A["1. Set Brew Ratio\nDecide: dose & yield target\ne.g. 18g in → 36g out"] --> B["2. Adjust Grind Size\nPrimary control for flow rate & EY\nFiner = slower, more extraction\nCoarser = faster, less extraction"]
    B --> C["3. Adjust Dose\nSecondary — fine-tunes strength\nHigher dose = same ratio, different flavour\nDo NOT use dose to fix extraction"]
    C --> D["4. Adjust Temperature\nFine-tune flavour balance\nLight roast: higher 93–96°C\nDark roast: lower 88–92°C"]
    D --> E["5. Adjust Pressure Profile\nAdvanced — only if machine allows\nPre-infusion, declining profile etc"]
```

---

## Dial-In Decision Tree

```mermaid
flowchart TD
    START["Pull first shot at\nmid-grind setting\nRecord: time · yield · taste"] --> TASTE{"Taste\nevaluation"}

    TASTE -->|Sour / sharp / thin| UNDER[UNDER-EXTRACTED]
    TASTE -->|Bitter / harsh / dry| OVER[OVER-EXTRACTED]
    TASTE -->|Balanced sweet-acid| PERFECT["✅ DIALLED IN"]
    TASTE -->|Flat / hollow| BAKED["CHECK ROAST\nor increase dose"]

    UNDER --> U1{Check time}
    U1 -->|Shot too fast < 20s| U2[Grind finer]
    U1 -->|Shot in range 25–35s| U3["Raise temperature\n+1°C at a time"]

    OVER --> O1{Check time}
    O1 -->|Shot too slow > 40s| O2[Grind coarser]
    O1 -->|Shot in range 25–35s| O3["Lower temperature\n−1°C at a time\nor reduce yield slightly"]

    U2 --> START
    U3 --> START
    O2 --> START
    O3 --> START
    PERFECT --> DOC["Document all parameters\nGrind setting · Dose · Yield · Time · Temp"]
```

---

## Dial-In Session Protocol

### Step 1: Set Your Targets Before Pulling Shots

| Parameter | My Target | SCA Guideline |
|---------|-----------|---------------|
| Dose | ___ g | 14–22g (style-dependent) |
| Yield | ___ g | Dose × 2 for 1:2 ratio |
| Brew ratio | 1:___ | 1:2 (standard), 1:1.5 (ristretto), 1:3 (lungo) |
| Time | ___ s | 25–35s at 1:2 |
| EY target | 18–22% | Measure with refractometer |
| Taste target | Balanced, sweet, bright | No sour / no harsh bitter |

---

### Step 2: Purge Grinder

Before dialling in a new bag:
- Run 10–15g of the new coffee through the grinder and discard
- Clears old coffee from burr chamber
- Allows new coffee to coat burrs

---

### Step 3: Pull & Evaluate (Structured Shot Log)

| Shot | Grind Setting | Dose (g) | Yield (g) | Time (s) | Taste | Action |
|------|--------------|---------|---------|---------|-------|--------|
| 1 | — start — | | | | | |
| 2 | | | | | | |
| 3 | ✅ DIALLED | | | | | Document |

---

### Step 4: Confirm with 3 Consecutive Shots

Once you've found the setting, pull **3 shots in a row** without changing anything:
- All 3 should land within ±1g yield and ±2s time
- All 3 should taste consistent
- This confirms the setting is stable, not lucky

---

## Grind Adjustment Reference

| Situation | Direction | Increment |
|-----------|-----------|-----------|
| Shot too fast (< 20s) | Finer | 1 step at a time |
| Shot too slow (> 40s) | Coarser | 1 step at a time |
| Shot in range, sour | Slightly finer | Half-step |
| Shot in range, bitter | Slightly coarser | Half-step |

> ⚠️ **One variable at a time.** If you change grind AND dose AND temperature between shots, you cannot know which change fixed (or broke) anything.

---

## New Bag Protocol

Every new bag requires a **full redial** — not just minor adjustment:

```
New Bag Checklist:
□ Note: roaster, origin, process, roast date
□ Rest appropriately (espresso: 7–14 days post-roast)
□ Purge grinder (10–15g of new coffee)
□ Start grind at mid-point — not yesterday's setting
□ Pull 3+ shots; adjust systematically
□ Document final settings for this bag
□ Note expected drift (fresh beans drift finer over time as CO₂ off-gasses)
```

---

## Grind Drift During Service

Grind drift happens because burrs heat up during use → metal expands → effective gap narrows → particles get finer → shots slow:

| Time in Service | Expected Drift | Action |
|----------------|---------------|--------|
| First 30 min | Fastest drift | Recheck at 30 min |
| 30 min–2 hours | Moderate drift | Check every hour |
| 2 hours+ | Mostly stable | Check if noticeable taste change |

**Rule:** On a busy morning, dial in 30 minutes before opening, then recheck at peak service (30–45 min in).

---

## Environmental Factors Causing Drift

| Factor | Effect on Grind |
|--------|----------------|
| High humidity | Coffee absorbs moisture → swells → needs coarser grind |
| Low humidity | Coffee dries out → needs finer grind |
| Cold ambient temp | Coffee more dense → needs adjustment |
| New bag (fresh roast) | High CO₂ → coarser than expected needed |
| Old coffee (3+ weeks) | CO₂ gone → finer than fresh |

---

## Refractometer-Assisted Dial-In

For precision dial-in with a **VST refractometer**:

1. Pull shot; collect in small cup; let cool 5 min to ~25°C
2. Apply 2–3 drops to refractometer lens; read Brix value
3. Convert: `TDS% = Brix × 0.85` (VST conversion factor)
4. Calculate EY: `EY = (TDS% × Yield g) / Dose g × 100`
5. Target: EY 18–22%; TDS 8–12%

| EY Result | Interpretation | Action |
|-----------|---------------|--------|
| < 18% | Under-extracted | Finer grind or more time |
| 18–22% | ✅ Optimal | Document and maintain |
| > 22% | Over-extracted | Coarser grind or shorter time |

---

## 🔗 Related Topics
- [Shot Diagnosis](shot-diagnosis.md)
- [Puck Preparation](puck-preparation.md)
- [Extraction Theory](extraction-theory.md)
- [Pressure & Flow Profiling](pressure-flow-profiling.md)
- [Grinders](../equipment/grinders.md)
