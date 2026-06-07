import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Search, Share2, Target, TrendingUp, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Digital Marketing Services \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "SEO, social media, YouTube and performance marketing services that grow your audience and your revenue.");
  }, []);
  return null;
}
const SVC = [
  { icon: Search, title: "SEO", desc: "Technical, content and authority building for sustainable traffic." },
  { icon: Share2, title: "Social Media", desc: "Strategy, calendar, creative and community management." },
  { icon: Youtube, title: "YouTube Marketing", desc: "Channel growth, video SEO and short-form distribution." },
  { icon: Target, title: "Performance Marketing", desc: "Paid acquisition across Google, Meta and LinkedIn." },
  { icon: BarChart3, title: "Analytics & Optimization", desc: "Funnel reporting, CRO and weekly experimentation." }
];
function Page() {
  return <>
      <PageHero
    eyebrow="Digital Marketing"
    title={<>Grow Faster. Reach Smarter. <span className="text-gradient-brand">Convert Better.</span></>}
    subtitle="Marketing built around measurable outcomes — not vanity metrics. Strategy, creative and media buying under one roof."
  >
        <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Grow Your Business <ArrowRight /></Link></Button>
      </PageHero>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Capabilities" title="Full-funnel growth services" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {SVC.map((s) => <div key={s.title} className="rounded-2xl border border-hairline p-7 bg-white/95 backdrop-blur-sm shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-accent2-soft text-accent2 flex items-center justify-center"><s.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.desc}</p>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="grid lg:grid-cols-2 gap-10 items-center relative">
          <div className="rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-8 shadow-soft hover:shadow-glow transition-all duration-300">
            <h3 className="font-semibold text-ink">Growth this quarter</h3>
            <div className="mt-6 flex items-end gap-2 h-48">
              {[30, 45, 38, 60, 52, 72, 65, 85, 78, 95].map((h, i) => <div key={i} className="flex-1 rounded-t-md gradient-brand" style={{ height: `${h}%`, opacity: 0.35 + i * 0.06 }} />)}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[{ l: "Impressions", v: "4.2M" }, { l: "CTR", v: "6.4%" }, { l: "ROAS", v: "4.8x" }].map((s) => <div key={s.l}><div className="text-2xl font-bold text-brand">{s.v}</div><div className="text-xs text-ink-muted mt-1">{s.l}</div></div>)}
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand">Funnel that compounds</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-ink">From awareness to advocacy</h2>
            <ul className="mt-6 space-y-3">
              {["Audience research and ICP mapping", "Creative and content production", "Paid + organic media buying", "Conversion optimization & analytics", "Weekly reporting and reviews"].map((t) => <li key={t} className="flex items-start gap-3 text-ink"><TrendingUp className="h-5 w-5 text-accent2 mt-0.5" /> {t}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
