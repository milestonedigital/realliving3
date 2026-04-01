/*
 * REALiving® Blog Page
 * Design: Organic Modernism — editorial blog layout
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ChevronRight, Search, ArrowRight, Clock, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    slug: "when-everything-feels-like-too-much",
    title: "When Everything Feels Like Too Much: A Gentle Reset for Your Mental Health",
    date: "January 27, 2026",
    readTime: "2 min read",
    category: "Mental Health",
    excerpt:
      "It's hard to miss the tension in the air right now. Many people are feeling burned out, overwhelmed, angry, or emotionally exhausted—even if they can't quite put their finger on why. If that sounds familiar, this is your reminder: it's okay to pause.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-mental-health_0503229b.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "the-ripple-effect-of-connecting-within",
    title: "The Ripple Effect of Connecting Within",
    date: "November 4, 2025",
    readTime: "2 min read",
    category: "Wellness",
    excerpt:
      "Check in with yourself today. That tiny pause? It could ripple kindness far and wide. Each year, REALiving puts together a calendar filled with magazine photos, thoughtful quotes, and a mix of quirky holidays.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-ripple-effect_e684337e.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: "ted-talk-tuesday",
    title: "TED Talk Tuesday",
    date: "October 14, 2025",
    readTime: "1 min read",
    category: "Resources",
    excerpt:
      "Welcome to TED Talk Tuesday—the occasional Tuesday where we will share a TED Talk video that we have found particularly helpful, insightful, or just plain entertaining. This week: KC Davis on 'How to Do Laundry When You're Depressed.'",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-post3-ted-talk_826a2aa0.jpeg",
    featured: false,
    videoUrl: "https://www.youtube.com/embed/kqItMybTKTo",
  },
  {
    id: 4,
    slug: "meet-the-team-part-1",
    title: "Meet the Team: Part 1",
    date: "October 2, 2025",
    readTime: "2 min read",
    category: "Team",
    excerpt:
      "If you're curious about the people behind the curtain of your favorite EAP provider (I'm talking about REALiving, obviously), then here is Part 1 of our team introductions!",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-meet-team_303e7c89.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: "would-you-rather",
    title: "Would You Rather ...",
    date: "September 23, 2025",
    readTime: "2 min read",
    category: "Wellness",
    excerpt:
      "At REALiving, we know wellness doesn't have to be serious all the time. Sometimes a little playfulness can spark new ideas for taking care of yourself. Let's play a round of Would You Rather: Wellness Edition.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-would-you-rather_710e0664.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: "welcome-to-real-talk",
    title: "Welcome to Real Talk!",
    date: "September 5, 2025",
    readTime: "1 min read",
    category: "Wellness",
    excerpt:
      "At REALiving, we're big believers in Realizing and Embracing Authentic Living—it's literally in our name. We know that life isn't always smooth, perfect, or predictable. It's real. And that's exactly where growth begins.",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-welcome-magazine_5aa4063d.jpg",
    featured: false,
  },
];

const categories = ["All", "Mental Health", "Wellness", "Resources", "Team"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Blog — Real Talk | REALiving® Solutions for Life and Work";
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== "All" || searchQuery);

  return (
    <main>
      {/* Hero — with background image */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/hero-blog-biXVMXCbpy2jwJCRzW67RX.webp')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.10) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: "oklch(0.7073 0.0946 183)" }} />
        <div className="container relative z-10 py-24 lg:py-28">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium">Blog</span>
          </nav>
          <div className="max-w-2xl">
            <div className="section-label mb-4 fade-up" style={{ color: "oklch(0.80 0.06 183)", borderColor: "oklch(0.7073 0.0946 183)" }}>Real Talk</div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight fade-up text-white">
              A Blog by REALiving
            </h1>
            <p className="font-body text-lg leading-relaxed fade-up text-white/80">
              Practical insights, stories, and tools for living and working at your BEST. Written by the REALiving team for real people navigating real life.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <div
        className="sticky top-[4.5rem] z-40 border-b border-border"
        style={{ background: "white" }}
      >
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-body text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? "text-white"
                      : "text-muted-foreground hover:text-forest"
                  }`}
                  style={
                    activeCategory === cat
                      ? { background: "oklch(0.7073 0.0946 183)" }
                      : { background: "oklch(0.93 0.04 183)" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input pl-9 py-2 text-sm w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-12 bg-white">
          <div className="container">
            <div className="section-label mb-6 fade-up">Featured Post</div>
            <article
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-sm fade-up"
            >
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-body text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: "oklch(0.93 0.04 183)", color: "oklch(0.50 0.055 183)" }}
                  >
                    {featuredPost.category}
                  </span>
                  <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-forest mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">{featuredPost.date}</span>
                  <Link
                    href={`/blog/${(featuredPost as any).slug || ''}`}
                    className="btn-primary text-sm py-2.5"
                  >
                    Read Full Post
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section
        className="py-12 lg:py-16"
        style={{ background: "oklch(0.97 0.015 80)" }}
      >
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="font-display text-2xl font-bold text-forest mb-3">No posts found</div>
              <p className="font-body text-muted-foreground mb-6">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              {filteredPosts.length > 0 && (
                <div className="font-body text-sm text-muted-foreground mb-6">
                  Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
                  {activeCategory !== "All" && ` in "${activeCategory}"`}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeCategory === "All" && !searchQuery ? regularPosts : filteredPosts).map((post, i) => (
                  <article
                    key={post.id}
                    className="blog-card fade-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      {(post as any).videoUrl ? (
                        <iframe
                          src={(post as any).videoUrl}
                          title={post.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="font-body text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1"
                          style={{ background: "oklch(0.93 0.04 183)", color: "oklch(0.50 0.055 183)" }}
                        >
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-forest mb-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                        <Link
                          href={`/blog/${(post as any).slug || ''}`}
                          className="font-body text-sm font-semibold text-teal-brand hover:underline inline-flex items-center gap-1"
                        >
                          Read <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA — Teal background */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "oklch(0.7073 0.0946 183)" }}
      >
        <div className="container text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white mb-4 fade-up">
              Stay in the loop
            </h2>
            <p className="font-body text-base text-white/80 leading-relaxed mb-8 fade-up">
              Subscribe to the REALiving newsletter and get practical insights delivered to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto fade-up"
              onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="form-input flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
              <button type="submit" className="bg-white font-body font-semibold text-sm px-6 py-3 rounded-lg flex-shrink-0 hover:bg-gray-50 transition-colors" style={{ color: "oklch(0.7073 0.0946 183)" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
