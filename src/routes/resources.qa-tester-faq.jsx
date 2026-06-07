import { Guide } from "@/components/site/Guide";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "QA Tester FAQ Guide \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Everything you wanted to know about a QA career \u2014 tools, skills and growth.");
  }, []);
  return null;
}
function Page() {
  return <Guide
    title={<>QA Tester FAQ Guide</>}
    subtitle="Manual, automation and the mindset that makes great testers."
    sections={[
      { id: "what", title: "What does a QA tester do?", body: <p>Ensures software does what it should, doesn't do what it shouldn't, and feels right to users.</p> },
      { id: "skills", title: "Core skills", body: <p>Curiosity, structured thinking, basic SQL, an automation framework and clear bug reports.</p> },
      { id: "tools", title: "Common tools", body: <p>Postman, Playwright/Cypress, JIRA, TestRail, Selenium and AWS for environment management.</p> },
      { id: "auto", title: "When to automate", body: <p>Stable flows, repeated regressions and data-driven scenarios. Not exploratory testing.</p> },
      { id: "career", title: "Career growth", body: <p>QA Lead → SDET → QA Architect → Engineering Manager. Each step adds breadth and responsibility.</p> }
    ]}
  />;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
