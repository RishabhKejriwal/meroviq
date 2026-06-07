import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
function ToolPage({ eyebrow, title, subtitle, toolInterface, features, steps, benefits }) {
  return <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <Button asChild size="lg" className="gradient-brand text-white">
          <a href="#tool">Try it now <ArrowRight /></a>
        </Button>
      </PageHero>

      <Section id="tool">
        <div className="max-w-3xl mx-auto rounded-3xl border border-hairline bg-white p-6 md:p-10 shadow-soft">
          {toolInterface}
        </div>
      </Section>

      <Section className="bg-surface">
        <EyebrowHeading eyebrow="Features" title="What's inside" />
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {features.map((f) => <div key={f} className="flex items-start gap-3 rounded-xl border border-hairline bg-white p-4">
              <CheckCircle2 className="h-5 w-5 text-accent2 mt-0.5 shrink-0" />
              <span className="text-ink">{f}</span>
            </div>)}
        </div>
      </Section>

      <Section>
        <EyebrowHeading eyebrow="How it works" title="Three simple steps" />
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => <li key={s.title} className="rounded-2xl border border-hairline bg-white p-6">
              <div className="h-8 w-8 rounded-full gradient-brand text-white font-bold flex items-center justify-center">{i + 1}</div>
              <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
            </li>)}
        </ol>
      </Section>

      <Section className="bg-surface">
        <EyebrowHeading eyebrow="Benefits" title="Why teams love it" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {benefits.map((b) => <div key={b} className="rounded-xl bg-white border border-hairline p-5 text-ink">{b}</div>)}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gradient-brand text-white">
            <Link to="/contact">Talk to our team <ArrowRight /></Link>
          </Button>
        </div>
      </Section>
    </>;
}
export {
  ToolPage
};
