import { Linkedin, Mail, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Contact Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Talk to our team about CRM, development, marketing or internship opportunities.");
  }, []);
  return null;
}
function Page() {
  return <>
      <PageHero eyebrow="Contact" title={<>Let's build something <span className="text-gradient-brand">together</span></>} subtitle="We respond within one business day. Tell us a bit about your goals and we'll take it from there." />
      <Section className="relative bg-circuit">
        <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-40" />
        <div className="relative mx-auto max-w-4xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <a
              href="mailto:hello@meroviq.in"
              className="group flex flex-col gap-4 p-7 rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm hover:border-brand/40 hover:shadow-soft transition-all duration-300"
            >
              <span className="h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center shadow-soft">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Email us</div>
                <div className="mt-1 text-lg font-semibold text-ink">hello@meroviq.in</div>
                <p className="mt-1 text-sm text-ink-muted">Best for project briefs, quotes and partnerships.</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Send an email <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/company/meroviq-technologies"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-4 p-7 rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm hover:border-brand/40 hover:shadow-soft transition-all duration-300"
            >
              <span className="h-12 w-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center">
                <Linkedin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Connect</div>
                <div className="mt-1 text-lg font-semibold text-ink">LinkedIn</div>
                <p className="mt-1 text-sm text-ink-muted">Follow our work and reach out to the team directly.</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Visit profile <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-hairline bg-white/70 backdrop-blur-sm px-6 py-4 text-sm text-ink-muted sm:flex-row sm:gap-8">
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand" /> Replies within one business day</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Your details stay private</span>
          </div>
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
