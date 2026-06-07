import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Bot, LayoutDashboard, LineChart, Mail, Target, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Meroviq 360 \u2014 All-in-One CRM for Growing Businesses";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Manage leads, automate workflows and unlock analytics with Meroviq 360, the affordable CRM built for small businesses and startups.");
  }, []);
  return null;
}
const BENEFITS = [
  { icon: Zap, title: "Faster sales cycles", desc: "Cut admin time and respond to leads the moment they convert." },
  { icon: Workflow, title: "End-to-end automation", desc: "Automate follow-ups, hand-offs and reporting in minutes." },
  { icon: BarChart3, title: "Decisions you can trust", desc: "Real-time analytics that surface what's working and what isn't." }
];
const FEATURES = [
  { icon: LayoutDashboard, title: "CRM Features", desc: "Contacts, deals, pipelines, notes, tasks and email sync \u2014 built around the way modern teams sell." },
  { icon: Bot, title: "Automation", desc: "Visual workflow builder. Trigger emails, assignments and updates without writing code." },
  { icon: Target, title: "Lead Management", desc: "Capture, score and route leads to the right rep automatically." },
  { icon: LineChart, title: "Analytics Dashboard", desc: "KPI dashboards, funnel reports and forecasting in a single view." }
];
const ROADMAP = [
  { q: "Q1", t: "Beta launch \xB7 Pipelines & contacts" },
  { q: "Q2", t: "Automation studio & integrations" },
  { q: "Q3", t: "AI assist \xB7 Email sequences" },
  { q: "Q4", t: "Mobile apps \xB7 Marketplace" }
];
function Page() {
  return <>
      <PageHero
    badge="Coming Soon"
    eyebrow="Meroviq 360"
    title={<>The CRM your business <span className="text-gradient-brand">actually deserves</span></>}
    subtitle="Manage, automate and grow — without enterprise pricing. Meroviq 360 brings sales, marketing and service into one calm, modern workspace."
  >
        <Button asChild size="lg" className="gradient-brand text-white shadow-glow">
          <a href="#early-access">Get Early Access <ArrowRight /></a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/contact">Talk to Sales</Link>
        </Button>
      </PageHero>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Why Meroviq 360" title="Built for outcomes, not overhead" />
        <div className="grid md:grid-cols-3 gap-6 relative">
          {BENEFITS.map((b) => <div key={b.title} className="rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-7 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center"><b.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-ink-muted">{b.desc}</p>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Capabilities" title="Everything you need in one workspace" />
        <div className="grid md:grid-cols-2 gap-6 relative">
          {FEATURES.map((f) => <div key={f.title} className="flex gap-5 rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-7 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-brand-soft text-brand flex items-center justify-center"><f.icon className="h-6 w-6" /></div>
              <div>
                <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-ink-muted">{f.desc}</p>
              </div>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Roadmap" title="Where Meroviq 360 is heading" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {ROADMAP.map((r) => <div key={r.q} className="rounded-2xl border border-hairline p-6 bg-white/95 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
              <div className="text-sm font-semibold text-accent2">{r.q}</div>
              <div className="mt-2 font-semibold text-ink">{r.t}</div>
            </div>)}
        </div>
      </Section>

      <Section id="early-access" className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-2xl mx-auto rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-soft relative">
          <div className="text-center">
            <Mail className="mx-auto h-10 w-10 text-brand" />
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-ink">Reserve early access</h2>
            <p className="mt-2 text-ink-muted">Join the waitlist and get founder pricing when we launch.</p>
          </div>
          <form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => {
    e.preventDefault();
    e.currentTarget.reset();
  }}>
            <input required type="email" placeholder="you@work-email.com" className="flex-1 rounded-lg border border-hairline bg-surface px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/30" />
            <Button type="submit" className="gradient-brand text-white">Join Waitlist</Button>
          </form>
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
