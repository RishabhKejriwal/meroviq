import { Link } from "react-router-dom";
import { ArrowRight, Globe, Cloud, Laptop, ShieldCheck, Compass, ClipboardList, Code2, Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Development & Testing Services | Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Professional website development, SaaS customization (Salesforce, Zoho, MS Dynamics), custom software, and QA testing services. Build scalable and reliable solutions with Meroviq Technologies.");
  }, []);
  return null;
}
const SVC = [
  { icon: Globe, title: "Website Development", desc: "Modern, responsive, and high-performance websites tailored to your business needs. We focus on speed, usability, and strong digital presence." },
  { icon: Cloud, title: "SaaS Customization", desc: "Enhance and optimize your existing SaaS platforms to better fit your workflow. We work with leading platforms like Salesforce, Zoho, and Microsoft Dynamics to improve functionality, automation, and user experience." },
  { icon: Laptop, title: "Custom Software Development", desc: "Tailor-made software solutions built specifically for your business processes. Scalable, secure, and designed for long-term efficiency." },
  { icon: ShieldCheck, title: "QA Testing & Quality Assurance", desc: "Comprehensive testing to ensure your product is reliable, secure, and bug-free. We focus on performance, usability, and stability." }
];
const STEPS = [
  { icon: Compass, title: "Discovery & Consultation", desc: "Understanding your goals and requirements." },
  { icon: ClipboardList, title: "Planning & Strategy", desc: "Designing a clear execution roadmap." },
  { icon: Code2, title: "Development & Testing", desc: "Building with precision and quality." },
  { icon: Rocket, title: "Deployment & Support", desc: "Launch and continuous improvement." }
];
const WHY = [
  "Focus on quality and performance",
  "Cost-effective solutions for growing businesses",
  "Scalable architecture for future growth",
  "Strong testing and QA process",
  "Continuous support and improvement"
];
function Page() {
  return <>
      <PageHero
    eyebrow="Development & Testing"
    title={<>Build Smart. Scale Fast. <span className="text-gradient-brand">Deliver with Confidence.</span></>}
    subtitle="At Meroviq Technologies, we provide end-to-end development and testing services designed to help businesses build reliable, scalable, and efficient digital solutions. From websites to enterprise software, we focus on performance, quality, and long-term growth."
  >
        <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Get Started Today <ArrowRight /></Link></Button>
      </PageHero>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="What we build" title="What We Offer" />
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
        <EyebrowHeading eyebrow="Process" title="How It Works" />
        <ol className="grid md:grid-cols-4 gap-6 relative">
          {STEPS.map((s, i) => <li key={s.title} className="relative rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-6 hover:shadow-soft transition-all duration-300">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full gradient-brand text-white text-sm font-bold flex items-center justify-center shadow-soft">{i + 1}</div>
              <s.icon className="h-7 w-7 text-accent2" />
              <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
            </li>)}
        </ol>
      </Section>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Why us" title="Why Choose Our Development Services?" />
        <div className="max-w-3xl mx-auto grid gap-4 relative">
          {WHY.map((w) => <div key={w} className="flex items-start gap-4 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0"><Check className="h-4 w-4" /></div>
              <span className="text-ink font-medium">{w}</span>
            </div>)}
        </div>
      </Section>

      <Section className="relative bg-surface bg-gradient-radial">
        <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-2xl mx-auto rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-soft relative text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Let's Build Something Great</h2>
          <p className="mt-3 text-ink-muted">Whether you're starting from scratch or improving an existing system, we're here to help you build efficient, reliable, and scalable solutions.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Get Started Today <ArrowRight /></Link></Button>
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
