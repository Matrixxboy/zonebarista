---
title: Thermal & Fluid Dynamics in Coffee Brewing
category: Chemistry & Physics
subcategory: Physics
difficulty: Advanced
tags: [thermal-physics, fluid-dynamics, heat-transfer, pressure, viscosity, flow-rate, Darcy, Reynolds]
summary: Physics of heat transfer, fluid flow, and pressure dynamics as they apply to espresso and filter coffee brewing systems.
sources:
  - "Fabbri, A. et al. (2011). Non-Newtonian flow of espresso. Journal of Food Engineering."
  - "Moroney, K.M. et al. (2019). Multiscale modelling of coffee extraction. Proc. Royal Society."
  - "Illy, A. & Viani, R. (2005). Espresso Coffee: The Science of Quality."
created_at: 2025-01-01
scientific_accuracy_score: 10/10
verification_status: verified
related_topics: [extraction-chemistry, solubility-science, pressure-flow-profiling, water-chemistry]
reading_time: 12 min
---

# Thermal & Fluid Dynamics in Coffee Brewing

## 📍 Parent Topics
- [Chemistry & Physics](../INDEX.md)
- [Extraction Chemistry](extraction-chemistry.md)

---

## Heat Transfer Mechanisms

Three heat transfer modes operate in coffee brewing:

### 1. Conduction

$$\dot{Q}_{cond} = k \cdot A \cdot \frac{\Delta T}{\Delta x}$$

| Variable | Symbol | Unit |
|---------|--------|------|
| Heat flux | Q̇ | W |
| Thermal conductivity | k | W/(m·K) |
| Cross-sectional area | A | m² |
| Temperature difference | ΔT | K |
| Thickness | Δx | m |

**In coffee brewing:**
- Heat conducts through portafilter metal to coffee grounds
- Thermal mass of group head pre-heats → crucial for temperature stability
- Cold portafilter = first shot always cooler → always pre-heat

---

### 2. Convection

$$\dot{Q}_{conv} = h \cdot A \cdot (T_{fluid} - T_{surface})$$

**In coffee brewing:**
- Hot water flowing over and through coffee particles
- Flow rate affects convective coefficient *h*
- Higher turbulence (faster flow, agitation) → higher heat transfer → faster extraction

---

### 3. Radiation

Minimal in coffee brewing — relevant only in roasting drum-to-bean heat transfer (~5–10% of total).

---

## Pressure Dynamics in Espresso

### Pressure-Flow Relationship (Darcy's Law)

$$Q = \frac{\kappa \cdot A \cdot \Delta P}{\mu \cdot L}$$

| Variable | Symbol | Typical Value (espresso) |
|---------|--------|-------------------------|
| Flow rate | Q | 1–3 mL/s |
| Puck permeability | κ | Decreases as puck compacts |
| Basket cross-section | A | ~3.5 cm² (58mm basket) |
| Pressure differential | ΔP | ~9 bar = 900,000 Pa |
| Water viscosity | μ | ~0.000314 Pa·s at 93°C |
| Puck thickness | L | ~20–25 mm |

**Key insight:** As puck compacts during extraction, *κ* decreases → flow rate decreases even at constant pressure. This is why espresso naturally slows toward end of shot.

---

### Reynolds Number — Laminar vs Turbulent Flow

$$Re = \frac{\rho \cdot v \cdot D}{\mu}$$

| Variable | Meaning |
|---------|---------|
| ρ | Fluid density |
| v | Flow velocity |
| D | Characteristic diameter |
| μ | Dynamic viscosity |

- **Re < 2,300:** Laminar flow (smooth, layered)
- **Re > 4,000:** Turbulent flow (chaotic, mixing)

**In espresso:** Flow through the coffee puck is **laminar** (small pore size → low Re). This means minimal turbulent mixing within the puck — concentration gradients at particle surfaces are relatively stable, making diffusion rate-limiting.

---

## Temperature Effects on Water Properties

| Temperature (°C) | Density (kg/m³) | Viscosity (mPa·s) | Surface Tension (mN/m) |
|----------------|----------------|-------------------|------------------------|
| 20 | 998.2 | 1.002 | 72.8 |
| 40 | 992.2 | 0.653 | 69.6 |
| 60 | 983.2 | 0.466 | 66.2 |
| 80 | 971.8 | 0.355 | 62.6 |
| 93 | 963.1 | 0.313 | 60.0 |
| 100 | 958.4 | 0.282 | 58.9 |

**Implications:**
- Lower viscosity at higher temp → water flows through puck more easily → affects grind setting
- Lower surface tension → better pore wetting → more even saturation
- This is why hot water extracts more efficiently than cold

---

## Crema Formation Physics

Espresso crema forms through:

1. **CO₂ supersaturation:** At 9 bar, CO₂ dissolves in water at much higher concentration (Henry's Law: `C = kH · P`)
2. **Pressure drop:** As espresso exits basket at atmospheric pressure, CO₂ rapidly comes out of solution
3. **Nucleation and bubble growth:** CO₂ bubbles form around suspended lipid particles and colloidal compounds
4. **Stabilization:** Melanoidins + proteins adsorb to bubble surface → stable foam layer

$$\text{Henry's Law: } C_{CO_2} = k_H \cdot P_{CO_2}$$

- At 9 bar: significantly more CO₂ dissolved than at atmospheric
- Fresh coffee (high CO₂) → better crema
- Stale coffee (low CO₂) → thin, quick-dissipating crema

**Crema color indicators:**

| Color | Indicates |
|-------|----------|
| Dark brown/tiger striped | Over-extracted or dark roast |
| Golden/hazelnut | Optimal extraction |
| Pale/blonde | Under-extracted or very light roast |
| White bubbles on top | Excessive CO₂ from very fresh coffee |

---

## Steam Physics (Milk Steaming)

Steam is water vapor at temperatures above 100°C:

| Parameter | Value |
|---------|-------|
| Steam pressure in commercial machine | 1.0–1.5 bar |
| Steam temperature at 1.2 bar | ~105°C |
| Latent heat of vaporization (water) | 2,257 kJ/kg |
| Heat transfer rate | Very high (phase-change condensation) |

When steam contacts cold milk, it **condenses** (phase change from vapor → liquid), releasing enormous energy:

$$\dot{Q}_{steam} = \dot{m}_{steam} \cdot [h_{fg} + c_p \cdot (T_{steam} - T_{milk})]$$

This is why steam heats milk far faster than a heating element alone.

**Steam flow rate** is controlled by:
- Machine boiler pressure (fixed by machine)
- Steam tip hole diameter (size and number of holes)
- Valve opening degree

---

## Boiler Dynamics

### Thermal Mass and Temperature Stability

$$\text{Thermal mass} = m \cdot c_p$$

Large boiler (commercial: 10–15L) → high thermal mass → temperature changes slowly → excellent stability.

Small boiler (home: 0.3–0.5L) → low thermal mass → temperature changes quickly → requires PID and careful management.

### PID Control

**PID** = Proportional-Integral-Derivative controller:

$$u(t) = K_p \cdot e(t) + K_i \cdot \int_0^t e(\tau)d\tau + K_d \cdot \frac{de(t)}{dt}$$

- *Kp* (Proportional): Responds to current error
- *Ki* (Integral): Corrects accumulated error over time
- *Kd* (Derivative): Anticipates future error from rate of change

**Result:** PID-controlled machines maintain brew temperature within ±0.2–0.5°C vs ±5–10°C without PID.

---

## 🔗 Related Topics
- [Extraction Chemistry](extraction-chemistry.md)
- [Pressure & Flow Profiling](../espresso/pressure-flow-profiling.md)
- [Espresso Machines](../equipment/espresso-machines.md)
- [Water Chemistry](../water-science/water-chemistry.md)
- [Formula Library](../formulas/formula-library.md)
