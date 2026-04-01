/*
 * REALiving® Our Services Page
 * Design: Organic Modernism — editorial layout with service cards
 * SEO: Full meta tags, structured data, semantic HTML
 */

import { useEffect } from "react";
import { Link } from "wouter";
import {
  Shield,
  Zap,
  Heart,
  Target,
  Users,
  BookOpen,
  Newspaper,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const COACHING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/coaching-session-GXnk6mBJuHsTQVjfq4iuoE.webp";
const TEAM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/team-collaboration-FqH3BBEVocoydxVfCCCN7e.webp";

const coreServices = [
  {
    id: "eap",
    icon: Shield,
    number: "01",
    title: "Employee Achievement Program® (EAP)",
    subtitle: "Our Flagship Service",
    description:
      "REALiving® provides much more than the average Employee Assistance Program. Because we think outside the box in providing real-world solutions that help employees succeed in life and at work, we call our EAP an Employee Achievement Program®.",
    details:
      "Our approach is built on a social model, not a medical one. We focus on helping people navigate the bumps in the road, offering tools that are engaging, not stigmatizing, proactive, not reactive, and solution-focused, not problem-focused. The result? A program that supports achievement, resilience, and well-being across your entire organization.",
    features: [
      "24/7 LIVE Answered Call Center",
      "Counseling, Financial & Legal Consultations",
      "Professional Coaching & Trainings",
      "Crisis Response",
      "Management Consultations",
      "Customized Solutions",
    ],
    href: "/eap",
    color: "oklch(0.7073 0.0946 183)",
    bg: "oklch(0.93 0.04 183)",
  },
  {
    id: "growth",
    icon: Zap,
    number: "02",
    title: "Growth & Development",
    subtitle: "Leadership & Learning",
    description:
      "REALiving's Growth & Development solutions help individuals and teams reach their full potential, strengthen leadership skills, and cultivate a thriving workplace culture.",
    details:
      "Through personalized coaching, skill-building programs, and engaging learning experiences, we partner with organizations to empower employees to grow, lead, and perform at their BEST.",
    features: [
      "Personalized Coaching",
      "Leadership Development",
      "Skill-Building Programs",
      "Team Development",
      "Performance Enhancement",
      "Culture Building",
    ],
    href: "/our-services",
    color: "oklch(0.60 0.085 183)",
    bg: "oklch(0.93 0.04 183)",
  },
  {
    id: "wellness",
    icon: Heart,
    number: "03",
    title: "Organizational Wellness",
    subtitle: "Culture & Performance",
    description:
      "At REALiving, our Organizational Wellness solutions bring Solutions for Life and Work to the heart of your business. These services strengthen culture, resilience, and performance across every level of your company.",
    details:
      "We partner with leaders to create tailored strategies that support employee well-being, build organizational trust, and drive measurable results — helping your workplace become one where people and performance thrive together.",
    features: [
      "Culture Strengthening",
      "Resilience Building",
      "Performance Improvement",
      "Tailored Strategies",
      "Organizational Trust",
      "Measurable Results",
    ],
    href: "/our-services",
    color: "oklch(0.50 0.055 183)",
    bg: "oklch(0.93 0.04 183)",
  },
  {
    id: "optimized",
    icon: Target,
    number: "04",
    title: "Optimized Solutions",
    subtitle: "Efficiency & Productivity",
    description:
      "REALiving's Optimized Solutions deliver targeted, high-impact services designed to streamline processes, reduce risk, and keep your workforce healthy, supported, and productive.",
    details:
      "From proactive wellness initiatives to expert guidance during workplace challenges, these solutions provide organizations with practical, results-driven tools that maximize efficiency and employee well-being.",
    features: [
      "Process Streamlining",
      "Risk Reduction",
      "Workforce Health",
      "Proactive Wellness",
      "Expert Guidance",
      "Results-Driven Tools",
    ],
    href: "/our-services",
    color: "oklch(0.7073 0.0946 183)",
    bg: "oklch(0.93 0.04 183)",
  },
];

const specialtyServices = [
  {
    id: "trifecta",
    icon: Shield,
    title: "Trifecta Program",
    subtitle: "Workplace Injury Management",
    description:
      "The Trifecta Program is REALiving's comprehensive solution for workplace injury management. Designed to support employees through every stage of recovery, it combines wellness, rehabilitation, and guidance to help people return to their BEST quickly and safely.",
    benefit: "Reduces workers' compensation costs while promoting a healthier, more resilient workforce.",
  },
  {
    id: "presentations",
    icon: Users,
    title: "Presentations & Trainings",
    subtitle: "30+ Topics Available",
    description:
      "REALiving offers a wide range of engaging presentations designed to educate, inspire, and support employees. With around 30 topics available — and more being developed — our presentations cover wellness, leadership, professional development, and more.",
    benefit: "Delivered through your EAP or purchased independently, each session can be customized to your organization's specific goals.",
  },
  {
    id: "coaching",
    icon: Target,
    title: "Professional Coaching",
    subtitle: "In-Person, Phone, or Video",
    description:
      "REALiving offers professional coaching services to help you Be Your BEST® in all aspects of your life. Our coaches can assist you in skill exploration, building strengths, and other skill development to enhance your work performance.",
    benefit: "Let our coaches help you execute the plan you need to Be Your BEST®!",
    href: "/professional-coaching",
  },
  {
    id: "magazine",
    icon: Newspaper,
    title: "REALiving Magazine",
    subtitle: "Published Twice a Year",
    description:
      "Published twice a year, REALiving Magazine inspires employees to bring their most authentic, empowered selves to work and life. Each issue features articles, stories, and resources designed to motivate, educate, and celebrate people striving to be their REAL and BEST selves.",
    benefit: "EAP clients receive complimentary copies. Subscriptions available for $12.95/year (2 issues).",
  },
];

export default function OurServices() {
  useEffect(() => {
    document.title = "Our Services | REALiving® — Solutions for Life and Work";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Explore REALiving's comprehensive suite of services including EAP, Growth & Development, Organizational Wellness, BESTology, Professional Coaching, and more.");

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Page Hero — with background image */}
      <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-our-services-mMciniRrM2fDJEH3arD7jg.webp')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.15) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "oklch(0.7073 0.0946 183)" }} />
        <div className="container relative z-10 py-24 lg:py-32">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">Our Services</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label mb-4 fade-up" style={{ color: "oklch(0.80 0.06 183)", borderColor: "oklch(0.7073 0.0946 183)" }}>What We Offer</div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight fade-up text-white">
              Our Core Solutions for Life and Work
            </h1>
            <p className="font-body text-lg leading-relaxed mb-8 fade-up text-white/80">
              At REALiving, we believe growth happens best when it's intentional — guided by purpose, built through connection, and supported with the right tools. Five renewed service areas represent the heart of what we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-up">
              <Link href="/contact" className="btn-primary">
                Get a Pricing Quote
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

      {/* Pricing Note */}
      <div
        className="py-4 text-center"
        style={{ background: "oklch(0.93 0.04 183)" }}
      >
        <p className="font-body text-sm text-forest">
          For a pricing quote for à la carte services, contact us at{" "}
          <a href="tel:8552331048" className="font-semibold text-teal-brand hover:underline">855.233.1048</a>
          {" "}or email{" "}
          <a href="mailto:info@REALiving.com" className="font-semibold text-teal-brand hover:underline">info@REALiving.com</a>
        </p>
      </div>

      {/* Core Services */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label mb-3 fade-up">Core Services</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest fade-up leading-tight">
              Five Pillars of Support
            </h2>
          </div>

          <div className="space-y-20">
            {coreServices.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div className={`fade-up ${isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-display text-5xl font-bold opacity-15"
                        style={{ color: service.color }}
                      >
                        {service.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${service.color}20` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: service.color }} />
                      </div>
                    </div>
                    <div className="section-label mb-2" style={{ color: service.color }}>
                      {service.subtitle}
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-forest mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                      {service.details}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: service.color }} />
                          <span className="font-body text-sm text-forest">{f}</span>
                        </div>
                      ))}
                    </div>
                    <a href={service.href} className="btn-primary text-sm">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Visual */}
                  <div className={`fade-up ${isEven ? "lg:order-1" : ""}`}>
                    <div
                      className="rounded-2xl p-8 h-full min-h-64 flex flex-col justify-between"
                      style={{ background: service.bg }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{ background: service.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="font-display text-2xl font-bold text-forest mb-3">
                          {service.title}
                        </div>
                        <div className="font-body text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.97 0.015 80)" }}
      >
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">Specialty Solutions</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-4 fade-up leading-tight">
              Additional Programs &amp; Resources
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed fade-up">
              Targeted solutions designed to address specific organizational needs with precision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {specialtyServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="service-card p-8 fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "oklch(0.93 0.04 183)" }}
                  >
                    <Icon className="w-6 h-6 text-teal-brand" />
                  </div>
                  <div className="section-label mb-2">{service.subtitle}</div>
                  <h3 className="font-display text-xl font-bold text-forest mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div
                    className="p-3 rounded-lg mb-5"
                    style={{ background: "oklch(0.93 0.04 183)" }}
                  >
                    <p className="font-body text-sm text-forest font-medium">
                      {service.benefit}
                    </p>
                  </div>
                  <a href={(service as any).href || "/contact"} className="font-body text-sm font-semibold text-teal-brand hover:underline inline-flex items-center gap-1">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Image Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <img
                src={COACHING_IMG}
                alt="Professional coaching session at REALiving"
                className="rounded-2xl w-full h-80 lg:h-[420px] object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="fade-up">
              <div className="section-label mb-3">Why REALiving?</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-5 leading-tight">
                A different approach to employee support
              </h2>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
                Traditional EAPs see counseling utilization rates of only 3–5%, leaving most employees untouched by support that could truly help them. REALiving does it differently.
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                We provide engaging, strength-based, and solution-focused services that appeal to everyone, not just those in distress. By equipping employees with meaningful resources before issues escalate, organizations benefit from improved attendance, higher engagement, and stronger overall performance.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Engaging, not stigmatizing",
                  "Proactive, not reactive",
                  "Solution-focused, not problem-focused",
                  "Social model, not medical",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-brand flex-shrink-0" />
                    <span className="font-body text-base text-forest font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/eap" className="btn-primary">
                Learn About Our EAP
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Teal brand background */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.7073 0.0946 183)" }}
      >
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 fade-up leading-tight">
              Ready to get started?
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed mb-8 fade-up">
              Contact us for a personalized pricing quote and consultation. We'll help you find the right combination of services for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
              <Link href="/contact" className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-gray-50 transition-colors" style={{ color: "oklch(0.7073 0.0946 183)" }}>
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:info@REALiving.com" className="border-2 border-white/60 text-white font-body font-semibold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
                info@REALiving.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
