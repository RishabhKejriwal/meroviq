import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Code2,
  FileBadge,
  Lightbulb,
  MessageSquare,
  Megaphone,
  ShieldCheck,
  Users,
  Monitor,
  FileText,
  BookOpen,
  CalendarDays,
  Check,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "IT Internship Program | Full Stack, QA, Salesforce & Digital Marketing";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Join Meroviq Launchpad internship program with Full Stack, QA, Salesforce, and Digital Marketing tracks. Get real-world experience, certificates, and interview training.");
  }, []);
  return null;
}
const TRACKS = [
  { icon: Code2, title: "Full Stack Development", desc: "Learn to build modern, scalable web applications using real-world technologies and workflows." },
  { icon: ShieldCheck, title: "Software Testing & QA", desc: "Master manual and automation testing with practical exposure to real testing environments." },
  { icon: Users, title: "Salesforce / CRM", desc: "Work on CRM platforms like Salesforce, Zoho, and Microsoft Dynamics to understand business automation and workflows." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Gain hands-on experience in SEO, social media, performance marketing, and growth strategies." }
];
const DURATIONS = [
  { d: "45 Days", t: "Beginner", desc: "Fundamentals + guided tasks. Basic project exposure." },
  { d: "3 Months", t: "Intermediate", desc: "Hands-on learning. Real-world assignments. Skill development focus." },
  { d: "6 Months", t: "Advanced", desc: "Live project experience. Deep technical understanding. Industry-level exposure." }
];
const BENEFITS = [
  "Internship Completion Certificate",
  "Offer Letter (for selected candidates)",
  "Letter of Recommendation (based on performance)",
  "Real Project Experience",
  "Hands-on Training & Mentorship",
  "Resume Building Support",
  "Interview Preparation (Technical + HR)",
  "Career Guidance & Roadmap"
];
const CAREER = [
  { icon: MessageSquare, t: "Mock Interviews" },
  { icon: FileBadge, t: "Resume & LinkedIn Optimization" },
  { icon: Lightbulb, t: "Industry insights & career direction" },
  { icon: Award, t: "Confidence building sessions" }
];
const FAQS = [
  { to: "/resources/it-professionals-faq", label: "IT Professionals FAQ Guide" },
  { to: "/resources/salesforce-career-faq", label: "Salesforce Career FAQ Guide" },
  { to: "/resources/qa-tester-faq", label: "QA Tester FAQ Guide" }
];
const WHY = [
  "Designed for Freshers",
  "Practical, Hands-on Learning",
  "Industry-Relevant Skills",
  "Career-Focused Training",
  "Support Beyond Internship"
];
function Page() {
  return <>
      <PageHero
    eyebrow="Meroviq Launchpad"
    title={<>Learn. Build. <span className="text-gradient-brand">Launch Your Career.</span></>}
    subtitle="Meroviq Launchpad is designed to help IT freshers gain real-world experience, develop industry-relevant skills, and confidently step into professional roles. We combine practical training, live project exposure, and career guidance to prepare you for real opportunities."
  >
        <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Apply Now <ArrowRight /></Link></Button>
      </PageHero>

      {/* Tracks */}
      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Tracks" title="Internship Tracks (Choose Your Path)" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {TRACKS.map((t) => <div key={t.title} className="rounded-2xl border border-hairline p-6 bg-white/95 backdrop-blur-sm shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center"><t.icon className="h-6 w-6" /></div>
              <h3 className="mt-4 font-semibold text-ink">{t.title}</h3>
              <p className="mt-1.5 text-sm text-ink-muted">{t.desc}</p>
            </div>)}
        </div>
      </Section>

      {/* Duration */}
      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Duration" title="Program Duration" />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          {DURATIONS.map((d, i) => <div key={d.d} className="relative rounded-2xl border border-hairline p-7 bg-white/95 backdrop-blur-sm text-center shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold gradient-brand text-white">{`Stage ${i + 1}`}</div>
              <CalendarDays className="mx-auto h-8 w-8 text-accent2" />
              <div className="mt-3 text-3xl font-bold text-gradient-brand">{d.d}</div>
              <div className="mt-1 text-ink font-semibold">{d.t}</div>
              <p className="mt-2 text-sm text-ink-muted">{d.desc}</p>
            </div>)}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Benefits" title="What You Will Receive" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {BENEFITS.map((b) => <div key={b} className="flex items-start gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-4 hover:shadow-soft transition-all duration-300">
              <Check className="mt-0.5 h-5 w-5 text-accent2 shrink-0" /> <span className="text-ink font-medium text-sm">{b}</span>
            </div>)}
        </div>
      </Section>

      {/* Career Support */}
      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Career support" title="Career Support & Preparation" />
        <p className="text-center text-ink-muted max-w-xl mx-auto -mt-8 mb-8">We go beyond training — we prepare you for success.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {CAREER.map((c) => <div key={c.t} className="rounded-2xl border border-hairline p-6 bg-white/95 backdrop-blur-sm text-center hover:shadow-soft transition-all duration-300">
              <c.icon className="mx-auto h-7 w-7 text-brand" />
              <div className="mt-3 font-semibold text-ink">{c.t}</div>
            </div>)}
        </div>
      </Section>

      {/* Free Career Guides */}
      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Resources" title="Free Career Preparation Guides" />
        <p className="text-center text-ink-muted max-w-xl mx-auto -mt-8 mb-8">Access curated resources to help you prepare for interviews and IT careers.</p>
        <div className="max-w-3xl mx-auto grid gap-4 relative">
          {FAQS.map((f) => <Link key={f.to} to={f.to} className="flex items-center justify-between gap-4 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft hover:shadow-glow transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-brand-soft text-brand flex items-center justify-center"><BookOpen className="h-5 w-5" /></div>
                <span className="text-ink font-medium">{f.label}</span>
              </div>
              <ExternalLink className="h-4 w-4 text-ink-muted group-hover:text-brand transition-colors" />
            </Link>)}
        </div>
      </Section>

      {/* Why Choose */}
      <Section className="relative bg-surface bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <EyebrowHeading eyebrow="Why us" title="Why Choose Meroviq Launchpad?" />
        <div className="max-w-3xl mx-auto grid gap-4 relative">
          {WHY.map((w) => <div key={w} className="flex items-start gap-4 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0"><Check className="h-4 w-4" /></div>
              <span className="text-ink font-medium">{w}</span>
            </div>)}
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-2xl mx-auto rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-soft relative text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Start Your Career Journey</h2>
          <p className="mt-3 text-ink-muted">Take the first step towards a successful IT career with Meroviq Launchpad.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Apply Now <ArrowRight /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/contact">Contact Us</Link></Button>
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
