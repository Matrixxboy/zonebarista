---
title: Beverage Costing, Menu Engineering & Café Financials
category: Café Operations
subcategory: Business & Finance
difficulty: Intermediate
tags: [beverage-costing, margin, COGS, menu-engineering, labor-cost, inventory, profitability, pricing]
summary: Complete café financial intelligence — beverage costing formulas, margin calculations, menu engineering, inventory management, labor optimization, and profitability analysis.
sources:
  - "National Restaurant Association — Restaurant operations research"
  - "Specialty Coffee Retailer — Business guides"
  - "Kalinowski, J. (2019). Coffee Shop Business Accounting. SCA Symposium."
created_at: 2025-01-01
scientific_accuracy_score: 8/10
verification_status: verified
related_topics: [workflow-sop, supply-chain, coffee-economics]
reading_time: 14 min
---

# Beverage Costing, Menu Engineering & Café Financials

## 📍 Parent Topics
- [Café Operations](../INDEX.md)
- [Coffee Economics](../coffee-fundamentals/coffee-economics.md)

---

## Core Costing Formulas

### 1. Cost Per Serving (Coffee)

$$\text{Cost per shot} = \frac{\text{Cost per kg (coffee)} \times \text{Dose (g)}}{1000}$$

**Example:**
- Coffee cost: $35/kg
- Dose: 18g
$$\text{Cost per shot} = \frac{35 \times 18}{1000} = \$0.63 \text{ per shot}$$

---

### 2. Total Beverage COGS

$$\text{Total COGS} = \text{Coffee} + \text{Milk} + \text{Cup/Lid} + \text{Syrup} + \text{Other}$$

**Example — 12oz Latte:**

| Ingredient | Quantity | Unit Cost | Item Cost |
|-----------|---------|-----------|-----------|
| Coffee (18g) | 18g | $35/kg | $0.63 |
| Whole milk (240mL) | 240mL | $1.20/L | $0.29 |
| Cup + lid | 1 set | — | $0.18 |
| Sleeve | 1 | — | $0.05 |
| **Total COGS** | | | **$1.15** |

---

### 3. Beverage Cost Percentage

$$\text{Bev Cost \%} = \frac{\text{COGS}}{\text{Menu Price}} \times 100$$

| Bev Cost % | Interpretation |
|-----------|---------------|
| < 20% | Very low (possible quality compromise or high price) |
| 20–30% | ✅ Specialty café target range |
| 30–40% | Acceptable; margins tighter |
| > 40% | Problematic — needs price or cost review |

---

### 4. Gross Margin (Per Drink)

$$\text{Gross Margin \%} = \frac{\text{Menu Price} - \text{COGS}}{\text{Menu Price}} \times 100$$

**Example:** $5.00 latte, $1.15 COGS:
$$\text{Gross Margin} = \frac{5.00 - 1.15}{5.00} \times 100 = 77\%$$

---

### 5. Menu Price from Target Margin

$$\text{Menu Price} = \frac{\text{COGS}}{1 - \text{Target Margin (decimal)}}$$

**Example:** $1.15 COGS, 75% target margin:
$$\text{Price} = \frac{1.15}{1 - 0.75} = \frac{1.15}{0.25} = \$4.60$$

---

### 6. Labor Cost Percentage

$$\text{Labor Cost \%} = \frac{\text{Total Labor Cost (period)}}{\text{Total Revenue (period)}} \times 100$$

| Labor % | Assessment |
|---------|-----------|
| < 25% | Very lean — risk of understaffing |
| 28–35% | ✅ Specialty café target |
| > 40% | High — efficiency or staffing review needed |

---

### 7. Prime Cost

$$\text{Prime Cost} = \text{COGS} + \text{Labor Cost}$$
$$\text{Prime Cost \%} = \frac{\text{Prime Cost}}{\text{Revenue}} \times 100$$

**Target:** Prime Cost % ≤ 60–65% for viable café profitability

---

### 8. Inventory Turnover

$$\text{Inventory Turnover} = \frac{\text{COGS (period)}}{\text{Average Inventory Value}}$$

| Turnover Rate | Specialty Coffee Context |
|-------------|------------------------|
| Weekly | Ideal for whole bean (max freshness) |
| Bi-weekly | Acceptable |
| Monthly | Risk of staling — order smaller, more frequently |

---

## Coffee Usage & Par Stock Calculator

### Daily Coffee Usage

$$\text{Daily Usage (kg)} = \frac{\text{Avg shots/day} \times \text{Dose (g)}}{1000}$$

**Example:** 200 shots/day, 18g dose:
$$\text{Daily Usage} = \frac{200 \times 18}{1000} = 3.6\text{ kg/day}$$

### Par Stock (2-week supply)

$$\text{Par Stock} = \text{Daily Usage} \times \text{Lead Time Days} \times \text{Safety Factor (1.1–1.2)}$$

**Example:** 3.6 kg/day, 7-day lead time, 1.15 safety:
$$\text{Par} = 3.6 \times 7 \times 1.15 = 28.98\text{ kg} \approx 30\text{ kg on hand}$$

---

## Menu Engineering Matrix

| Popularity | Contribution Margin | Category | Action |
|-----------|---------------------|---------|--------|
| High | High | ⭐ **Star** | Feature prominently; maintain |
| High | Low | 🐄 **Plow Horse** | Reduce costs or increase price |
| Low | High | 🧩 **Puzzle** | Promote more; reposition |
| Low | Low | 🐕 **Dog** | Remove or reformulate |

### Typical Café Menu Margin Analysis

| Item | COGS | Price | Margin | Popularity | Category |
|------|------|-------|--------|-----------|---------|
| Espresso (double) | $0.75 | $3.50 | 79% | Medium | Puzzle |
| Cappuccino | $1.20 | $4.50 | 73% | High | Star |
| Latte | $1.15 | $5.00 | 77% | Very High | Star |
| Cold Brew | $0.90 | $5.50 | 84% | Growing | Star |
| Frappé/blended | $2.10 | $6.00 | 65% | High | Plow Horse |
| Drip/Filter | $0.40 | $3.00 | 87% | Low | Puzzle |
| Specialty Latte (syrup) | $1.60 | $6.00 | 73% | Medium | Puzzle |

---

## Revenue & Profitability Model

### Simple Café P&L Template

```
MONTHLY P&L TEMPLATE

REVENUE
  Beverage sales:          ________
  Food sales:              ________
  Merchandise/beans retail:________
  Total Revenue:           ________

COGS
  Coffee beans:            ________ (~8–12% revenue)
  Milk & dairy:            ________ (~6–10% revenue)
  Other ingredients:       ________ (~3–5% revenue)
  Packaging:               ________ (~2–3% revenue)
  Total COGS:              ________ (Target: 25–35%)

LABOR
  Barista wages:           ________
  Manager wages:           ________
  Taxes/benefits:          ________
  Total Labor:             ________ (Target: 28–35%)

OVERHEAD
  Rent:                    ________ (Target: < 10–15% revenue)
  Utilities:               ________
  Equipment maintenance:   ________
  Insurance:               ________
  Marketing:               ________
  Total Overhead:          ________

NET PROFIT = Revenue - COGS - Labor - Overhead
Target: 10–20% net margin for healthy specialty café
```

---

## Pricing Strategy

### Value-Based Pricing

Specialty coffee pricing is **not cost-plus** — it's value perception:
- A $5 latte with traceable Ethiopian beans, competition-trained barista, beautiful latte art commands premium
- The price communicates **quality and experience**

### Price Sensitivity Guide

| Customer Type | Sensitivity | Price Strategy |
|-------------|------------|----------------|
| Specialty enthusiast | Low | Charge premium; explain value |
| Convenience customer | High | Keep to-go drinks competitive |
| Local regular | Medium | Loyalty program; consistency |
| One-time visitor | Low-medium | Experience justifies price |

---

## Waste Reduction Systems

### Coffee Waste Tracking

```
Daily waste log:
- Dial-in waste (shots pulled but discarded): _____ shots × dose = ___g
- Over-portioned shots: _____ shots × overage = ___g  
- Unused batch brew discarded: _____ liters × dose ratio = ___g
- Total coffee waste: _____g/day
- Cost of waste: Total g × cost/g = $____

Target: < 3% of daily coffee usage wasted
```

### Milk Waste Reduction

- **Steam only what you need:** Pitch size matched to drink size
- **Never re-steam:** Discard, don't reheat
- **Order accuracy:** Wrong-drink remakes = expensive milk waste
- **Track waste per shift** in high-volume operations

---

## Key Performance Indicators (KPIs)

| KPI | Formula | Target |
|-----|---------|--------|
| Revenue per labor hour | Revenue / Total labor hours | $40–80+ |
| Transactions per hour | # transactions / hours open | 15–40 (peak) |
| Average transaction value | Revenue / # transactions | $6–10 specialty |
| Beverage cost % | COGS / Revenue | 25–35% |
| Labor cost % | Labor / Revenue | 28–35% |
| Prime cost % | (COGS + Labor) / Revenue | < 65% |
| Net profit margin | Net profit / Revenue | 10–20% |

---

## 🔗 Related Topics
- [Workflow SOP](workflow-sop.md)
- [Coffee Economics](../coffee-fundamentals/coffee-economics.md)
- [Supply Chain](../coffee-fundamentals/supply-chain.md)
- [Formula Library](../formulas/formula-library.md)
