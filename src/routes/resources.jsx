import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Resources & Guides \u2014 Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "FAQ guides for IT professionals, Salesforce careers and QA testers.");
  }, []);
  return null;
}
const GUIDES = [
  { to: "/resources/it-professionals-faq", title: "IT Professionals FAQ Guide", cat: "Careers", desc: "Career paths, skills and interview tips for IT freshers." },
  { to: "/resources/salesforce-career-faq", title: "Salesforce Career FAQ Guide", cat: "CRM", desc: "From admin to architect \u2014 your Salesforce roadmap." },
  { to: "/resources/qa-tester-faq", title: "QA Tester FAQ Guide", cat: "Quality", desc: "Everything you wanted to know about a QA career." }
];
function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...Array.from(new Set(GUIDES.map((g) => g.cat)))];
  const filtered = useMemo(() => GUIDES.filter(
    (g) => (cat === "All" || g.cat === cat) && (g.title + g.desc).toLowerCase().includes(q.toLowerCase())
  ), [q, cat]);
  return <>
      <PageHero eyebrow="Resources" title={<>Guides, FAQs & <span className="text-gradient-brand">field notes</span></>} subtitle="Practical answers from teams who ship every day." />
      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="flex flex-col md:flex-row gap-3 mb-8 max-w-3xl mx-auto relative">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search guides…" className="w-full rounded-lg border border-hairline bg-surface pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </div>
          <div className="flex gap-2 overflow-auto">
            {cats.map((c) => <button key={c} onClick={() => setCat(c)} className={`px-3 py-2 rounded-lg text-sm font-medium border ${cat === c ? "bg-brand text-white border-brand" : "border-hairline text-ink hover:bg-brand-soft"}`}>{c}</button>)}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g) => <Link key={g.to} to={g.to} className="group rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-6 shadow-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-brand" />
                <span className="text-xs uppercase tracking-wider text-accent2 font-semibold">{g.cat}</span>
              </div>
              <h3 className="mt-3 font-semibold text-ink">{g.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{g.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-3 transition-all">Read <ArrowRight className="h-4 w-4" /></span>
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
