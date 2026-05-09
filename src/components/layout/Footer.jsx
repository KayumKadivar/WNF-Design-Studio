"use client";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/studio_wnf/",
      icon: (className) => <Instagram className={className} size={16} />
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/918530070800",
      icon: (className) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      )
    }
  ];

  return (
    // Stark dark background to anchor the light theme pages
    <footer className="bg-stone-900 text-stone-400 font-sans">
      <div className="w-full px-3 lg:px-10 py-10">

        {/* TOP BAR: Reduced padding to py-10 to save height */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 gap-8 border-b border-stone-800">

          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-light text-stone-100 tracking-tight hover:opacity-80 transition-opacity">
              WNF  Design Studio
            </Link>
            <p className="mt-2 text-md font-light text-stone-500 max-w-xs">
              Creating timeless spaces that inspire.
            </p>
          </div>

          {/* Quick Contact (Horizontal alignment saves vertical space) */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-[14px] sm:text-[18px] font-mono uppercase tracking-widest text-stone-300">
            <a href="mailto:info@wnfdesignstudio.com" title="Send us an email" className="hover:text-white transition-colors flex items-center gap-2">
              info@wnfdesignstudio.com
            </a>
            <a href="tel:+918530070800" title="Call us" className="hover:text-white transition-colors flex items-center gap-2">
              +91 8530070800
            </a>
          </div>

          {/* Sharp, Minimalist CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-stone-900 px-6 py-3 text-[14px] sm:text-[18px] font-mono uppercase tracking-widest hover:bg-stone-200 transition-colors group"
          >
            Start a Project
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

        </div>

        {/* BOTTOM BAR: Meta links and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 text-[12px] sm:text-[18px] font-mono uppercase tracking-widest gap-8 md:gap-4">

          {/* Copyright & Location & Legal Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-2">
              <span>© {currentYear} WNF Design Studio.</span>
              <span className="text-stone-600">Based in India.</span>
            </div>
      
          </div>

          {/* Social Links (Text based is more compact and premium than large icons) */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.label}`}
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                {social.icon("w-4 h-4")}
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;