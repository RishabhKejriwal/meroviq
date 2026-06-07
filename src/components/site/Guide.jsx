import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
function Guide({ title, subtitle, sections }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
      setProgress(Math.min(100, Math.max(0, p)));
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 120) setActive(s.id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);
  return <>
      <div className="fixed top-0 left-0 h-1 z-[60] gradient-brand transition-all" style={{ width: `${progress}%` }} aria-hidden />
      <PageHero eyebrow="Guide" title={title} subtitle={subtitle} />
      <section className="container-page pb-24">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">On this page</div>
              <ul className="space-y-1.5">
                {sections.map((s) => <li key={s.id}>
                    <a href={`#${s.id}`} className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${active === s.id ? "bg-brand-soft text-brand font-semibold" : "text-ink-muted hover:text-brand"}`}>{s.title}</a>
                  </li>)}
              </ul>
            </div>
          </aside>
          <article className="prose-like max-w-3xl">
            {sections.map((s) => <section key={s.id} id={s.id} className="mb-12 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">{s.title}</h2>
                <div className="text-ink-muted leading-relaxed space-y-4">{s.body}</div>
              </section>)}
          </article>
        </div>
      </section>
    </>;
}
export {
  Guide
};
