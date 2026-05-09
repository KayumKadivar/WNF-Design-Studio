export const metadata = {
  title: "Interior Design & Architecture Services in Rajkot | WNF Design Studio",
  description:
    "Professional architecture, residential and commercial interior design, structural engineering, renovation, and end-to-end project management services in Rajkot, Gujarat.",
  alternates: {
    canonical: "https://wnfdesignstudio.com/services",
  },
  openGraph: {
    title: "Interior Design & Architecture Services in Rajkot | WNF Design Studio",
    description:
      "Professional architecture, residential and commercial interior design, structural engineering, renovation, and end-to-end project management services in Rajkot, Gujarat.",
    url: "https://wnfdesignstudio.com/services",
    type: "website",
    locale: "en_IN",
    images: ["/assets/og/services-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design & Architecture Services in Rajkot | WNF Design Studio",
    description:
      "Professional architecture, residential and commercial interior design, structural engineering, renovation, and end-to-end project management services in Rajkot, Gujarat.",
    images: ["/assets/og/services-banner.jpg"],
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
