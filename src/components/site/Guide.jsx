import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ChevronDown, List } from "lucide-react";

function Guide({ title, subtitle, intro, sections }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(sections[0]?.id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const update = (updateHash) => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
      setProgress(Math.min(100, Math.max(0, p)));
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 120) current = s.id;
      }
      setActive(current);
      if (updateHash && current && window.location.hash !== `#${current}`) {
        window.history.replaceState(null, "", `#${current}`);
      }
    };
    const onScroll = () => update(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    update(false);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const handleMobileClick = (id) => {
    setMobileNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeTitle = sections.find((s) => s.id === active)?.title || "";

  return <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 h-1.5 z-[60] gradient-brand transition-all" style={{ width: `${progress}%` }} aria-hidden />

      <PageHero eyebrow="Guide" title={title} subtitle={subtitle} />

      {/* Mobile section nav */}
      <div className="lg:hidden container-page mt-6">
        <button
          onClick={() => setMobileNavOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-3 rounded-lg border border-hairline bg-surface px-4 py-3 text-left shadow-soft"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-guide-nav"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-ink">
            <List className="h-4 w-4 text-ink-muted" />
            {activeTitle}
          </span>
          <ChevronDown className={`h-4 w-4 text-ink-muted transition-transform ${mobileNavOpen ? "rotate-180" : ""}`} />
        </button>
        {mobileNavOpen && (
          <ul id="mobile-guide-nav" className="mt-1 rounded-lg border border-hairline bg-white shadow-soft overflow-hidden">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => handleMobileClick(s.id)}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${active === s.id ? "bg-brand-soft text-brand font-semibold" : "text-ink-muted hover:bg-surface hover:text-brand"}`}
                >
                  {s.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <section className="container-page pb-24 pt-8 lg:pt-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-10 xl:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">On this page</div>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block text-sm py-2.5 px-3 rounded-md transition-colors ${active === s.id ? "bg-brand-soft text-brand font-semibold" : "text-ink-muted hover:text-brand hover:bg-surface"}`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Article content */}
          <article className="max-w-3xl">
            {intro && (
              <div className="mb-10 relative rounded-2xl border border-hairline bg-surface/80 backdrop-blur-sm p-6 md:p-8 shadow-soft">
                <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full gradient-brand" aria-hidden />
                <div className="pl-4 text-ink-muted leading-relaxed text-[15px] md:text-base space-y-3">{intro}</div>
              </div>
            )}
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-14 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6 pb-3 border-b border-hairline">{s.title}</h2>
                <div className="prose-like">{s.body}</div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>;
}

export { Guide };
