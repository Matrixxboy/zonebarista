export interface Domain {
  id: string;
  label: string;
  fileCount: number;
}

export interface KnowledgeFile {
  id: string;
  path: string;
  domainId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'all';
  type: 'markdown' | 'index' | 'data';
  title: string;
  keyTopics: string;
  prereqs: string;
  feedsInto: string;
}

export const domains: Domain[] = [
  { id: 'D01', label: 'Coffee Fundamentals', fileCount: 7 },
  { id: 'D02', label: 'Bean Intelligence', fileCount: 16 },
  { id: 'D03', label: 'Espresso Science', fileCount: 7 },
  { id: 'D04', label: 'Brewing Methods', fileCount: 8 },
  { id: 'D05', label: 'Milk and Latte Art', fileCount: 3 },
  { id: 'D06', label: 'Chemistry and Physics', fileCount: 6 },
  { id: 'D07', label: 'Water Science', fileCount: 4 },
  { id: 'D08', label: 'Roasting Science', fileCount: 5 },
  { id: 'D09', label: 'Sensory and Cupping', fileCount: 3 },
  { id: 'D10', label: 'Equipment', fileCount: 6 },
  { id: 'D11', label: 'Cafe Operations', fileCount: 7 },
  { id: 'D12', label: 'Learning Paths', fileCount: 4 },
  { id: 'D13', label: 'Formulas', fileCount: 1 }
];

export const files: KnowledgeFile[] = [
  // Root Files
  { id: 'F00', path: 'INDEX.md', domainId: 'root', difficulty: 'all', type: 'index', title: 'Master Index', keyTopics: 'Navigation, overview, complete index', prereqs: 'None', feedsInto: 'None' },

  // D01 — Coffee Fundamentals
  { id: 'F01', path: 'coffee-fundamentals/history-of-coffee.md', domainId: 'D01', difficulty: 'beginner', type: 'markdown', title: 'History of Coffee', keyTopics: 'Origins, waves, SCA, timeline', prereqs: 'None', feedsInto: 'F02, F03, F04, F05' },
  { id: 'F02', path: 'coffee-fundamentals/specialty-coffee-movement.md', domainId: 'D01', difficulty: 'beginner', type: 'markdown', title: 'Specialty Coffee Movement', keyTopics: 'Waves, SCA scoring, direct trade, quality standards', prereqs: 'F01', feedsInto: 'F09, F25' },
  { id: 'F03', path: 'coffee-fundamentals/supply-chain.md', domainId: 'D01', difficulty: 'beginner', type: 'markdown', title: 'Coffee Supply Chain', keyTopics: 'Farm to cup, actors, FIFO, processing overview', prereqs: 'F01', feedsInto: 'F05, F06' },
  { id: 'F04', path: 'coffee-fundamentals/certifications-standards.md', domainId: 'D01', difficulty: 'beginner', type: 'markdown', title: 'Certifications and Standards', keyTopics: 'Fair Trade, Organic, RA, Q Grade, SCA Grade 1', prereqs: 'F01, F03', feedsInto: 'None' },
  { id: 'F05', path: 'coffee-fundamentals/coffee-economics.md', domainId: 'D01', difficulty: 'intermediate', type: 'markdown', title: 'Coffee Economics', keyTopics: 'C-market, pricing tiers, producer economics, specialty premium', prereqs: 'F01, F03', feedsInto: 'None' },
  { id: 'F06', path: 'coffee-fundamentals/sustainability-climate.md', domainId: 'D01', difficulty: 'intermediate', type: 'markdown', title: 'Sustainability and Climate Change', keyTopics: 'CLR, climate adaptation, shade-grown, agroforestry, future scenarios', prereqs: 'F01, F03, F07', feedsInto: 'None' },
  { id: 'F07', path: 'coffee-fundamentals/sourcing-direct-trade.md', domainId: 'D01', difficulty: 'intermediate', type: 'markdown', title: 'Sourcing and Direct Trade', keyTopics: 'Importers, sample evaluation, contracts, farm visits, transparency pricing', prereqs: 'F03, F04, F05', feedsInto: 'None' },

  // D02 — Bean Intelligence
  { id: 'F08', path: 'beans/species-overview.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Coffee Species Overview', keyTopics: 'Arabica, Robusta, Liberica, Excelsa, varietals, terroir, altitude', prereqs: 'F01', feedsInto: 'F09, F10, F11, F12, F13, F14, F15, F16, F17, F18, F19, F20, F21' },
  { id: 'F09', path: 'beans/profiles/arabica.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Arabica — Complete Profile', keyTopics: 'Genetics, varietals (Typica, Bourbon, Gesha, SL-28), roast guide', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F10', path: 'beans/profiles/robusta.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Robusta — Complete Profile', keyTopics: 'Chemistry, blending role, Fine Robusta, Vietnamese coffee', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F11', path: 'beans/profiles/liberica.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Liberica — Profile', keyTopics: 'Kapeng Barako, Philippines, flavor, history', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F12', path: 'beans/profiles/excelsa.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Excelsa — Profile', keyTopics: 'C. liberica var. dewevrei, taxonomy, blending, flavor', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F13', path: 'beans/regions/ethiopia.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Ethiopia — Origin Profile', keyTopics: 'Yirgacheffe, Sidama, Guji, Harrar, heirloom varietals', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F14', path: 'beans/regions/brazil.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Brazil — Origin Profile', keyTopics: 'Sul de Minas, Cerrado, natural/pulped natural, Catuai, Bourbon', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F15', path: 'beans/regions/colombia.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Colombia — Origin Profile', keyTopics: 'Huila, Narino, Cauca, FNC, Castillo, Pink Bourbon', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F16', path: 'beans/regions/india.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'India — Origin Profile', keyTopics: 'Coorg, Chikmagalur, Araku, Monsooned Malabar, S795', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F17', path: 'beans/regions/extended-origins.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Extended Origins — Kenya, Guatemala, Indonesia, Panama, Rwanda, El Salvador', keyTopics: 'SL-28, Gesha, wet-hulled, Bourbon, potato defect', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F18', path: 'beans/regions/africa-extended.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'African Origins — Rwanda, Burundi, Uganda, Tanzania', keyTopics: 'Great Lakes, Bourbon, washing stations, potato defect, Fine Robusta', prereqs: 'F08, F13', feedsInto: 'None' },
  { id: 'F19', path: 'beans/regions/central-america-mexico.md', domainId: 'D02', difficulty: 'intermediate', type: 'markdown', title: 'Central America and Mexico', keyTopics: 'SHG/HB grading, honey processing, micro-mills, Chiapas', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F20', path: 'beans/green-coffee-grading.md', domainId: 'D02', difficulty: 'advanced', type: 'markdown', title: 'Green Coffee Grading and Storage', keyTopics: 'SCA defect classification, moisture, density, screen size, sourcing', prereqs: 'F08, F07', feedsInto: 'F47, F48' },
  { id: 'F21', path: 'beans/processing-methods.md', domainId: 'D02', difficulty: 'advanced', type: 'markdown', title: 'Coffee Processing Methods', keyTopics: 'Washed, natural, honey, anaerobic, wet-hulled, fermentation science', prereqs: 'F08', feedsInto: 'None' },
  { id: 'F22', path: 'beans/terroir-science.md', domainId: 'D02', difficulty: 'advanced', type: 'markdown', title: 'Terroir Science', keyTopics: 'Altitude, soil, climate, shade, microclimate, varietal interaction', prereqs: 'F08, F21', feedsInto: 'None' },
  { id: 'F22b', path: 'beans/barista-workflow-science.md', domainId: 'D02', difficulty: 'advanced', type: 'markdown', title: 'Barista Workflow Science', keyTopics: 'Cognitive load, movement economy, multi-order, ergonomics, speed', prereqs: 'F61, F62', feedsInto: 'F61, F62, F64' },

  // D03 — Espresso Science
  { id: 'F23', path: 'espresso/extraction-theory.md', domainId: 'D03', difficulty: 'advanced', type: 'markdown', title: 'Espresso Extraction Theory', keyTopics: 'EY, TDS, brew ratio, pressure, temperature, refractometry, SCA chart', prereqs: 'F08, F35', feedsInto: 'F24, F25, F26, F27, F28' },
  { id: 'F24', path: 'espresso/pressure-flow-profiling.md', domainId: 'D03', difficulty: 'advanced', type: 'markdown', title: 'Pressure and Flow Profiling', keyTopics: "Pre-infusion, declining pressure, turbo shots, Darcy's Law", prereqs: 'F23', feedsInto: 'None' },
  { id: 'F25', path: 'espresso/puck-preparation.md', domainId: 'D03', difficulty: 'intermediate', type: 'markdown', title: 'Puck Preparation, Dialing In and Shot Diagnosis', keyTopics: 'WDT, tamping, distribution, channeling, calibration', prereqs: 'F23', feedsInto: 'None' },
  { id: 'F26', path: 'espresso/dialing-in.md', domainId: 'D03', difficulty: 'intermediate', type: 'markdown', title: 'Dialing In — Systematic Protocol', keyTopics: 'Variable hierarchy, decision tree, grind drift, refractometer', prereqs: 'F23, F25', feedsInto: 'None' },
  { id: 'F27', path: 'espresso/shot-diagnosis.md', domainId: 'D03', difficulty: 'intermediate', type: 'markdown', title: 'Shot Diagnosis', keyTopics: 'Under/over extraction, channeling, crema, flow anomalies, naked portafilter', prereqs: 'F23, F25, F26', feedsInto: 'None' },
  { id: 'F28', path: 'espresso/espresso-blending.md', domainId: 'D03', difficulty: 'advanced', type: 'markdown', title: 'Espresso Blending Theory', keyTopics: 'Component roles, pre/post-blend roasting, seasonal consistency, trial matrix', prereqs: 'F23, F47, F48', feedsInto: 'None' },
  { id: 'F29', path: 'espresso/espresso-machine-technology.md', domainId: 'D03', difficulty: 'advanced', type: 'markdown', title: 'Espresso Machine Technology', keyTopics: 'Boiler types, pumps, PID, group heads, solenoid, flowmeter', prereqs: 'F23, F53', feedsInto: 'None' },

  // D04 — Brewing Methods
  { id: 'F30', path: 'brewing-methods/brewing-science-overview.md', domainId: 'D04', difficulty: 'intermediate', type: 'markdown', title: 'Brewing Science Overview', keyTopics: 'Immersion vs percolation, 6 variables, bloom, turbulence, SCA golden cup', prereqs: 'F23', feedsInto: 'F31, F32, F33, F34, F35, F36, F37' },
  { id: 'F31', path: 'brewing-methods/pour-over.md', domainId: 'D04', difficulty: 'intermediate', type: 'markdown', title: 'Pour Over — V60, Chemex, Kalita', keyTopics: 'All pour-over methods; recipes; troubleshooting; SCA golden cup', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F32', path: 'brewing-methods/french-press.md', domainId: 'D04', difficulty: 'beginner', type: 'markdown', title: 'French Press', keyTopics: 'Immersion science, Hoffman method, coarse grind, oils', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F33', path: 'brewing-methods/aeropress.md', domainId: 'D04', difficulty: 'beginner', type: 'markdown', title: 'AeroPress', keyTopics: 'Standard, inverted, WAC recipes, filter types', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F34', path: 'brewing-methods/cold-brew.md', domainId: 'D04', difficulty: 'beginner', type: 'markdown', title: 'Cold Brew', keyTopics: 'Cold extraction science, concentrate, RTD, nitro, serving styles', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F35', path: 'brewing-methods/moka-pot.md', domainId: 'D04', difficulty: 'beginner', type: 'markdown', title: 'Moka Pot', keyTopics: 'Stovetop pressure, physics, critical rules, troubleshooting', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F36', path: 'brewing-methods/siphon.md', domainId: 'D04', difficulty: 'intermediate', type: 'markdown', title: 'Siphon (Vacuum Pot)', keyTopics: 'Vacuum physics, technique, Japanese tradition, clarity', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F37', path: 'brewing-methods/batch-brewing.md', domainId: 'D04', difficulty: 'beginner', type: 'markdown', title: 'Batch Brewing', keyTopics: 'SCA standards, freshness windows, cafe workflow, grinder setup', prereqs: 'F30', feedsInto: 'None' },

  // D05 — Milk and Latte Art
  { id: 'F38', path: 'milk-latte-art/milk-science.md', domainId: 'D05', difficulty: 'intermediate', type: 'markdown', title: 'Milk Science', keyTopics: 'Chemistry, proteins, fats, foam mechanics, temperature, plant milks', prereqs: 'None', feedsInto: 'F39, F40' },
  { id: 'F39', path: 'milk-latte-art/steaming-technique.md', domainId: 'D05', difficulty: 'intermediate', type: 'markdown', title: 'Steaming Technique', keyTopics: 'Two-phase method, wand position, non-dairy adjustments, troubleshooting', prereqs: 'F38', feedsInto: 'None' },
  { id: 'F40', path: 'milk-latte-art/latte-art-patterns.md', domainId: 'D05', difficulty: 'intermediate', type: 'markdown', title: 'Latte Art Patterns', keyTopics: 'Heart, rosetta, tulip, swan, physics, competition WLAC', prereqs: 'F38, F39', feedsInto: 'None' },

  // D06 — Chemistry and Physics
  { id: 'F41', path: 'chemistry-physics/extraction-chemistry.md', domainId: 'D06', difficulty: 'advanced', type: 'markdown', title: 'Extraction Chemistry', keyTopics: 'Compound classes, CGAs, caffeine, acids, lipids, volatile aromatics', prereqs: 'F23', feedsInto: 'F42, F43, F44, F45' },
  { id: 'F42', path: 'chemistry-physics/maillard-caramelization.md', domainId: 'D06', difficulty: 'advanced', type: 'markdown', title: 'Maillard Reaction, Caramelization and Thermal Chemistry', keyTopics: 'Maillard mechanism, Strecker, caramelization, pyrolysis, CGA transformation', prereqs: 'F41, F47', feedsInto: 'None' },
  { id: 'F43', path: 'chemistry-physics/solubility-science.md', domainId: 'D06', difficulty: 'advanced', type: 'markdown', title: 'Solubility Science', keyTopics: "Fick's Law, diffusion, particle size, bimodal distribution, concentration gradient", prereqs: 'F41', feedsInto: 'None' },
  { id: 'F44', path: 'chemistry-physics/thermal-fluid-dynamics.md', domainId: 'D06', difficulty: 'advanced', type: 'markdown', title: 'Thermal and Fluid Dynamics', keyTopics: "Heat transfer, Darcy's Law, Reynolds number, viscosity, crema physics, PID", prereqs: 'F41, F23', feedsInto: 'None' },
  { id: 'F45', path: 'chemistry-physics/co2-degassing-freshness.md', domainId: 'D06', difficulty: 'advanced', type: 'markdown', title: 'CO2 Degassing and Freshness', keyTopics: 'CO2 production, release kinetics, bloom, crema, staling chemistry, storage', prereqs: 'F41, F47', feedsInto: 'None' },
  { id: 'F46', path: 'chemistry-physics/coffee-health-science.md', domainId: 'D06', difficulty: 'intermediate', type: 'markdown', title: 'Coffee and Health Science', keyTopics: 'Caffeine, CGAs, antioxidants, health research, safe limits, decaf', prereqs: 'F41', feedsInto: 'None' },

  // D07 — Water Science
  { id: 'F50', path: 'water-science/water-chemistry.md', domainId: 'D07', difficulty: 'advanced', type: 'markdown', title: 'Water Chemistry for Coffee', keyTopics: "SCA targets, Mg/Ca/HCO3/pH/Na, hardness, Henry's Law", prereqs: 'F23', feedsInto: 'F51, F52' },
  { id: 'F51', path: 'water-science/water-recipes.md', domainId: 'D07', difficulty: 'intermediate', type: 'markdown', title: 'Water Recipes and Remineralisation', keyTopics: 'SCA benchmark, Aqua Magica, espresso profile, Third Wave Water', prereqs: 'F50', feedsInto: 'None' },
  { id: 'F52', path: 'water-science/filtration-systems.md', domainId: 'D07', difficulty: 'intermediate', type: 'markdown', title: 'Filtration Systems', keyTopics: 'Carbon, TAC, RO, BWT Bestmax, Everpure, ion exchange, descaling', prereqs: 'F50', feedsInto: 'None' },
  { id: 'F52b', path: 'water-science/WATER_DATA.xml', domainId: 'D07', difficulty: 'intermediate', type: 'data', title: 'Water Science Structured Data', keyTopics: 'Water science XML data', prereqs: 'None', feedsInto: 'None' },

  // D08 — Roasting Science
  { id: 'F47', path: 'roasting/roast-science.md', domainId: 'D08', difficulty: 'advanced', type: 'markdown', title: 'Roasting Science', keyTopics: 'Phases, Maillard, DTR, degassing, freshness, heat transfer, CO2', prereqs: 'F08, F41', feedsInto: 'F48, F49, F49b, F49c' },
  { id: 'F48', path: 'roasting/roast-curves-profiles.md', domainId: 'D08', difficulty: 'advanced', type: 'markdown', title: 'Roast Curves and Profiles', keyTopics: 'Profile architecture, RoR management, turning points, DTR, Cropster, Artisan', prereqs: 'F47', feedsInto: 'None' },
  { id: 'F49', path: 'roasting/roast-defects.md', domainId: 'D08', difficulty: 'advanced', type: 'markdown', title: 'Roast Defects', keyTopics: 'Scorching, baked, underdeveloped, quakers, tipping, green grading', prereqs: 'F47, F48', feedsInto: 'None' },
  { id: 'F49b', path: 'roasting/roastery-operations.md', domainId: 'D08', difficulty: 'advanced', type: 'markdown', title: 'Roastery Operations', keyTopics: 'Equipment, production planning, blend development, QC, packaging, economics', prereqs: 'F47, F48, F20', feedsInto: 'None' },
  { id: 'F49c', path: 'roasting/roast-color-agtron.md', domainId: 'D08', difficulty: 'intermediate', type: 'markdown', title: 'Roast Color and Agtron', keyTopics: 'Agtron scale, SCA tiles, colorimeters, ground vs whole bean, measurement protocol', prereqs: 'F47', feedsInto: 'None' },

  // D09 — Sensory and Cupping
  { id: 'F55', path: 'sensory-cupping/cupping-protocol.md', domainId: 'D09', difficulty: 'intermediate', type: 'markdown', title: 'Cupping Protocol and Sensory Analysis', keyTopics: 'Full SCA protocol, scorecard, 10 attributes, defects, specialty threshold', prereqs: 'F30', feedsInto: 'F56, F57' },
  { id: 'F56', path: 'sensory-cupping/flavor-wheel-guide.md', domainId: 'D09', difficulty: 'intermediate', type: 'markdown', title: 'Coffee Flavour Wheel Guide', keyTopics: 'All 9 categories, every descriptor, origin mapping, roast mapping, tasting notes', prereqs: 'F55', feedsInto: 'None' },
  { id: 'F57', path: 'sensory-cupping/sensory-training.md', domainId: 'D09', difficulty: 'advanced', type: 'markdown', title: 'Sensory Training Exercises', keyTopics: 'Taste thresholds, acid identification, aroma kit, triangle tests, Q Grader prep', prereqs: 'F55, F56', feedsInto: 'None' },

  // D10 — Equipment
  { id: 'F53', path: 'equipment/espresso-machines.md', domainId: 'D10', difficulty: 'intermediate', type: 'markdown', title: 'Espresso Machines — Equipment Guide', keyTopics: 'La Marzocco, Nuova Simonelli, Breville, Rocket; boiler types; comparison', prereqs: 'F23', feedsInto: 'None' },
  { id: 'F54', path: 'equipment/grinders.md', domainId: 'D10', difficulty: 'intermediate', type: 'markdown', title: 'Grinders — Complete Guide', keyTopics: 'Flat vs conical burr, EK43, Niche Zero, DF64, RDT, single-dose', prereqs: 'F23', feedsInto: 'None' },
  { id: 'F54b', path: 'equipment/brewing-equipment.md', domainId: 'D10', difficulty: 'beginner', type: 'markdown', title: 'Brewing Equipment', keyTopics: 'V60, Chemex, Kalita, kettles, scales, refractometers, filters', prereqs: 'F30', feedsInto: 'None' },
  { id: 'F54c', path: 'equipment/maintenance-cleaning.md', domainId: 'D10', difficulty: 'intermediate', type: 'markdown', title: 'Maintenance and Cleaning', keyTopics: 'Daily/weekly/monthly protocols, backflush, descaling, grinder care', prereqs: 'F53, F54', feedsInto: 'None' },
  { id: 'F54d', path: 'equipment/coffee-lab-tools.md', domainId: 'D10', difficulty: 'advanced', type: 'markdown', title: 'Coffee Lab Tools', keyTopics: 'VST refractometer, Agtron, moisture meters, pH meters, Cropster, Artisan', prereqs: 'F23, F47', feedsInto: 'None' },
  { id: 'F54e', path: 'equipment/espresso-machine-technology.md', domainId: 'D10', difficulty: 'advanced', type: 'markdown', title: 'Espresso Machine Technology Deep Dive', keyTopics: 'Boiler systems, pumps, PID, group heads, E61, solenoid, flowmeter', prereqs: 'F53, F23', feedsInto: 'None' },

  // D11 — Cafe Operations
  { id: 'F60', path: 'cafe-operations/workflow-sop.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Cafe Workflow SOP', keyTopics: 'Opening/closing, multi-order sequencing, station setup, hygiene, calibration', prereqs: 'F23, F38', feedsInto: 'None' },
  { id: 'F61', path: 'cafe-operations/beverage-costing.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Beverage Costing and Menu Engineering', keyTopics: 'COGS, margins, prime cost, menu engineering matrix, P&L template', prereqs: 'F60', feedsInto: 'None' },
  { id: 'F62', path: 'cafe-operations/staff-training.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Staff Training System', keyTopics: 'Onboarding, competency assessments, progression, coaching, SBI feedback', prereqs: 'F60', feedsInto: 'None' },
  { id: 'F63', path: 'cafe-operations/menu-development.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Menu Development and Drink Recipes', keyTopics: 'Core drinks, signature development, seasonal, non-coffee, menu engineering', prereqs: 'F60, F61, F38', feedsInto: 'None' },
  { id: 'F64', path: 'cafe-operations/inventory-management.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Inventory Management and Waste Reduction', keyTopics: 'FIFO, par stock, ordering schedules, waste tracking, stocktaking', prereqs: 'F61', feedsInto: 'None' },
  { id: 'F65', path: 'cafe-operations/marketing-branding.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Marketing, Branding and Customer Experience', keyTopics: 'Brand identity, storytelling, social media, loyalty, community building', prereqs: 'F60, F63', feedsInto: 'None' },
  { id: 'F66', path: 'cafe-operations/cafe-design-layout.md', domainId: 'D11', difficulty: 'intermediate', type: 'markdown', title: 'Cafe Design and Layout', keyTopics: 'Bar layout, customer flow, sensory design, seating, accessibility, technology', prereqs: 'F53, F60', feedsInto: 'None' },

  // D12 — Learning Paths
  { id: 'F70', path: 'learning-paths/learning-paths.md', domainId: 'D12', difficulty: 'all', type: 'markdown', title: 'Learning Paths', keyTopics: '7 pathways: beginner, professional, science, competition, roasting, cafe management, Q Grader', prereqs: 'None', feedsInto: 'None' },
  { id: 'F71', path: 'learning-paths/competition-guide.md', domainId: 'D12', difficulty: 'advanced', type: 'markdown', title: 'Competition Guide — WBC, WBrC, WLAC, WAC', keyTopics: 'All major competitions, judging criteria, scoring, preparation, presentation', prereqs: 'F23, F38, F55', feedsInto: 'None' },
  { id: 'F72', path: 'learning-paths/q-grader-study-plan.md', domainId: 'D12', difficulty: 'advanced', type: 'markdown', title: 'Q Grader Certification Study Plan', keyTopics: 'All 22 modules, 6-month study programme, tools, resources', prereqs: 'F55, F56, F57, F20, F47', feedsInto: 'None' },
  { id: 'F73', path: 'learning-paths/sca-curriculum-map.md', domainId: 'D12', difficulty: 'all', type: 'markdown', title: 'SCA Curriculum Map', keyTopics: 'All 6 modules, 3 levels, point system, diploma pathway, approved trainer', prereqs: 'None', feedsInto: 'None' },

  // D13 — Formulas
  { id: 'F80', path: 'formulas/formula-library.md', domainId: 'D13', difficulty: 'all', type: 'markdown', title: 'Master Formula Library', keyTopics: '24 formulas: brewing, water, roasting, cafe business, sensory scoring', prereqs: 'None', feedsInto: 'None' }
];
