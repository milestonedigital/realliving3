/*
 * REALiving® Navbar Component
 * Design: Sticky top navigation with blur backdrop, teal brand colors
 * Mobile: Hamburger menu with full-screen overlay
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Star } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-services", label: "Our Services" },
  { href: "/eap", label: "EAP" },
  { href: "/professional-coaching", label: "Coaching" },
  { href: "/bestology", label: "BESTology" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
  { href: "/eap-login", label: "EAP Login" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar py-2.5 px-4 text-center">
        <a
          href="/conference"
          className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
          <span>Be Your BEST® Conference — Register Now</span>
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
        </a>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white"
        }`}
      >
        <nav className="container flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/realiving-logo_3638c2f9.png"
              alt="REALiving® Solutions for Life & Work"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ maxWidth: "200px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              (link as any).external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-underline font-body font-medium text-sm px-3.5 py-2 rounded-md transition-colors duration-200 text-foreground/80 hover:text-teal-brand"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-underline font-body font-medium text-sm px-3.5 py-2 rounded-md transition-colors duration-200 ${
                    location === link.href
                      ? "text-teal-brand active"
                      : "text-foreground/80 hover:text-teal-brand"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8552331048"
              className="flex items-center gap-1.5 font-body text-sm font-medium text-forest hover:text-teal-brand transition-colors"
            >
              <Phone className="w-4 h-4" />
              855.233.1048
            </a>
            <a href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get Your Consultation
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobile}
            className="lg:hidden p-2 rounded-md text-forest hover:bg-teal-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col transition-all duration-350 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "oklch(0.7073 0.0946 183)" }}
      >
        {/* Mobile Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/realiving-logo_3638c2f9.png"
            alt="REALiving® Solutions for Life & Work"
            className="h-10 w-auto object-contain"
            style={{ maxWidth: "180px", filter: "brightness(0) invert(1)" }}
          />
          <button
            onClick={toggleMobile}
            className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex-1 flex flex-col justify-center px-6 gap-2">
          {navLinks.map((link, i) =>
            (link as any).external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl font-medium py-3 border-b border-white/10 transition-colors text-white hover:text-teal-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-2xl font-medium py-3 border-b border-white/10 transition-colors ${
                  location === link.href ? "text-teal-300" : "text-white hover:text-teal-300"
                }`}
                style={{
                  animationDelay: `${i * 50}ms`,
                  color: location === link.href ? "oklch(0.80 0.06 183)" : undefined,
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Footer */}
        <div className="p-6 space-y-3">
          <a
            href="tel:8552331048"
            className="flex items-center gap-2 text-white/80 font-body text-sm"
          >
            <Phone className="w-4 h-4" />
            855.233.1048
          </a>
          <a href="/contact" className="btn-white w-full justify-center">
            Get Your Consultation
          </a>
        </div>
      </div>
    </>
  );
}
