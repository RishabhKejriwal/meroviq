import { useEffect, useState } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Privacy Policy \u2014 Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "How Meroviq Technologies collects, uses and protects your data.");
  }, []);
  return null;
}
const SECTIONS = [
  { id: "intro", title: "1. Introduction", body: 'This Privacy Policy explains how Meroviq Technologies ("we", "us") collects, uses and safeguards information when you use our websites and services.' },
  { id: "data", title: "2. Data we collect", body: "Account details, contact information, technical data such as device and browser information, and usage analytics collected with consent." },
  { id: "use", title: "3. How we use data", body: "To deliver our services, communicate with you, improve our products, and comply with legal obligations." },
  { id: "share", title: "4. Sharing", body: "We do not sell personal data. We share with vetted processors under strict agreements when required to deliver services." },
  { id: "rights", title: "5. Your rights", body: "Access, rectification, deletion, portability and objection \u2014 exercise any of these by emailing privacy@meroviq.com." },
  { id: "security", title: "6. Security", body: "Encryption in transit, least-privilege access, regular reviews and incident response procedures." },
  { id: "cookies", title: "7. Cookies", body: "We use essential cookies and optional analytics cookies. Manage your preferences in your browser settings." },
  { id: "changes", title: "8. Changes", body: "We may update this policy from time to time. The effective date will be revised accordingly." },
  { id: "contact", title: "9. Contact", body: "Questions? Email privacy@meroviq.com or write to our registered office." }
];
function Page() {
  const [active, setActive] = useState(SECTIONS[0].id);
  useEffect(() => {
    const onScroll = () => {
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 140) setActive(s.id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="pt-32 pb-24">
      <div className="container-page">
        <header className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">Legal</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-ink">Privacy Policy</h1>
          <p className="mt-3 text-ink-muted">Last updated: January 1, 2026</p>
          <Button onClick={() => window.print()} variant="outline" className="mt-5"><Printer className="h-4 w-4" /> Print</Button>
        </header>

        <div className="mt-12 grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Contents</div>
              <ul className="space-y-1.5">
                {SECTIONS.map((s) => <li key={s.id}>
                    <a href={`#${s.id}`} className={`block text-sm py-1.5 px-3 rounded-md ${active === s.id ? "bg-brand-soft text-brand font-semibold" : "text-ink-muted hover:text-brand"}`}>{s.title}</a>
                  </li>)}
              </ul>
            </div>
          </aside>
          <article className="max-w-3xl">
            {SECTIONS.map((s) => <section key={s.id} id={s.id} className="mb-10 scroll-mt-28">
                <h2 className="text-2xl font-bold text-ink mb-3">{s.title}</h2>
                <p className="text-ink-muted leading-relaxed">{s.body}</p>
              </section>)}
          </article>
        </div>
      </div>
    </div>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
