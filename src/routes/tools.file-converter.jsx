import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToolPage } from "@/components/site/ToolPage";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Image Converter \u2014 Free Tool by Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Convert images between PNG, JPG and WebP in your browser. Free and private.");
  }, []);
  return null;
}
function Page() {
  return <ToolPage
    eyebrow="File Converter"
    title={<>Convert images <span className="text-gradient-brand">instantly</span></>}
    subtitle="Drop an image, pick a format, download. No servers involved."
    toolInterface={<Converter />}
    features={["PNG \xB7 JPG \xB7 WebP", "In-browser processing", "Preserve quality", "Drag and drop"]}
    steps={[
      { title: "Upload", desc: "Drop a PNG, JPG or WebP file." },
      { title: "Choose format", desc: "Select the output format." },
      { title: "Download", desc: "Save the converted file." }
    ]}
    benefits={["Private \u2014 no uploads", "Free forever", "Works offline", "Bulk friendly"]}
  />;
}
function Converter() {
  const [src, setSrc] = useState(null);
  const [format, setFormat] = useState("image/png");
  function onFile(f) {
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setSrc(r.result);
    r.readAsDataURL(f);
  }
  function convert() {
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.width;
      c.height = img.height;
      c.getContext("2d").drawImage(img, 0, 0);
      const url = c.toDataURL(format, 0.92);
      const ext = format.split("/")[1];
      const a = document.createElement("a");
      a.href = url;
      a.download = `converted.${ext}`;
      a.click();
    };
    img.src = src;
  }
  return <div>
      <label className="block rounded-xl border-2 border-dashed border-hairline bg-surface p-10 text-center cursor-pointer hover:border-brand/40 transition">
        <Upload className="mx-auto h-8 w-8 text-brand" />
        <div className="mt-2 text-ink font-medium">Click to upload or drop a file</div>
        <div className="text-xs text-ink-muted">PNG · JPG · WebP</div>
        <input type="file" accept="image/*" className="sr-only" onChange={(e) => onFile(e.target.files?.[0])} />
      </label>
      {src && <img src={src} alt="preview" className="mt-4 max-h-64 mx-auto rounded-lg border border-hairline" />}
      <div className="mt-4 flex flex-wrap gap-3 items-center">
        <select value={format} onChange={(e) => setFormat(e.target.value)} className="rounded-lg border border-hairline bg-surface px-3 py-2">
          <option value="image/png">PNG</option>
          <option value="image/jpeg">JPG</option>
          <option value="image/webp">WebP</option>
        </select>
        <Button onClick={convert} disabled={!src} className="gradient-brand text-white">Convert & Download</Button>
      </div>
    </div>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
