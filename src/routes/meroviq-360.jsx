import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Meroviq 360 \u2014 Coming Soon";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Meroviq 360 is coming soon.");
  }, []);
  return null;
}
function Page() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh pt-24 pb-16">
      {/* Background glows */}
      <div aria-hidden className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand opacity-10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent2 opacity-10 blur-3xl" />
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="container-page relative">
        <div className="max-w-lg mx-auto text-center">
          {/* Card */}
          <div className="relative rounded-3xl border border-hairline bg-white/90 backdrop-blur-sm p-10 md:p-14 shadow-glow">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-24 gradient-brand rounded-full" aria-hidden />

            {/* Icon + Badge */}
            <div className="mx-auto h-14 w-14 rounded-2xl gradient-brand text-white flex items-center justify-center shadow-glow">
              <Sparkles className="h-7 w-7" />
            </div>
            <span className="inline-flex items-center gap-1.5 mt-5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Coming Soon
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Meroviq 360
            </h1>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Our all-in-one CRM platform is on its way. Stay tuned for updates and early access.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-ink transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
