import { Linkedin, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
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
        <div className="grid lg:grid-cols-2 gap-10 relative">
          <div className="space-y-4">
            <a href="mailto:hello@meroviq.in" className="flex items-center gap-3 p-5 rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm hover:border-brand/30 hover:shadow-soft transition-all duration-300">
              <span className="h-11 w-11 rounded-lg bg-brand-soft text-brand flex items-center justify-center"><Mail className="h-5 w-5" /></span>
              <div><div className="text-xs text-ink-muted">Email</div><div className="font-semibold text-ink">hello@meroviq.in</div></div>
            </a>
            <a href="https://www.linkedin.com/company/meroviq-technologies" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-5 rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm hover:border-brand/30 hover:shadow-soft transition-all duration-300">
              <span className="h-11 w-11 rounded-lg bg-brand-soft text-brand flex items-center justify-center"><Linkedin className="h-5 w-5" /></span>
              <div><div className="text-xs text-ink-muted">Social</div><div className="font-semibold text-ink">LinkedIn</div></div>
            </a>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
