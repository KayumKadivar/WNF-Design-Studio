export const metadata = {
  title: "About WNF Design Studio | Leading Architecture Firm in Rajkot",
  description:
    "Learn about WNF Design Studio – Rajkot's leading interior design and architecture studio. Founded in 2021 with 20+ completed projects across Gujarat. Driven by innovation, sustainability, and precision.",
  alternates: {
    canonical: "https://wnfdesignstudio.com/about",
  },
  openGraph: {
    title: "About WNF Design Studio | Leading Architecture Firm in Rajkot",
    description:
      "Learn about WNF Design Studio – Rajkot's leading interior design and architecture studio. Founded in 2021 with 20+ completed projects across Gujarat. Driven by innovation, sustainability, and precision.",
    url: "https://wnfdesignstudio.com/about",
    type: "website",
    locale: "en_IN",
    images: ["/assets/og/about-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WNF Design Studio | Leading Architecture Firm in Rajkot",
    description:
      "Learn about WNF Design Studio – Rajkot's leading interior design and architecture studio. Founded in 2021 with 20+ completed projects across Gujarat. Driven by innovation, sustainability, and precision.",
    images: ["/assets/og/about-banner.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
