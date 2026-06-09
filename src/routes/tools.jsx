import { Link } from "react-router-dom";
import { ArrowRight, Calculator, FileCog, FileSignature } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Free Tools \u2014 Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Free productivity tools \u2014 digital signature, file converter and QA effort estimator.");
  }, []);
  return null;
}
const TOOLS = [
  { to: "/tools/digital-signature", title: "Digital Signature", desc: "Sign and share documents instantly.", icon: FileSignature },
  { to: "/tools/file-converter", title: "File Converter", desc: "Convert between common file formats.", icon: FileCog },
  { to: "/tools/qa-estimator", title: "QA Effort Estimator", desc: "Estimate testing effort in minutes.", icon: Calculator }
];
function Page() {
  return <>
      <PageHero eyebrow="Free tools" title={<>Productivity, on the house</>} subtitle="Useful utilities — free forever. No sign-up required." />
      <Section className="relative bg-dots">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {TOOLS.map((t) => <Link key={t.to} to={t.to} className="group rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-7 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center"><t.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 font-semibold text-ink">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{t.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-3 transition-all">Open <ArrowRight className="h-4 w-4" /></span>
            </Link>)}
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
