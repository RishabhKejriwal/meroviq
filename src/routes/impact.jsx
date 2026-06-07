import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, HeartPulse, Leaf, Recycle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Meroviq Impact \u2014 Technology, Sustainability & Well-being";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Our community initiatives across environmental sustainability, education, social good and well-being.");
  }, []);
  return null;
}
const PILLARS = [
  { icon: Leaf, title: "Environmental Sustainability", desc: "Tree plantation drives, low-waste operations and green hosting." },
  { icon: Recycle, title: "Waste Reduction & Clean Living", desc: "Community clean-ups and zero-waste workshops." },
  { icon: Users, title: "Technology for Social Good", desc: "Pro-bono builds for non-profits and grassroots initiatives." },
  { icon: GraduationCap, title: "Education & Skill Development", desc: "Free workshops and scholarships for under-served students." },
  { icon: HeartPulse, title: "Well-being & Healthy Living", desc: "Mental health, fitness and mindfulness programs." }
];
function Page() {
  return <>
      <PageHero
    eyebrow="Meroviq Impact"
    title={<>Driving Change Through <span className="text-gradient-brand">Technology, Sustainability & Human Well-being</span></>}
    subtitle="Profit and purpose belong in the same plan. These are the initiatives our team funds and shows up for."
  >
        <Button asChild size="lg" className="bg-accent2 text-white hover:bg-accent2/90"><Link to="/contact">Join Our Initiatives <ArrowRight /></Link></Button>
      </PageHero>

      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PILLARS.map((p) => <div key={p.title} className="group rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-7 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-accent2-soft text-accent2 flex items-center justify-center"><p.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink-muted">{p.desc}</p>
            </div>)}
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
