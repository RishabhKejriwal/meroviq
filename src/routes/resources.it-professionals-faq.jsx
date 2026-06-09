import { Guide } from "@/components/site/Guide";
import { sections } from "@/data/it-professionals-faq";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "IT Professionals FAQ Guide \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Common questions answered for aspiring and early-career IT professionals.");
  }, []);
  return null;
}
function Page() {
  return <Guide
    title={<>IT Professionals FAQ Guide</>}
    subtitle="Career paths, skills, certifications, interview preparation, soft skills, productivity tips, and more."
    intro={<>
      <p>Whether you're beginning your IT journey or looking to advance into leadership roles, this FAQ guide covers everything you need—career progression, skills, certifications, interview preparation, soft skills, productivity tips, and more.</p>
      <p className="mt-3">Explore practical, real-world answers designed to help IT professionals grow faster and stay relevant.</p>
    </>}
    sections={sections}
  />;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
