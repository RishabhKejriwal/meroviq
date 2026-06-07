import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ToolPage } from "@/components/site/ToolPage";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Digital Signature \u2014 Free Tool by Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Draw and download your digital signature as a transparent PNG. Free, private, in-browser.");
  }, []);
  return null;
}
function Page() {
  return <ToolPage
    eyebrow="Digital Signature"
    title={<>Sign anything, in <span className="text-gradient-brand">seconds</span></>}
    subtitle="Draw your signature in the browser, download as PNG. Nothing leaves your device."
    toolInterface={<Pad />}
    features={["Draw with mouse or touch", "Adjustable stroke", "Transparent PNG export", "Works offline in your browser"]}
    steps={[
      { title: "Draw", desc: "Sign in the box using your mouse or finger." },
      { title: "Preview", desc: "Adjust the stroke or clear and try again." },
      { title: "Download", desc: "Save as a transparent PNG and use anywhere." }
    ]}
    benefits={["100% private \u2014 no uploads", "No watermarks", "Free forever", "Works on any device"]}
  />;
}
function Pad() {
  const ref = useRef(null);
  const drawing = useRef(false);
  const [color] = useState("#004188");
  function pos(e) {
    const c = ref.current;
    const r = c.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (c.width / r.width), y: (e.clientY - r.top) * (c.height / r.height) };
  }
  function start(e) {
    drawing.current = true;
    const ctx = ref.current.getContext("2d");
    const { x, y } = pos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
  }
  function move(e) {
    if (!drawing.current) return;
    const ctx = ref.current.getContext("2d");
    const { x, y } = pos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  function end() {
    drawing.current = false;
  }
  function clear() {
    const c = ref.current;
    c.getContext("2d").clearRect(0, 0, c.width, c.height);
  }
  function download() {
    const url = ref.current.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.png";
    a.click();
  }
  return <div>
      <canvas
    ref={ref}
    width={900}
    height={300}
    onPointerDown={start}
    onPointerMove={move}
    onPointerUp={end}
    onPointerLeave={end}
    className="w-full aspect-[3/1] bg-surface rounded-xl border border-hairline touch-none cursor-crosshair"
    aria-label="Signature drawing area"
  />
      <div className="mt-4 flex gap-2">
        <Button onClick={download} className="gradient-brand text-white">Download PNG</Button>
        <Button onClick={clear} variant="outline">Clear</Button>
      </div>
    </div>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
