import { useState } from "react";
import { ToolPage } from "@/components/site/ToolPage";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "QA Effort Estimator \u2014 Free Tool by Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Estimate QA effort based on test cases, complexity and automation coverage.");
  }, []);
  return null;
}
function Page() {
  return <ToolPage
    eyebrow="QA Effort Estimator"
    title={<>Plan testing with <span className="text-gradient-brand">confidence</span></>}
    subtitle="Quickly estimate manual and automated QA effort using transparent heuristics."
    toolInterface={<Estimator />}
    features={["Per-case time estimation", "Complexity multiplier", "Automation discount", "Regression buffer"]}
    steps={[
      { title: "Inputs", desc: "Enter test cases, complexity and automation %." },
      { title: "Estimate", desc: "We compute hours, days and a regression buffer." },
      { title: "Plan", desc: "Use the breakdown to staff your release." }
    ]}
    benefits={["Defensible numbers", "Faster sprint planning", "Shareable summary", "Free forever"]}
  />;
}
function Estimator() {
  const [cases, setCases] = useState(120);
  const [complexity, setComplexity] = useState(1.2);
  const [automation, setAutomation] = useState(40);
  const baseMin = cases * 12;
  const adj = baseMin * complexity;
  const automated = adj * (automation / 100) * 0.25;
  const manual = adj * (1 - automation / 100);
  const totalMin = automated + manual;
  const buffer = totalMin * 0.15;
  const totalHours = (totalMin + buffer) / 60;
  const days = totalHours / 8;
  return <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-5">
        <Range label={`Test cases: ${cases}`} min={10} max={1e3} step={10} value={cases} onChange={setCases} />
        <Range label={`Complexity: ${complexity.toFixed(1)}x`} min={0.8} max={2} step={0.1} value={complexity} onChange={setComplexity} />
        <Range label={`Automation coverage: ${automation}%`} min={0} max={100} step={5} value={automation} onChange={setAutomation} />
      </div>
      <div className="rounded-xl bg-surface p-6 border border-hairline">
        <div className="text-sm text-ink-muted">Estimated effort</div>
        <div className="mt-1 text-4xl font-bold text-gradient-brand">{totalHours.toFixed(1)} h</div>
        <div className="mt-1 text-ink">≈ {days.toFixed(1)} working days</div>
        <hr className="my-4 border-hairline" />
        <Row label="Manual" v={`${(manual / 60).toFixed(1)} h`} />
        <Row label="Automated execution" v={`${(automated / 60).toFixed(1)} h`} />
        <Row label="Regression buffer (15%)" v={`${(buffer / 60).toFixed(1)} h`} />
      </div>
    </div>;
}
function Range({ label, min, max, step, value, onChange }) {
  return <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-2 w-full accent-[#004188]" />
    </label>;
}
function Row({ label, v }) {
  return <div className="flex justify-between text-sm py-1"><span className="text-ink-muted">{label}</span><span className="font-medium text-ink">{v}</span></div>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
