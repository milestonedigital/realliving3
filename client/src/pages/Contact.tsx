/*
 * REALiving® Contact Page
 * Design: Organic Modernism — contact form + info layout
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Send,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = "Contact Us | REALiving® — Solutions for Life and Work";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formRef.current?.reset();
    alert("Thank you! Your message has been received. We'll be in touch within 1 business day.");
  };

  return (
    <main>
      {/* Hero — with background image */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-contact-65YA8tsfycUjUecRHYMZBG.webp')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.10) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "oklch(0.7073 0.0946 183)" }} />
        <div className="container relative z-10 py-24 lg:py-28">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">Contact Us</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label mb-4 fade-up" style={{ color: "oklch(0.80 0.06 183)", borderColor: "oklch(0.7073 0.0946 183)" }}>Get In Touch</div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight fade-up text-white">
              Let's talk about your organization's needs
            </h1>
            <p className="font-body text-lg leading-relaxed fade-up text-white/80">
              For more information and an individual consultation, contact us today. We'd love to show you how REALiving can help your team be their BEST®.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 fade-up">
              <h2 className="font-display text-2xl font-bold text-forest mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "855.233.1048",
                    href: "tel:8552331048",
                    sub: "Available 24/7 for EAP clients",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@REALiving.com",
                    href: "mailto:info@REALiving.com",
                    sub: "We respond within 1 business day",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "321 Frenette Drive, Suite #7\nChippewa Falls, WI 54729",
                    href: undefined,
                    sub: "Chippewa Falls, Wisconsin",
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    value: "Monday – Friday\n8:00 AM – 5:00 PM CST",
                    href: undefined,
                    sub: "24/7 crisis support available",
                  },
                ].map(({ icon: Icon, label, value, href, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.93 0.04 183)" }}
                    >
                      <Icon className="w-5 h-5 text-teal-brand" />
                    </div>
                    <div>
                      <div className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="font-body text-base font-medium text-forest hover:text-teal-brand transition-colors block"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-base font-medium text-forest whitespace-pre-line">
                          {value}
                        </p>
                      )}
                      <p className="font-body text-xs text-muted-foreground mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div
                className="rounded-xl p-5 space-y-3"
                style={{ background: "oklch(0.97 0.015 80)" }}
              >
                <h3 className="font-display font-semibold text-forest text-base mb-4">
                  Quick Access
                </h3>
                {[
                  { label: "EAP Login Portal", href: "https://www.realiving.com/eap-login", icon: ArrowRight },
                  { label: "View Our Services", href: "/our-services", icon: ArrowRight },
                  { label: "BESTology Certification", href: "/bestology", icon: ArrowRight },
                  { label: "Read Our Blog", href: "/blog", icon: ArrowRight },
                ].map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between p-3 rounded-lg bg-white border border-border hover:border-teal-brand transition-colors group"
                  >
                    <span className="font-body text-sm font-medium text-forest group-hover:text-teal-brand transition-colors">
                      {label}
                    </span>
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-teal-brand transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 fade-up">
              <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-border"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.93 0.04 183)" }}
                  >
                    <MessageCircle className="w-5 h-5 text-teal-brand" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-forest">
                    Send Us a Message
                  </h2>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="First name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Last name"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(555) 000-0000"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Your organization name"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                      I'm interested in...
                    </label>
                    <select name="interest" className="form-input">
                      <option value="">Select a service...</option>
                      <option value="eap">Employee Achievement Program (EAP)</option>
                      <option value="bestology">BESTology® Certification</option>
                      <option value="coaching">Professional Coaching</option>
                      <option value="wellness">Organizational Wellness</option>
                      <option value="growth">Growth & Development</option>
                      <option value="presentations">Presentations & Trainings</option>
                      <option value="magazine">REALiving Magazine</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your organization's needs, questions, or how we can help..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    We typically respond within 1 business day. For urgent matters, please call{" "}
                    <a href="tel:8552331048" className="text-teal-brand hover:underline">855.233.1048</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.97 0.015 80)" }}
      >
        <div className="container">
          <div className="text-center mb-8 fade-up">
            <div className="section-label mb-2">Our Location</div>
            <h2 className="font-display text-2xl font-bold text-forest">
              Find Us in Chippewa Falls, WI
            </h2>
          </div>
          <div
            className="rounded-2xl overflow-hidden h-64 lg:h-80 flex items-center justify-center fade-up"
            style={{ background: "oklch(0.93 0.04 183)" }}
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-teal-brand mx-auto mb-3" />
              <div className="font-display text-xl font-bold text-forest mb-1">
                321 Frenette Drive, Suite #7
              </div>
              <div className="font-body text-base text-muted-foreground mb-4">
                Chippewa Falls, WI 54729
              </div>
              <a
                href="https://maps.google.com/?q=321+Frenette+Drive+Chippewa+Falls+WI+54729"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5"
              >
                Open in Google Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
