/*
 * REALiving® Blog Post Page
 * Design: Organic Modernism — clean editorial layout
 * Renders individual blog posts with full content
 */

import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ChevronRight, Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const TEAL = "oklch(0.7073 0.0946 183)";
const FOREST = "oklch(0.16 0.01 250)";

// ─── Post Data ────────────────────────────────────────────────────────────────
export const blogPosts: Record<string, {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  excerpt: string;
  content: React.ReactNode;
  relatedSlugs: string[];
}> = {
  "when-everything-feels-like-too-much": {
    slug: "when-everything-feels-like-too-much",
    title: "When Everything Feels Like Too Much: A Gentle Reset for Your Mental Health",
    author: "April",
    date: "January 27, 2026",
    readTime: "2 min read",
    category: "Mental Health",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-mental-health_0503229b.jpg",
    excerpt: "It's hard to miss the tension in the air right now. Many people are feeling burned out, overwhelmed, angry, or emotionally exhausted—even if they can't quite put their finger on why.",
    relatedSlugs: ["the-ripple-effect-of-connecting-within", "ted-talk-tuesday"],
    content: (
      <div className="prose-content">
        <p>It's hard to miss the tension in the air right now. Many people are feeling burned out, overwhelmed, angry, or emotionally exhausted—even if they can't quite put their finger on why. Constant news updates, social media noise, and everyday responsibilities can stack up quickly, leaving little room to breathe.</p>
        <p>If that sounds familiar, this is your reminder: <strong>it's okay to pause</strong>. Taking care of your mental health isn't selfish or avoidant. It's necessary.</p>
        <p>Below are a few simple, practical ways to care for yourself when the world feels heavy.</p>

        <h2>1. Shrink Your World (Just for Today)</h2>
        <p>You don't have to process everything happening everywhere all at once. Try:</p>
        <ul>
          <li>Limiting how often you check the news or social media.</li>
          <li>Picking one or two reliable sources instead of scrolling endlessly.</li>
          <li>Giving yourself permission to disengage when your body says "enough."</li>
        </ul>
        <p>Staying informed doesn't require staying overwhelmed.</p>

        <h2>2. Ground Yourself in the Present Moment</h2>
        <p>When emotions are running high, your nervous system may be stuck in "alert mode."</p>
        <p>A quick reset:</p>
        <ul>
          <li>Take five slow breaths, in through your nose and out through your mouth.</li>
          <li>Name <strong>5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell, and 1 you can taste</strong>.</li>
          <li>Step outside, even briefly, and notice what's real and steady around you.</li>
        </ul>
        <p>Small grounding practices can create surprising relief.</p>

        <h2>3. Move Your Body — Gently</h2>
        <p>You don't need an intense workout to release stress. Consider:</p>
        <ul>
          <li>A short walk</li>
          <li>Stretching for five minutes</li>
          <li>Standing up, rolling your shoulders, and unclenching your jaw</li>
        </ul>
        <p>Movement helps your body let go of tension your mind may not even realize it's holding.</p>

        <h2>4. Say What You're Feeling (to the Right Person)</h2>
        <p>Bottling things up often makes them heavier. That might look like:</p>
        <ul>
          <li>Talking with someone you trust</li>
          <li>Writing it out privately</li>
          <li>Naming the feeling without trying to fix it ("I'm just really tired and frustrated today")</li>
        </ul>
        <p>Being heard—even briefly—matters.</p>

        <h2>5. Choose Kindness as a Daily Practice</h2>
        <p>When stress is high, patience tends to run low — with others <em>and</em> with ourselves.</p>
        <p>A gentle reminder:</p>
        <ul>
          <li>People around you may be carrying invisible stress, too.</li>
          <li>You don't know what someone else is facing behind the scenes.</li>
          <li>Kindness doesn't mean agreement—it means humanity.</li>
        </ul>
        <p>And that includes being kind to yourself. You're allowed to rest. You're allowed to feel. You're allowed to step back.</p>
        <p>You don't have to have all the answers right now. You don't have to be endlessly productive, perfectly calm, or constantly engaged.</p>
        <p>Sometimes the most powerful thing you can do is take care of your own well-being—and let that care ripple outward.</p>
        <p><strong>Pause. Breathe. Be kind.</strong></p>
      </div>
    ),
  },

  "the-ripple-effect-of-connecting-within": {
    slug: "the-ripple-effect-of-connecting-within",
    title: "The Ripple Effect of Connecting Within",
    author: "April",
    date: "November 4, 2025",
    readTime: "2 min read",
    category: "Wellness",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-ripple-effect_e684337e.jpg",
    excerpt: "Check in with yourself today. That tiny pause? It could ripple kindness far and wide.",
    relatedSlugs: ["when-everything-feels-like-too-much", "meet-the-team-part-1"],
    content: (
      <div className="prose-content">
        <p>Check in with yourself today. That tiny pause? It could ripple kindness far and wide.</p>
        <p>Each year, REALiving puts together a calendar filled with magazine photos, thoughtful quotes, and a mix of quirky holidays—our own creations like <em>Be Your BEST as a Couple Day</em> and <em>Have a 30-Second Dance Party Day</em>, alongside fun holidays celebrated across the country.</p>
        <p>As we flipped to November, one quote really stopped me in my tracks: <em>"When people go within and connect with themselves, they realize they are connected with the universe and they are connected to all living things."</em> Wow. It's a mouthful, sure—but it also perfectly sums up the surprising power of taking a little time to check in with yourself.</p>
        <p>Here's the thing: "going within" isn't about meditating on a mountaintop (especially in November—way too cold). It's about noticing what's going on in your head, your heart, and even your funny little quirks. When we pay attention to ourselves—our feelings, our habits, our triggers—we start to see patterns. And once we see patterns in ourselves, it's amazing how it changes the way we interact with the world.</p>
        <p>Think of it as a ripple effect. When you understand your own reactions, you're less likely to snap at a coworker or overreact in a tense moment. You're more likely to respond thoughtfully, listen carefully, and maybe even crack a joke that actually lands. And that awareness doesn't just stay in your head—it spreads to the people around you. Suddenly, you're contributing to a calmer, kinder, more connected environment at home, at work, and even in the checkout line at the grocery store.</p>
        <p>The ripple effect works in everyday life, too. Maybe you notice a small shift: instead of rolling your eyes at a friend's weird habit, you actually appreciate it. Or maybe you finally give yourself permission to take a five-minute pause in a busy day—and everyone benefits because you're not running on autopilot. Little by little, those inner ripples touch more lives than we realize.</p>
        <p>Getting started doesn't have to be complicated. Pause. Take a deep breath. Reflect for a minute on what's happening inside you. Journal a thought. Take a short walk outside. Those few moments of self-connection create ripples that reach further than we think.</p>
        <p>So this month, take a little time to check in with yourself. Notice how it changes the way you relate to the people and the world around you. It might just be the easiest (and most fun) way to make a positive impact. After all, every ripple starts with a single drop.</p>
      </div>
    ),
  },

  "ted-talk-tuesday": {
    slug: "ted-talk-tuesday",
    title: "TED Talk Tuesday",
    author: "April",
    date: "October 14, 2025",
    readTime: "1 min read",
    category: "Resources",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-post3-ted-talk_826a2aa0.jpeg",
    excerpt: "Welcome to TED Talk Tuesday—the occasional Tuesday where we will share a TED Talk video that we have found particularly helpful, insightful, or just plain entertaining.",
    relatedSlugs: ["when-everything-feels-like-too-much", "the-ripple-effect-of-connecting-within"],
    content: (
      <div className="prose-content">
        <p><em>TW: Mental Health, Loss of Child, Depression</em></p>
        <p>Welcome to TED Talk Tuesday—the occasional Tuesday where we will share a TED Talk video that we have found particularly helpful, insightful, or just plain entertaining.</p>
        <p>I have a friend who has been pretty hard hit by severe medical issues. The chronic pain and loss of independence has left them feeling, understandably, really depressed. This friend has always had a curious mind, loving to learn new things and explore how and why people do things. As a way of coping, they started looking for stories of others going through similar struggles. That's when they found the TED Talk "How to Do Laundry When You're Depressed" and sent it my way.</p>
        <p>If you have ever had any level of depression (or ADHD, burnout, chronic pain, etc.) you may relate and find comfort from this particular presentation by KC Davis. A therapist, KC helps reframe the negative inner dialogue that tells we're "lazy" or "terrible" when depression (or other hard times) leave you struggling to do the basics at home, like cooking, cleaning, laundry, etc.</p>
        <p>Offering shortcuts to get by when you feel like you've barely got it together, KC's presentation hits home with viewer after viewer. The comment section on YouTube, where the video is hosted, is filled with people sharing how it has helped them through tough times and even just to stop being so hard on themselves.</p>

        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/kqItMybTKTo"
            title="How to Do Laundry When You're Depressed - KC Davis TED Talk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p>We hope you find value in this TED talk. KC Davis also wrote <em>How to Keep House While Drowning: A Gentle Approach to Cleaning and Organizing</em>.</p>
      </div>
    ),
  },

  "would-you-rather": {
    slug: "would-you-rather",
    title: "Would You Rather ...",
    author: "April",
    date: "September 23, 2025",
    readTime: "2 min read",
    category: "Wellness",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-would-you-rather_710e0664.jpg",
    excerpt: "At REALiving, we know wellness doesn't have to be serious all the time. Sometimes a little playfulness can spark new ideas for taking care of yourself.",
    relatedSlugs: ["when-everything-feels-like-too-much", "the-ripple-effect-of-connecting-within"],
    content: (
      <div className="prose-content">
        <p>At REALiving, we know wellness doesn't have to be serious all the time. Sometimes a little playfulness can spark new ideas for taking care of yourself. So let's play a round of <strong>"Would You Rather: Wellness Edition."</strong> As you think about your answers, notice what they tell you about your preferences and habits—because every choice is a chance to learn something about your own well-being.</p>
        <p><strong>What works best for you?</strong></p>

        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-would-you-rather_710e0664.jpg" alt="Would You Rather? - Wellness Edition" style={{borderRadius: '0.75rem', margin: '1.5rem 0', width: '100%'}} />

        <p><strong>1. Would you rather ...</strong></p>
        <ul>
          <li>Take a 10-minute walk outside during your lunch break <strong>or</strong></li>
          <li>Spend 10 minutes meditating in a quiet room?</li>
        </ul>
        <p>Both movement and mindfulness reduce stress hormones and reset your focus. Choose the one that feels like the bigger refresh for you today.</p>

        <p><strong>2. Would you rather ...</strong></p>
        <ul>
          <li>Start your day with a healthy breakfast <strong>or</strong></li>
          <li>Sleep in for an extra 20 minutes?</li>
        </ul>
        <p>Both rest and nutrition fuel energy and productivity. If you find yourself often skipping breakfast, try prepping something quick the night before so you can have both.</p>

        <p><strong>3. Would you rather ...</strong></p>
        <ul>
          <li>Call a friend for a quick check-in <strong>or</strong></li>
          <li>Journal privately about your day?</li>
        </ul>
        <p>Social connection boosts resilience, while journaling helps with reflection and stress relief. Think about whether you need outward connection or inward processing right now.</p>

        <p><strong>4. Would you rather ...</strong></p>
        <ul>
          <li>Listen to upbeat music to pump up your mood <strong>or</strong></li>
          <li>Play calming music to wind down?</li>
        </ul>
        <p>Music is one of the fastest ways to shift your state of mind. Create a playlist for each mood so you're ready when you need a boost or a breather.</p>

        <p><strong>5. Would you rather ...</strong></p>
        <ul>
          <li>Cross one big task off your to-do list <strong>or</strong></li>
          <li>Finish three small, easy tasks?</li>
        </ul>
        <p>Both approaches give a sense of accomplishment. Big tasks free up mental space, while small wins build momentum. Either way, progress matters more than perfection.</p>

        <p>There are no "wrong" answers here. Wellness is not about doing it all—it's about finding what works for you, in your current season of life. Next time you're choosing between options, try thinking of it as a little "Would You Rather" game with yourself. Sometimes that simple reframing makes wellness feel a lot lighter—and a lot more doable.</p>
      </div>
    ),
  },

  "welcome-to-real-talk": {
    slug: "welcome-to-real-talk",
    title: "Welcome to Real Talk!",
    author: "April",
    date: "September 5, 2025",
    readTime: "1 min read",
    category: "Wellness",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-welcome-magazine_5aa4063d.jpg",
    excerpt: "At REALiving, we're big believers in Realizing and Embracing Authentic Living—it's literally in our name. We know that life isn't always smooth, perfect, or predictable. It's real. And that's exactly where growth begins.",
    relatedSlugs: ["when-everything-feels-like-too-much", "would-you-rather"],
    content: (
      <div className="prose-content">
        <p>At REALiving, we're big believers in Realizing and Embracing Authentic Living—it's literally in our name. We know that life isn't always smooth, perfect, or predictable. It's real. And that's exactly where growth begins.</p>
        <p>That's why we're launching <em>Real Talk</em>: a new blog written by our REALiving team and guest experts who live and breathe health, wellness, and personal development. Whether you're facing burnout, navigating workplace stress, striving for better balance, or just looking for a fresh perspective, this space is for you.</p>
        <p>Join us as we explore different topics sure to entertain, educate, and inspire you! If you enjoy reading our blog, you're also sure to love our REALiving Magazine! You can always find the newest edition on our homepage.</p>

        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-welcome-magazine_5aa4063d.jpg" alt="REALiving Magazine - Fall 2025" style={{borderRadius: '0.75rem', margin: '1.5rem auto', display: 'block', maxWidth: '320px'}} />

        <h2>What You Can Expect</h2>
        <p><em>Real Talk</em> isn't about fluff or quick fixes. It's about meeting people where they are and offering insights that are real, relatable, and practical. You'll find:</p>
        <ul>
          <li>Thoughtful takes on personal well-being and mental health</li>
          <li>Strategies for building healthier workplace cultures</li>
          <li>Mindset shifts that help you move through challenges</li>
          <li>Conversations about authenticity, purpose, and living your BEST life</li>
        </ul>
        <p>Some posts will be short and to the point. Others might dig a little deeper. But all will be grounded in our commitment to helping you be your BEST®.</p>

        <h2>Want Us to Write About Something?</h2>
        <p>This blog is as much about listening as it is about sharing. If there's a topic you'd like to see us cover—from coaching questions to everyday wellness struggles—drop us a line at <a href="mailto:BEST@REALiving.com" style={{color: 'oklch(0.7073 0.0946 183)'}}>BEST@REALiving.com</a>. We'd love to hear from you.</p>
        <p>Thanks for being here. Let's start some real conversations—together.</p>
        <p><strong>—The REALiving Team</strong></p>
      </div>
    ),
  },

  "meet-the-team-part-1": {
    slug: "meet-the-team-part-1",
    title: "Meet the Team: Part 1",
    author: "April",
    date: "October 2, 2025",
    readTime: "2 min read",
    category: "Team",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-meet-team_303e7c89.jpg",
    excerpt: "If you're curious about the people behind the curtain of your favorite EAP provider (I'm talking about REALiving, obviously), then here is Part 1 of our team introductions!",
    relatedSlugs: ["the-ripple-effect-of-connecting-within", "ted-talk-tuesday"],
    content: (
      <div className="prose-content">
        <p>If you're curious about the people behind the curtain of your favorite EAP provider (I'm talking about REALiving, obviously), then here is Part 1 of our team introductions!</p>
        <p>I'll start with myself, your friendly neighborhood blogger. My name is April Solberg, and I've been a part of REALiving for more than 9 years now.</p>

        <div className="team-photo-float">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663169709233/XMH9PDrFEhHarnqqUPSqzM/blog-cover-meet-team_303e7c89.jpg"
            alt="April Solberg - Marketing & Creative Director"
          />
        </div>

        <p>I started out as a Marketing Assistant, one who came from the world of public libraries and newspapers and was easily aggravated by typos and randomly capitalized nouns. Though typos still annoy me, I've learned that capitalizing titles here and there (like Marketing Assistant) makes people happy, so why not add a little happy to the world?</p>
        <p>I worked my way up to Marketing &amp; Creative Director for REALiving and all of the businesses for our parent company, Aurora Community Services. Then in an epic battle, REALiving won me as their full-time employee.</p>
        <p>You may recognize my work from our health and wellness publications—such as the Wellness Newsletter, Friday Facts, REALiving Magazine, emergency services newsletter, school district newsletter, and more. I write, edit, do graphic design, create marketing campaigns, do the social media, etc.</p>
        <p>In the last year, I've also taken on the role of EAP Advisor, which means I'm the go-to person for multiple accounts. If you've ever been in a job where everything feels warm and comfortable, and then your supervisor suddenly says, "Hey, bud! We think you're stifling your potential, so we're giving you a new challenge"—well, I've been there. And it can be scary! Fortunately, it can also be a really good experience that helps you grow as a person. Luckily, I'm surrounded by a team that is supportive, encouraging, and insightful, so <strong>Doing One Thing Different</strong> (one of REALiving's tenets), isn't as scary as I might first perceive it to be.</p>
        <blockquote>
          On that note, I would highly encourage YOU to try one thing different and use your professional coaching benefits if you haven't yet. Wow, is it a game changer. Whatever you feel you may need to work on—like confidence, leadership, communication skills, or changing your mindset—our coaches can help.
        </blockquote>
        <p>In my spare time, I'm usually reading, coloring (I'll never have enough glitter gel pens), attending movie night with friends, making up dumb songs to annoy my cats and kid, and scrolling far too long on my phone.</p>
        <p>So, that's a little bit about me. I hope that satisfies some of your curiosity. We will have updates from the rest of the team in the coming weeks, along with blog posts about other health and wellness topics. Feel free to send me your book suggestions, or ask me for recommendations!</p>
        <p>Happy fall, ya'll!</p>
        <p><em>~April</em></p>
      </div>
    ),
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = params.slug ? blogPosts[params.slug] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | REALiving® Blog`;
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4" style={{ color: FOREST }}>Post not found</h1>
          <Link href="/blog" className="btn-primary">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  const relatedPosts = post.relatedSlugs.map(s => blogPosts[s]).filter(Boolean);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "400px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.coverImage}')` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: TEAL }} />
        <div className="container relative z-10 py-20 lg:py-28">
          <nav className="flex items-center gap-2 font-body text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90 font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>
          <div className="max-w-3xl">
            <div
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: TEAL, color: "white" }}
            >
              {post.category}
            </div>
            <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/70 font-body text-sm">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: TEAL }}
                >
                  A
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm font-medium mb-10 hover:opacity-70 transition-opacity"
              style={{ color: TEAL }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </Link>

            {/* Article body */}
            <article className="blog-article">
              {post.content}
            </article>

            {/* Author card */}
            <div
              className="mt-12 p-6 rounded-2xl border"
              style={{ background: "oklch(0.97 0.02 183)", borderColor: "oklch(0.88 0.04 183)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: TEAL }}
                >
                  A
                </div>
                <div>
                  <p className="font-body font-semibold" style={{ color: FOREST }}>Written by April Solberg</p>
                  <p className="font-body text-sm" style={{ color: "oklch(0.50 0.02 250)" }}>
                    Marketing &amp; Creative Director and EAP Advisor at REALiving®
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20" style={{ background: "oklch(0.97 0.02 183)" }}>
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8" style={{ color: FOREST }}>
                More from the Blog
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={related.coverImage}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div
                        className="text-xs font-body font-semibold uppercase tracking-wider mb-2"
                        style={{ color: TEAL }}
                      >
                        {related.category}
                      </div>
                      <h3 className="font-display font-bold text-base leading-snug group-hover:opacity-70 transition-opacity" style={{ color: FOREST }}>
                        {related.title}
                      </h3>
                      <p className="font-body text-xs mt-1" style={{ color: "oklch(0.55 0.02 250)" }}>
                        {related.date} · {related.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
                  View All Posts
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
