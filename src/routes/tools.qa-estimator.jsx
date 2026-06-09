import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Trash2, CalendarCheck, Coins, FileText, Users, Lightbulb, MonitorSmartphone, KanbanSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";

function __PageMeta() {
  __useEffect(() => {
    document.title = "QA Effort Estimation Calculator for Manual Testing \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Free Manual QA Effort Estimation Calculator. Estimate testing hours from development effort or from feature complexity \u2014 fast, transparent and free.");
  }, []);
  return null;
}

const QA_RATIOS = { high: 0.447, medium: 0.416, low: 0.294 };
const MULTIPLIERS = {
  high: { browser: 0.0222, device: 0.01333, profile: 0.075 },
  medium: { browser: 0.0184, device: 0.01233, profile: 0.0675 },
  low: { browser: 0.0108, device: 0.008, profile: 0.04625 }
};
const FACTORS = { high: 0.4035, medium: 0.3647, low: 0.3482 };
const COMPLEXITY_HOURS = { simple: 1.575, medium: 3.1375, medcomplex: 4.06, complex: 5.939 };
const COMPLEXITY_LABELS = { simple: "Simple", medium: "Medium", medcomplex: "Med Complex", complex: "Complex" };

function Page() {
  const [method, setMethod] = useState("dev");
  return <>
    <PageHero eyebrow="Free Tool" title={<>QA effort estimation <span className="text-gradient-brand">calculator</span></>} subtitle="Accurate QA estimation is critical for delivering high-quality software on time and within budget. Determine testing hours, team size and timelines in minutes \u2014 free." />
    <section className="container-page pb-24 pt-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-ink text-center">Choose your QA estimation method</h2>
          <div className="mt-5 flex flex-col sm:flex-row gap-2 p-1 bg-surface rounded-xl max-w-2xl mx-auto">
            <button onClick={() => setMethod("dev")} className={`flex-1 py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${method === "dev" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"}`}>Based on development effort</button>
            <button onClick={() => setMethod("scope")} className={`flex-1 py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${method === "scope" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"}`}>Without development effort</button>
          </div>
          <div className="mt-6">
            {method === "dev" ? <MethodDev /> : <MethodScope />}
          </div>
        </div>

        <Section className="relative bg-surface bg-gradient-radial">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
          <EyebrowHeading eyebrow="Why use it" title="Why teams trust this calculator" />
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto relative">
            {[
              "Designed by QA experts",
              "Accurate, flexible, and easy to use",
              "Works for any project size",
              "Supports Agile & Waterfall",
              "Made for PMs, QA leads, and founders",
              "Helps avoid underestimation and project delays",
              "100% free"
            ].map(b => <div key={b} className="flex items-start gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-4 shadow-soft">
              <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full gradient-brand text-white text-xs flex items-center justify-center">&#10003;</span>
              <span className="text-sm text-ink">{b}</span>
            </div>)}
          </div>
        </Section>

        <Section className="relative bg-dots">
          <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
          <EyebrowHeading eyebrow="Example use cases" title="Put your estimate to work" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {[
              { icon: CalendarCheck, t: "Creating project timelines" },
              { icon: Coins, t: "Planning QA budgets" },
              { icon: FileText, t: "Preparing SOWs or proposals" },
              { icon: Users, t: "Allocating QA resources" },
              { icon: Lightbulb, t: "Early-stage discovery estimation" },
              { icon: MonitorSmartphone, t: "Cross-platform testing planning" },
              { icon: KanbanSquare, t: "Product and sprint planning" }
            ].map(c => <div key={c.t} className="flex items-center gap-3 rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <div className="h-10 w-10 rounded-lg gradient-brand text-white flex items-center justify-center shrink-0"><c.icon className="h-5 w-5" /></div>
              <span className="font-medium text-ink">{c.t}</span>
            </div>)}
          </div>
        </Section>

        <Section className="relative bg-surface bg-gradient-radial">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
          <EyebrowHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="max-w-3xl mx-auto space-y-3 relative">
            {[
              { q: "Can I use this calculator for automation testing?", a: "This version is optimized for manual testing. An automation calculator will be available soon." },
              { q: "What is the typical QA-to-Dev ratio?", a: "Most teams use 25%\u201340%, depending on complexity and regression depth." },
              { q: "Is the estimate 100% accurate?", a: "No estimation tool is perfect, but this calculator follows industry benchmarks to produce a highly reliable starting point." },
              { q: "Is this tool free?", a: "Yes \u2014 the QA Effort Estimator is completely free." },
              { q: "Can I use this for mobile, web, and API testing?", a: "Yes. The calculator includes platform multipliers for all major test types." }
            ].map(item => <details key={item.q} className="group rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink list-none">
                <span>{item.q}</span>
                <svg className="shrink-0 text-ink-muted transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <p className="mt-3 text-sm text-ink-muted">{item.a}</p>
            </details>)}
          </div>
        </Section>

      </div>
    </section>
  </>;
}

function MethodDev() {
  const [devHours, setDevHours] = useState("");
  const [complexity, setComplexity] = useState("");
  const [browsers, setBrowsers] = useState(1);
  const [devices, setDevices] = useState(1);
  const [profiles, setProfiles] = useState(1);

  const result = useMemo(() => {
    const dh = parseFloat(devHours) || 0;
    if (!complexity || dh <= 0) return null;
    const m = MULTIPLIERS[complexity];
    const base = dh * QA_RATIOS[complexity];
    const browserHours = dh * m.browser * (parseInt(browsers) || 1);
    const deviceHours = dh * m.device * (parseInt(devices) || 1);
    const profileHours = dh * m.profile * (parseInt(profiles) || 1);
    const total = base + (browserHours + deviceHours + profileHours) * FACTORS[complexity];
    return { base, browserHours, deviceHours, profileHours, total };
  }, [devHours, complexity, browsers, devices, profiles]);

  return <div className="space-y-5">
    <p className="text-sm text-ink-muted">Use this method when you already know developer hours, story points or estimated engineering effort. It applies industry-standard QA-to-Dev ratios, complexity multipliers and regression impact.</p>
    <div className="grid sm:grid-cols-2 gap-4">
      <Field label="Development hours">
        <input type="number" min="0" step="0.5" value={devHours} onChange={e => setDevHours(e.target.value)} placeholder="e.g. 100" className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
      </Field>
      <Field label="Complexity">
        <select value={complexity} onChange={e => setComplexity(e.target.value)} className="w-full min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm">
          <option value="">Select complexity</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </Field>
    </div>
    <div className="grid sm:grid-cols-3 gap-4">
      <Field label="No. of browsers"><NumberInput value={browsers} onChange={setBrowsers} /></Field>
      <Field label="No. of devices"><NumberInput value={devices} onChange={setDevices} /></Field>
      <Field label="No. of user profiles"><NumberInput value={profiles} onChange={setProfiles} /></Field>
    </div>

    {result && <div className="rounded-xl border border-hairline bg-surface overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="text-left text-ink-muted border-b border-hairline"><th className="px-4 py-2 font-medium">Item</th><th className="px-4 py-2 font-medium text-right">Hours</th></tr></thead>
        <tbody>
          <ResultRow label="Base QA effort (from dev hours)" v={result.base} />
          <ResultRow label="Browser testing multiplier" v={result.browserHours} />
          <ResultRow label="Device testing multiplier" v={result.deviceHours} />
          <ResultRow label="User profile testing multiplier" v={result.profileHours} />
        </tbody>
        <tfoot><tr className="border-t border-hairline bg-brand-soft font-semibold text-ink"><td className="px-4 py-2.5">Total QA hours</td><td className="px-4 py-2.5 text-right">{result.total.toFixed(2)}</td></tr></tfoot>
      </table>
    </div>}

    <details className="text-sm text-ink-muted">
      <summary className="cursor-pointer font-medium text-ink">How the calculation works</summary>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>QA-to-Dev ratio by complexity (High: 44.7%, Medium: 41.6%, Low: 29.4%)</li>
        <li><strong>High:</strong> Browser 2.22%, Device 1.333%, Profile 7.5% of dev hours</li>
        <li><strong>Medium:</strong> Browser 1.84%, Device 1.233%, Profile 6.75% of dev hours</li>
        <li><strong>Low:</strong> Browser 1.08%, Device 0.8%, Profile 4.625% of dev hours</li>
        <li>Total = Base QA hours + (sum of multipliers &times; factor)</li>
        <li>Factor: High = 0.4035, Medium = 0.3647, Low = 0.3482</li>
      </ul>
    </details>
  </div>;
}

function MethodScope() {
  const [modules, setModules] = useState([{ id: 1, name: "", count: 1, complexity: "" }]);

  const rows = modules.map(m => {
    const hours = m.complexity && COMPLEXITY_HOURS[m.complexity] ? (parseFloat(m.count) || 0) * COMPLEXITY_HOURS[m.complexity] : 0;
    return { ...m, hours };
  });
  const total = rows.reduce((s, r) => s + r.hours, 0);
  const valid = rows.filter(r => r.complexity && (parseFloat(r.count) || 0) > 0);

  const update = (id, key, val) => setModules(prev => prev.map(m => m.id === id ? { ...m, [key]: val } : m));
  const addModule = () => setModules(prev => [...prev, { id: Date.now(), name: "", count: 1, complexity: "" }]);
  const removeModule = (id) => setModules(prev => prev.length > 1 ? prev.filter(m => m.id !== id) : prev);
  const reset = () => setModules([{ id: Date.now(), name: "", count: 1, complexity: "" }]);

  return <div className="space-y-5">
    <p className="text-sm text-ink-muted">Use this approach when you only know features, modules or scope \u2014 early in the project or before requirements are detailed. It analyzes feature complexity and expected effort per requirement.</p>

    <div className="rounded-xl border border-brand/20 bg-brand-soft/40 p-4 text-sm text-ink">
      <strong>Complexity reference:</strong>
      <ul className="mt-1 grid sm:grid-cols-2 gap-x-6 gap-y-0.5 text-ink-muted">
        <li><strong>Simple:</strong> 1.575 hours per requirement</li>
        <li><strong>Medium:</strong> 3.1375 hours per requirement</li>
        <li><strong>Med Complex:</strong> 4.06 hours per requirement</li>
        <li><strong>Complex:</strong> 5.939 hours per requirement</li>
      </ul>
    </div>

    <div className="space-y-3">
      {rows.map(m => <div key={m.id} className="rounded-xl border border-hairline bg-surface p-4">
        <div className="grid sm:grid-cols-12 gap-3 items-end">
          <div className="sm:col-span-4"><Field label="Module/Epic name"><input type="text" value={m.name} onChange={e => update(m.id, "name", e.target.value)} placeholder={`Module`} className="w-full rounded-lg border border-hairline bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" /></Field></div>
          <div className="sm:col-span-3"><Field label="Requirements/Stories"><input type="number" min="0" step="1" value={m.count} onChange={e => update(m.id, "count", e.target.value)} className="w-full rounded-lg border border-hairline bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" /></Field></div>
          <div className="sm:col-span-3"><Field label="Complexity"><select value={m.complexity} onChange={e => update(m.id, "complexity", e.target.value)} className="w-full min-w-0 rounded-lg border border-hairline bg-white px-3 py-2 text-sm"><option value="">Select</option><option value="simple">Simple</option><option value="medium">Medium</option><option value="medcomplex">Med Complex</option><option value="complex">Complex</option></select></Field></div>
          <div className="sm:col-span-2 flex items-end gap-2">
            <Field label="Total hours"><div className="rounded-lg border border-hairline bg-white px-3 py-2 text-sm font-medium text-ink">{m.hours.toFixed(2)}</div></Field>
            <button onClick={() => removeModule(m.id)} disabled={modules.length === 1} className="mb-0.5 h-9 w-9 shrink-0 rounded-lg border border-hairline text-ink-muted hover:text-red-500 hover:border-red-200 disabled:opacity-40 flex items-center justify-center" aria-label="Remove module"><Trash2 className="h-4 w-4" /></button>
          </div>
        </div>
      </div>)}
    </div>

    <div className="flex flex-wrap gap-2">
      <Button size="sm" onClick={addModule} className="gradient-brand text-white"><Plus className="h-4 w-4" /> Add module</Button>
      <Button size="sm" variant="outline" onClick={reset}>Reset all</Button>
    </div>
    <p className="text-xs text-ink-muted">Calculations update automatically as you enter data.</p>

    {valid.length > 0 && <div className="rounded-xl border border-hairline bg-surface overflow-hidden">
      <table className="w-full text-sm">
        <thead><tr className="text-left text-ink-muted border-b border-hairline"><th className="px-4 py-2 font-medium">Module</th><th className="px-4 py-2 font-medium">Requirements</th><th className="px-4 py-2 font-medium">Complexity</th><th className="px-4 py-2 font-medium text-right">Total hours</th></tr></thead>
        <tbody>
          {valid.map(r => <tr key={r.id} className="border-b border-hairline last:border-0">
            <td className="px-4 py-2 text-ink">{r.name || "Unnamed Module"}</td>
            <td className="px-4 py-2 text-ink-muted">{r.count}</td>
            <td className="px-4 py-2 text-ink-muted">{COMPLEXITY_LABELS[r.complexity]}</td>
            <td className="px-4 py-2 text-right text-ink">{r.hours.toFixed(2)}</td>
          </tr>)}
        </tbody>
        <tfoot><tr className="bg-brand-soft font-semibold text-ink"><td className="px-4 py-2.5" colSpan={3}>Total QA hours</td><td className="px-4 py-2.5 text-right">{total.toFixed(2)}</td></tr></tfoot>
      </table>
    </div>}

    <details className="text-sm text-ink-muted">
      <summary className="cursor-pointer font-medium text-ink">How the calculation works</summary>
      <ul className="mt-2 list-disc pl-5 space-y-1">
        <li>Each complexity level has predefined hours per requirement</li>
        <li>Hours include test case preparation, execution, and buffers</li>
        <li>Total = (Number of requirements) &times; (Hours per requirement based on complexity)</li>
      </ul>
    </details>
  </div>;
}

function Field({ label, children }) {
  return <label className="block">
    <span className="block text-sm font-medium text-ink mb-1">{label}</span>
    {children}
  </label>;
}

function NumberInput({ value, onChange }) {
  return <input type="number" min="1" value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />;
}

function ResultRow({ label, v }) {
  return <tr className="border-b border-hairline"><td className="px-4 py-2 text-ink">{label}</td><td className="px-4 py-2 text-right text-ink-muted">{v.toFixed(2)}</td></tr>;
}

const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
