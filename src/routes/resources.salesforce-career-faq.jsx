import { Guide } from "@/components/site/Guide";
import { sections } from "@/data/salesforce-career-faq";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Salesforce Career FAQ Guide \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Roadmap, certifications and tips for a successful Salesforce career.");
  }, []);
  return null;
}
function Page() {
  return <Guide
    title={<>Salesforce Career FAQ Guide</>}
    subtitle="Skills, certifications, job preparation, Trailhead, salaries, future roadmap, and career growth — in one place."
    intro={<>
      <p>Salesforce continues to be one of the fastest-growing cloud ecosystems in the world, creating millions of job opportunities across Admin, Developer, Business Analyst, QA, and Architect roles. Whether you're a fresher or an experienced professional planning a career transition, Meroviq Technologies brings you the most comprehensive and up-to-date Salesforce Career FAQ resource.</p>
      <p className="mt-3">This guide answers everything — skills, certifications, job preparation, Trailhead, salaries, future roadmap, and career growth — in one place.</p>
    </>}
    sections={sections}
  />;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
