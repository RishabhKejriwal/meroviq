import { Guide } from "@/components/site/Guide";
import { sections } from "@/data/qa-tester-faq";
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
    subtitle="Manual, automation, certifications, Agile practices, tools, and interview prep for all levels."
    intro={<>
      <p>Welcome to the official FAQ hub for software testers at Meroviq Technologies. Whether you're beginning your QA journey or aiming to level up into leadership, certifications, or related tech roles, this page covers the most common questions asked by aspiring and experienced QA professionals.</p>
      <p className="mt-3">Here, you'll find guidance on skills, career growth, interview preparation, freelancing, certifications like ISTQB, Agile practices, tools like Jira, and much more. Use this page as a learning companion as you plan your QA career path.</p>
    </>}
    sections={sections}
  />;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
