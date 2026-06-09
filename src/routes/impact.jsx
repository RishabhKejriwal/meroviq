import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Recycle,
  Monitor,
  GraduationCap,
  HeartPulse,
  Globe,
  Users,
  Check,
  TreePine,
  Trash2,
  Code2,
  BookOpen,
  Activity,
  HandHeart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Meroviq Impact | Sustainability, Well-being & Community Initiatives";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Explore Meroviq Impact initiatives including sustainability, tree plantation, waste reduction, yoga, well-being, and community development.");
  }, []);
  return null;
}
const PILLARS = [
  {
    icon: TreePine,
    title: "Environmental Sustainability",
    desc: "We are committed to a greener future by supporting tree plantation initiatives, promoting eco-friendly practices, and spreading awareness about environmental conservation."
  },
  {
    icon: Trash2,
    title: "Waste Reduction & Clean Living",
    desc: "We promote responsible living by encouraging waste reduction and recycling, supporting cleanliness and anti-littering initiatives, and promoting sustainable habits in daily life."
  },
  {
    icon: Code2,
    title: "Technology for Social Good",
    desc: "Using technology to make life simpler and better — building solutions that save time and reduce manual effort, supporting small businesses with affordable digital tools, and promoting efficiency and digital adoption."
  },
  {
    icon: BookOpen,
    title: "Education & Skill Development",
    desc: "Empowering individuals through knowledge with internship and training programs for freshers, free learning resources and career guidance, and skill development for long-term growth."
  },
  {
    icon: Activity,
    title: "Well-being & Healthy Living",
    desc: "We believe a strong society starts with healthy individuals — promoting yoga and mindfulness practices, encouraging regular exercise and active lifestyles, supporting activities like dance and community engagement, and creating awareness about mental and physical well-being."
  }
];
const VISION = [
  "Technology empowers growth",
  "The environment is protected",
  "Individuals lead healthier, more balanced lives"
];
const INVOLVE = [
  "Join our initiatives",
  "Collaborate with us",
  "Be part of positive change"
];
const COMMITMENT = [
  "Improve lives through meaningful action",
  "Protect the environment with every step",
  "Contribute to a better, more balanced society"
];
function Page() {
  return <>
      <PageHero
    eyebrow="Meroviq Impact"
    title={<>Driving Change Through <span className="text-gradient-brand">Technology, Sustainability & Human Well-being</span></>}
    subtitle="At Meroviq, we believe true progress is not just about business growth — it's about creating a healthier, cleaner, and more balanced society. Meroviq Impact is our initiative to contribute towards environmental sustainability, personal well-being, and community development."
  >
        <Button asChild size="lg" className="bg-accent2 text-white hover:bg-accent2/90"><Link to="/contact">Join Our Initiatives <ArrowRight /></Link></Button>
      </PageHero>

      {/* Mission */}
      <Section className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand">Our Mission</div>
          <p className="mt-5 text-xl md:text-2xl text-ink font-medium leading-relaxed">
            To create a positive impact by combining technology, sustainability, and human well-being to build a more balanced and responsible society.
          </p>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Focus Areas" title="Our Focus Areas" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {PILLARS.map((p) => <div key={p.title} className="group rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-7 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-accent2-soft text-accent2 flex items-center justify-center"><p.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-ink-muted">{p.desc}</p>
            </div>)}
        </div>
      </Section>

      {/* Vision */}
      <Section className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand">Our Vision</div>
          <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink">Our Vision for Impact</h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed">
            To build a future where technology empowers growth, the environment is protected, and individuals lead healthier, more balanced lives.
          </p>
          <div className="mt-8 grid gap-3">
            {VISION.map((v) => <div key={v} className="flex items-center gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-4 shadow-soft">
              <div className="h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0"><Check className="h-4 w-4" /></div>
              <span className="text-ink font-medium">{v}</span>
            </div>)}
          </div>
        </div>
      </Section>

      {/* Get Involved */}
      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Get Involved" title="Get Involved" subtitle="Impact grows when people come together." />
        <div className="max-w-3xl mx-auto grid gap-3 relative">
          {INVOLVE.map((i) => <div key={i} className="flex items-center gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <div className="h-6 w-6 rounded-full bg-accent2-soft text-accent2 flex items-center justify-center shrink-0"><Users className="h-4 w-4" /></div>
              <span className="text-ink font-medium">{i}</span>
            </div>)}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Join Our Initiatives <ArrowRight /></Link></Button>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand">Commitment</div>
          <h2 className="mt-5 text-2xl md:text-3xl font-bold text-ink">Our Commitment</h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed">
            We are committed to taking meaningful steps — big or small — to improve lives, protect the environment, and contribute to a better society.
          </p>
          <div className="mt-8 grid gap-3">
            {COMMITMENT.map((c) => <div key={c} className="flex items-center gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-4 shadow-soft">
              <div className="h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0"><HandHeart className="h-4 w-4" /></div>
              <span className="text-ink font-medium">{c}</span>
            </div>)}
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
