import wheatImg from "@/assets/crop-wheat.jpg";
import cottonImg from "@/assets/crop-cotton.jpg";
import riceImg from "@/assets/crop-rice.jpg";
import maizeImg from "@/assets/crop-maize.jpg";
import vegetablesImg from "@/assets/crop-vegetables.jpg";
import fodderImg from "@/assets/crop-fodder.jpg";
import oilseedImg from "@/assets/crop-oilseed.jpg";
import pulsesImg from "@/assets/crop-pulses.jpg";

export type CategoryId =
  | "wheat"
  | "cotton"
  | "rice"
  | "maize"
  | "vegetables"
  | "fodder"
  | "oilseeds"
  | "pulses";

export interface Category {
  id: CategoryId;
  name: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Crop extends Category {
  overview: string;
  varieties: string[];
}

export interface Seed {
  slug: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  variety: string;
  shortDescription: string;
  description: string;
  features: string[];
  characteristics: string[];
  usage: string;
  growingInfo: string[];
  packaging: string[];
  quality: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  crop: string;
  rating: number;
  quote: string;
}

export const company = {
  name: "Khyber Seed",
  tagline: "Growing Better Seeds. Growing Better Futures.",
  phone: "+92 300 000 0000",
  whatsapp: "923000000000",
  email: "info@khyberseed.example",
  address: "Plot 14, Agri Business Park, Peshawar Road, Pakistan",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
};

export const stats = [
  { value: 25, suffix: "+", label: "Years of Agricultural Experience" },
  { value: 50, suffix: "+", label: "Seed Varieties" },
  { value: 10000, suffix: "+", label: "Farmers Served" },
  { value: 100, suffix: "%", label: "Quality Focused" },
];

export const crops: Crop[] = [
  {
    id: "wheat",
    name: "Wheat Seeds",
    label: "Wheat",
    description: "High-performing wheat varieties selected for strong crop performance.",
    overview:
      "Wheat remains the backbone of regional food production. Our wheat portfolio focuses on varieties with sturdy straw, reliable tillering and consistent grain quality across common sowing windows.",
    varieties: ["Khyber Gold Wheat", "Khyber Wheat 303", "Khyber Early Wheat"],
    image: wheatImg,
    imageAlt: "Close-up of golden wheat ears ready for harvest",
  },
  {
    id: "cotton",
    name: "Cotton Seeds",
    label: "Cotton",
    description: "Improved cotton varieties designed for productive cultivation.",
    overview:
      "Cotton demands seed that establishes quickly and holds up through a long season. Our cotton range is selected for vigorous early growth and dependable boll retention.",
    varieties: ["Khyber Cotton Plus", "Khyber Cotton 77"],
    image: cottonImg,
    imageAlt: "White cotton bolls open on cotton plants in a field",
  },
  {
    id: "rice",
    name: "Rice Seeds",
    label: "Rice",
    description: "Quality rice seeds suitable for different growing conditions.",
    overview:
      "From fine aromatic types to sturdy coarse varieties, our rice seed is processed and graded to support uniform nurseries and even transplanting.",
    varieties: ["Khyber Super Rice", "Khyber Basmati Select"],
    image: riceImg,
    imageAlt: "Green paddy rice field with developing grain heads",
  },
  {
    id: "maize",
    name: "Maize Seeds",
    label: "Maize",
    description: "Reliable maize varieties for better crop performance.",
    overview:
      "Maize responds strongly to seed quality. Our maize varieties are chosen for even emergence, good standability and adaptability to spring and autumn sowing.",
    varieties: ["Khyber Maize Pro", "Khyber Hybrid Maize 9"],
    image: maizeImg,
    imageAlt: "Ripe maize cob with golden kernels on the plant",
  },
  {
    id: "vegetables",
    name: "Vegetable Seeds",
    label: "Vegetables",
    description:
      "A wide selection of seeds for commercial and agricultural vegetable production.",
    overview:
      "A broad vegetable range for market growers — tomato, chilli, okra, cucurbits and leafy types — packed in sizes that suit both trial plots and commercial acreage.",
    varieties: ["Khyber Vegetable Select", "Khyber Tomato Prime", "Khyber Okra Green"],
    image: vegetablesImg,
    imageAlt: "Freshly harvested vegetables in crates on a farm",
  },
  {
    id: "fodder",
    name: "Fodder Seeds",
    label: "Fodder",
    description: "Quality fodder seed options for livestock farming.",
    overview:
      "Livestock farms need steady green fodder through the year. Our fodder seed covers multi-cut and seasonal options for dairy and mixed farming systems.",
    varieties: ["Khyber Fodder Max", "Khyber Berseem Green"],
    image: fodderImg,
    imageAlt: "Lush green fodder grass crop growing in a field",
  },
  {
    id: "oilseeds",
    name: "Oilseed Seeds",
    label: "Oilseeds",
    description: "Selected varieties for oil-producing crops.",
    overview:
      "Oilseed crops fit well into rotation planning. Our canola, mustard and sunflower seed is selected for uniform maturity and clean, well-graded lots.",
    varieties: ["Khyber Canola Prime", "Khyber Sunflower Sun"],
    image: oilseedImg,
    imageAlt: "Yellow oilseed flower field with a sunflower in focus",
  },
  {
    id: "pulses",
    name: "Pulses",
    label: "Pulses",
    description: "Quality pulse seeds for productive farming.",
    overview:
      "Pulses support soil health and farm income. Our pulse seed is cleaned and graded to reduce sowing losses and support even stands.",
    varieties: ["Khyber Gram Select", "Khyber Mung Bright"],
    image: pulsesImg,
    imageAlt: "Assorted pulses and lentils in burlap sacks",
  },
];

export const categories: Category[] = crops.map(({ overview: _o, varieties: _v, ...rest }) => rest);

const cropName = (id: CategoryId) => crops.find((c) => c.id === id)!.label;
const cropImage = (id: CategoryId) => crops.find((c) => c.id === id)!.image;

function makeSeed(
  seed: Omit<Seed, "categoryName" | "image" | "imageAlt"> & { imageAlt?: string },
): Seed {
  return {
    ...seed,
    categoryName: cropName(seed.category),
    image: cropImage(seed.category),
    imageAlt: seed.imageAlt ?? `${seed.name} — ${cropName(seed.category)} seed variety`,
  };
}

export const seeds: Seed[] = [
  makeSeed({
    slug: "khyber-gold-wheat",
    name: "Khyber Gold Wheat",
    category: "wheat",
    variety: "KG-101",
    shortDescription:
      "A dependable wheat variety selected for strong tillering and consistent grain quality.",
    description:
      "Khyber Gold Wheat is a widely adaptable variety selected over multiple seasons for its sturdy straw, even maturity and clean grain sample. It suits normal sowing windows on medium to heavy soils and is a practical choice for growers who value reliability.",
    features: [
      "High Yield Potential",
      "Disease Tolerance",
      "Strong Crop Growth",
      "Suitable for Local Conditions",
    ],
    characteristics: ["Strong tillering", "Even maturity", "Good grain plumpness"],
    usage:
      "Recommended for timely sowing on well-prepared seedbeds with adequate moisture at planting.",
    growingInfo: [
      "Sowing window: November – early December",
      "Seed rate: as advised for local soil and sowing method",
      "Soil: medium to heavy, well drained",
      "Irrigation: standard wheat schedule",
    ],
    packaging: ["10 kg bag", "25 kg bag", "50 kg bag"],
    quality:
      "Every lot is cleaned, graded and germination-tested before packing, with batch records maintained through dispatch.",
    featured: true,
  }),
  makeSeed({
    slug: "khyber-cotton-plus",
    name: "Khyber Cotton Plus",
    category: "cotton",
    variety: "KC-220",
    shortDescription:
      "An improved cotton variety with vigorous early growth and dependable boll setting.",
    description:
      "Khyber Cotton Plus is selected for quick establishment and steady performance through a long picking season. It performs well under standard cotton management in warm growing belts.",
    features: [
      "Strong Crop Growth",
      "Disease Tolerance",
      "High Yield Potential",
      "Suitable for Local Conditions",
    ],
    characteristics: ["Vigorous early growth", "Good boll retention", "Uniform plant stand"],
    usage: "Best suited to warm-season sowing with reliable irrigation availability.",
    growingInfo: [
      "Sowing window: April – May",
      "Soil: light to medium loam",
      "Spacing: as per local recommendation",
      "Irrigation: regular through flowering and boll formation",
    ],
    packaging: ["5 kg pack", "10 kg bag"],
    quality: "Delinted, graded and germination-checked seed with lot-level traceability.",
    featured: true,
  }),
  makeSeed({
    slug: "khyber-super-rice",
    name: "Khyber Super Rice",
    category: "rice",
    variety: "KR-140",
    shortDescription: "Fine grain rice seed processed for uniform nurseries and even transplanting.",
    description:
      "Khyber Super Rice offers an attractive grain type with good cooking quality and a plant habit that stands well through the season. Seed is graded to support strong, uniform nursery raising.",
    features: [
      "High Yield Potential",
      "Strong Crop Growth",
      "Suitable for Local Conditions",
      "Disease Tolerance",
    ],
    characteristics: ["Fine grain type", "Uniform nursery", "Good standability"],
    usage: "Suited to transplanted paddy systems with assured water availability.",
    growingInfo: [
      "Nursery sowing: May – June",
      "Transplanting: 25 – 30 day seedlings",
      "Soil: clay to clay loam",
      "Water: standing water through tillering",
    ],
    packaging: ["10 kg bag", "25 kg bag"],
    quality: "Cleaned and graded lots with germination testing before release.",
    featured: true,
  }),
  makeSeed({
    slug: "khyber-maize-pro",
    name: "Khyber Maize Pro",
    category: "maize",
    variety: "KM-505",
    shortDescription: "A maize variety chosen for even emergence and strong standability.",
    description:
      "Khyber Maize Pro is selected for quick, even emergence and good plant health through grain fill. It fits both spring and autumn maize planting programmes.",
    features: [
      "High Yield Potential",
      "Strong Crop Growth",
      "Disease Tolerance",
      "Suitable for Local Conditions",
    ],
    characteristics: ["Even emergence", "Good cob fill", "Strong stalks"],
    usage: "Suitable for grain and silage programmes under standard maize management.",
    growingInfo: [
      "Sowing window: spring and autumn",
      "Soil: well-drained loam",
      "Spacing: as per local plant population guidance",
      "Irrigation: critical at tasselling and grain fill",
    ],
    packaging: ["5 kg pack", "10 kg bag", "25 kg bag"],
    quality: "Graded, treated and germination-tested seed packed under controlled conditions.",
    featured: true,
  }),
  makeSeed({
    slug: "khyber-fodder-max",
    name: "Khyber Fodder Max",
    category: "fodder",
    variety: "KF-88",
    shortDescription: "Multi-cut fodder seed for consistent green feed on dairy and mixed farms.",
    description:
      "Khyber Fodder Max is intended for farms that need steady green fodder across the season. It regrows well after cutting and produces palatable, leafy material.",
    features: [
      "Strong Crop Growth",
      "Suitable for Local Conditions",
      "High Yield Potential",
      "Disease Tolerance",
    ],
    characteristics: ["Multi-cut habit", "Leafy growth", "Quick regrowth"],
    usage: "For green fodder production on dairy, livestock and mixed farming units.",
    growingInfo: [
      "Sowing window: as per season and fodder plan",
      "Soil: most well-drained soils",
      "Cutting: first cut at recommended growth stage",
      "Irrigation: after each cut",
    ],
    packaging: ["10 kg bag", "25 kg bag"],
    quality: "Cleaned seed lots with purity and germination checks before packing.",
    featured: true,
  }),
  makeSeed({
    slug: "khyber-vegetable-select",
    name: "Khyber Vegetable Select",
    category: "vegetables",
    variety: "KV-Mix",
    shortDescription: "A curated vegetable seed range for commercial market growers.",
    description:
      "Khyber Vegetable Select brings together our most requested vegetable lines in pack sizes suited to commercial production, from tomato and chilli to okra and cucurbits.",
    features: [
      "Suitable for Local Conditions",
      "Strong Crop Growth",
      "Disease Tolerance",
      "High Yield Potential",
    ],
    characteristics: ["Uniform germination", "Market-ready produce", "Wide seasonal fit"],
    usage: "For commercial vegetable growers and progressive market gardeners.",
    growingInfo: [
      "Season: varies by crop within the range",
      "Soil: fertile, well-drained beds",
      "Nursery: recommended for transplanted types",
      "Irrigation: regular, avoid waterlogging",
    ],
    packaging: ["50 g pack", "250 g pack", "1 kg pack"],
    quality: "Each line is germination-tested and packed in moisture-resistant packaging.",
    featured: true,
  }),
  makeSeed({
    slug: "khyber-canola-prime",
    name: "Khyber Canola Prime",
    category: "oilseeds",
    variety: "KO-31",
    shortDescription: "Oilseed variety selected for uniform maturity and clean, graded lots.",
    description:
      "Khyber Canola Prime fits well into rotation planning, with even flowering and maturity that helps simplify harvest management.",
    features: [
      "Suitable for Local Conditions",
      "Strong Crop Growth",
      "Disease Tolerance",
      "High Yield Potential",
    ],
    characteristics: ["Uniform maturity", "Good branching", "Clean seed lot"],
    usage: "Recommended for rotation with cereals on well-drained soils.",
    growingInfo: [
      "Sowing window: October – November",
      "Soil: well-drained loam",
      "Seed rate: as locally advised",
      "Irrigation: light and frequent early on",
    ],
    packaging: ["2 kg pack", "5 kg pack"],
    quality: "Graded and germination-tested with lot-level records.",
  }),
  makeSeed({
    slug: "khyber-gram-select",
    name: "Khyber Gram Select",
    category: "pulses",
    variety: "KP-19",
    shortDescription: "Cleaned and graded pulse seed for even stands and reduced sowing losses.",
    description:
      "Khyber Gram Select is prepared with careful grading so growers get consistent seed size and dependable establishment in pulse rotations.",
    features: [
      "Suitable for Local Conditions",
      "Disease Tolerance",
      "Strong Crop Growth",
      "High Yield Potential",
    ],
    characteristics: ["Consistent seed size", "Even establishment", "Good pod setting"],
    usage: "Suited to rainfed and light-irrigation pulse cultivation.",
    growingInfo: [
      "Sowing window: October – November",
      "Soil: light, well-drained",
      "Irrigation: minimal, avoid waterlogging",
      "Rotation: excellent after cereals",
    ],
    packaging: ["10 kg bag", "25 kg bag"],
    quality: "Hand-checked and machine-graded lots with germination testing.",
  }),
  makeSeed({
    slug: "khyber-wheat-303",
    name: "Khyber Wheat 303",
    category: "wheat",
    variety: "KW-303",
    shortDescription: "A wheat option for later sowing windows with quick early vigour.",
    description:
      "Khyber Wheat 303 is a practical choice where sowing runs late, offering quick early growth and even maturity under standard wheat management.",
    features: [
      "Strong Crop Growth",
      "Suitable for Local Conditions",
      "High Yield Potential",
      "Disease Tolerance",
    ],
    characteristics: ["Quick early vigour", "Fits late sowing", "Even maturity"],
    usage: "For growers sowing after late-harvested summer crops.",
    growingInfo: [
      "Sowing window: December",
      "Soil: medium textured",
      "Seed rate: slightly higher for late sowing",
      "Irrigation: standard wheat schedule",
    ],
    packaging: ["25 kg bag", "50 kg bag"],
    quality: "Cleaned, graded and germination-tested before dispatch.",
  }),
  makeSeed({
    slug: "khyber-basmati-select",
    name: "Khyber Basmati Select",
    category: "rice",
    variety: "KR-Bas",
    shortDescription: "Aromatic long grain rice seed for quality-focused paddy growers.",
    description:
      "Khyber Basmati Select is intended for growers targeting quality-driven markets, with attention to grain length and aroma retention.",
    features: [
      "Suitable for Local Conditions",
      "Strong Crop Growth",
      "Disease Tolerance",
      "High Yield Potential",
    ],
    characteristics: ["Long aromatic grain", "Uniform nursery", "Good milling outturn"],
    usage: "For transplanted basmati production in traditional growing belts.",
    growingInfo: [
      "Nursery sowing: May – June",
      "Transplanting: 25 – 30 day seedlings",
      "Soil: clay loam",
      "Water: standing water through tillering",
    ],
    packaging: ["10 kg bag", "25 kg bag"],
    quality: "Purity-checked and germination-tested lots.",
  }),
  makeSeed({
    slug: "khyber-cotton-77",
    name: "Khyber Cotton 77",
    category: "cotton",
    variety: "KC-77",
    shortDescription: "A steady cotton option for growers seeking uniform plant stands.",
    description:
      "Khyber Cotton 77 focuses on stand uniformity and manageable plant habit, making picking operations simpler across the season.",
    features: [
      "Strong Crop Growth",
      "Suitable for Local Conditions",
      "Disease Tolerance",
      "High Yield Potential",
    ],
    characteristics: ["Uniform stand", "Manageable habit", "Steady boll setting"],
    usage: "Suited to standard cotton belts with reliable irrigation.",
    growingInfo: [
      "Sowing window: April – May",
      "Soil: light to medium loam",
      "Spacing: per local recommendation",
      "Irrigation: regular through boll formation",
    ],
    packaging: ["5 kg pack", "10 kg bag"],
    quality: "Delinted and graded with germination verification.",
  }),
];

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    location: "Mardan",
    crop: "Wheat",
    rating: 5,
    quote:
      "Good seed quality and reliable service. Khyber Seed has become one of our trusted sources for crop seeds.",
  },
  {
    name: "Rizwan Ali",
    location: "Multan",
    crop: "Cotton",
    rating: 5,
    quote:
      "The team understands cotton and gives practical guidance. Delivery has been on time every season we have worked with them.",
  },
  {
    name: "Sardar Iqbal",
    location: "Sheikhupura",
    crop: "Rice",
    rating: 4,
    quote:
      "Nursery came up evenly and the seed lots were clean. Straightforward people to deal with.",
  },
  {
    name: "Bilal Hussain",
    location: "Okara",
    crop: "Fodder",
    rating: 5,
    quote:
      "We keep our dairy fodder plan on Khyber Seed. Consistent supply and honest advice about what suits our land.",
  },
];

export const benefits = [
  {
    icon: "ShieldCheck",
    title: "Quality Focus",
    description: "Seeds selected and handled with a strong focus on quality.",
  },
  {
    icon: "Sprout",
    title: "Improved Varieties",
    description: "Modern seed varieties designed to support better agricultural performance.",
  },
  {
    icon: "Users",
    title: "Farmer First",
    description: "Products developed around real farming needs.",
  },
  {
    icon: "Truck",
    title: "Reliable Supply",
    description: "Consistent product availability and professional service.",
  },
  {
    icon: "FlaskConical",
    title: "Agricultural Expertise",
    description: "Knowledge and experience across multiple crop categories.",
  },
  {
    icon: "Handshake",
    title: "Long-Term Partnership",
    description: "Supporting farmers beyond a single purchase.",
  },
] as const;

export const qualitySteps = [
  {
    title: "Variety Selection",
    description: "Varieties are shortlisted for local conditions and farmer requirements.",
  },
  {
    title: "Seed Testing",
    description: "Germination and purity checks are carried out on every incoming lot.",
  },
  {
    title: "Quality Control",
    description: "Lots are reviewed against internal standards before they move forward.",
  },
  {
    title: "Processing",
    description: "Cleaning, grading and treatment are handled under controlled conditions.",
  },
  {
    title: "Packaging",
    description: "Seed is packed in protective, clearly labelled packaging with lot details.",
  },
  {
    title: "Distribution",
    description: "Stock is dispatched through a dealer network built for timely delivery.",
  },
];