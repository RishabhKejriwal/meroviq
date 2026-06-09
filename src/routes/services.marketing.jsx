import { Link } from "react-router-dom";
import { ArrowRight, Search, Share2, Youtube, Target, BarChart3, Compass, ClipboardList, Megaphone, FileBarChart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Digital Marketing Services | SEO, Social Media & YouTube Marketing | Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Boost your business with SEO, social media, YouTube marketing, and performance ads. Meroviq Technologies delivers cost-effective digital marketing solutions for growth.");
  }, []);
  return null;
}
const SVC = [
  { icon: Search, title: "Search Engine Optimization (SEO)", desc: "Improve your website's visibility on search engines and attract organic traffic. We focus on keyword optimization, technical SEO, and content strategies to boost rankings." },
  { icon: Share2, title: "Social Media Marketing", desc: "Build your brand and engage with your audience across platforms like Instagram, LinkedIn, Facebook, and YouTube. We create content and campaigns that increase visibility and engagement." },
  { icon: Youtube, title: "YouTube Marketing", desc: "Grow your presence on YouTube with optimized videos, channel management, and audience targeting. We help you increase reach, engagement, and brand visibility through video content strategies." },
  { icon: Target, title: "Performance Marketing", desc: "Run targeted ad campaigns on Google and social media platforms to generate leads and conversions. We optimize campaigns for maximum ROI and measurable results." },
  { icon: BarChart3, title: "Analytics & Optimization", desc: "Track performance, analyze data, and continuously improve your marketing strategies. We ensure every campaign is optimized for better results over time." }
];
const STEPS = [
  { icon: Compass, title: "Discovery & Consultation", desc: "Understanding your business goals, audience, and current digital presence." },
  { icon: ClipboardList, title: "Planning & Strategy", desc: "Creating a customized marketing plan based on your objectives." },
  { icon: Megaphone, title: "Execution & Optimization", desc: "Running campaigns, creating content, and optimizing performance." },
  { icon: FileBarChart, title: "Reporting & Growth", desc: "Tracking results, sharing insights, and scaling what works." }
];
const WHY = [
  "Data-driven strategies for measurable results",
  "Cost-effective campaigns for small businesses",
  "Focus on ROI and lead generation",
  "Multi-platform marketing (SEO, Social, YouTube, Ads)",
  "Continuous monitoring and optimization"
];
function Page() {
  return <>
      <PageHero
    eyebrow="Digital Marketing"
    title={<>Grow Faster. Reach Smarter. <span className="text-gradient-brand">Convert Better.</span></>}
    subtitle="At Meroviq Technologies, we help businesses grow their online presence, attract the right audience, and convert leads into customers through data-driven digital marketing strategies. Our focus is on delivering measurable results that drive sustainable business growth."
  >
        <Button asChild size="lg" className="gradient-brand text-white"><Link to="/contact">Grow Your Business <ArrowRight /></Link></Button>
      </PageHero>

      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <EyebrowHeading eyebrow="Capabilities" title="What We Offer" />
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
        <EyebrowHeading eyebrow="Why us" title="Why Choose Our Digital Marketing Services?" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Let's Grow Your Business</h2>
          <p className="mt-3 text-ink-muted">Whether you want to increase traffic, generate leads, or build your brand, we're here to help you achieve your marketing goals.</p>
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
