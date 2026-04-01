/*
 * REALiving® EAP Page
 * Design: Organic Modernism — Light backgrounds, teal accents only
 * Hero: White/light background with teal accent bar
 */

import { useEffect } from "react";
import { Link } from "wouter";
import {
  Phone,
  Clock,
  Users,
  Briefcase,
  HeartHandshake,
  Settings,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const TEAM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/team-collaboration-FqH3BBEVocoydxVfCCCN7e.webp";

const TEAL = "oklch(0.7073 0.0946 183)";
const TEAL_LIGHT = "oklch(0.93 0.04 183)";
const TEAL_XLIGHT = "oklch(0.97 0.02 183)";
const FOREST = "oklch(0.16 0.01 250)";

const eapFeatures = [
  {
    icon: Clock,
    title: "24/7 LIVE Answered Call Center",
    description:
      "When employees reach out, they connect with a real person — anytime, day or night. Our compassionate team offers immediate support, guidance, and connection to resources that help resolve challenges before they grow.",
  },
  {
    icon: HeartHandshake,
    title: "Counseling, Financial & Legal Consultations",
    description:
      "Life's challenges aren't one-size-fits-all. Our network of professionals provides confidential counseling along with expert financial and legal consultations to help employees manage stress, plan wisely, and move forward with confidence.",
  },
  {
    icon: Users,
    title: "Professional Coaching & Trainings",
    description:
      "From leadership coaching and skill-building sessions to on-site crisis response, we offer practical, people-centered support that strengthens individuals and teams alike. Each service is tailored to meet real workplace needs.",
  },
  {
    icon: Briefcase,
    title: "Crisis Response",
    description:
      "When workplace crises occur, our team is ready to respond. We provide on-site and virtual crisis support to help organizations navigate difficult situations with care, professionalism, and compassion.",
  },
  {
    icon: Settings,
    title: "Management Consultations",
    description:
      "Leaders have challenges too. Our confidential consultations give managers guidance for addressing employee concerns, navigating complex situations, and maintaining a positive, productive environment.",
  },
  {
    icon: TrendingUp,
    title: "Customized Solutions",
    description:
      "No two organizations are alike. REALiving partners with you to create solutions that fit your culture, goals, and people — delivering support that truly makes a difference.",
  },
];

export default function EAP() {
  useEffect(() => {
    document.title = "Employee Achievement Program® (EAP) | REALiving®";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero — with background image */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-eap-YayaVbDz5B97ZbN3hdSLx3.webp')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.10) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: TEAL }} />
        <div className="container relative z-10 py-24 lg:py-32">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/our-services" className="hover:text-white transition-colors">Our Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">EAP</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label mb-4 fade-up" style={{ color: "oklch(0.80 0.06 183)", borderColor: TEAL }}>Employee Achievement Program®</div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight fade-up text-white">
              More than an EAP —<br />
              <span className="font-script italic" style={{ color: "oklch(0.85 0.08 183)", fontFamily: "'Dancing Script', cursive" }}>
                an Achievement Program®
              </span>
            </h1>
            <p className="font-body text-lg leading-relaxed mb-8 fade-up text-white/80">
              At REALiving®, we believe every person is doing their best — and our job is to support that. Our Employee Achievement Program® offers practical, real-life tools that help employees navigate life's challenges quickly and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up">
              <Link href="/contact" className="btn-primary">
                Learn How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:8552331048" className="border-2 border-white/60 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" />
                855.233.1048
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-20 lg:py-28" style={{ background: TEAL_XLIGHT }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-up">
              <img
                src={TEAM_IMG}
                alt="REALiving team supporting employees"
                className="rounded-2xl w-full h-80 lg:h-[420px] object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="fade-up">
              <div className="section-label mb-3">The REALiving Difference</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5 leading-tight" style={{ color: FOREST }}>
                Why traditional EAPs fall short
              </h2>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "oklch(0.40 0.02 250)" }}>
                Traditional EAPs see counseling utilization rates of only <strong style={{ color: FOREST }}>3–5%</strong>, leaving most employees untouched by support that could truly help them. REALiving does it differently.
              </p>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.02 250)" }}>
                We provide engaging, strength-based, and solution-focused services that appeal to everyone, not just those in distress. By equipping employees with meaningful resources before issues escalate, organizations benefit from improved attendance, higher engagement, and stronger overall performance.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Engaging", sub: "not stigmatizing" },
                  { label: "Proactive", sub: "not reactive" },
                  { label: "Solution-focused", sub: "not problem-focused" },
                  { label: "Social model", sub: "not medical" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-xl bg-white shadow-sm border"
                    style={{ borderColor: "oklch(0.88 0.04 183)" }}
                  >
                    <div className="font-display font-semibold text-base mb-0.5" style={{ color: FOREST }}>{item.label}</div>
                    <div className="font-body text-xs text-gray-500">{item.sub}</div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-primary">
                Get a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EAP Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">How It Works</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 fade-up leading-tight" style={{ color: FOREST }}>
              Practical, people-centered support in motion
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eapFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="service-card p-7 fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: TEAL_LIGHT }}
                  >
                    <Icon className="w-6 h-6 text-teal-brand" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-3 leading-snug" style={{ color: FOREST }}>
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits — Teal background (brand color, not dark green) */}
      <section
        className="py-20 lg:py-24"
        style={{ background: TEAL }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label text-white/70 mb-3">Organizational Benefits</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                The impact on your organization
              </h2>
              <p className="font-body text-base text-white/80 leading-relaxed mb-8">
                Our Employee Achievement Program® gives your team the real-life support they need to thrive at work and at home. Discover how REALiving delivers Solutions for Life and Work that truly make a difference.
              </p>
              <div className="space-y-3">
                {[
                  "Improved employee attendance and engagement",
                  "Reduced workplace stress and burnout",
                  "Stronger overall organizational performance",
                  "Proactive support before issues escalate",
                  "Confidential, stigma-free resources",
                  "Customized to your organization's culture",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
                    <span className="font-body text-base text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up">
              <div className="rounded-2xl p-8 bg-white shadow-xl">
                <div className="font-display text-2xl font-bold mb-6" style={{ color: TEAL }}>
                  Ready to get started?
                </div>
                <p className="font-body text-base leading-relaxed mb-6 text-gray-600">
                  Call 855.233.1048 to see how we can support your organization. Our team is ready to create a customized solution that fits your needs and budget.
                </p>
                <div className="space-y-3">
                  <a href="tel:8552331048" className="btn-primary w-full justify-center">
                    <Phone className="w-4 h-4" />
                    Call 855.233.1048
                  </a>
                  <Link href="/contact" className="btn-outline w-full justify-center">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
