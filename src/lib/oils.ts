import lavenderImage from "@/assets/oil-lavender.jpg";
import teaTreeImage from "@/assets/oil-tea-tree.jpg";
import eucalyptusImage from "@/assets/oil-eucalyptus.jpg";
import peppermintImage from "@/assets/oil-peppermint.jpg";
import lemongrassImage from "@/assets/oil-lemongrass.jpg";
import cedarwoodImage from "@/assets/oil-cedarwood.jpg";

export type Oil = {
  slug: string;
  name: string;
  latin: string;
  label: string;
  summary: string;
  cardSummary: string;
  image: string;
  knownFor: string[];
  uses: string[];
  warning: string;
  singapore: string;
  pairs: { name: string; note: string }[];
};

export const oils: Oil[] = [
  {
    slug: "lavender",
    name: "Lavender",
    latin: "Lavandula angustifolia",
    label: "The calming classic",
    summary: "Gentle, floral and versatile. Best known for easing stress, supporting sleep and soothing minor skin irritation — but still a potent concentrate.",
    cardSummary: "Calm & sleep support",
    image: lavenderImage,
    knownFor: ["Easing stress and supporting evening wind-downs", "Supporting sleep when diffused before bed", "Soothing minor irritated skin when properly diluted", "Softening and rounding out almost any blend"],
    uses: ["Diffuser: 4–6 drops for 30–60 minutes before bed", "Roll-on: 2% dilution on wrists or temples", "Bath: mix into a dispersant or carrier oil first", "Quick inhale: 1–2 drops on a tissue"],
    warning: "Never apply lavender neat. Even this mild oil can cause sensitisation, a permanent allergy. Dilute every time and replace old, oxidised bottles.",
    singapore: "A humid-weather workhorse: calming without the heavy sweetness that can feel suffocating at 90% humidity. It suits evening wind-downs and the A/C headache blend.",
    pairs: [{ name: "Cedarwood", note: "Grounded evening calm" }, { name: "Peppermint", note: "Cool, calm desk relief" }, { name: "Eucalyptus", note: "A softer fresh-air blend" }],
  },
  {
    slug: "tea-tree",
    name: "Tea tree",
    latin: "Melaleuca alternifolia",
    label: "The purifier",
    summary: "Fresh, medicinal and one of the best-researched antimicrobial essential oils. Useful for blemishes, scalps and cleaning — never for swallowing.",
    cardSummary: "Antimicrobial basics",
    image: teaTreeImage,
    knownFor: ["Targeted care for blemish-prone skin", "Freshening oily or flaky scalps", "Antimicrobial support in household cleaning", "A sharp, clean note in room blends"],
    uses: ["Blemish care: 1% in a light carrier oil", "Shampoo boost: 2 drops blended into one palmful", "Cleaning spray: use with a proper solubiliser", "Diffuser: 3–4 drops for short sessions"],
    warning: "Never ingest tea tree oil. Store it cool and dark: oxidation makes old tea tree oil more irritating and more likely to trigger sensitisation.",
    singapore: "Useful for humid-weather scalp and skin routines, and for freshening bathrooms and shoe cabinets. It cannot disinfect air or replace proper cleaning.",
    pairs: [{ name: "Eucalyptus", note: "Crisp haze-season freshness" }, { name: "Lemongrass", note: "A bright cleaning blend" }, { name: "Cedarwood", note: "Balanced scalp care" }],
  },
  {
    slug: "eucalyptus",
    name: "Eucalyptus",
    latin: "Eucalyptus radiata",
    label: "The breather",
    summary: "Crisp, camphorous and unmistakably clearing. A Singapore staple for haze weeks and air-conditioned offices, with honest limits.",
    cardSummary: "Haze-season comfort",
    image: eucalyptusImage,
    knownFor: ["A clearing aroma for stuffy spaces", "The backbone of fresh-air diffuser blends", "A cooling top note for focus blends", "Freshening bathrooms and shoe cabinets"],
    uses: ["Diffuser: 4–6 drops in a closed room", "Inhale: one drop on a tissue", "Shower: a few drops away from the direct stream", "Topical: 1–2% on chest or back, never near the face"],
    warning: "Keep eucalyptus away from young children and never use it undiluted. Vapour near eyes and mucous membranes is harsh; seek professional guidance for children.",
    singapore: "It can make a room feel fresher during haze season, but it cannot filter PM2.5. Run an air purifier and check NEA readings; aroma relief is comfort, not medicine.",
    pairs: [{ name: "Tea tree", note: "Clean haze-season core" }, { name: "Peppermint", note: "Cooling focus support" }, { name: "Lavender", note: "Crisp but gentle" }],
  },
  {
    slug: "peppermint",
    name: "Peppermint",
    latin: "Mentha × piperita",
    label: "The ice button",
    summary: "Instant cooling and alertness. The strongest oil in this guide — a tiny amount goes a long way, which is why it demands extra respect.",
    cardSummary: "Cooling the A/C room",
    image: peppermintImage,
    knownFor: ["Menthol's cooling sensation on diluted skin", "Easing the feeling of a tension headache", "Supporting alertness and focus", "Settling queasiness through aroma"],
    uses: ["Roll-on: 1–2% on temples and shoulders", "Diffuser: 2–3 drops maximum", "Cooling spritz: only with a solubiliser", "Motion comfort: one drop on a tissue"],
    warning: "Keep peppermint well away from eyes and faces, and do not use around babies or young children. Never apply neat — menthol can burn and overwhelm.",
    singapore: "Portable air-conditioning for sticky afternoons: a low-dose roll-on or two diffuser drops can feel crisp without making a humid room smell heavy.",
    pairs: [{ name: "Lavender", note: "The A/C headache pair" }, { name: "Eucalyptus", note: "A sharp focus blend" }, { name: "Lemongrass", note: "Bright humid-day lift" }],
  },
  {
    slug: "lemongrass",
    name: "Lemongrass",
    latin: "Cymbopogon citratus / flexuosus",
    label: "The mosquito's enemy",
    summary: "Bright, sharp and grassy. Singapore's most practical oil: a backbone for mosquito-deterring blends and a natural deodoriser for humid homes.",
    cardSummary: "Dengue-season use",
    image: lemongrassImage,
    knownFor: ["A studied mosquito-deterring aroma", "Cutting through humid, heavy air", "Freshening kitchens and musty corners", "A warming note in massage blends"],
    uses: ["Diffuser: 3–4 drops near windows at dusk", "Cleaning spray: use with a solubiliser", "Commute reset: one drop on a tissue", "Massage: keep skin dilution at 0.5–1%"],
    warning: "Lemongrass is high in citral and can be skin-aggressive. Never apply it undiluted, keep skin use at 1% or below, never ingest it, and avoid diffusing around cats and birds.",
    singapore: "It earns its place in dengue season and monsoon weeks, freshening balcony edges, kitchens and musty wardrobes. It supplements proper repellent and source reduction; it never replaces them.",
    pairs: [{ name: "Citronella", note: "The repellent power pair" }, { name: "Tea tree", note: "Fresh cleaning support" }, { name: "Peppermint", note: "A bright afternoon reset" }],
  },
  {
    slug: "cedarwood",
    name: "Cedarwood",
    latin: "Cedrus atlantica / Juniperus virginiana",
    label: "The anchor",
    summary: "Warm, woody and grounding. The base note that holds blends together and gives evening and scalp-care routines a dry, quiet depth.",
    cardSummary: "Grounding base note",
    image: cedarwoodImage,
    knownFor: ["Grounding bright or flighty blends", "Supporting evening wind-down routines", "Balancing scalp-care blends", "Linen sprays and closet sachets"],
    uses: ["Sleep diffuser: 3–4 drops with lavender", "Shampoo boost: 2–3 drops in one palmful", "Scalp oil: 2% in jojoba, then shampoo out", "Linen spray: use with a solubiliser"],
    warning: "Never drop pure cedarwood directly onto hair or scalp. Undiluted contact can irritate skin or trigger lifelong sensitisation; blend it first.",
    singapore: "Its dry woodiness grounds evening routines without adding cloying sweetness, and it suits weekly scalp care when humidity drives excess oil.",
    pairs: [{ name: "Lavender", note: "The definitive wind-down pair" }, { name: "Tea tree", note: "Balanced scalp care" }, { name: "Bergamot", note: "Dry wood and bright citrus" }],
  },
];

export const oilsBySlug = Object.fromEntries(oils.map((oil) => [oil.slug, oil]));