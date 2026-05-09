import PageIntroWrapper from "@/components/shared/PageIntroWrapper";
import HeroSlider from "@/components/home/HeroSlider";
// import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";

// 
export const metadata = {
  title: "Best Interior & Architect Designer in Rajkot | WNF Design Studio",
  description:
    "WNF Design Studio – Rajkot's premier interior designer and architect. We design high-end luxury homes, corporate offices, and exhibition stalls. Book a free consultation today.",
  alternates: {
    canonical: "https://wnfdesignstudio.com",
  },
  openGraph: {
    title: "Best Interior Designer in Rajkot | WNF Design Studio",
    description:
      "WNF Design Studio – Rajkot's premier interior designer and architect. We design high-end luxury homes, corporate offices, and exhibition stalls. Book a free consultation today.",
    url: "https://wnfdesignstudio.com",
    type: "website",
    locale: "en_IN",
    images: ["/assets/og/home-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designer in Rajkot | WNF Design Studio",
    description:
      "WNF Design Studio – Rajkot's premier interior designer and architect. We design high-end luxury homes, corporate offices, and exhibition stalls. Book a free consultation today.",
    images: ["/assets/og/home-banner.jpg"],
  },
};

function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "InteriorDesigner", "Architect"],
    "@id": "https://wnfdesignstudio.com/#organization",
    name: "WNF Design Studio",
    alternateName: "WNF Design Studio",
    description:
      "WNF Design Studio is a leading architecture and interior design firm based in Rajkot, Gujarat, India. We specialize in residential, commercial, and renovation projects.",
    url: "https://wnfdesignstudio.com",
    telephone: "+918530070800",
    email: "info@wnfdesignstudio.com",
    foundingDate: "2021",
    logo: {
      "@type": "ImageObject",
      url: "https://wnfdesignstudio.com/assets/logo/headerlogo.png",
    },
    image: "https://wnfdesignstudio.com/assets/logo/animatedlogo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rajkot",
      addressRegion: "Gujarat",
      addressCountry: "IN",
      streetAddress: "WNF Design Studio, Nana Mauva Main Road, Rajkot",
      postalCode: "360005",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.3039",
      longitude: "70.8022",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rajkot",
      },
      {
        "@type": "State",
        name: "Gujarat",
      },
    ],
    serviceType: [
      "Interior Design",
      "Architecture",
      "Residential Design",
      "Commercial Design",
      "Renovation",
      "Project Management",
      "3D Visualization",
      "Exhibition Stall Design",
    ],
    sameAs: [
      "https://www.instagram.com/studio_wnf/",
      // "https://www.linkedin.com/company/wnf-studio",
      // "https://www.facebook.com/wnfstudio",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "17:30",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wnfdesignstudio.com/#website",
    url: "https://wnfdesignstudio.com",
    name: "WNF Design Studio – Interior Designer Rajkot",
    description: "Architecture & Interior Design Studio in Rajkot, Gujarat",
    publisher: {
      "@id": "https://wnfdesignstudio.com/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <PageIntroWrapper type="home">
      <SchemaMarkup />

      <HeroSlider />
      <AboutPreview />
      <FeaturedProjects />
      {/* <ServicesSection /> */}
      <CTASection />
    </PageIntroWrapper>
  );
}
