import { GradientOrbs } from "./AnimatedBackground";

function PageHero({ eyebrow, title, subtitle, children, badge }) {
  return <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-gradient-mesh">
      <GradientOrbs />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute -top-32 -right-32 h-96 w-96 rounded-full gradient-brand opacity-10 blur-3xl" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          {badge && <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent2-soft text-accent2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent2 animate-pulse" /> {badge}
            </span>}
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">{eyebrow}</p>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink animate-fade-up">
            {title}
          </h1>
          {subtitle && <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl">{subtitle}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>;
}
export {
  PageHero
};
