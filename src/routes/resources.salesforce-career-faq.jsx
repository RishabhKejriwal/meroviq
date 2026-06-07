import { Guide } from "@/components/site/Guide";
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
    subtitle="From Trailhead to Architect — the path that actually works."
    sections={[
      { id: "intro", title: "Is Salesforce a good career?", body: <p>Yes — the ecosystem keeps expanding and roles span business, admin, and engineering.</p> },
      { id: "start", title: "How do I get started?", body: <p>Complete the Admin trail on Trailhead, sit the Admin exam, then ship a small AppExchange-style project.</p> },
      { id: "certs", title: "Which certifications matter?", body: <p>Admin → Platform App Builder → Platform Developer I. Specialize from there based on your role.</p> },
      { id: "roles", title: "Common roles", body: <p>Admin, Consultant, Developer, Architect, Marketing Cloud Specialist.</p> },
      { id: "salary", title: "Salary expectations", body: <p>Highly market-dependent; specialization (CPQ, Marketing Cloud, Architect) commands a premium.</p> }
    ]}
  />;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
