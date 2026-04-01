/*
 * REALiving® Home Page
 * Design: Organic Modernism — editorial hero, service cards, BESTology tenets,
 *         Coach's Corner, Magazine section, Contact form
 * SEO: Full meta tags, structured data, semantic HTML
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  BookOpen,
  Users,
  Heart,
  Target,
  Zap,
  Shield,
  Star,
  CheckCircle2,
  Send,
} from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-meditation-v2-nJHXeYfHACm9BJSMwvQ35Q.webp";
const TEAM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/team-collaboration-FqH3BBEVocoydxVfCCCN7e.webp";
const COACHING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/coaching-session-GXnk6mBJuHsTQVjfq4iuoE.webp";

const services = [
  {
    icon: Shield,
    title: "Employee Achievement Program®",
    subtitle: "EAP",
    desc: "More than a traditional EAP — a social model focused on achievement, resilience, and well-being. Proactive, engaging, and solution-focused.",
    href: "/eap",
    color: "oklch(0.7073 0.0946 183)",
  },
  {
    icon: Zap,
    title: "Growth & Development",
    subtitle: "Leadership",
    desc: "Personalized coaching, skill-building programs, and engaging learning experiences to help individuals and teams reach their full potential.",
    href: "/our-services#growth",
    color: "oklch(0.60 0.085 183)",
  },
  {
    icon: Heart,
    title: "Organizational Wellness",
    subtitle: "Culture",
    desc: "Strengthen culture, resilience, and performance across every level. Tailored strategies that support employee well-being and drive results.",
    href: "/our-services#wellness",
    color: "oklch(0.50 0.055 183)",
  },
  {
    icon: Target,
    title: "BESTology® Certification",
    subtitle: "Coaching",
    desc: "Become a certified BESTologist® and bring REALiving's philosophy to life in your organization. 11-month virtual program.",
    href: "/bestology",
    color: "oklch(0.7073 0.0946 183)",
  },
  {
    icon: Users,
    title: "Professional Coaching",
    subtitle: "1-on-1",
    desc: "Expert coaches available in person, by phone, or video. Skill exploration, strength-building, and performance enhancement.",
    href: "/our-services#coaching",
    color: "oklch(0.60 0.085 183)",
  },
  {
    icon: BookOpen,
    title: "Presentations & Trainings",
    subtitle: "30+ Topics",
    desc: "Over 30 customizable presentations covering wellness, leadership, and professional development. Delivered on-site or virtually.",
    href: "/our-services#presentations",
    color: "oklch(0.50 0.055 183)",
  },
];

const tenets = [
  { letter: "B", word: "Believe", full: "Believe in your BEST" },
  { letter: "D", word: "Different", full: "Do One Thing DIFFERENT" },
  { letter: "H", word: "Honor", full: "Honor AUTHENTICITY" },
  { letter: "C", word: "Cultivate", full: "Cultivate PURPOSE" },
  { letter: "B", word: "Champion", full: "Be Your Own CHAMPION" },
];

const stats = [
  { value: "3–5%", label: "Traditional EAP utilization", note: "Industry average" },
  { value: "24/7", label: "Live answered support", note: "Real people, real help" },
  { value: "30+", label: "Presentation topics", note: "Customizable content" },
  { value: "$1,000", label: "BESTology certification", note: "Per participant" },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (form) {
      form.reset();
      alert("Message received! We'll be in touch soon.");
    }
  };

  return (
    <main>
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Person finding clarity and purpose on a mountain at golden hour"
            className="w-full h-full object-cover hero-img-mobile-left" style={{ transform: 'scaleX(-1)', objectPosition: 'center center' }}
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="section-label text-white/80 mb-4 fade-up">
              Employee Achievement Program®
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 fade-up" style={{ animationDelay: "0.1s" }}>
              Helping you and your employees{" "}
              <span className="font-script italic" style={{ color: "oklch(0.80 0.06 183)", fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
                Be Your BEST®
              </span>
            </h1>
            <p className="font-body text-lg text-white/85 leading-relaxed mb-8 max-w-xl fade-up" style={{ animationDelay: "0.2s" }}>
              At REALiving®, we believe the key to growth is authenticity. Being REAL — true to yourself and others — is the foundation for meaningful connections, personal fulfillment, and professional success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up" style={{ animationDelay: "0.3s" }}>
              <a href="/contact" className="btn-white">
                Get Your Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/our-services" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Explore Our Services
              </a>
            </div>
          </div>
        </div>


      </section>

      {/* ── ABOUT / PHILOSOPHY SECTION ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white" aria-label="About REALiving">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative fade-up order-2 lg:order-1">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "oklch(0.93 0.04 183)" }}
              />
              <img
                src={TEAM_IMG}
                alt="REALiving team collaborating in a modern office"
                className="relative rounded-2xl w-full h-80 lg:h-[480px] object-cover shadow-xl"
                loading="lazy"
              />
              {/* Floating stat */}
              <div
                className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 shadow-xl border border-border"
              >
                <div className="font-display text-3xl font-bold text-teal-brand">24/7</div>
                <div className="font-body text-sm text-muted-foreground mt-0.5">Live Support Available</div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="section-label mb-3 fade-up">Solutions for Life and Work</div>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-forest mb-6 fade-up leading-tight">
                Growth rooted in authenticity
              </h2>
              <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 fade-up">
                At REALiving®, we believe the key to growth is authenticity. Being REAL — true to yourself and others — is the foundation for meaningful connections, personal fulfillment, and professional success.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 fade-up">
                As REALiving: Solutions for Life and Work, we help individuals and organizations thrive through a comprehensive suite of integrated solutions. Our philosophy is simple: <strong className="text-forest">We want to help you be your BEST®.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 fade-up">
                <a href="/our-services" className="btn-primary">
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:8552331048" className="btn-outline">
                  <Phone className="w-4 h-4" />
                  855.233.1048
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — Teal background ──────────────────────────── */}
      <section
        className="py-12"
        style={{ background: "oklch(0.7073 0.0946 183)" }}
        aria-label="Key statistics"
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm font-medium text-white/80 mb-0.5">
                  {stat.label}
                </div>
                <div className="font-body text-xs text-white/60">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ background: "oklch(0.97 0.015 80)" }} aria-label="Our services">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">What We Offer</div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-forest mb-5 fade-up leading-tight">
              Our Core Solutions
            </h2>
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed fade-up">
              Five renewed service areas designed to help individuals, teams, and organizations be their BEST — personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={i}
                  href={service.href}
                  className="service-card p-7 block fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${service.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <div className="section-label mb-1" style={{ color: service.color }}>
                    {service.subtitle}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <span
                    className="font-body text-sm font-semibold inline-flex items-center gap-1.5 transition-gap duration-200"
                    style={{ color: service.color }}
                  >
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10 fade-up">
            <a href="/our-services" className="btn-primary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── BESTOLOGY SECTION — Teal background ──────────────────── */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{ background: "oklch(0.7073 0.0946 183)" }}
        aria-label="BESTology certification"
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "white" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-10"
          style={{ background: "white" }}
        />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <div className="section-label text-white/70 mb-3 fade-up">BESTology® Program</div>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-5 fade-up leading-tight">
                Become a Certified{" "}
                <span className="font-script italic" style={{ color: "oklch(0.97 0.02 183)", fontFamily: "'Dancing Script', cursive" }}>
                  BESTologist®
                </span>
              </h2>
              <p className="font-body text-base text-white/85 leading-relaxed mb-8 fade-up">
                The BESTology® Certification Course equips participants to understand and implement REALiving's five tenets. As a certified BESTologist®, you'll gain the skills to coach others, helping your organization foster a positive culture and thrive.
              </p>

              {/* Course Details */}
              <div className="rounded-xl p-5 mb-8 fade-up bg-white/15 backdrop-blur-sm">
                <h4 className="font-display font-semibold text-white text-base mb-4">Course Details</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Duration", "11-month program"],
                    ["Schedule", "1st Tuesday/month"],
                    ["Format", "Virtual, 12–2 p.m. CST"],
                    ["Investment", "$1,000 per participant"],
                    ["Next Session", "June 2, 2026"],
                    ["Deadline", "May 22, 2026"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="font-body text-xs text-white/60 mb-0.5">{k}</div>
                      <div className="font-body text-sm font-medium text-white">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 fade-up">
                <Link href="/bestology" className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors" style={{ color: "oklch(0.7073 0.0946 183)" }}>
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/bestology" className="border-2 border-white/50 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Tenets */}
            <div className="space-y-3 fade-up">
              <h3 className="font-display text-xl font-semibold text-white/90 mb-5">
                The Five Tenets of BESTology®
              </h3>
              {tenets.map((tenet, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 fade-up bg-white/15"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white text-lg bg-white/25"
                  >
                    {tenet.letter}
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/60 uppercase tracking-wider mb-0.5">
                      {tenet.word}
                    </div>
                    <div className="font-display font-semibold text-white text-base">
                      {tenet.full}
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 ml-auto flex-shrink-0 text-white/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD & READ BOOK CLUB ────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-white" aria-label="Lead and Read Book Club">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label mb-3">Community</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-5 leading-tight">
                Lead &amp; Read Book Club
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                Join Gina Krueger every 3rd Tuesday from 12:00–12:45 p.m. CST for a monthly book club designed to fuel your growth — personally and professionally.
              </p>
              <div
                className="rounded-xl p-5 mb-6"
                style={{ background: "oklch(0.93 0.04 183)" }}
              >
                <div className="font-body text-xs font-semibold text-teal-brand uppercase tracking-wider mb-3">
                  Next Book
                </div>
                <div className="font-display text-xl font-bold text-forest mb-1">
                  Start With Why
                </div>
                <div className="font-body text-sm text-muted-foreground mb-3">by Simon Sinek</div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Learn how clarity of WHY you do what you do is the driving force for charisma, happiness, leadership, best-in-class marketing, and personal success.
                </p>
              </div>
              <div className="flex items-center gap-4 mb-6 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-brand" />
                  5 meetings total
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-brand" />
                  Starting March 17
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-brand" />
                  $25 per series
                </div>
              </div>
              <a
                href="https://attendee.gototraining.com/r/7845321550626578689"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Sign Up for Book Club
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Coach's Corner */}
            <div
              className="rounded-2xl overflow-hidden fade-up"
              style={{ background: "oklch(0.97 0.015 80)" }}
            >
              <div
                className="p-6"
                style={{ background: "oklch(0.7073 0.0946 183)" }}
              >
                <div className="section-label text-white/70 mb-2">Monthly Video</div>
                <h3 className="font-display text-2xl font-bold text-white">Coach's Corner</h3>
              </div>
              <div className="p-6">
                <div
                  className="rounded-xl overflow-hidden mb-5 aspect-video bg-gray-100 flex items-center justify-center"
                  style={{ background: "oklch(0.93 0.04 183)" }}
                >
                  <div className="text-center p-8">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "oklch(0.7073 0.0946 183)" }}
                    >
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="font-display font-semibold text-forest text-lg mb-1">
                      Reconnecting to Your Why
                    </div>
                    <div className="font-body text-sm text-muted-foreground">February 2026</div>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Each month, REALiving EAP Advisor <strong>Jesseca Erb</strong> shares practical insights and simple strategies to help you navigate life's challenges with confidence.
                </p>
                <a
                  href="https://www.realiving.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 w-full justify-center"
                >
                  Watch This Month's Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAGAZINE SECTION ─────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24 relative overflow-hidden"
        style={{ background: "oklch(0.93 0.04 183)" }}
        aria-label="REALiving Magazine"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label mb-3">Published Twice a Year</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-5 leading-tight">
                REALiving Magazine
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                REALiving Magazine is published twice a year and created to inspire you to be your BEST®. Ready to be your most authentic, REAL self?
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                Inside, you'll find practical tools, stories, and insights designed for everyday life — leadership, work-life balance, parenting, nutrition, physical wellness, contests, and more.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Leadership", "Work-Life Balance", "Parenting", "Nutrition", "Physical Wellness"].map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: "oklch(0.7073 0.0946 183 / 0.12)", color: "oklch(0.50 0.055 183)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.realiving.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Spring 2026 Magazine
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/our-services#magazine" className="btn-outline">
                  Subscribe — $12.95/yr
                </a>
              </div>
            </div>

            {/* Magazine Visual */}
            <div className="flex justify-center fade-up">
              <div
                className="relative w-64 lg:w-80"
                style={{ transform: "rotate(-3deg)" }}
              >
                <div
                  className="rounded-2xl shadow-2xl overflow-hidden aspect-[3/4]"
                  style={{ background: "oklch(0.50 0.055 183)" }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="font-display text-2xl font-bold text-white mb-1">
                      REAL<span style={{ color: "oklch(0.75 0.070 183)" }}>living</span>®
                    </div>
                    <div className="font-body text-xs text-white/50 mb-4 uppercase tracking-wider">
                      Spring 2026 · Vol. 10 Issue 1
                    </div>
                    <div
                      className="flex-1 rounded-xl mb-4"
                      style={{ background: "oklch(0.50 0.055 183)" }}
                    />
                    <div className="font-display text-lg font-semibold text-white leading-tight">
                      Your Financial GPS
                    </div>
                    <div className="font-body text-xs text-white/60 mt-1">
                      Goals That Drive Me
                    </div>
                  </div>
                </div>
                {/* Shadow magazine behind */}
                <div
                  className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl -z-10"
                  style={{ background: "oklch(0.7073 0.0946 183)", transform: "rotate(3deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Latest blog posts">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-label mb-3 fade-up">Real Talk</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest fade-up leading-tight">
                A Blog by REALiving
              </h2>
            </div>
            <a href="/blog" className="btn-outline text-sm py-2.5 fade-up self-start sm:self-auto">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "When Everything Feels Like Too Much: A Gentle Reset for Your Mental Health",
                date: "January 27, 2026",
                readTime: "2 min read",
                excerpt: "It's hard to miss the tension in the air right now. Many people are feeling burned out, overwhelmed, angry, or emotionally exhausted. Here's your reminder: it's okay to pause.",
                tag: "Mental Health",
                img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
              },
              {
                title: "The Ripple Effect of Connecting Within",
                date: "November 4, 2025",
                readTime: "2 min read",
                excerpt: "Check in with yourself today. That tiny pause? It could ripple kindness far and wide. Each year, REALiving puts together a calendar filled with thoughtful quotes.",
                tag: "Wellness",
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
              },
              {
                title: "Meet the Team: Part 1",
                date: "October 2, 2025",
                readTime: "2 min read",
                excerpt: "If you're curious about the people behind the curtain of your favorite EAP provider, then here's your chance to get to know us a little better.",
                tag: "Team",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
              },
            ].map((post, i) => (
              <article
                key={i}
                className="blog-card fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="font-body text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "oklch(0.93 0.04 183)", color: "oklch(0.50 0.055 183)" }}
                    >
                      {post.tag}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-forest mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                    <a href="/blog" className="font-body text-sm font-semibold text-teal-brand hover:underline inline-flex items-center gap-1">
                      Read More <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.97 0.015 80)" }}
        aria-label="Contact REALiving"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="fade-up">
              <div className="section-label mb-3">Get In Touch</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-5 leading-tight">
                Let's talk about your organization's needs
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                For more information and an individual consultation, contact us today. We'd love to show you how REALiving can help your team be their BEST®.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Our Office",
                    value: "321 Frenette Drive, Suite #7\nChippewa Falls, WI 54729",
                  },
                  { icon: Phone, label: "Phone", value: "855.233.1048", href: "tel:8552331048" },
                  { icon: Mail, label: "Email", value: "info@REALiving.com", href: "mailto:info@REALiving.com" },
                ].map(({ icon: Icon, label, value, href }) => (
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
                          className="font-body text-base font-medium text-forest hover:text-teal-brand transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-base font-medium text-forest whitespace-pre-line">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* EAP Login CTA */}
              <div
                className="mt-8 p-5 rounded-xl"
                style={{ background: "oklch(0.7073 0.0946 183)" }}
              >
                <div className="font-display font-semibold text-white text-base mb-2">
                  Already an EAP Client?
                </div>
                <p className="font-body text-sm text-white/80 mb-4">
                  Access your employee resources through our secure EAP portal.
                </p>
                <a
                  href="https://www.realiving.com/eap-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white font-body font-semibold text-sm px-5 py-2.5 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
                  style={{ color: "oklch(0.7073 0.0946 183)" }}
                >
                  EAP Login Portal
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-border fade-up"
            >
              <h3 className="font-display text-2xl font-bold text-forest mb-6">
                Send Us a Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
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
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Your company or organization"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-forest mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your organization's needs..."
                    className="form-input resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <p className="font-body text-xs text-muted-foreground text-center">
                  We typically respond within 1 business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER — Teal background ──────────────────── */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "oklch(0.7073 0.0946 183)" }}
        aria-label="Call to action"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{ background: "white" }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full translate-x-1/3 translate-y-1/3"
            style={{ background: "white" }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-white text-white opacity-80" />
              <span className="font-body text-white/80 text-sm font-medium uppercase tracking-widest">
                Be Your BEST® Conference
              </span>
              <Star className="w-5 h-5 fill-white text-white opacity-80" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight fade-up">
              Ready to help your team thrive?
            </h2>
            <p className="font-body text-base text-white/85 leading-relaxed mb-8 fade-up">
              Contact us today for a free consultation and discover how REALiving's Solutions for Life and Work can transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
              <Link href="/contact" className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors" style={{ color: "oklch(0.7073 0.0946 183)" }}>
                Get Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:8552331048" className="border-2 border-white/50 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
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
