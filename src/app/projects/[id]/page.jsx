import { projects } from "@/data/projects";
import ProjectDetailPage from "./ProjectDetailPage";
import { notFound } from "next/navigation";

const projectSeo = {
  1: {
    title: "Mahin House – Residential Architecture in Rajkot | WNF Design Studio",
    description: "Mahin House – a 3,800 sq ft modern residential architecture project in Rajkot by WNF Design Studio. Featuring privacy screening, internal courtyard and a contemporary material palette.",
    h1: "Mahin House – Modern Residential Architecture Project in Rajkot",
    keywords: ["modern house design Rajkot", "residential architecture Rajkot", "bungalow design Gujarat"]
  },
  2: {
    title: "Aakash House – Residential Architecture Design in Rajkot | WNF Design Studio",
    description: "Aakash House – a 4,500 sq ft contemporary residential architecture design in Rajkot by WNF Design Studio. Incorporating exposed concrete, stone highlights and bold space planning.",
    h1: "Aakash House – Residential Architecture Design in Rajkot",
    keywords: ["house architecture Rajkot", "residential design Rajkot Gujarat", "WNF Design Studio"]
  },
  3: {
    title: "Mundra Bungalow – Luxury Architecture Design in Gujarat | WNF Design Studio",
    description: "Mundra Bungalow – a luxury 8,000 sq ft coastal residential architecture project in Mundra, Gujarat by WNF Design Studio. Featuring spacious shaded verandas and climate-responsive planning.",
    h1: "Mundra Bungalow – Luxury Architecture Design in Gujarat",
    keywords: ["luxury bungalow design Gujarat", "bungalow architect Rajkot", "WNF Design Studio bungalow"]
  },
  4: {
    title: "Nizami House – Residential Architecture Project in Rajkot | WNF Design Studio",
    description: "Nizami House – a 3,200 sq ft compact residential architecture design in Rajkot, Gujarat by WNF Design Studio. Featuring stacked zoning and custom masonry volumes.",
    h1: "Nizami House – Residential Architecture Project in Rajkot",
    keywords: ["residential architecture Rajkot", "home design Rajkot", "WNF Design Studio architecture"]
  },
  5: {
    title: "Parasara House – Contemporary Architecture in Rajkot | WNF Design Studio",
    description: "Parasara House – a refined 4,000 sq ft minimalist residential architecture project in Rajkot, Gujarat by WNF Design Studio. Incorporating cost-effective structural massing.",
    h1: "Parasara House – Contemporary Architecture in Rajkot",
    keywords: ["architecture firm Rajkot Gujarat", "house design Rajkot", "WNF Design Studio"]
  },
  6: {
    title: "Kadivar House – Modern Residential Architecture in Rajkot | WNF Design Studio",
    description: "Kadivar House – a 5,200 sq ft modern residential architecture project in Rajkot, Gujarat by WNF Design Studio. Combining bold geometric forms with natural material finishes.",
    h1: "Kadivar House – Modern Residential Architecture in Rajkot",
    keywords: ["modern home design Rajkot", "house architect Rajkot Gujarat", "WNF Design Studio"]
  },
  7: {
    title: "Ormat Tools Warehouse – Industrial Architecture Design in Gujarat | WNF Design Studio",
    description: "Ormat Tools Warehouse – a functional 18,000 sq ft industrial architecture and processing facility design in Rajkot, Gujarat by WNF Design Studio. Featuring heavy-duty structural zoning.",
    h1: "Ormat Tools Warehouse – Industrial Architecture Design in Gujarat",
    keywords: ["warehouse design Gujarat", "industrial architecture Rajkot", "commercial architect Gujarat"]
  },
  8: {
    title: "Fabcon Factory – Industrial Architecture Project in Gujarat | WNF Design Studio",
    description: "Fabcon Factory – a 25,000 sq ft industrial processing plant and factory architecture design in Rajkot, Gujarat by WNF Design Studio. Integrating daylight harvesting and clear-span bays.",
    h1: "Fabcon Factory – Industrial Architecture Project in Gujarat",
    keywords: ["factory design Gujarat", "industrial architecture Gujarat", "commercial architect Rajkot"]
  },
  9: {
    title: "Aakash House – Luxury Residential Interior Design in Rajkot | WNF Design Studio",
    description: "Aakash House Interior Design – a luxury 2,500 sq ft residential interior design project in Rajkot, Gujarat by WNF Design Studio. Combining custom furniture and neutral textures.",
    h1: "Aakash House – Luxury Residential Interior Design in Rajkot",
    keywords: ["home interior design Rajkot", "residential interior Rajkot", "luxury interior designer Rajkot"]
  },
  10: {
    title: "Sanskar Sanidhya – Residential Interior Design in Rajkot | WNF Design Studio",
    description: "Sanskar Sanidhya – a sprawling 6,000 sq ft premium residential interior design in Rajkot, Gujarat by WNF Design Studio. Driven by luxury finishes and bespoke custom millwork.",
    h1: "Sanskar Sanidhya – Residential Interior Design in Rajkot",
    keywords: ["interior designer Rajkot", "home interior design Rajkot Gujarat", "WNF Design Studio interior"]
  },
  11: {
    title: "Zala House 1 – Premium Home Interior Design in Rajkot | WNF Design Studio",
    description: "Zala House 1 – a 5,000 sq ft premium residential interior design in Rajkot, Gujarat by WNF Design Studio. Featuring custom furniture, refined material density and layered accent lighting.",
    h1: "Zala House 1 – Premium Home Interior Design in Rajkot",
    keywords: ["home interior design Rajkot", "residential interior designer Rajkot Gujarat"]
  },
  12: {
    title: "Zala House 2 – Luxury Residential Interior Design in Rajkot | WNF Design Studio",
    description: "Zala House 2 – a 5,500 sq ft premium residential interior design in Rajkot, Gujarat by WNF Design Studio. Focused on bespoke haptic textures and living space continuity.",
    h1: "Zala House 2 – Luxury Residential Interior Design in Rajkot",
    keywords: ["luxury interior designer Rajkot", "home interior Rajkot", "WNF Design Studio"]
  },
  13: {
    title: "Royal Flat – Premium Apartment Interior Design in Rajkot | WNF Design Studio",
    description: "Royal Flat – a premium 2,200 sq ft apartment interior design in Rajkot, Gujarat by WNF Design Studio. Combining custom woodwork with minimalist luxury details.",
    h1: "Royal Flat – Premium Apartment Interior Design in Rajkot",
    keywords: ["flat interior design Rajkot", "apartment interior Rajkot", "interior designer Rajkot"]
  },
  14: {
    title: "Studio WnF Office Interior – Commercial Design Rajkot | WNF Design Studio",
    description: "WNF Design Studio's own office interior in Rajkot – a showcase of contemporary commercial design with innovative workspace planning and premium finishes.",
    h1: "Studio WnF Office – Contemporary Commercial Interior Design in Rajkot",
    keywords: ["office interior design Rajkot", "commercial interior Rajkot", "interior designer office Rajkot"]
  },
  15: {
    title: "CA Office – Professional Office Interior Design in Rajkot | WNF Design Studio",
    description: "CA Office – a 2,000 sq ft modern office interior design in Rajkot, Gujarat by WNF Design Studio. Tailored client zones and professional workflow structures.",
    h1: "CA Office – Professional Office Interior Design in Rajkot",
    keywords: ["office interior designer Rajkot", "commercial interior design Rajkot Gujarat"]
  },
  16: {
    title: "Nextwise Office – Modern Corporate Interior Design in Rajkot | WNF Design Studio",
    description: "Nextwise Office – a 3,000 sq ft corporate office design in Rajkot, Gujarat by WNF Design Studio. Featuring glass partition lines, acoustic treatments and optimized planning.",
    h1: "Nextwise Office – Modern Corporate Interior Design in Rajkot",
    keywords: ["corporate office interior Rajkot", "office design Rajkot", "WNF Design Studio office"]
  },
  17: {
    title: "S & D Office – Professional Interior Design in Rajkot | WNF Design Studio",
    description: "S & D Office – a 4,000 sq ft smart corporate interior project in Rajkot, Gujarat by WNF Design Studio. Featuring bespoke workspace layouts and high-capacity planning.",
    h1: "S & D Office – Professional Interior Design in Rajkot",
    keywords: ["office interior designer Rajkot Gujarat", "commercial interior Rajkot", "WNF Design Studio"]
  },
  18: {
    title: "Exhibition Stall Design – Built Projects in Gujarat | WNF Design Studio",
    description: "Exhibition Stall – a physical 800 sq ft exhibition stall design and built delivery in Gujarat by WNF Design Studio, optimizing visitor flow and brand visibility.",
    h1: "Exhibition Stall – Photo Gallery & Built Projects in Gujarat",
    keywords: ["exhibition stall design Rajkot", "stall design Gujarat", "3D exhibition design"]
  },
  19: {
    title: "Exhibition Stall Design – Render Series in Gujarat | WNF Design Studio",
    description: "Exhibition Stall Render Series – photorealistic 3D rendering concepts by WNF Design Studio for Gujarat trade exhibitions, showcasing premium material and light design.",
    h1: "Exhibition Stall – Photorealistic Render Series in Gujarat",
    keywords: ["3D exhibition design", "stall design Gujarat", "exhibition stall design Rajkot"]
  },
  20: {
    title: "Exhibition Stall Design – 3D Spatial Layout in Gujarat | WNF Design Studio",
    description: "Exhibition Stall 3D Views – detailed spatial, circulation and display layouts by WNF Design Studio for ceramic trade events in Gujarat.",
    h1: "Exhibition Stall – 3D Spatial & Circulation Views in Gujarat",
    keywords: ["exhibition stall design Rajkot", "3D stall views", "trade stall designer"]
  }
};

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return { title: "Project Not Found | WNF Design Studio" };
  const seo = projectSeo[project.id] || {};
  const title = seo.title || `${project.title} | WNF Design Studio`;
  const description = seo.description || project.description?.substring(0, 160) || "WNF Design Studio architectural project.";
  const url = `https://wnfdesignstudio.com/projects/${project.id}`;

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      images: [{ url: project.mainImage }],
      type: "article",
      url,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.mainImage],
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) notFound();

  const seo = projectSeo[project.id] || {};
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["CreativeWork", "Article"],
    "@id": `https://wnfdesignstudio.com/projects/${project.id}/#project`,
    "url": `https://wnfdesignstudio.com/projects/${project.id}`,
    "name": seo.title || project.title,
    "description": seo.description || project.description,
    "image": `https://wnfdesignstudio.com${project.mainImage}`,
    "author": {
      "@type": "Organization",
      "name": "WNF Design Studio"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <ProjectDetailPage project={{ ...project, seoTitle: seo.h1 || project.title }} allProjects={projects} />
    </>
  );
}
