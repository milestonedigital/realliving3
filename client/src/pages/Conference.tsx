/*
 * REALiving® Be Your BEST Conference Page
 * Design: Organic Modernism — event page with registration
 */

import { useEffect } from "react";
import { Link } from "wouter";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle2,
  Mic,
  Music,
  Coffee,
  Award,
} from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-conference-VMbyC2BY5jpheLtxECoVYT.webp";

const schedule = [
  { time: "8:30 AM", event: "Registration & Welcome", icon: Coffee },
  { time: "9:00 AM", event: "Morning Welcome — Gina Krueger, REALiving Director", icon: Mic },
  { time: "9:30 AM", event: "Morning Sessions — Full Agenda Coming Soon!", icon: Users },
  { time: "12:00 PM", event: "Taco Bar Lunch", icon: Coffee },
  { time: "1:00 PM", event: "Afternoon Sessions — Full Agenda Coming Soon!", icon: Mic },
  { time: "3:00 PM", event: "Prize Drawings", icon: Award },
  { time: "3:30 PM", event: "Closing Remarks — Gina Krueger", icon: Music },
];

const speakers = [
  {
    name: "Gina Krueger",
    title: "Founder & CEO, REALiving®",
    topic: "Be Your BEST: The Power of Authentic Living",
    bio: "Gina is the visionary behind REALiving® and a passionate advocate for authentic growth. Her keynote will inspire you to embrace your most real, powerful self.",
  },
  {
    name: "Jesseca Erb",
    title: "EAP Advisor, REALiving®",
    topic: "Reconnecting to Your Why",
    bio: "Jesseca brings warmth, wisdom, and practical tools to help you navigate life's challenges with confidence and clarity.",
  },
  {
    name: "REALiving Team",
    title: "Certified BESTologists®",
    topic: "The Five Tenets in Action",
    bio: "Our certified team will lead interactive workshops on applying BESTology's five tenets in your personal and professional life.",
  },
];

export default function Conference() {
  useEffect(() => {
    document.title = "Be Your BEST® Conference | REALiving® — Annual Event";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Be Your BEST Conference"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container relative z-10 py-20">
          <nav className="flex items-center gap-2 font-body text-sm text-white/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Conference</span>
          </nav>
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 fade-up">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span className="font-body text-white/80 text-sm font-medium uppercase tracking-widest">
                Annual Event
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight fade-up">
              Be Your BEST®{" "}
              <span
                className="font-script italic"
                style={{
                  color: "oklch(0.80 0.06 183)",
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                }}
              >
                Conference
              </span>
            </h1>
            <p className="font-body text-lg text-white/85 leading-relaxed mb-4 fade-up">
              <em>"Pause. Breathe. Be Kind."</em>
            </p>
            <p className="font-body text-base text-white/80 leading-relaxed mb-8 fade-up">
              The 13th annual Be Your BEST Conference®, hosted by REALiving, is a day designed to educate, inspire, and motivate. Join us for a powerful day of learning, reflection, and renewed energy to be your very best.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 fade-up">
              {[
                { icon: Calendar, text: "Tuesday, May 5, 2026" },
                { icon: MapPin, text: "Wild Ridge Golf & Event Center, Eau Claire, WI" },
                { icon: Clock, text: "9:00 a.m. – 3:30 p.m." },
                { icon: Users, text: "Registration: 8:30–9 a.m." },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/80 font-body text-sm">
                  <Icon className="w-4 h-4" />
                  {text}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 fade-up">
              <a
                href="https://www.realiving.com/be-your-best-conference-register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                Register Here
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#schedule" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the Conference */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-3 fade-up">About the Event</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-6 fade-up leading-tight">
              A day dedicated to your growth
            </h2>
            <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 fade-up">
              The Be Your BEST® Conference is REALiving's signature annual event — a gathering of growth-minded individuals who are committed to living authentically, leading with purpose, and helping others do the same.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 fade-up">
              Through inspiring keynotes, hands-on workshops, and meaningful connections, attendees leave equipped with practical tools and renewed energy to Be Their BEST® in every area of life.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 fade-up">
              {[
                { value: "1", label: "Full Day" },
                { value: "3+", label: "Keynote Speakers" },
                { value: "6+", label: "Breakout Sessions" },
                { value: "∞", label: "Connections Made" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl"
                  style={{ background: "oklch(0.93 0.04 183)" }}
                >
                  <div className="font-display text-3xl font-bold text-teal-brand mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section
        id="schedule"
        className="py-20 lg:py-28"
        style={{ background: "oklch(0.97 0.015 80)" }}
      >
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">Event Schedule</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-4 fade-up leading-tight">
              A day full of inspiration
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {schedule.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border fade-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.93 0.04 183)" }}
                  >
                    <Icon className="w-5 h-5 text-teal-brand" />
                  </div>
                  <div className="flex-1">
                    <div className="font-body text-xs font-semibold text-muted-foreground mb-0.5">
                      {item.time}
                    </div>
                    <div className="font-display font-semibold text-forest text-base">
                      {item.event}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="font-body text-sm text-muted-foreground text-center mt-6 fade-up">
            * Schedule subject to change. Full agenda released closer to the event date.
          </p>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label mb-3 fade-up">Featured Speakers</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-4 fade-up leading-tight">
              Learn from the BEST
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="service-card p-7 text-center fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 font-display font-bold text-white text-xl"
                  style={{ background: "oklch(0.7073 0.0946 183)" }}
                >
                  {speaker.name.charAt(0)}
                </div>
                <h3 className="font-display text-xl font-bold text-forest mb-1">
                  {speaker.name}
                </h3>
                <div className="section-label mb-3">{speaker.title}</div>
                <div
                  className="font-body text-sm font-medium px-3 py-1.5 rounded-full mb-4 inline-block"
                  style={{ background: "oklch(0.93 0.04 183)", color: "oklch(0.50 0.055 183)" }}
                >
                  "{speaker.topic}"
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included — Teal background */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "oklch(0.7073 0.0946 183)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="section-label text-white/70 mb-3">What's Included</div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Everything you need for a transformative day
              </h2>
              <div className="space-y-3">
                {[
                  "Full-day access to all sessions",
                  "Refreshments throughout the day",
                  "Taco bar lunch",
                  "Handouts and session materials",
                  "Gift bag",
                  "Certificate of participation (upon request)",
                  "Prize drawings at end of day",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
                    <span className="font-body text-base text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up">
              <div className="rounded-2xl p-8 bg-white shadow-xl">
                <div className="flex items-center gap-2 mb-5">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-body text-sm font-medium uppercase tracking-wider" style={{ color: "oklch(0.7073 0.0946 183)" }}>
                    Registration Open
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-xl" style={{ background: "oklch(0.93 0.04 183)" }}>
                    <div>
                      <div className="font-display font-bold text-xl" style={{ color: "oklch(0.16 0.01 250)" }}>$75</div>
                      <div className="font-body text-sm text-muted-foreground">EAP Client</div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-teal-brand" />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-border">
                    <div>
                      <div className="font-display font-bold text-xl" style={{ color: "oklch(0.16 0.01 250)" }}>$150</div>
                      <div className="font-body text-sm text-muted-foreground">Non-EAP Client</div>
                    </div>
                    <CheckCircle2 className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <p className="font-body text-xs text-gray-500 leading-relaxed mb-5">
                  Click "Register Here" to be directed to our GoToTraining registration page. Complete the form, enter your coupon code (if applicable), and proceed to PayPal to finalize payment. <strong>You are not fully registered until payment has been made.</strong>
                </p>
                <a
                  href="https://www.realiving.com/be-your-best-conference-register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center mb-3"
                >
                  Register Here
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="font-body text-xs text-center text-muted-foreground">
                  Questions? Email{" "}
                  <a href="mailto:BEST@REALiving.com" className="text-teal-brand hover:underline font-medium">BEST@REALiving.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
