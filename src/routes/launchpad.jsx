import { Link } from "react-router-dom";
import { ArrowRight, Award, Code2, FileBadge, Lightbulb, MessageSquare, Megaphone, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Meroviq Launchpad \u2014 Learn. Build. Launch Your Career.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Hands-on IT internships across full stack development, QA, Salesforce/CRM and digital marketing \u2014 with certificates, live projects and career support.");
  }, []);
  return null;
}
const TRACKS = [
  { icon: Code2, title: "Full Stack Development", desc: "React, Node, databases, deployment." },
  { icon: ShieldCheck, title: "QA Testing", desc: "Manual + automation, real test plans." },
  { icon: Users, title: "Salesforce / CRM", desc: "Admin, flows and Apex fundamentals." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, ads, analytics and content." }
];
const DURATIONS = [
  { d: "45 Days", t: "Foundations Sprint" },
  { d: "3 Months", t: "Skill Accelerator" },
  { d: "6 Months", t: "Career Launchpad" }
];
const BENEFITS = [
  "Internship Certificate",
  "Offer Letter",
  "Recommendation Letter",
  "Live Projects",
  "Mentorship",
  "Resume Support"
];
const CAREER = [
  { icon: MessageSquare, t: "Mock Interviews" },
  { icon: FileBadge, t: "Resume Optimization" },
  { icon: Users, t: "LinkedIn Guidance" },
  { icon: Lightbulb, t: "Career Roadmaps" }
];
function Page() {
  return <>
      <PageHero
    eyebrow="Meroviq Launchpad"
    title={<>Learn. Build. <span className="text-gradient-brand">Launch Your Career.</span></>}
    subtitle="A practical internship program for IT freshers. Real projects, real mentors, real outcomes."
  >
        <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Apply Now <ArrowRight /></Link></Button>
      </PageHero>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Tracks" title="Choose your path" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TRACKS.map((t) => <div key={t.title} className="rounded-2xl border border-hairline p-6 bg-white/95 backdrop-blur-sm shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center"><t.icon className="h-6 w-6" /></div>
              <h3 className="mt-4 font-semibold text-ink">{t.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{t.desc}</p>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Duration" title="Pick your pace" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto relative">
          {DURATIONS.map((d, i) => <div key={d.d} className="relative rounded-2xl border border-hairline p-7 bg-white/95 backdrop-blur-sm text-center shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold gradient-brand text-white">{`Stage ${i + 1}`}</div>
              <div className="text-3xl font-bold text-gradient-brand">{d.d}</div>
              <div className="mt-2 text-ink font-medium">{d.t}</div>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Benefits" title="What you walk away with" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {BENEFITS.map((b) => <div key={b} className="flex items-center gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-4 hover:shadow-soft transition-all duration-300">
              <Award className="h-5 w-5 text-accent2 shrink-0" /> <span className="text-ink font-medium">{b}</span>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Career support" title="Beyond the program" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {CAREER.map((c) => <div key={c.t} className="rounded-2xl border border-hairline p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-soft transition-all duration-300">
              <c.icon className="mx-auto h-7 w-7 text-brand" />
              <div className="mt-3 font-semibold text-ink">{c.t}</div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gradient-brand text-white shadow-glow"><Link to="/contact">Apply Now <ArrowRight /></Link></Button>
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
