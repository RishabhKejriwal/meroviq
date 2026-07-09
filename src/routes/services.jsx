import { Link } from "react-router-dom";
import { ArrowRight, Code2, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Services \u2014 Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Development, testing, CRM and digital marketing services for small businesses and startups.");
  }, []);
  return null;
}
const CATS = [
  { to: "/services/development-and-testing", title: "Development & Testing", desc: "Web, SaaS customization, custom software and QA across the stack.", icon: Code2 },
  { to: "/services/digital-marketing", title: "Digital Marketing", desc: "SEO, social, YouTube, performance marketing and analytics.", icon: Megaphone }
];
function Page() {
  return <>
      <PageHero
    eyebrow="Services"
    title={<>Engineering & growth, <span className="text-gradient-brand">end to end</span></>}
    subtitle="Pick a service area to dive in. Every engagement starts with discovery and ends with measurable outcomes."
  />
      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="grid md:grid-cols-2 gap-6 relative">
          {CATS.map((c) => <Link key={c.to} to={c.to} className="group rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-8 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-14 w-14 rounded-2xl gradient-brand text-white flex items-center justify-center"><c.icon className="h-7 w-7" /></div>
              <h2 className="mt-6 text-2xl font-bold text-ink">{c.title}</h2>
              <p className="mt-2 text-ink-muted">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-3 transition-all">Explore <ArrowRight className="h-4 w-4" /></span>
            </Link>)}
        </div>
        <div className="relative mt-12 text-center">
          <Button asChild size="lg" className="gradient-brand text-white">
            <Link to="/contact-us">Get Started Today <ArrowRight /></Link>
          </Button>
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
