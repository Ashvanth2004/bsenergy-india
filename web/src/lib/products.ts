// ============================================================================
// BS ENERGY EQUIPMENTS — Products & Pages Data
// Type definitions and curated product/page metadata for the site.
// ============================================================================

export type ProductCategory =
  | "industrial-burner"
  | "industrial-chimney"
  | "burner-controller"
  | "hot-water-generator"
  | "heat-recovery-system"
  | "thermal-fluid-heater"
  | "industrial-pipeline"
  | "fabrication";

export type WhatsAppMessageKey =
  | "industrialBurner"
  | "burnerController"
  | "industrialPipeline"
  | "fabrication";
export interface Product {
  id: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt?: string;
  whatsappKey: WhatsAppMessageKey;
  detail?: string;
}

// ----------------------------------------------------------------------------
// Product catalogue
// ----------------------------------------------------------------------------


export const PRODUCTS: Product[] = [
  {
    id: "industrial-burner",
    name: "Industrial Burners",
    tagline: "Reliable combustion solutions for industrial heating applications",
    description:
      "Our Industrial Burners are designed for industrial heating applications where reliable and efficient combustion is required. We provide burner solutions suitable for different industrial heating systems and applications.",
    image: "Industrial Burner.png",
    alt: "Industrial burner equipment",
    whatsappKey: "industrialBurner",
    detail: "Combustion · Industrial Heating",
  },
  {
    id: "burner-controller",
    name: "Burner Controllers",
    tagline: "Control your combustion system with confidence",
    description:
      "Burner Controllers are essential for controlling and managing burner operation. We supply reliable burner control solutions suitable for industrial combustion systems.",
    image: "Burner Controller.png",
    alt: "Burner controller unit",
    whatsappKey: "burnerController",
    detail: "Controls · Combustion Management",
  },
  {
    id: "industrial-pipeline",
    name: "Industrial Pipelines",
    tagline: "Industrial pipeline solutions for process requirements",
    description:
      "We provide Industrial Pipeline solutions for industrial applications and process requirements, including pipeline fabrication and related requirements based on project specifications.",
    image: "Industrial Pipeline.png",
    alt: "Industrial pipeline system",
    whatsappKey: "industrialPipeline",
    detail: "Fabrication · Process Piping",
  },
  {
    id: "industrial-chimney",
    name: "Industrial Chimneys",
    tagline: "Engineered exhaust and ventilation solutions",
    description:
      "Industrial Chimneys are supplied for applications requiring properly designed exhaust and ventilation systems, matched to the process and installation requirements.",
    image: "neutral-grid.svg",
    alt: "Industrial chimney system",
    whatsappKey: "industrialBurner",
  },
  {
    id: "hot-water-generator",
    name: "Hot Water Generators",
    tagline: "On-demand hot water for industrial processes",
    description:
      "Hot Water Generators are provided for industrial processes requiring dependable hot water supply, selected and configured according to the application's heating demand.",
    image: "neutral-grid.svg",
    alt: "Hot water generator unit",
    whatsappKey: "industrialBurner",
  },
  {
    id: "heat-recovery-system",
    name: "Heat Recovery Systems",
    tagline: "Recover and reuse process heat efficiently",
    description:
      "Heat Recovery Systems help capture and reuse thermal energy from industrial processes, supporting more efficient operation of heating and energy-related installations.",
    image: "neutral-grid.svg",
    alt: "Heat recovery system",
    whatsappKey: "industrialBurner",
  },
  {
    id: "thermal-fluid-heater",
    name: "Thermal Fluid Heaters",
    tagline: "Indirect heating for process applications",
    description:
      "Thermal Fluid Heaters are supplied for applications that use thermal fluid as the heating medium, offering indirect heating suitable for a range of industrial process requirements.",
    image: "neutral-grid.svg",
    alt: "Thermal fluid heater",
    whatsappKey: "industrialBurner",
  },
  {
    id: "fabrication",
    name: "Fabrication Services",
    tagline: "Custom fabrication for industrial requirements",
    description:
      "Industrial Fabrication Services are available for project-specific requirements, from component fabrication to larger engineered assemblies based on the customer's application.",
    image: "neutral-grid.svg",
    alt: "Industrial fabrication work",
    whatsappKey: "fabrication",
  },
];

export const HERO_IMAGE = "Industrial Burner.png";
export const ABOUT_IMAGE = "Industrial Projects and Installations.png";
export const FEATURED_BURNER_IMAGE = "Industrial Burner.png";
export const FEATURED_CONTROLLER_IMAGE = "Burner Controller.png";
export const FEATURED_PIPELINE_IMAGE = "Industrial Pipeline.png";
export const PROJECTS_IMAGE = "Industrial Projects and Installations.png";
export const ABOUT_IMAGE_ALT = "Industrial projects and installations";
export const GALLERY_IMAGES = [
  "Industrial Burner.png",
  "Burner Controller.png",
  "Industrial Pipeline.png",
  "Industrial Projects and Installations.png",
];

export const PRODUCT_PAGES = [
  { slug: "industrial-burner", title: "Industrial Burners" },
  { slug: "burner-controller", title: "Burner Controllers" },
  { slug: "industrial-pipeline", title: "Industrial Pipelines" },
  { slug: "industrial-chimney", title: "Industrial Chimneys" },
  { slug: "hot-water-generator", title: "Hot Water Generators" },
  { slug: "heat-recovery-system", title: "Heat Recovery Systems" },
  { slug: "thermal-fluid-heater", title: "Thermal Fluid Heaters" },
  { slug: "fabrication", title: "Fabrication Services" },
] as const;
