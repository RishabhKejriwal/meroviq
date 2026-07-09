import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Code2, GraduationCap, LayoutDashboard, Megaphone, Sparkles, Shield, Clock, HeartHandshake, Users, FileSignature, FileCog, Calculator, Leaf, Mail, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AnimatedBackground, GradientOrbs } from "@/components/site/AnimatedBackground";
import { cn } from "@/lib/utils";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Meroviq Technologies \u2014 Scalable Digital Solutions for Growing Businesses";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "CRM, software development, digital marketing and IT internships built for small businesses, entrepreneurs and the next generation of tech talent.");
  }, []);
  return null;
}
const SERVICES = [
  { to: "/meroviq-360", title: "Meroviq 360", desc: "All-in-one CRM platform to manage, automate and grow your business.", cta: "Explore Product", icon: LayoutDashboard },
  { to: "/services/development-and-testing", title: "Development & Testing", desc: "Website development, SaaS customization, custom software and QA testing.", cta: "Explore Services", icon: Code2 },
  { to: "/services/digital-marketing", title: "Digital Marketing", desc: "SEO, social media, YouTube and performance marketing.", cta: "Explore Services", icon: Megaphone },
  { to: "/launchpad", title: "Meroviq Launchpad", desc: "Internship program designed to provide real-world IT experience.", cta: "Explore Program", icon: GraduationCap }
];
const WHY = [
  { icon: Users, title: "Built for Small Businesses", desc: "Designed for entrepreneurs and growing companies." },
  { icon: Sparkles, title: "Cost-Effective Solutions", desc: "High value without high costs." },
  { icon: Clock, title: "Time-Saving Technology", desc: "Simplifying work so you can focus on growth." },
  { icon: HeartHandshake, title: "Customer-First Approach", desc: "Your success is our priority." }
];
const TOOLS = [
  { to: "/tools/digital-signature", title: "Digital Signature", desc: "Sign documents online securely in seconds.", icon: FileSignature },
  { to: "/tools/file-converter", title: "File Converter", desc: "Convert between formats with one click.", icon: FileCog },
  { to: "/tools/qa-estimator", title: "QA Effort Estimator", desc: "Plan testing effort with smart heuristics.", icon: Calculator }
];
function HomePage() {
  return <>
      {
    /* HERO */
  }
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-gradient-mesh">
        <AnimatedBackground />
        <GradientOrbs />
        <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

        <div className="container-page relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-soft/80 text-brand backdrop-blur-sm border border-brand/10">
              <Sparkles className="h-3.5 w-3.5" /> Technology with purpose
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
              Transforming Ideas into <span className="text-gradient-shimmer">Scalable Digital Solutions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
              We help small businesses and entrepreneurs build, automate and grow using cost-effective and powerful technology solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-brand text-white shadow-glow hover:opacity-95 animate-pulse-glow">
                <Link to="/meroviq-360">Try For Free <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand/20 hover:bg-brand-soft hover:text-brand glass-card">
                <Link to="/contact-us">Contact Us</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-muted">
              {["Cancel anytime", "Setup in minutes"].map((t) => <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent2" /> {t}
                </span>)}
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {
    /* SERVICES */
  }
      <Section id="services" className="relative bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-50" />
        <EyebrowHeading eyebrow="What we offer" title="Explore What We Offer" subtitle="A complete digital ecosystem for ambitious teams — from CRM and custom builds to growth marketing and talent." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, index) => {
            const [ref, isVisible] = useScrollReveal();
            return <Link
    key={s.to}
    ref={ref}
    to={s.to}
    className={`group relative flex flex-col rounded-2xl border border-hairline bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow hover:border-brand/30 animate-on-scroll ${isVisible ? 'visible scale-in' : ''} delay-${index * 100}`}
  >
              <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink group-hover:text-brand transition-colors">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.desc}</p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-3 transition-all">
                {s.cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>;
          })}
        </div>
      </Section>

      {
    /* WHY */
  }
      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-60" />
        <EyebrowHeading eyebrow="Why Meroviq" title="Built for the way you grow" subtitle="Practical technology, predictable pricing, and a partner that genuinely cares." />
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {WHY.map((w, index) => {
            const [ref, isVisible] = useScrollReveal();
            return <div 
    key={w.title} 
    ref={ref}
    className={`flex gap-5 rounded-2xl bg-white p-7 border border-hairline shadow-soft transition-all duration-300 hover:shadow-glow hover:-translate-y-1 animate-on-scroll ${isVisible ? 'visible slide-left' : ''} delay-${index * 100}`}
  >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-accent2-soft text-accent2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <w.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{w.title}</h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{w.desc}</p>
              </div>
            </div>;
          })}
        </div>
      </Section>

      {
    /* TOOLS */
  }
      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Free tools" title="Free Tools To Boost Productivity" subtitle="Lightweight utilities, free forever. Built to save your team hours every week." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((t, index) => {
            const [ref, isVisible] = useScrollReveal();
            const delayClass = index === 0 ? '' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : 'delay-300';
            return <div 
    key={t.to} 
    ref={ref}
    className={`group rounded-2xl border border-hairline bg-white p-6 hover:border-accent2/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 animate-on-scroll ${isVisible ? 'visible scale-in' : ''} ${delayClass}`}
  >
              <div className="h-10 w-10 rounded-lg bg-accent2-soft text-accent2 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-ink group-hover:text-accent2 transition-colors">{t.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{t.desc}</p>
              <Button asChild variant="ghost" className="mt-3 px-0 text-brand hover:bg-transparent hover:text-accent2">
                <Link to={t.to}>Open tool <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>;
          })}
        </div>
      </Section>

      {
    /* IMPACT */
  }
      <Section className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="relative rounded-3xl overflow-hidden border border-hairline bg-white/90 backdrop-blur-sm p-10 shadow-glow">
            <div aria-hidden className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 20%, #008369 0%, transparent 50%), radial-gradient(circle at 80% 80%, #004188 0%, transparent 50%)" }} />
            <div className="relative grid grid-cols-2 gap-4">
              {[Leaf, HeartHandshake, GraduationCap, Shield].map((Icon, i) => <div key={i} className="rounded-2xl bg-white/80 backdrop-blur p-6 border border-hairline">
                  <Icon className="h-7 w-7 text-accent2" />
                  <div className="mt-3 h-2 w-16 rounded-full bg-brand/20" />
                  <div className="mt-2 h-2 w-24 rounded-full bg-brand/10" />
                </div>)}
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent2-soft text-accent2">
              Meroviq Impact
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink">Technology With Purpose</h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              We invest in sustainability, education, community development, wellness and environmental impact — because great technology should leave the world better than it found it.
            </p>
            <Button asChild size="lg" className="mt-6 bg-accent2 text-white hover:bg-accent2/90">
              <Link to="/impact">Explore Meroviq Impact <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {
    /* ABOUT */
  }
      <Section id="about" className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand">About us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink">Our story</h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              Meroviq Technologies was founded to bridge the gap between enterprise-grade software and the realities of small business budgets. We build accessible, dependable products and train the next generation of IT professionals along the way.
            </p>
            {/* Metrics hidden temporarily
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
    { n: "150+", l: "Projects shipped" },
    { n: "40+", l: "Interns trained" },
    { n: "98%", l: "Client retention" }
  ].map((s) => <div key={s.l}>
                  <div className="text-3xl font-bold text-gradient-brand">{s.n}</div>
                  <div className="mt-1 text-sm text-ink-muted">{s.l}</div>
                </div>)}
            </div>
            */}
          </div>
          <div className="grid gap-4">
            {[
    { title: "Mission", body: "Empower businesses with cost-effective technology." },
    { title: "Vision", body: "Become a trusted technology partner." },
    { title: "Values", body: "Integrity \xB7 Innovation \xB7 Customer-Centric Approach" }
  ].map((c) => <div key={c.title} className="rounded-2xl border border-hairline bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-brand">{c.title}</h3>
                <p className="mt-2 text-ink-muted">{c.body}</p>
              </div>)}
          </div>
        </div>
      </Section>

      {
    /* CONTACT */
  }
      <Section id="contact" className="bg-surface">
        <EyebrowHeading
    eyebrow="Contact"
    title="Let's build something together"
    subtitle="Tell us about your project, your team or the problem you're trying to solve. We respond within one business day."
  />
        <div className="mx-auto max-w-3xl grid gap-5 sm:grid-cols-2">
          <a
            href="mailto:hello@meroviq.in"
            className="group flex items-center gap-4 p-6 rounded-3xl border border-hairline bg-white shadow-soft hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="h-12 w-12 shrink-0 rounded-xl gradient-brand text-white flex items-center justify-center shadow-soft">
              <Mail className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Email us</div>
              <div className="truncate font-semibold text-ink">hello@meroviq.in</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.linkedin.com/company/meroviq-technologies"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-6 rounded-3xl border border-hairline bg-white shadow-soft hover:border-brand/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="h-12 w-12 shrink-0 rounded-xl bg-brand-soft text-brand flex items-center justify-center">
              <Linkedin className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Connect</div>
              <div className="truncate font-semibold text-ink">LinkedIn</div>
            </div>
            <ArrowRight className="ml-auto h-4 w-4 text-brand transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Section>
    </>;
}
function HeroVisual() {
  const orbit = [
    { icon: Code2, label: "Development", tone: "brand" },
    { icon: LayoutDashboard, label: "CRM", tone: "accent2" },
    { icon: Megaphone, label: "Marketing", tone: "brand" },
    { icon: GraduationCap, label: "Internships", tone: "accent2" },
  ];
  return <div className="relative h-[480px] hidden md:block animate-fade-in">
      <div className="absolute inset-0 rounded-3xl gradient-brand p-1 shadow-glow">
        <div className="relative h-full w-full rounded-[22px] bg-white overflow-hidden">
          {/* Soft background glows */}
          <div aria-hidden className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand opacity-10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent2 opacity-10 blur-3xl" />

          {/* Orbit rings */}
          <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[340px] rounded-full border border-hairline" />
          <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[230px] w-[230px] rounded-full border border-hairline" />

          {/* Center brand mark */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-2xl gradient-brand text-white shadow-glow flex flex-col items-center justify-center">
            <Sparkles className="h-7 w-7" />
            <span className="mt-1 text-[11px] font-semibold tracking-wide">MEROVIQ</span>
          </div>

          {/* Orbit service nodes */}
          <div className="absolute left-1/2 top-1/2 animate-orbit-spin" style={{ width: 0, height: 0 }}>
            {orbit.map((s, i) => (
              <div
                key={s.label}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `rotate(${i * 90}deg) translateY(-170px)` }}
              >
                <div style={{ transform: `rotate(${-i * 90}deg)` }}>
                  <div className="animate-orbit-counter flex flex-col items-center gap-1.5">
                    <div className={`h-14 w-14 rounded-2xl bg-white border border-hairline shadow-soft flex items-center justify-center ${s.tone === "brand" ? "text-brand" : "text-accent2"}`}>
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-ink bg-white/80 backdrop-blur px-2 py-0.5 rounded-full">{s.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating tags */}
      <div className="absolute -left-6 top-16 rounded-2xl bg-white border border-hairline shadow-glow p-4 w-56 animate-float">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent2-soft text-accent2 flex items-center justify-center">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-ink-muted">Built for</div>
            <div className="text-sm font-semibold text-ink">Small businesses</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 bottom-16 rounded-2xl bg-white border border-hairline shadow-glow p-4 w-56" style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1.5s" }}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-brand-soft text-brand flex items-center justify-center">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs text-ink-muted">Launchpad</div>
            <div className="text-sm font-semibold text-ink">Internships open</div>
          </div>
        </div>
      </div>
    </div>;
}
const __Default = () => <><__PageMeta /><HomePage /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
