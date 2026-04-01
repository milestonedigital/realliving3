/*
 * REALiving® EAP Login Page
 * Design: Organic Modernism — Warm Teal Editorial
 * Visual recreation of realiving.com/eap-login
 * Login button redirects to Wix member area
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ExternalLink, HelpCircle, LogIn, ChevronRight } from "lucide-react";

const TEAL = "oklch(0.7073 0.0946 183)";
const TEAL_DARK = "oklch(0.42 0.065 183)";
const TEAL_LIGHT = "oklch(0.93 0.04 183)";

export default function EAPLogin() {
  useEffect(() => {
    document.title = "EAP Login | REALiving® Employee Achievement Program";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Hero — matches original: teal bg + hand holding Help button image */}
      <section
        className="relative overflow-hidden"
        style={{ background: TEAL, minHeight: "260px" }}
      >
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/eap-login-hero_e78a97b5.jpeg"
            alt="Employee Achievement Program — We can help"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${TEAL} 40%, transparent 100%)` }} />
        </div>
        <div className="container relative z-10 py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">
              Your Employee Achievement Program (EAP)®
            </p>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              We can help.
            </h1>
            <p className="font-body text-lg text-white/85 italic" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Be Your BEST®
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Welcome Text */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: TEAL_DARK }}>
                Welcome
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "oklch(0.35 0.02 250)" }}>
                Welcome to your Employee Achievement Program® (EAP) resource site.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "oklch(0.45 0.02 250)" }}>
                At REALiving®, we're here to help you Be Your BEST®—no matter what life throws your way. Whether you're navigating a challenge, building on your strengths, or simply looking for a fresh perspective, our program is designed to support your well-being in real, practical ways.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "oklch(0.45 0.02 250)" }}>
                We believe in meeting you where you are—with tools that are accessible, responsive, and genuinely helpful. Life has bumps. We're here to help you move forward with confidence.
              </p>
              <p className="font-body text-base leading-relaxed font-semibold" style={{ color: TEAL_DARK }}>
                Ready to get started? Log in and take your next step toward your BEST.
              </p>
            </div>

            {/* Login Card */}
            <div
              className="rounded-2xl p-8 border shadow-sm"
              style={{ borderColor: "oklch(0.90 0.03 183)", background: TEAL_LIGHT }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: TEAL }}
                >
                  <LogIn className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold" style={{ color: TEAL_DARK }}>
                  Member Login
                </h3>
              </div>

              {/* Login Instructions */}
              <div
                className="rounded-xl p-4 mb-6 border"
                style={{ background: "white", borderColor: "oklch(0.88 0.04 183)" }}
              >
                <p className="font-body text-sm font-semibold mb-2" style={{ color: TEAL_DARK }}>
                  REALiving Login Information:
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 250)" }}>
                  Your Login username is your login + <strong>@REALiving.com</strong>. For example, if your login username is <em>REALivingEmployee</em>, your login is{" "}
                  <a
                    href="mailto:REALivingEmployee@REALiving.com"
                    className="font-semibold underline underline-offset-2"
                    style={{ color: TEAL }}
                  >
                    REALivingEmployee@REALiving.com
                  </a>
                </p>
              </div>

              {/* Login Button — redirects to Wix */}
              <a
                href="https://www.realiving.com/eap-login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-body font-semibold text-base text-white transition-opacity hover:opacity-90 mb-4"
                style={{ background: TEAL }}
              >
                <LogIn className="w-5 h-5" />
                Login to Your EAP Portal
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>

              <p className="font-body text-xs text-center" style={{ color: "oklch(0.55 0.02 250)" }}>
                You will be redirected to the secure REALiving member portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 lg:py-16" style={{ background: "oklch(0.97 0.02 183)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-8 text-center" style={{ color: TEAL_DARK }}>
              Getting Started with Your EAP Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  icon: <LogIn className="w-6 h-6" />,
                  title: "Log In",
                  desc: "Use your company-provided username + @REALiving.com as your login email.",
                },
                {
                  step: "2",
                  icon: <HelpCircle className="w-6 h-6" />,
                  title: "Request Services",
                  desc: "Once logged in, click \"Request EAP Services\" at the top of any page to begin.",
                },
                {
                  step: "3",
                  icon: <ChevronRight className="w-6 h-6" />,
                  title: "Get Support",
                  desc: "Or click \"Contact Us\" and our team will respond promptly to assist you.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-2xl p-6 border text-center shadow-sm"
                  style={{ borderColor: "oklch(0.90 0.03 183)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ background: TEAL }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-display text-base font-bold mb-2" style={{ color: TEAL_DARK }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "oklch(0.45 0.02 250)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* No login info note */}
            <div
              className="mt-8 rounded-2xl p-6 border text-center"
              style={{ background: "white", borderColor: "oklch(0.90 0.03 183)" }}
            >
              <p className="font-body text-sm" style={{ color: "oklch(0.45 0.02 250)" }}>
                <strong style={{ color: TEAL_DARK }}>Don't have your login information?</strong>{" "}
                Please contact your company's Human Resources Department for your EAP credentials.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-body font-semibold text-sm text-white transition-opacity hover:opacity-90"
                  style={{ background: TEAL }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/eap"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-2 font-body font-semibold text-sm transition-opacity hover:opacity-80"
                  style={{ borderColor: TEAL, color: TEAL_DARK }}
                >
                  Learn About EAP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
