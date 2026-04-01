/*
 * REALiving® Professional Coaching Page
 * Design: Organic Modernism — Light backgrounds, teal accents
 * Content: 10 coaches with bios, coaching areas, CTA
 */

import { useEffect } from "react";
import { Link } from "wouter";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

const TEAL = "oklch(0.7073 0.0946 183)";
const TEAL_LIGHT = "oklch(0.93 0.04 183)";
const FOREST = "oklch(0.16 0.01 250)";

const coachingAreas = [
  "Executive coaching",
  "Communication skills",
  "Organization",
  "Leadership",
  "Balance",
  "Stress management",
  "Job satisfaction",
  "Productivity",
  "Improving your confidence",
  "Self concept",
  "Health and wellness",
  "Building and developing your personal authenticity",
  "Work-life balance",
  "Relationship issues with coworkers",
  "Career-minded goals and objectives",
];

const coaches = [
  {
    name: "Gina Krueger",
    title: "REALiving Director & Certified BESTology® Coach",
    bio: "As the REALiving Director who is also a certified Intrinsic and BESTology® Coach, Gina has an amazing talent at curriculum development. She is really passionate about helping people learn how to be their BEST while bringing a great sense of humor to sessions to help enhance learning. If you have a need for some unique training sessions designed to target a goal area, Gina is the expert who can help.",
    initials: "GK",
  },
  {
    name: "Bill Duerkop",
    title: "Professional Coach",
    bio: "Bill brings years of professional coaching experience to help individuals and teams navigate challenges, build strengths, and achieve meaningful goals in both their personal and professional lives.",
    initials: "BD",
  },
  {
    name: "Linda Aton",
    title: "Professional Coach",
    bio: "Linda is dedicated to helping clients discover their authentic selves and develop the skills needed to thrive. Her warm, supportive approach creates a safe space for growth and transformation.",
    initials: "LA",
  },
  {
    name: "Marni Waznik",
    title: "Professional Coach",
    bio: "Marni specializes in helping clients identify and build on their strengths, navigate life transitions, and develop practical strategies for achieving balance and fulfillment at work and at home.",
    initials: "MW",
  },
  {
    name: "Jesseca Erb",
    title: "EAP Advisor & Professional Coach",
    bio: "Jesseca brings warmth, wisdom, and practical tools to every coaching session. As an EAP Advisor, she understands the unique challenges employees face and helps them navigate life's challenges with confidence and clarity.",
    initials: "JE",
  },
  {
    name: "Ian Rajek",
    title: "Professional Coach",
    bio: "Ian is passionate about helping individuals unlock their potential and achieve their goals. His coaching style is direct, encouraging, and results-oriented, helping clients move forward with purpose and confidence.",
    initials: "IR",
  },
  {
    name: "Jana Hansen",
    title: "Professional Coach",
    bio: "Jana has a gift for helping clients gain clarity, build resilience, and develop the mindset and skills needed to be their BEST. She brings genuine care and professional expertise to every session.",
    initials: "JH",
  },
  {
    name: "Jeanne Martens",
    title: "Professional Coach",
    bio: "Jeanne is committed to helping clients achieve meaningful change in their lives. Her coaching approach combines practical tools with deep empathy, empowering individuals to overcome obstacles and reach their full potential.",
    initials: "JM",
  },
  {
    name: "LuAnn Esko",
    title: "Professional Coach",
    bio: "LuAnn brings a wealth of experience and a compassionate approach to professional coaching. She helps clients develop self-awareness, build on their strengths, and create actionable plans for growth and success.",
    initials: "LE",
  },
  {
    name: "Jana Pickers",
    title: "Professional Coach",
    bio: "Jana is dedicated to helping clients discover their purpose and develop the skills to live and work authentically. Her coaching is grounded in REALiving's philosophy of strength-based, solution-focused support.",
    initials: "JP",
  },
];

export default function ProfessionalCoaching() {
  useEffect(() => {
    document.title = "Professional Coaching | REALiving® — Solutions for Life and Work";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "REALiving® offers professional coaching services to help you Be Your BEST® in all aspects of life. Our coaches assist with skill exploration, building strengths, and performance enhancement."
      );

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
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
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-professional-coaching-Fd54MNaD6UMUwFpGFZ5nGM.webp')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.12) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: TEAL }} />
        <div className="container relative z-10 py-24 lg:py-32">
          <nav
            className="flex items-center gap-2 font-body text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/our-services" className="hover:text-white transition-colors">Our Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">Professional Coaching</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label mb-4 fade-up" style={{ color: "oklch(0.80 0.06 183)", borderColor: TEAL }}>1-on-1 Coaching</div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight fade-up text-white">
              Professional{" "}
              <span
                className="font-script italic"
                style={{
                  color: "oklch(0.85 0.08 183)",
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                }}
              >
                Coaching
              </span>
            </h1>
            <p className="font-body text-lg leading-relaxed mb-6 fade-up text-white/80">
              Our coaches are strength- and solution-based, focused and efficient, and can help you
              in development of your REAL business assets. Available in person, by phone, or video.
            </p>
            <p className="font-body text-base leading-relaxed mb-8 fade-up text-white/70">
              Let our coaches help you execute the plan you need to{" "}
              <strong className="text-white">Be Your BEST®!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up">
              <Link href="/contact" className="btn-primary">
                Request a Coach
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

      {/* Coaching Areas */}
      <section className="py-20 lg:py-24" style={{ background: "oklch(0.97 0.015 80)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="fade-up">
              <div className="section-label mb-3">What We Can Help With</div>
              <h2
                className="font-display text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                style={{ color: FOREST }}
              >
                We can help you grow in every area of life
              </h2>
              <p
                className="font-body text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.45 0.02 250)" }}
              >
                Whether you're looking to advance your career, improve your relationships, manage
                stress, or simply become a more confident, authentic version of yourself — our
                coaches are here to help.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coachingAreas.map((area) => (
                  <div key={area} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: TEAL }}
                    />
                    <span className="font-body text-sm" style={{ color: FOREST }}>
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-8 fade-up"
              style={{ background: TEAL_LIGHT }}
            >
              <div className="section-label mb-3">How It Works</div>
              <h3
                className="font-display text-2xl font-bold mb-5 leading-tight"
                style={{ color: FOREST }}
              >
                Flexible, confidential, and tailored to you
              </h3>
              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    title: "Choose Your Coach",
                    desc: "Browse our team of certified coaches and select the one who best fits your goals and style.",
                  },
                  {
                    step: "02",
                    title: "Schedule a Session",
                    desc: "Meet in person, by phone, or via video — whatever works best for your schedule and comfort.",
                  },
                  {
                    step: "03",
                    title: "Start Growing",
                    desc: "Work with your coach to set goals, build strengths, and develop a personalized action plan.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-white"
                      style={{ background: TEAL }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <div
                        className="font-display font-semibold text-base mb-1"
                        style={{ color: FOREST }}
                      >
                        {item.title}
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">Our Team</div>
            <h2
              className="font-display text-3xl lg:text-4xl font-bold mb-4 fade-up leading-tight"
              style={{ color: FOREST }}
            >
              Our Professional Coaches For You To Choose From
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed fade-up">
              Each of our coaches brings unique expertise, warmth, and dedication to helping you
              achieve your goals and Be Your BEST®.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className="service-card p-7 fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white text-lg"
                    style={{ background: TEAL }}
                  >
                    {coach.initials}
                  </div>
                  <div>
                    <h3
                      className="font-display text-lg font-bold leading-snug"
                      style={{ color: FOREST }}
                    >
                      {coach.name}
                    </h3>
                    <div className="section-label text-xs mt-0.5">{coach.title}</div>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {coach.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Teal background */}
      <section className="py-16 lg:py-20" style={{ background: TEAL }}>
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="section-label text-white/70 mb-3 fade-up">Ready to Begin?</div>
            <h2
              className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 fade-up leading-tight"
            >
              Let's help you Be Your BEST®
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed mb-8 fade-up">
              Contact us today to get matched with the right coach for your goals. Available through
              your EAP or as a standalone service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
              <Link
                href="/contact"
                className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
                style={{ color: TEAL }}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:8552331048"
                className="border-2 border-white/60 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                855.233.1048
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
