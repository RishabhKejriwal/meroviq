import { Guide } from "@/components/site/Guide";
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
    subtitle="Career paths, skills, and the questions every IT fresher should ask."
    sections={[
      { id: "start", title: "Where should I start?", body: <p>Pick one stack and ship two real projects. Depth beats breadth in your first 12 months.</p> },
      { id: "skills", title: "Skills that compound", body: <p>Version control, debugging, written communication and a working understanding of the cloud. They pay off forever.</p> },
      { id: "portfolio", title: "Building a portfolio", body: <p>Three projects with a real user, even if that user is you. Document trade-offs in a short README.</p> },
      { id: "interviews", title: "Interview prep", body: <p>Practice explaining decisions out loud. Most interviews assess how you think, not what you've memorized.</p> },
      { id: "growth", title: "Long-term growth", body: <p>Specialize after two years, generalize after seven. Stay close to the customer at every level.</p> }
    ]}
  />;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
