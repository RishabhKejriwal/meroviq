import { useMemo, useState } from "react";
import { ToolPage } from "@/components/site/ToolPage";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Grammar Corrector \u2014 Free Tool by Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Quick rule-based grammar and clarity suggestions, in-browser and free.");
  }, []);
  return null;
}
const RULES = [
  { re: /\bi\b/g, msg: "Capitalize 'I'", fix: "I" },
  { re: /\s{2,}/g, msg: "Extra spaces", fix: " " },
  { re: /\s+([,.!?;:])/g, msg: "Space before punctuation", fix: "$1" },
  { re: /\bteh\b/gi, msg: "Misspelling: 'the'", fix: "the" },
  { re: /\brecieve\b/gi, msg: "Misspelling: 'receive'", fix: "receive" },
  { re: /\bdont\b/gi, msg: "Add apostrophe: don't", fix: "don't" },
  { re: /\bcant\b/gi, msg: "Add apostrophe: can't", fix: "can't" }
];
function Page() {
  return <ToolPage
    eyebrow="Grammar Corrector"
    title={<>Cleaner writing in <span className="text-gradient-brand">one click</span></>}
    subtitle="Paste text and we'll flag common grammar slips. Everything runs in your browser."
    toolInterface={<Corrector />}
    features={["Spelling fixes", "Punctuation spacing", "Capitalization", "Apostrophe restoration"]}
    steps={[
      { title: "Paste", desc: "Drop in your draft." },
      { title: "Review", desc: "Read suggested fixes." },
      { title: "Copy", desc: "Copy the cleaned text." }
    ]}
    benefits={["Private \u2014 no uploads", "Free forever", "Fast feedback", "Works offline"]}
  />;
}
function Corrector() {
  const [text, setText] = useState("");
  const { fixed, issues } = useMemo(() => {
    let f = text;
    const i = [];
    for (const r of RULES) if (r.re.test(f)) {
      i.push(r.msg);
      f = f.replace(r.re, r.fix);
    }
    if (f) f = f.charAt(0).toUpperCase() + f.slice(1);
    return { fixed: f, issues: i };
  }, [text]);
  return <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium text-ink">Your text</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows={10} className="mt-2 w-full rounded-lg border border-hairline bg-surface p-3 focus:outline-none focus:ring-2 focus:ring-brand/30" placeholder="Paste your text here…" />
      </div>
      <div>
        <label className="text-sm font-medium text-ink">Corrected</label>
        <div className="mt-2 min-h-[14rem] rounded-lg border border-hairline bg-surface p-3 whitespace-pre-wrap">{fixed || <span className="text-ink-muted">Output will appear here…</span>}</div>
        {issues.length > 0 && <ul className="mt-3 text-sm text-ink-muted list-disc list-inside">{issues.map((m, i) => <li key={i}>{m}</li>)}</ul>}
      </div>
    </div>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
