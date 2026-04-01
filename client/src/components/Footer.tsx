/*
 * REALiving® Footer Component
 * Design: Deep neutral dark background (not dark green), teal accents
 * Background: #1a1a2e neutral dark — not forest green
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter, Star } from "lucide-react";

const TEAL = "oklch(0.7073 0.0946 183)";
const TEAL_LIGHT = "oklch(0.80 0.06 183)";

const services = [
  { label: "Employee Achievement Program", href: "/eap" },
  { label: "Growth & Development", href: "/our-services#growth" },
  { label: "Organizational Wellness", href: "/our-services#wellness" },
  { label: "BESTology Certification", href: "/bestology" },
  { label: "Professional Coaching", href: "/professional-coaching" },
  { label: "Trifecta Program", href: "/our-services#trifecta" },
  { label: "REALiving Magazine", href: "/our-services#magazine" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/our-services" },
  { label: "BESTology", href: "/bestology" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "EAP Login", href: "https://www.realiving.com/eap-login" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/REALivingEAP", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/realiving", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/realiving_eap", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/REALivingEAP", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer style={{ background: "oklch(0.42 0.065 183)" }} className="text-white">
      {/* Main Footer Content */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/realiving-logo_3638c2f9.png"
                alt="REALiving® Solutions for Life & Work"
                className="h-12 w-auto object-contain"
                style={{ maxWidth: "200px", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="font-body text-white/65 text-sm leading-relaxed mb-6">
              Helping individuals and organizations thrive through authentic, 
              solution-focused support. Be your BEST® — personally and professionally.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "oklch(0.35 0.055 183)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = TEAL;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "oklch(0.35 0.055 183)";
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: TEAL_LIGHT }} />
                <span className="font-body text-sm text-white/65 leading-relaxed">
                  321 Frenette Drive, Suite #7<br />
                  Chippewa Falls, WI 54729
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: TEAL_LIGHT }} />
                <a
                  href="tel:8552331048"
                  className="font-body text-sm text-white/65 hover:text-white transition-colors"
                >
                  855.233.1048
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: TEAL_LIGHT }} />
                <a
                  href="mailto:info@REALiving.com"
                  className="font-body text-sm text-white/65 hover:text-white transition-colors"
                >
                  info@REALiving.com
                </a>
              </li>
            </ul>

            {/* Magazine CTA */}
            <div
              className="mt-6 p-4 rounded-xl"
              style={{ background: "oklch(0.35 0.055 183)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                <span className="font-body text-xs font-semibold text-white/90 uppercase tracking-wider">
                  REALiving Magazine
                </span>
              </div>
              <p className="font-body text-xs text-white/55 mb-3">
                Published twice a year. Subscribe for $12.95/year.
              </p>
              <a
                href="/our-services#magazine"
                className="font-body text-xs font-semibold hover:text-white transition-colors"
                style={{ color: TEAL_LIGHT }}
              >
                Subscribe Now →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "oklch(0.35 0.055 183)" }}
      >
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm text-white/45">
            © 2026 REALiving®. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="font-body text-sm text-white/45 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-sm text-white/45 hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
