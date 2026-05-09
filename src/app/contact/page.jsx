"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Loader2, ArrowRight } from "lucide-react";
import PageIntroWrapper from "@/components/shared/PageIntroWrapper";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{10,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = "Please enter a valid phone number (10 to 15 digits)";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "3e943bff-82be-4946-ad81-b8157b5c5b1a",
          subject: "WNF Design Studio Contact Form",
          from_name: "WNF Design Studio Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

function SchemaMarkup() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://wnfdesignstudio.com/contact/#webpage",
    "url": "https://wnfdesignstudio.com/contact",
    "name": "Contact WNF Design Studio | Best Interior Designer in Rajkot",
    "description": "Get in touch with WNF Design Studio – the best interior designer in Rajkot.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "WNF Design Studio",
      "telephone": "+918530070800",
      "email": "info@wnfdesignstudio.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wings Business Bay, 150 Feet Ring Road",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360004",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
  );
}

  return (
    <PageIntroWrapper type="contact">
      <SchemaMarkup />
      <div className="bg-[#F9F8F6] text-stone-900 min-h-screen font-sans selection:bg-stone-200 selection:text-stone-900">

        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-16 px-6 lg:px-12 border-b border-stone-200 bg-white">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[14px] font-mono uppercase tracking-widest text-stone-500 mb-6 block font-medium"
            >
              // Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="display-title-responsive"
            >
              Let's Create Something <br className="hidden md:block" /> Extraordinary.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-stone-600 font-light max-w-2xl mx-auto leading-relaxed"
            >
              We'd love to hear about your project. Reach out to start the conversation and explore what's possible.
            </motion.p>
          </div>
        </section>

        {/* 2. MAIN CONTENT SPLIT */}
        <section className="py-24 px-6 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

              {/* LEFT COLUMN: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7"
              >
                <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm h-full">
                  <h2 className="text-3xl font-light text-stone-900 mb-8 border-b border-stone-200 pb-4">
                    Send Us a Message
                  </h2>

                  {/* Architectural Status Messages & Form */}
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-stone-50 border border-stone-200"
                    >
                      <div className="w-16 h-16 bg-stone-900 text-white rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-light text-stone-900 mb-4">Message Sent</h3>
                      <p className="text-stone-600 font-light max-w-md leading-relaxed mb-8">
                        Thank you for reaching out. Your inquiry has been successfully transmitted. Our design team will review your project and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus(null)}
                        className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-3.5 text-[14px] font-mono uppercase tracking-widest hover:bg-stone-800 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      {status === "error" && (
                        <div className="mb-8 p-4 bg-stone-50 border border-stone-200 text-stone-800 text-sm font-light flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-red-500"></span>
                          Failed to send. Please email us directly at info@wnfdesignstudio.com or call +91 8530070800.
                        </div>
                      )}

                      <form ref={formRef} id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-[14px] font-mono uppercase tracking-widest text-stone-500 font-medium">Name</label>
                            <input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              className={`w-full h-12 px-4 bg-[#F9F8F6] border rounded-none focus:outline-none transition-colors disabled:opacity-50 text-stone-900 font-light ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-stone-200 focus:border-stone-900'}`}
                              disabled={isSubmitting}
                            />
                            {errors.name && (
                              <p className="text-red-500 text-xs font-mono mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-[14px] font-mono uppercase tracking-widest text-stone-500 font-medium">Email</label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              className={`w-full h-12 px-4 bg-[#F9F8F6] border rounded-none focus:outline-none transition-colors disabled:opacity-50 text-stone-900 font-light ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-stone-200 focus:border-stone-900'}`}
                              disabled={isSubmitting}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs font-mono mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-[14px] font-mono uppercase tracking-widest text-stone-500 font-medium">Phone</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 00000 00000"
                            className={`w-full h-12 px-4 bg-[#F9F8F6] border rounded-none focus:outline-none transition-colors disabled:opacity-50 text-stone-900 font-light ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-stone-200 focus:border-stone-900'}`}
                            disabled={isSubmitting}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs font-mono mt-1">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-[14px] font-mono uppercase tracking-widest text-stone-500 font-medium">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            className={`w-full min-h-[160px] p-4 bg-[#F9F8F6] border rounded-none focus:outline-none transition-colors disabled:opacity-50 text-stone-900 font-light resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-stone-200 focus:border-stone-900'}`}
                            disabled={isSubmitting}
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs font-mono mt-1">{errors.message}</p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto mt-4 inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-10 py-4 text-[14px] font-mono uppercase tracking-widest hover:bg-stone-800 transition-colors disabled:opacity-70 group rounded-none"
                        >
                          {isSubmitting ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                          ) : (
                            <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Contact Details & Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5 flex flex-col h-full"
              >
                <div className="bg-white p-8 md:p-12 border border-stone-200 shadow-sm flex flex-col h-full">
                  <h2 className="text-3xl font-light text-stone-900 mb-8 border-b border-stone-200 pb-4">
                    Studio Details
                  </h2>

                  <div className="space-y-8 flex-grow">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 shrink-0 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
                        <MapPin size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-mono uppercase tracking-widest text-stone-500 mb-2">Location</h3>
                        <p className="text-stone-600 font-light leading-relaxed">
                          2007, 20th Floor, Wings Business Bay,<br />
                          Nr. ITC Fortune Hotel, 150 Feet Ring Road,<br />
                          Rajkot, Gujarat - 360004
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 shrink-0 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
                        <Mail size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-mono uppercase tracking-widest text-stone-500 mb-2">Email</h3>
                        <a href="mailto:info@wnfdesignstudio.com" className="text-stone-900 hover:text-stone-500 transition-colors font-light">
                          info@wnfdesignstudio.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 shrink-0 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:border-stone-900 group-hover:text-stone-900 transition-colors">
                        <Phone size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-[14px] font-mono uppercase tracking-widest text-stone-500 mb-2">Phone</h3>
                        <a href="tel:+918530070800" className="text-stone-900 hover:text-stone-500 transition-colors font-light">
                          +91 8530070800
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Sharp Edge Map Container */}
                  <div className="mt-12 h-[200px] border border-stone-200 bg-stone-100 p-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169073858063!2d70.77542731495468!3d22.29367384843929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb0b01b9ff01%3A0x0!2s150%20Feet%20Ring%20Road%2C%20Rajkot!5e0!3m2!1sen!2sin!4v1703858400000!5m2!1sen!2sin"
                      width="100%" height="100%" style={{ border: 0 }}
                      allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="WNF Design Studio Location"
                      className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </PageIntroWrapper>
  );
}
