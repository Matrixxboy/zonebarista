/* ==========================================================================
   ✏️ Coffee Intelligence OS — Hand-Drawn Core Controller (Serverless)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Global Application State
  const AppState = {
    isLoaded: false,
    domains: [],
    files: [],
    currentFile: null,
    navigationHistory: [],
    searchEngine: null,
    charts: {},
    graph: {
      svg: null,
      simulation: null,
      zoom: null
    }
  };

  // DOM Elements
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Init Operations
  initPreloader();
  initAmbientBackground();
  initSystem();
  initEventListeners();

  /* ==========================================================================
     1. PRELOADER CONTROLLER
     ========================================================================== */
  function initPreloader() {
    const loaderFill = document.getElementById('loader-fill');
    const loaderStatus = document.getElementById('loader-status');
    
    setTimeout(() => {
      if (!AppState.isLoaded) {
        if (loaderFill) loaderFill.style.width = '30%';
        if (loaderStatus) loaderStatus.innerText = 'Sanitizing the workspace notepad...';
      }
    }, 400);

    setTimeout(() => {
      if (!AppState.isLoaded) {
        if (loaderFill) loaderFill.style.width = '60%';
        if (loaderStatus) loaderStatus.innerText = 'Sharpening pencils and aligning templates...';
      }
    }, 900);
  }

  function updatePreloader(progress, statusText) {
    const loaderFill = document.getElementById('loader-fill');
    const loaderStatus = document.getElementById('loader-status');
    if (loaderFill) loaderFill.style.width = `${progress}%`;
    if (loaderStatus) loaderStatus.innerText = statusText;
  }

  function hidePreloader() {
    AppState.isLoaded = true;
    updatePreloader(100, 'Notebook layout ready!');
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 600);
      }
    }, 300);
  }

  /* ==========================================================================
     2. AMBIENT BACKGROUND & PARTICLE SYSTEM (Hand-Drawn Beans)
     ========================================================================== */
  function initAmbientBackground() {
    const canvas = document.getElementById('ambient-particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 20;
    
    const mouse = { x: null, y: null, radius: 150 };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class HandDrawnBean {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 80;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = -(Math.random() * 0.5 + 0.15);
        this.opacity = Math.random() * 0.35 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.005 - 0.0025;
        this.color = Math.random() > 0.5 ? '#ff4d4d' : '#2d5da1';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.spin;

        if (this.y < -30 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= dx * force * 0.015;
            this.y -= dy * force * 0.015;
          }
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = '#2d2d2d';
        ctx.lineWidth = 1.5;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 1.4, this.size * 2, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 1.6);
        ctx.bezierCurveTo(
          -this.size * 0.5, -this.size * 0.5,
          this.size * 0.5, this.size * 0.5,
          0, this.size * 1.6
        );
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new HandDrawnBean());
      particles[i].y = Math.random() * height;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ==========================================================================
     3. EMBEDDED KNOWLEDGE GRAPH DATA (Serverless — No XML Fetch Needed)
     ========================================================================== */
  function initSystem() {
    try {
      updatePreloader(75, 'Loading embedded knowledge graph...');

      // ── DOMAINS ──
      AppState.domains = [
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

      // ── FILES ──
      AppState.files = [
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

      updatePreloader(90, 'Applying ink and templates...');

      // Render Viewport elements
      renderSidebarNavigation();
      initSearchEngine();
      initAnalyticsCharts();
      initD3KnowledgeGraph();

      // Show application and complete loading
      hidePreloader();
    } catch (error) {
      console.error('System initialization error:', error);
      updatePreloader(100, 'Fallback mode initialized.');
      setTimeout(hidePreloader, 1000);
    }
  }

  /* ==========================================================================
     4. COLLAPSIBLE SIDEBAR HIERARCHICAL NAVIGATION
     ========================================================================== */
  function renderSidebarNavigation() {
    const container = document.getElementById('tree-folders-root');
    if (!container) return;
    container.innerHTML = '';

    // Group files by domain
    const filesByDomain = {};
    AppState.files.forEach(f => {
      if (f.domainId !== 'root') {
        if (!filesByDomain[f.domainId]) filesByDomain[f.domainId] = [];
        filesByDomain[f.domainId].push(f);
      }
    });

    // Render each domain folder
    AppState.domains.forEach(domain => {
      const files = filesByDomain[domain.id] || [];
      if (files.length === 0) return;

      const folderElement = document.createElement('div');
      folderElement.className = 'tree-folder';
      
      const headerElement = document.createElement('div');
      headerElement.className = 'tree-folder-header';
      
      let domainIcon = 'folder';
      if (domain.label.includes('Espresso')) domainIcon = 'coffee';
      else if (domain.label.includes('Bean')) domainIcon = 'bean';
      else if (domain.label.includes('Roasting')) domainIcon = 'flame';
      else if (domain.label.includes('Water')) domainIcon = 'droplet';
      else if (domain.label.includes('Chemistry')) domainIcon = 'beaker';
      else if (domain.label.includes('Milk')) domainIcon = 'milk';
      else if (domain.label.includes('Operations')) domainIcon = 'briefcase';
      else if (domain.label.includes('Equipment')) domainIcon = 'sliders';
      else if (domain.label.includes('Learning')) domainIcon = 'graduation-cap';
      else if (domain.label.includes('Formula')) domainIcon = 'sigma';
      else if (domain.label.includes('Sensory')) domainIcon = 'wine';
      else if (domain.label.includes('Fundamental')) domainIcon = 'book-open';

      headerElement.innerHTML = `
        <i data-lucide="${domainIcon}" class="tree-icon"></i>
        <span>${domain.label}</span>
        <i data-lucide="chevron-right" class="folder-arrow"></i>
      `;

      const contentElement = document.createElement('div');
      contentElement.className = 'tree-folder-content';

      files.forEach(file => {
        const fileElement = document.createElement('a');
        fileElement.className = 'tree-item';
        fileElement.href = '#';
        fileElement.setAttribute('data-path', file.path);
        
        let fileIcon = 'file-text';
        if (file.type === 'data') fileIcon = 'database';
        
        fileElement.innerHTML = `
          <i data-lucide="${fileIcon}" class="tree-icon"></i>
          <span>${file.title}</span>
        `;

        fileElement.addEventListener('click', (e) => {
          e.preventDefault();
          loadDocument(file.path);
        });

        contentElement.appendChild(fileElement);
      });

      headerElement.addEventListener('click', () => {
        folderElement.classList.toggle('open');
      });

      folderElement.appendChild(headerElement);
      folderElement.appendChild(contentElement);
      container.appendChild(folderElement);
    });

    // Refresh Lucide icons
    if (window.lucide) lucide.createIcons();
  }

  /* ==========================================================================
     5. D3 KNOWLEDGE CONSTELLATION GRAPH
     ========================================================================== */
  function initD3KnowledgeGraph() {
    const svgEl = document.getElementById('knowledge-constellation-graph');
    if (!svgEl) return;

    const width = svgEl.clientWidth || 800;
    const height = 500;
    
    const nodes = AppState.files.map(file => ({
      id: file.id,
      title: file.title,
      path: file.path,
      domain: file.domainId,
      difficulty: file.difficulty,
      type: file.type
    }));

    const links = [];
    AppState.files.forEach(file => {
      if (file.feedsInto && file.feedsInto !== 'None') {
        const targets = file.feedsInto.split(',').map(s => s.trim());
        targets.forEach(targetId => {
          const exists = AppState.files.some(f => f.id === targetId);
          if (exists) {
            links.push({
              source: file.id,
              target: targetId,
              value: 1
            });
          }
        });
      }
    });

    d3.select('#knowledge-constellation-graph').selectAll('*').remove();

    const svg = d3.select('#knowledge-constellation-graph')
      .attr('width', '100%')
      .attr('height', height)
      .append('g');

    const zoom = d3.zoom()
      .scaleExtent([0.3, 3])
      .on('zoom', (event) => {
        svg.attr('transform', event.transform);
      });

    d3.select('#knowledge-constellation-graph').call(zoom);
    
    AppState.graph.svg = svg;
    AppState.graph.zoom = zoom;

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(110))
      .force('charge', d3.forceManyBody().strength(-140))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(32));

    AppState.graph.simulation = simulation;

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'graph-link')
      .attr('stroke', '#2d2d2d')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '6, 4');

    const node = svg.append('g')
      .selectAll('.graph-node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'graph-node')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (event, d) => {
        if (event.defaultPrevented) return;
        loadDocument(d.path);
      })
      .on('mouseover', function(event, d) {
        d3.select(this).select('circle').transition().duration(150)
          .attr('r', d => d.type === 'index' ? 16 : 12)
          .attr('stroke-width', 3)
          .attr('stroke', '#2d2d2d');
        
        link.transition().duration(150)
          .attr('stroke', l => (l.source.id === d.id || l.target.id === d.id) ? '#ff4d4d' : '#2d2d2d')
          .attr('stroke-opacity', l => (l.source.id === d.id || l.target.id === d.id) ? 1.0 : 0.25)
          .attr('stroke-width', l => (l.source.id === d.id || l.target.id === d.id) ? 3 : 1.5)
          .attr('stroke-dasharray', l => (l.source.id === d.id || l.target.id === d.id) ? 'none' : '6, 4');
      })
      .on('mouseout', function() {
        d3.select(this).select('circle').transition().duration(150)
          .attr('r', d => d.type === 'index' ? 12 : 8)
          .attr('stroke-width', 2)
          .attr('stroke', '#2d2d2d');
        
        link.transition().duration(150)
          .attr('stroke', '#2d2d2d')
          .attr('stroke-opacity', 0.35)
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', '6, 4');
      });

    node.append('circle')
      .attr('r', d => d.type === 'index' ? 12 : 8)
      .attr('fill', d => {
        if (d.type === 'index') return '#fff9c4';
        if (d.type === 'data') return '#2d5da1';
        if (d.difficulty === 'beginner') return '#8fbc8f';
        if (d.difficulty === 'advanced') return '#ff4d4d';
        return '#b26b30';
      })
      .attr('stroke', '#2d2d2d')
      .attr('stroke-width', 2);

    node.append('text')
      .attr('dx', 15)
      .attr('dy', '.35em')
      .attr('class', 'node-label')
      .style('font-family', 'Kalam')
      .style('font-size', '12px')
      .style('font-weight', '700')
      .text(d => d.title.length > 25 ? d.title.substring(0, 22) + '...' : d.title);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    document.getElementById('graph-zoom-in')?.addEventListener('click', () => {
      d3.select('#knowledge-constellation-graph').transition().call(zoom.scaleBy, 1.3);
    });

    document.getElementById('graph-zoom-out')?.addEventListener('click', () => {
      d3.select('#knowledge-constellation-graph').transition().call(zoom.scaleBy, 0.7);
    });

    document.getElementById('graph-zoom-reset')?.addEventListener('click', () => {
      d3.select('#knowledge-constellation-graph').transition().call(
        zoom.transform,
        d3.zoomIdentity.translate(width / 2, height / 2).scale(0.85)
      );
    });

    d3.select('#knowledge-constellation-graph').call(
      zoom.transform,
      d3.zoomIdentity.translate(20, 20).scale(0.9)
    );
  }

  /* ==========================================================================
     6. CHART.JS ANALYTICS GRAPHICS
     ========================================================================== */
  function initAnalyticsCharts() {
    Chart.defaults.font.family = 'Patrick Hand';
    Chart.defaults.font.size = 15;
    Chart.defaults.color = '#2d2d2d';

    const ctxDensity = document.getElementById('category-density-chart');
    if (ctxDensity) {
      const labels = AppState.domains.map(d => d.label.length > 20 ? d.label.substring(0, 18) + '...' : d.label);
      const data = AppState.domains.map(d => d.fileCount);

      AppState.charts.density = new Chart(ctxDensity, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Files count',
            data: data,
            backgroundColor: 'rgba(45, 93, 161, 0.15)',
            borderColor: '#2d5da1',
            borderWidth: 2.5,
            hoverBackgroundColor: 'rgba(45, 93, 161, 0.35)',
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#fdfbf7',
              titleFont: { family: 'Kalam', weight: 'bold' },
              bodyFont: { family: 'Patrick Hand' },
              titleColor: '#2d2d2d',
              bodyColor: '#2d2d2d',
              borderColor: '#2d2d2d',
              borderWidth: 2
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(45, 45, 45, 0.1)', tickColor: '#2d2d2d', borderDash: [4, 4] },
              ticks: { color: '#2d2d2d', font: { family: 'Kalam', size: 12 } }
            },
            y: {
              grid: { color: 'rgba(45, 45, 45, 0.1)', tickColor: '#2d2d2d', borderDash: [4, 4] },
              ticks: { color: '#2d2d2d', precision: 0 }
            }
          }
        }
      });
    }

    const ctxRadar = document.getElementById('sca-radar-chart');
    if (ctxRadar) {
      AppState.charts.radar = new Chart(ctxRadar, {
        type: 'radar',
        data: {
          labels: ['Acidity', 'Body', 'Sweetness', 'Balance', 'Flavor Clarity', 'Aftertaste'],
          datasets: [{
            label: 'SCA Premium Level Target',
            data: [8.75, 8.5, 9.0, 8.75, 9.25, 8.5],
            backgroundColor: 'rgba(45, 93, 161, 0.08)',
            borderColor: '#2d5da1',
            pointBackgroundColor: '#2d5da1',
            pointBorderColor: '#2d2d2d',
            borderWidth: 2.5
          }, {
            label: 'RAG Extraction Confidence',
            data: [9.5, 9.0, 9.2, 9.5, 9.6, 9.3],
            backgroundColor: 'rgba(255, 77, 77, 0.08)',
            borderColor: '#ff4d4d',
            pointBackgroundColor: '#ff4d4d',
            pointBorderColor: '#2d2d2d',
            borderWidth: 2.5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#2d2d2d', font: { family: 'Kalam', size: 12, weight: 'bold' } }
            },
            tooltip: {
              backgroundColor: '#fdfbf7',
              borderColor: '#2d2d2d',
              borderWidth: 2
            }
          },
          scales: {
            r: {
              grid: { color: 'rgba(45, 45, 45, 0.15)', borderDash: [4, 4] },
              angleLines: { color: 'rgba(45, 45, 45, 0.15)' },
              ticks: { display: false },
              pointLabels: { color: '#2d2d2d', font: { family: 'Kalam', size: 13, weight: 'bold' } }
            }
          }
        }
      });
    }
  }

  /* ==========================================================================
     7. FUZZY SEARCH ENGINE & COMMAND PALETTE
     ========================================================================== */
  function initSearchEngine() {
    const fuseOptions = {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'keyTopics', weight: 0.3 },
        { name: 'path', weight: 0.2 },
        { name: 'difficulty', weight: 0.1 }
      ],
      threshold: 0.35,
      includeMatches: true
    };
    AppState.searchEngine = new Fuse(AppState.files, fuseOptions);
  }

  let selectedSearchIndex = 0;

  function toggleSearchPalette(show) {
    if (!searchModal) return;
    if (show) {
      searchModal.classList.add('active');
      searchInput.value = '';
      renderSearchResults([]);
      setTimeout(() => searchInput.focus(), 150);
      selectedSearchIndex = 0;
    } else {
      searchModal.classList.remove('active');
      searchInput.blur();
    }
  }

  function renderSearchResults(results) {
    if (!searchResults) return;
    
    if (results.length === 0) {
      if (searchInput.value.trim() === '') {
        searchResults.innerHTML = `
          <div class="search-result-placeholder">
            Type to search... Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to open.
          </div>
        `;
      } else {
        searchResults.innerHTML = `
          <div class="search-result-placeholder">
            No matching sketches found in the notebook.
          </div>
        `;
      }
      return;
    }

    searchResults.innerHTML = '';
    
    results.forEach((result, idx) => {
      const file = result.item;
      const element = document.createElement('div');
      element.className = `search-item ${idx === selectedSearchIndex ? 'selected' : ''}`;
      
      let itemIcon = 'file-text';
      if (file.type === 'data') itemIcon = 'database';

      element.innerHTML = `
        <div class="search-item-icon-box">
          <i data-lucide="${itemIcon}"></i>
        </div>
        <div class="search-item-details">
          <span class="search-item-title">${file.title}</span>
          <span class="search-item-path">${file.path}</span>
          <span class="search-item-topics">${file.keyTopics ? 'Topics: ' + file.keyTopics : ''}</span>
        </div>
        <div class="search-item-meta">${file.difficulty}</div>
      `;

      element.addEventListener('click', () => {
        loadDocument(file.path);
        toggleSearchPalette(false);
      });

      searchResults.appendChild(element);
    });

    if (window.lucide) lucide.createIcons();
    scrollToSelectedSearchItem();
  }

  function scrollToSelectedSearchItem() {
    const selected = searchResults.querySelector('.search-item.selected');
    if (selected) {
      selected.scrollIntoView({ block: 'nearest' });
    }
  }

  /* ==========================================================================
     8. IMMERSIVE MARKDOWN READER ENGINE
     ========================================================================== */
  async function loadDocument(filePath) {
    try {
      // Select appropriate tree item
      document.querySelectorAll('.sidebar-nav-tree .tree-item').forEach(item => {
        if (item.getAttribute('data-path') === filePath) {
          item.classList.add('active');
          let parentFolder = item.closest('.tree-folder');
          if (parentFolder && !parentFolder.classList.contains('open')) {
            parentFolder.querySelector('.tree-folder-header').click();
          }
        } else {
          item.classList.remove('active');
        }
      });

      if (filePath === 'INDEX.md') {
        AppState.currentFile = 'INDEX.md';
        showDashboard();
        return;
      }

      const response = await fetch(`./coffee-knowledge-base/${filePath}`);
      if (!response.ok) throw new Error(`Could not find document file: ${filePath}`);
      let markdown = await response.text();

      const fileMeta = AppState.files.find(f => f.path === filePath) || {};

      // Parse YAML Frontmatter
      let content = markdown;
      const yamlRegex = /^---([\s\S]*?)---/;
      const yamlMatch = markdown.match(yamlRegex);
      if (yamlMatch) {
        content = markdown.replace(yamlRegex, '');
      }

      // Render Markdown using marked.js
      const htmlContent = marked.parse(content);
      
      const pane = document.getElementById('markdown-output-pane');
      if (pane) {
        pane.innerHTML = htmlContent;
        pane.scrollTop = 0;
      }

      // Configure dynamic headings IDs
      pane.querySelectorAll('h1, h2, h3').forEach((header, index) => {
        if (!header.id) {
          header.id = 'heading-' + index;
        }
      });

      // Render LaTeX Formulas using KaTeX auto-renderer
      if (window.renderMathInElement) {
        renderMathInElement(pane, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
          ],
          throwOnError: false
        });
      }

      // Detect Mermaid blocks BEFORE syntax highlighting
      const mermaidBlocks = Array.from(pane.querySelectorAll('pre code.language-mermaid'));
      
      if (window.mermaid && mermaidBlocks.length > 0) {
        try { mermaid.initialize({ startOnLoad: false, theme: 'default', securityLevel: 'loose' }); } catch(e){}
      }
      
      mermaidBlocks.forEach(async (block, index) => {
        const rawCode = block.textContent; // Perfectly unescaped raw string (e.g. '-->')
        
        const div = document.createElement('div');
        div.className = 'mermaid-rendered';
        div.style.textAlign = 'center';
        div.style.margin = '30px 0';
        div.innerHTML = `<span style="opacity: 0.5; font-size: 14px; font-style: italic;">Drawing diagram...</span>`;
        
        block.parentNode.replaceWith(div);
        
        if (window.mermaid) {
          try {
            const id = 'mermaid-diagram-' + Date.now() + '-' + index;
            // Use Mermaid 10's async render API to completely bypass DOM text node HTML escaping bugs
            const { svg } = await mermaid.render(id, rawCode);
            div.innerHTML = svg;
          } catch (e) {
            console.error("Mermaid syntax error:", e);
            div.innerHTML = `<div style="color: var(--color-marker-red); border: 2px dashed var(--color-marker-red); padding: 15px; border-radius: 8px;">
              <strong>Mermaid Syntax Error:</strong><br/>
              <span style="font-size: 13px; opacity: 0.8;">${e.message}</span>
            </div>`;
          }
        }
      });

      // Render Highlight.js Code Highlighting (after mermaid extraction)
      pane.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
        
        const pre = block.parentNode;
        if (pre && pre.tagName === 'PRE') {
          const btn = document.createElement('button');
          btn.className = 'pre-copy-btn';
          btn.innerHTML = `<i data-lucide="copy" style="width: 14px; height: 14px;"></i>`;
          btn.addEventListener('click', () => {
            navigator.clipboard.writeText(block.innerText);
            btn.innerHTML = `<i data-lucide="check" style="width: 14px; height: 14px; color: #ff4d4d;"></i>`;
            setTimeout(() => {
              btn.innerHTML = `<i data-lucide="copy" style="width: 14px; height: 14px;"></i>`;
              if (window.lucide) lucide.createIcons();
            }, 1500);
            if (window.lucide) lucide.createIcons();
          });
          pre.appendChild(btn);
        }
      });

      // Mermaid Diagrams are now rendered asynchronously inline above.

      // Intercept internal markdown links for in-app navigation
      pane.querySelectorAll('a').forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
          anchor.addEventListener('click', (e) => {
            e.preventDefault();
            // Resolve relative paths from the current document's directory
            const currentDir = filePath.includes('/') ? filePath.substring(0, filePath.lastIndexOf('/')) : '';
            let targetPath = href;
            if (currentDir && !href.startsWith('/')) {
              targetPath = currentDir + '/' + href;
            }
            // Clean up the path (remove ./ and resolve ../)
            targetPath = targetPath.replace(/^\.\//, '');
            // Try to find the file in our database
            const found = AppState.files.find(f => f.path === targetPath || f.path.endsWith(href));
            if (found) {
              loadDocument(found.path);
            } else {
              loadDocument(targetPath);
            }
          });
        }
      });

      // Update Document Header details
      document.getElementById('doc-title').innerText = fileMeta.title || 'Knowledge Guide';
      
      const metaContainer = document.getElementById('doc-meta-tags-container');
      if (metaContainer) {
        metaContainer.innerHTML = `
          <span class="doc-meta-tag tag-difficulty">${fileMeta.difficulty || 'Intermediate'}</span>
          <span class="doc-meta-tag tag-domain">${getDomainLabel(fileMeta.domainId)}</span>
        `;
      }

      generateTOCOutline();
      configureFooterNavigation(filePath);
      showReadingView();
      
      // Auto-collapse sidebar on mobile after selection
      if (window.innerWidth <= 900) {
        document.getElementById('app-sidebar').classList.add('collapsed');
        document.getElementById('sidebar-expand-toggle').classList.remove('hidden');
      }
      
      AppState.currentFile = filePath;
      AppState.navigationHistory.push(filePath);
      
      const breadcrumbs = document.getElementById('breadcrumbs');
      if (breadcrumbs) {
        breadcrumbs.innerHTML = `
          <a href="#" class="bread-link" id="bread-system-link">System</a>
          <i data-lucide="chevron-right" class="bread-sep"></i>
          <span>${getDomainLabel(fileMeta.domainId)}</span>
          <i data-lucide="chevron-right" class="bread-sep"></i>
          <span class="active">${fileMeta.title}</span>
        `;
        document.getElementById('bread-system-link')?.addEventListener('click', (e) => {
          e.preventDefault();
          showDashboard();
        });
        if (window.lucide) lucide.createIcons();
      }

    } catch (err) {
      console.error('Failed to load document:', err);
      const pane = document.getElementById('markdown-output-pane');
      if (pane) {
        pane.innerHTML = `
          <div style="padding: 40px; text-align: center; opacity: 0.7;">
            <h2 style="font-family: var(--font-heading);">📄 Document Not Found (or Blocked)</h2>
            <p>Could not load <strong>${filePath}</strong>.</p>
            <p style="font-size: 14px; margin-top: 10px; color: var(--color-marker-red);">
              <em>Note: If you opened this file directly from your computer (file:///), modern browsers block fetching text files. It will work perfectly on GitHub Pages! To test locally, use localhost:8080.</em>
            </p>
            <button class="wobbly-btn" style="margin: 20px auto; width: auto; justify-content: center;" onclick="document.getElementById('btn-close-reading').click()">← Back to Sketchboard</button>
          </div>
        `;
        
        // Ensure breadcrumbs still update so user isn't stuck
        const fileMeta = AppState.files.find(f => f.path === filePath) || { title: 'Unknown', domainId: 'root' };
        document.getElementById('doc-title').innerText = fileMeta.title;
        
        const breadcrumbs = document.getElementById('breadcrumbs');
        if (breadcrumbs) {
          breadcrumbs.innerHTML = `
            <a href="#" class="bread-link" id="bread-system-link">System</a>
            <i data-lucide="chevron-right" class="bread-sep"></i>
            <span class="active">${fileMeta.title}</span>
          `;
          document.getElementById('bread-system-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            showDashboard();
          });
          if (window.lucide) lucide.createIcons();
        }
        showReadingView();
      }
    }
  }

  function getDomainLabel(domainId) {
    const domain = AppState.domains.find(d => d.id === domainId);
    return domain ? domain.label : 'Specialty Sketch';
  }

  function showDashboard() {
    document.getElementById('reading-viewport').classList.remove('active');
    document.getElementById('dashboard-viewport').classList.add('active');
    
    document.getElementById('root-index-item')?.classList.add('active');
    document.querySelectorAll('.sidebar-nav-tree a.tree-item:not(#root-index-item)').forEach(item => item.classList.remove('active'));

    const breadcrumbs = document.getElementById('breadcrumbs');
    if (breadcrumbs) {
      breadcrumbs.innerHTML = `
        <a href="#" class="bread-link" id="bread-system-link">System</a>
        <i data-lucide="chevron-right" class="bread-sep"></i>
        <span class="active">Main Sketchboard</span>
      `;
      document.getElementById('bread-system-link')?.addEventListener('click', (e) => {
        e.preventDefault();
        showDashboard();
      });
      if (window.lucide) lucide.createIcons();
    }

    // Auto-collapse sidebar on mobile after selection
    if (window.innerWidth <= 900) {
      document.getElementById('app-sidebar').classList.add('collapsed');
      document.getElementById('sidebar-expand-toggle').classList.remove('hidden');
    }
  }

  function showReadingView() {
    document.getElementById('dashboard-viewport').classList.remove('active');
    document.getElementById('reading-viewport').classList.add('active');
  }

  // Outline TOC builder
  function generateTOCOutline() {
    const tocTree = document.getElementById('toc-tree');
    if (!tocTree) return;
    tocTree.innerHTML = '';

    const headers = document.querySelectorAll('#markdown-output-pane h1, #markdown-output-pane h2, #markdown-output-pane h3');
    
    if (headers.length === 0) {
      tocTree.innerHTML = `<span style="font-size:12px;color:#2d2d2d;opacity:0.5;">No outline available</span>`;
      return;
    }

    headers.forEach(h => {
      const link = document.createElement('a');
      link.className = `toc-link toc-${h.tagName.toLowerCase()}`;
      link.innerText = h.innerText.replace(/☕|🔗/g, '').trim();
      link.setAttribute('data-target-id', h.id);

      link.addEventListener('click', (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth' });
        
        tocTree.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active-toc-item'));
        link.classList.add('active-toc-item');
      });

      tocTree.appendChild(link);
    });
  }

  // Footer Navigation Link controller
  function configureFooterNavigation(currentPath) {
    const prevLink = document.getElementById('doc-prev-link');
    const nextLink = document.getElementById('doc-next-link');
    
    const index = AppState.files.findIndex(f => f.path === currentPath);
    if (index === -1) return;

    if (index > 0) {
      const prevFile = AppState.files[index - 1];
      prevLink.style.display = 'flex';
      const a = prevLink.querySelector('.nav-title-link');
      a.innerText = `← ${prevFile.title}`;
      a.onclick = (e) => {
        e.preventDefault();
        loadDocument(prevFile.path);
      };
    } else {
      prevLink.style.display = 'none';
    }

    if (index < AppState.files.length - 1) {
      const nextFile = AppState.files[index + 1];
      nextLink.style.display = 'flex';
      const a = nextLink.querySelector('.nav-title-link');
      a.innerText = `${nextFile.title} →`;
      a.onclick = (e) => {
        e.preventDefault();
        loadDocument(nextFile.path);
      };
    } else {
      nextLink.style.display = 'none';
    }
  }

  // Scroll listener to update TOC highlights and progress fill
  const readingOutputPane = document.getElementById('markdown-output-pane');
  if (readingOutputPane) {
    readingOutputPane.addEventListener('scroll', () => {
      const pane = readingOutputPane;
      const scrollPercent = (pane.scrollTop / (pane.scrollHeight - pane.clientHeight)) * 100;
      
      const indicator = document.getElementById('reading-progress-indicator');
      if (indicator) {
        indicator.style.width = `${scrollPercent}%`;
      }

      const headers = pane.querySelectorAll('h1, h2, h3');
      let activeHeaderId = null;
      
      headers.forEach(h => {
        const top = h.getBoundingClientRect().top - pane.getBoundingClientRect().top;
        if (top < 120) {
          activeHeaderId = h.id;
        }
      });

      if (activeHeaderId) {
        document.querySelectorAll('.toc-links-tree .toc-link').forEach(link => {
          if (link.getAttribute('data-target-id') === activeHeaderId) {
            link.classList.add('active-toc-item');
          } else {
            link.classList.remove('active-toc-item');
          }
        });
      }
    });
  }

  /* ==========================================================================
     9. EVENT LISTENERS & USER INTERFACES
     ========================================================================== */
  function initEventListeners() {
    const sidebar = document.getElementById('app-sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarExpandToggle = document.getElementById('sidebar-expand-toggle');

    // Initialize collapsed on mobile
    if (window.innerWidth <= 900) {
      sidebar.classList.add('collapsed');
      sidebarExpandToggle.classList.remove('hidden');
    }

    sidebarToggle?.addEventListener('click', () => {
      sidebar.classList.add('collapsed');
      sidebarExpandToggle.classList.remove('hidden');
    });

    sidebarExpandToggle?.addEventListener('click', () => {
      sidebar.classList.remove('collapsed');
      sidebarExpandToggle.classList.add('hidden');
    });

    document.getElementById('sidebar-search-trigger')?.addEventListener('click', () => toggleSearchPalette(true));
    document.getElementById('search-modal')?.addEventListener('click', (e) => {
      if (e.target === document.getElementById('search-modal')) {
        toggleSearchPalette(false);
      }
    });

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const isOpen = searchModal.classList.contains('active');
        toggleSearchPalette(!isOpen);
      }
      
      if (e.key === 'Escape') {
        toggleSearchPalette(false);
      }

      if (searchModal.classList.contains('active')) {
        const results = searchResults.querySelectorAll('.search-item');
        if (results.length > 0) {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedSearchIndex = (selectedSearchIndex + 1) % results.length;
            highlightSearchItem(results);
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedSearchIndex = (selectedSearchIndex - 1 + results.length) % results.length;
            highlightSearchItem(results);
          } else if (e.key === 'Enter') {
            e.preventDefault();
            results[selectedSearchIndex].click();
          }
        }
      }
    });

    function highlightSearchItem(items) {
      items.forEach((item, idx) => {
        if (idx === selectedSearchIndex) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
      scrollToSelectedSearchItem();
    }

    searchInput?.addEventListener('input', () => {
      const query = searchInput.value.trim();
      selectedSearchIndex = 0;
      
      if (query === '') {
        renderSearchResults([]);
      } else {
        const matches = AppState.searchEngine.search(query).slice(0, 10);
        renderSearchResults(matches);
      }
    });

    // Focus / Fullscreen Mode
    document.getElementById('btn-toggle-focus')?.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
    });

    document.getElementById('btn-fullscreen-toggle')?.addEventListener('click', () => {
      document.body.classList.toggle('focus-mode');
    });

    document.getElementById('btn-close-reading')?.addEventListener('click', showDashboard);

    document.getElementById('btn-toc-toggle')?.addEventListener('click', () => {
      document.getElementById('document-toc').classList.toggle('collapsed');
    });

    document.getElementById('root-index-item')?.addEventListener('click', (e) => {
      e.preventDefault();
      showDashboard();
    });

    // Subtle Ambiance Switcher (Marker Pencil Color switcher)
    let colorThemeId = 0;
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => {
      const themes = [
        { red: '#ff4d4d', blue: '#2d5da1' },
        { red: '#2d2d2d', blue: '#8b5a2b' },
        { red: '#ff69b4', blue: '#32cd32' }
      ];
      colorThemeId = (colorThemeId + 1) % themes.length;
      
      document.documentElement.style.setProperty('--color-marker-red', themes[colorThemeId].red);
      document.documentElement.style.setProperty('--color-ballpoint-blue', themes[colorThemeId].blue);
      
      // Update D3 Node colors
      if (AppState.graph.simulation) {
        d3.select('#knowledge-constellation-graph')
          .selectAll('circle')
          .attr('fill', d => {
            if (d.type === 'index') return '#fff9c4';
            if (d.type === 'data') return themes[colorThemeId].blue;
            if (d.difficulty === 'beginner') return '#8fbc8f';
            if (d.difficulty === 'advanced') return themes[colorThemeId].red;
            return '#b26b30';
          });
      }

      // Update Chart Colors dynamically
      if (AppState.charts.density) {
        AppState.charts.density.data.datasets[0].borderColor = themes[colorThemeId].blue;
        AppState.charts.density.data.datasets[0].backgroundColor = themes[colorThemeId].blue + '25';
        AppState.charts.density.update();
      }
      if (AppState.charts.radar) {
        AppState.charts.radar.data.datasets[0].borderColor = themes[colorThemeId].blue;
        AppState.charts.radar.data.datasets[0].backgroundColor = themes[colorThemeId].blue + '15';
        AppState.charts.radar.data.datasets[0].pointBackgroundColor = themes[colorThemeId].blue;
        
        AppState.charts.radar.data.datasets[1].borderColor = themes[colorThemeId].red;
        AppState.charts.radar.data.datasets[1].backgroundColor = themes[colorThemeId].red + '15';
        AppState.charts.radar.data.datasets[1].pointBackgroundColor = themes[colorThemeId].red;
        
        AppState.charts.radar.update();
      }
    });
  }

});
