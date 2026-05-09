export const metadata = {
  title: "Interior Design & Architecture Portfolio | WNF Design Studio",
  description:
    "Explore 18+ completed residential architecture, luxury commercial workspace interior design, and structural exhibition stall projects in Rajkot and Gujarat.",
  alternates: {
    canonical: "https://wnfdesignstudio.com/projects",
  },
  openGraph: {
    title: "Interior Design & Architecture Portfolio | WNF Design Studio",
    description:
      "Explore 18+ completed residential architecture, luxury commercial workspace interior design, and structural exhibition stall projects in Rajkot and Gujarat.",
    url: "https://wnfdesignstudio.com/projects",
    type: "website",
    locale: "en_IN",
    images: ["/assets/og/projects-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design & Architecture Portfolio | WNF Design Studio",
    description:
      "Explore 18+ completed residential architecture, luxury commercial workspace interior design, and structural exhibition stall projects in Rajkot and Gujarat.",
    images: ["/assets/og/projects-banner.jpg"],
  },
};

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}
