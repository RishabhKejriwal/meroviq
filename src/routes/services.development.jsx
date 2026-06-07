import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cloud, ShieldCheck, Boxes, Compass, Hammer, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Development & Testing Services \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Website development, SaaS customization (Salesforce, Zoho, Microsoft Dynamics), custom software and QA testing.");
  }, []);
  return null;
}
const SVC = [
  { icon: Code2, title: "Website Development", desc: "Marketing sites, e-commerce and web apps built fast and built right." },
  { icon: Cloud, title: "SaaS Customization", desc: "Salesforce, Zoho and Microsoft Dynamics \u2014 configured around your workflows." },
  { icon: Boxes, title: "Custom Software", desc: "Internal tools and bespoke platforms tailored to your operations." },
  { icon: ShieldCheck, title: "QA & Testing", desc: "Manual + automation testing to ship with confidence at every release." }
];
const STEPS = [
  { icon: Compass, title: "Discovery", desc: "Goals, audience, success metrics." },
  { icon: Hammer, title: "Planning", desc: "Scope, architecture, milestones." },
  { icon: Code2, title: "Development", desc: "Iterative builds with weekly demos." },
  { icon: Rocket, title: "Deployment", desc: "Launch, monitor, iterate." }
];
function Page() {
  return <>
      <PageHero
    eyebrow="Development & Testing"
    title={<>Build Smart. Scale Fast. <span className="text-gradient-brand">Deliver with Confidence.</span></>}
    subtitle="From quick MVPs to enterprise rollouts, our engineering and QA teams deliver dependable software your customers can feel."
  >
        <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Get Started Today <ArrowRight /></Link></Button>
      </PageHero>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="What we build" title="Services covered" />
        <div className="grid sm:grid-cols-2 gap-6 relative">
          {SVC.map((s) => <div key={s.title} className="rounded-2xl border border-hairline p-7 bg-white/95 backdrop-blur-sm shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center"><s.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.desc}</p>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Process" title="A predictable path from idea to launch" />
        <ol className="grid md:grid-cols-4 gap-6 relative">
          {STEPS.map((s, i) => <li key={s.title} className="relative rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-6 hover:shadow-soft transition-all duration-300">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full gradient-brand text-white text-sm font-bold flex items-center justify-center shadow-soft">{i + 1}</div>
              <s.icon className="h-7 w-7 text-accent2" />
              <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
            </li>)}
        </ol>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
