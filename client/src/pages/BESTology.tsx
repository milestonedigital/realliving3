/*
 * REALiving® BESTology Page
 * Design: Organic Modernism — Light backgrounds, teal accents only
 * Hero: White/light background with teal accent
 */

import { useEffect } from "react";
import { Link } from "wouter";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  DollarSign,
  Monitor,
  Star,
  Users,
  Award,
} from "lucide-react";

const TEAL = "oklch(0.7073 0.0946 183)";
const TEAL_LIGHT = "oklch(0.93 0.04 183)";
const TEAL_XLIGHT = "oklch(0.97 0.02 183)";
const FOREST = "oklch(0.16 0.01 250)";

const tenets = [
  {
    letter: "B",
    word: "Believe",
    full: "Believe in your BEST",
    description:
      "Cultivate a deep belief in your own potential and the potential of those around you. This tenet challenges you to shift your mindset and see possibilities where others see limitations.",
    color: TEAL,
  },
  {
    letter: "D",
    word: "Different",
    full: "Do One Thing DIFFERENT",
    description:
      "Growth happens at the edge of comfort. This tenet encourages you to take one intentional step outside your routine — to try, explore, and discover new ways of thinking and doing.",
    color: "oklch(0.60 0.085 183)",
  },
  {
    letter: "H",
    word: "Honor",
    full: "Honor AUTHENTICITY",
    description:
      "Being real starts with being honest — with yourself and others. This tenet calls you to show up as your true self, embrace your values, and build relationships grounded in trust and transparency.",
    color: "oklch(0.50 0.055 183)",
  },
  {
    letter: "C",
    word: "Cultivate",
    full: "Cultivate PURPOSE",
    description:
      "Purpose is the fuel that drives meaningful action. This tenet guides you to identify what matters most, align your efforts with your values, and invest your energy where it makes the greatest difference.",
    color: TEAL,
  },
  {
    letter: "B",
    word: "Champion",
    full: "Be Your Own CHAMPION",
    description:
      "You are your most important advocate. This tenet empowers you to own your story, celebrate your progress, and stand up for your growth — even when it's hard.",
    color: "oklch(0.60 0.085 183)",
  },
];

const courseDetails = [
  { icon: Calendar, label: "Start Date", value: "June 2, 2026" },
  { icon: Clock, label: "Schedule", value: "1st Tuesday of each month, 12–2 p.m. CST" },
  { icon: Monitor, label: "Format", value: "Virtual (Zoom)" },
  { icon: Calendar, label: "Duration", value: "11-month program" },
  { icon: DollarSign, label: "Investment", value: "$1,000 per participant" },
  { icon: Calendar, label: "Registration Deadline", value: "May 22, 2026" },
];

export default function BESTology() {
  useEffect(() => {
    document.title = "BESTology® Certification | REALiving® — Be Your BEST";
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
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-bestology-YJCvFrfXszxL6RDFBBCmcB.webp')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: TEAL }} />
        <div className="container relative z-10 py-24 lg:py-32">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">BESTology</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label mb-4 fade-up" style={{ color: "oklch(0.80 0.06 183)", borderColor: TEAL }}>Certification Program</div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight fade-up text-white">
              Become a Certified{" "}
              <span
                className="font-script italic"
                style={{
                  color: "oklch(0.85 0.08 183)",
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                }}
              >
                BESTologist®
              </span>
            </h1>
            <p className="font-body text-lg leading-relaxed mb-8 fade-up text-white/80">
              The BESTology® Certification Course equips participants to understand and implement REALiving's five tenets. As a certified BESTologist®, you'll gain the skills to coach others, helping your organization foster a positive culture and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScZo8ydX3z_W4zzFGRM0HRKttDNsFDJubbGBbBOFmmdPg7neg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Apply for Next Cohort
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#course-details" className="border-2 border-white/60 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                View Course Details
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is BESTology */}
      <section className="py-20 lg:py-28" style={{ background: TEAL_XLIGHT }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label mb-3">What is BESTology?</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-5 leading-tight" style={{ color: FOREST }}>
                A philosophy for authentic growth
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                BESTology® is REALiving's proprietary framework built on five powerful tenets that guide individuals toward their most authentic, purposeful, and empowered selves.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                More than a certification, BESTology® is a way of thinking and living. It's about showing up as your BEST self — in your career, your relationships, and your community.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                As a certified BESTologist®, you'll be equipped to coach others, lead with intention, and help build organizations where people genuinely thrive.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Users, label: "Community", sub: "Join a cohort of growth-minded leaders" },
                  { icon: Award, label: "Certified", sub: "Earn your BESTologist® credential" },
                  { icon: Star, label: "Impact", sub: "Transform your organization's culture" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl text-center bg-white shadow-sm border"
                    style={{ borderColor: "oklch(0.88 0.04 183)" }}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" style={{ color: TEAL }} />
                    <div className="font-display font-semibold text-sm mb-1" style={{ color: FOREST }}>{label}</div>
                    <div className="font-body text-xs text-muted-foreground">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details Card — Teal background */}
            <div id="course-details" className="fade-up">
              <div
                className="rounded-2xl overflow-hidden shadow-xl"
                style={{ background: TEAL }}
              >
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-white/80" />
                    <span className="font-body text-sm font-semibold text-white/70 uppercase tracking-wider">
                      2026 Cohort
                    </span>
                  </div>
                  <div className="font-display text-2xl font-bold text-white">
                    BESTology® Certification
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {courseDetails.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/20">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-white/60 mb-0.5">{label}</div>
                        <div className="font-body text-sm font-medium text-white">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 pt-0 space-y-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScZo8ydX3z_W4zzFGRM0HRKttDNsFDJubbGBbBOFmmdPg7neg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    style={{ color: TEAL }}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p className="font-body text-xs text-white/60 text-center">
                    Registration deadline: May 22, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Tenets */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">The Foundation</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 fade-up leading-tight" style={{ color: FOREST }}>
              The Five Tenets of BESTology®
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed fade-up">
              Each tenet is a building block toward becoming your most authentic, empowered self.
            </p>
          </div>

          <div className="space-y-5">
            {tenets.map((tenet, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start p-6 lg:p-8 rounded-2xl bg-white border border-border fade-up shadow-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 font-display font-bold text-white text-2xl shadow-lg"
                    style={{ background: tenet.color }}
                  >
                    {tenet.letter}
                  </div>
                  <div className="lg:hidden">
                    <div className="section-label mb-0.5" style={{ color: tenet.color }}>
                      {tenet.word}
                    </div>
                    <div className="font-display text-xl font-bold" style={{ color: FOREST }}>
                      {tenet.full}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="hidden lg:block">
                    <div className="section-label mb-1" style={{ color: tenet.color }}>
                      {tenet.word}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3" style={{ color: FOREST }}>
                      {tenet.full}
                    </h3>
                  </div>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 lg:py-24" style={{ background: TEAL_XLIGHT }}>
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="section-label mb-3 fade-up">Who Should Enroll?</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 fade-up leading-tight" style={{ color: FOREST }}>
              Built for growth-minded leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "HR Professionals", desc: "Bring a proven framework to your people strategy and create a culture of authentic growth." },
              { title: "Managers & Leaders", desc: "Develop the coaching skills to support your team's well-being and performance." },
              { title: "EAP Coordinators", desc: "Enhance your EAP offerings with a certification that adds real value to your program." },
              { title: "Coaches & Counselors", desc: "Add BESTology® to your toolkit and expand your impact with clients." },
              { title: "Wellness Champions", desc: "Lead organizational wellness initiatives grounded in authenticity and purpose." },
              { title: "Anyone Ready to Grow", desc: "If you're committed to being your BEST and helping others do the same, this is for you." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-border fade-up shadow-sm"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CheckCircle2 className="w-6 h-6 mb-3" style={{ color: TEAL }} />
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: FOREST }}>{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Teal background */}
      <section
        className="py-16 lg:py-20"
        style={{ background: TEAL }}
      >
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              <span className="font-body text-white/80 text-sm font-medium uppercase tracking-widest">
                Limited Spots Available
              </span>
              <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 fade-up leading-tight">
              Ready to become a BESTologist®?
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed mb-8 fade-up">
              The next cohort begins June 2, 2026. Registration closes May 22, 2026. Secure your spot today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScZo8ydX3z_W4zzFGRM0HRKttDNsFDJubbGBbBOFmmdPg7neg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors"
                style={{ color: TEAL }}
              >
                Apply Now — $1,000
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="border-2 border-white/60 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
