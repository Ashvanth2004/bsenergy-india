export interface Product {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image?: string;
  hasSuppliedImage: boolean;
  whatsappMessage: string;
  features: string[];
  applications: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface BrandItem {
  name: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "PRODUCTS" | "PROJECTS" | "EQUIPMENT" | "PIPELINE" | "CONTROLS";
  image: string;
  description: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "industrial-burners",
    slug: "industrial-burners",
    number: "01",
    name: "Industrial Burners",
    shortDescription: "Reliable combustion solutions for industrial heating applications with optimum thermal efficiency.",
    fullDescription: "Our Industrial Burners are engineered for demanding heating applications where dependable, efficient combustion and strict thermal control are required. Designed to accommodate various fuel types and industrial processes, these burner systems deliver stable performance across diverse temperature ranges and continuous operational cycles.",
    image: "/images/Industrial Burner.png",
    hasSuppliedImage: true,
    whatsappMessage: "Hello BS Energy India, I am interested in your Industrial Burner solutions. Please share suitable options and quotation details. My requirement is:",
    features: [
      "High combustion efficiency and flame stability",
      "Compatible with multiple industrial fuel specifications",
      "Low emission design meeting environmental standards",
      "Robust construction built for continuous industrial duty"
    ],
    applications: ["Process Heating", "Boiler Plants", "Thermal Fluid Heaters", "Industrial Ovens & Dryers"]
  },
  {
    id: "burner-controllers",
    slug: "burner-controllers",
    number: "02",
    name: "Burner Controllers",
    shortDescription: "Precision control systems essential for managing and automating burner sequence, ignition, and safety.",
    fullDescription: "Burner Controllers are critical components for controlling and managing burner operation safely and efficiently. We supply reliable burner control solutions engineered to monitor flame presence, control ignition timing, manage fuel valves, and ensure comprehensive safe operational sequences for industrial combustion systems.",
    image: "/images/Burner Controller.png",
    hasSuppliedImage: true,
    whatsappMessage: "Hello BS Energy India, I am interested in a Burner Controller. Please share suitable options and quotation details. My requirement is:",
    features: [
      "Automated ignition and sequence management",
      "Flame monitoring and rapid safety shut-off",
      "Compact, industrial-grade enclosure design",
      "Seamless integration with industrial control panels"
    ],
    applications: ["Industrial Combustion Systems", "Boiler Control Panels", "Automated Heating Units", "Safety Interlock Systems"]
  },
  {
    id: "industrial-pipelines",
    slug: "industrial-pipelines",
    number: "03",
    name: "Industrial Pipelines",
    shortDescription: "Custom fabricated pipeline systems engineered for process fluids, steam, thermal oil, and gas distribution.",
    fullDescription: "We provide complete Industrial Pipeline solutions for process requirements and fluid distribution across industrial facilities. Our scope encompasses pipeline layout planning, precision fabrication, high-pressure line welding, and installation support built to project technical specifications.",
    image: "/images/Industrial Pipeline.png",
    hasSuppliedImage: true,
    whatsappMessage: "Hello BS Energy India, I am interested in Industrial Pipeline solutions. Please contact me regarding my project requirement.",
    features: [
      "Precision fabrication matching project drawings",
      "High-pressure line integrity and certified welding",
      "Corrosion-resistant material selection for fluids/gases",
      "Custom layout integration for plant infrastructure"
    ],
    applications: ["Steam & Thermal Lines", "Fuel Line Distribution", "Gas & Compressed Air Lines", "Process Chemical Lines"]
  },
  {
    id: "industrial-chimneys",
    slug: "industrial-chimneys",
    number: "04",
    name: "Industrial Chimneys",
    shortDescription: "Engineered exhaust and stack systems designed for safe dispersion of combustion gases.",
    fullDescription: "Industrial Chimneys engineered to handle high-temperature flue gases, providing efficient draft and environmental dispersion for industrial boilers, furnaces, and heating equipment.",
    hasSuppliedImage: false,
    whatsappMessage: "Hello BS Energy India, I am interested in your Industrial Chimney solutions. Please contact me regarding my requirement.",
    features: [
      "Self-supporting and guy-wired structural options",
      "Thermal insulation lining for heat retention",
      "Weather and corrosion resistant coatings",
      "Designed according to draft and dispersion standards"
    ],
    applications: ["Boiler Exhaust Systems", "Furnace Flue Stacks", "Generator Exhaust Lines", "Incinerator Stacks"]
  },
  {
    id: "hot-water-generators",
    slug: "hot-water-generators",
    number: "05",
    name: "Hot Water Generators",
    shortDescription: "Efficient thermal water heating units for process requirements and commercial facilities.",
    fullDescription: "Heavy-duty Hot Water Generators designed for rapid thermal transfer and continuous hot water supply across industrial processes, textile processing, chemical plants, and commercial installations.",
    hasSuppliedImage: false,
    whatsappMessage: "Hello BS Energy India, I am interested in Hot Water Generators. Please contact me regarding my requirement.",
    features: [
      "High efficiency heat exchanger bundles",
      "Automated temperature regulation",
      "Insulated shell for minimized thermal loss",
      "Dual fuel or gas burner compatibility"
    ],
    applications: ["Process Heating", "Textile Washing Lines", "Chemical Washing", "Hospitality & Commercial Heating"]
  },
  {
    id: "heat-recovery-systems",
    slug: "heat-recovery-systems",
    number: "06",
    name: "Heat Recovery Systems",
    shortDescription: "Energy-saving waste heat recovery units designed to capture thermal energy from exhaust gases.",
    fullDescription: "Advanced Heat Recovery Systems (Economizers & Waste Heat Boilers) engineered to capture waste thermal energy from stack exhaust gases and redirect it into preheating boiler feedwater or process air, dramatically reducing fuel consumption.",
    hasSuppliedImage: false,
    whatsappMessage: "Hello BS Energy India, I am interested in Heat Recovery Systems. Please contact me regarding my requirement.",
    features: [
      "Substantial fuel consumption savings",
      "Finned tube heat exchanger design",
      "Durable stainless / alloy steel construction",
      "Quick return on energy investment"
    ],
    applications: ["Boiler Flue Gas Recovery", "Furnace Exhaust Heat Capture", "Industrial Dryer Recirculation", "Process Energy Audit Upgrades"]
  },
  {
    id: "thermal-fluid-heaters",
    slug: "thermal-fluid-heaters",
    number: "07",
    name: "Thermal Fluid Heaters",
    shortDescription: "High-temperature fluid heating systems delivering precise heat without high pressure.",
    fullDescription: "Thermal Fluid Heaters (Thermic Fluid Systems) designed to provide uniform high-temperature process heat at atmospheric pressures, eliminating the safety and regulation overhead of high-pressure steam boilers.",
    hasSuppliedImage: false,
    whatsappMessage: "Hello BS Energy India, I am interested in Thermal Fluid Heaters. Please contact me regarding my requirement.",
    features: [
      "High temperature capability up to 300°C+",
      "Closed loop thermic oil circulation",
      "Fully automated safety cut-off controls",
      "Multi-pass coil configuration for maximum heat transfer"
    ],
    applications: ["Plastic Molding", "Chemical Reactors", "Lamination & Textile Drying", "Bitumen & Oil Heating"]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "EQUIPMENT SUPPLY",
    description: "Sourcing, procurement, and supply of industrial burners, controllers, heat exchangers, valves, and energy systems from trusted manufacturers.",
    features: ["Verified equipment quality", "Prompt technical specification matching", "Complete documentation support"]
  },
  {
    number: "02",
    title: "FABRICATION",
    description: "Custom structural and pressure fabrication including industrial chimneys, piping systems, ductwork, and specialized heating vessel frames.",
    features: ["Precision structural welding", "Custom drawings compliance", "Quality inspection & testing"]
  },
  {
    number: "03",
    title: "PROJECT SUPPORT",
    description: "On-site engineering assistance, equipment placement, pipeline alignment, and installation guidance for industrial expansion and retrofits.",
    features: ["Site engineering alignment", "Technical installation guidance", "Integration assistance"]
  },
  {
    number: "04",
    title: "TECHNICAL GUIDANCE",
    description: "Expert engineering consultation to help select optimal burner sizing, combustion efficiency parameters, and energy recovery configurations.",
    features: ["Combustion parameter review", "Energy efficiency optimization", "System sizing advisory"]
  },
  {
    number: "05",
    title: "CUSTOMIZED INDUSTRIAL SOLUTIONS",
    description: "Tailored engineering solutions configured specifically around unique plant space constraints, operational duties, and heat demand profiles.",
    features: ["Custom dimension fitting", "Bespoke control integration", "Targeted performance tuning"]
  }
];

export const WHY_CHOOSE_US_DATA = [
  { number: "01", title: "ENGINEERING EXCELLENCE", text: "Custom-engineered combustion, heating, and pipeline systems built to exact operational standards and severe continuous-duty cycles." },
  { number: "02", title: "UNCOMPROMISED SAFETY & RELIABILITY", text: "Precision control modules, fail-safe monitoring, and robust structural fabrications designed to protect your workforce and eliminate unscheduled downtime." },
  { number: "03", title: "SUSTAINABLE COST REDUCTION", text: "Advanced heat recovery and high-efficiency burner architectures that significantly cut fuel consumption and lower total cost of ownership." },
  { number: "04", title: "TAILORED CUSTOMIZATION", text: "Bespoke engineering configured around your plant's unique spatial layout, temperature requirements, and fluid distribution demands." },
  { number: "05", title: "END-TO-END PARTNERSHIP", text: "Comprehensive technical advisory, equipment supply, precision fabrication, and lifecycle support for long-term operational success." },
  { number: "06", title: "MEASURABLE LASTING VALUE", text: "Commitment to delivering proven performance enhancements, improved productivity, and rapid return on energy investments." }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  { id: "manufacturing", name: "Manufacturing", description: "Heavy and light manufacturing facilities requiring reliable combustion and process heating.", iconName: "Factory" },
  { id: "process", name: "Process Industries", description: "Chemical, pharmaceutical, and continuous processing plants with stringent thermal parameters.", iconName: "Cpu" },
  { id: "engineering", name: "Engineering Industries", description: "Machining, metal treatment, and industrial equipment fabrication units.", iconName: "Wrench" },
  { id: "heating", name: "Heating Applications", description: "Industrial air, oil, and liquid heating installations.", iconName: "Flame" },
  { id: "boiler", name: "Boiler Applications", description: "Boiler auxiliary equipment, burner retrofits, stack piping, and control panel automation.", iconName: "Gauge" },
  { id: "plants", name: "Industrial Plants", description: "Integrated utility lines, fluid management systems, and plant heat distribution.", iconName: "Building2" },
  { id: "commercial-heating", name: "Commercial Heating", description: "Large-scale commercial water heating, laundry processing, and HVAC auxiliary setups.", iconName: "Thermometer" },
  { id: "process-heating", name: "Process Heating", description: "Specialized heat transfer loops, thermic fluid circulation, and oven firing.", iconName: "Zap" },
  { id: "energy-recovery", name: "Energy Recovery", description: "Exhaust waste heat capture systems to lower overall fuel costs.", iconName: "Recycle" },
  { id: "fabrication", name: "Fabrication Projects", description: "Heavy steel structures, stack fabrications, skid units, and custom manifolds.", iconName: "Layers" }
];

export const BRANDS_DATA: BrandItem[] = [
  { name: "Danfoss", category: "Nozzles, Oil Pumps & Valves" },
  { name: "Brahma", category: "Control Units & Flame Sensors" },
  { name: "Ecoflame", category: "Combustion & Burner Assemblies" },
  { name: "Petercem", category: "Microswitches & Heavy Switches" }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "On-Site Deck Precision Welding",
    category: "PROJECTS",
    image: "/images/project-precision-welding-team.jpg",
    description: "Certified welding specialists performing continuous MIG/TIG welding on heavy steel plate deck."
  },
  {
    id: "gal-2",
    title: "Dual Crane Wall Plate Erection",
    category: "PROJECTS",
    image: "/images/project-dual-crane-wall-erection.jpg",
    description: "Synchronized dual mobile crane operation erecting massive structural steel wall plates."
  },
  {
    id: "gal-3",
    title: "Heavy Equipment Crane Lift & Placement",
    category: "EQUIPMENT",
    image: "/images/project-crane-fan-lift.jpg",
    description: "Dual crane lifting and precision positioning of a heavy industrial blower fan unit."
  },
  {
    id: "gal-4",
    title: "Heavy Steel Storage Tanks Layout",
    category: "PROJECTS",
    image: "/images/project-steel-tanks-layout.jpg",
    description: "Parallel heavy industrial steel storage tanks and exhaust stack scaffold structure."
  },
  {
    id: "gal-5",
    title: "Structural Steel Column Array",
    category: "PROJECTS",
    image: "/images/project-site-columns.jpg",
    description: "Precision-aligned heavy structural steel columns for industrial facility expansion."
  },
  {
    id: "gal-6",
    title: "24/7 Nighttime Crane Erection",
    category: "PROJECTS",
    image: "/images/project-night-girder-install.jpg",
    description: "Continuous nighttime high-altitude girder erection using heavy mobile cranes."
  },
  {
    id: "gal-7",
    title: "Heavy Steel Wall Panel Hoist",
    category: "EQUIPMENT",
    image: "/images/project-crane-steel-panel.jpg",
    description: "Precision crane operation hoisting and placing heavy fabricated steel wall panels."
  },
  {
    id: "gal-8",
    title: "Heavy Industrial Silo Structure",
    category: "PROJECTS",
    image: "/images/project-heavy-steel-structure.jpg",
    description: "Multi-story heavy plate silo fabrication and structural framework installation."
  },
  {
    id: "gal-9",
    title: "Turnkey Plant Site Development",
    category: "PROJECTS",
    image: "/images/project-plant-site-aerial.jpg",
    description: "Wide aerial perspective of industrial plant layout, foundations, and utility installations."
  },
  {
    id: "gal-10",
    title: "Overhead Steel Truss Beam Erection",
    category: "PROJECTS",
    image: "/images/project-crane-truss-lift.jpg",
    description: "Precision crane operation placing long-span steel truss for industrial plant infrastructure."
  },
  {
    id: "gal-11",
    title: "Industrial Burner Unit",
    category: "PRODUCTS",
    image: "/images/Industrial Burner.png",
    description: "High-efficiency industrial burner assembly engineered for reliable combustion performance."
  },
  {
    id: "gal-12",
    title: "Burner Control Module",
    category: "CONTROLS",
    image: "/images/Burner Controller.png",
    description: "Automated burner sequence controller for safe ignition monitoring and system interlocks."
  },
  {
    id: "gal-13",
    title: "High-Pressure Industrial Pipeline",
    category: "PIPELINE",
    image: "/images/Industrial Pipeline.png",
    description: "Precision fabricated industrial pipeline manifold for high-pressure process fluid distribution."
  }
];
