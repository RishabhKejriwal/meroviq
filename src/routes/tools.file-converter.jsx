import { useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { PDFDocument } from "pdf-lib";
import { Upload, FileCheck2, ShieldCheck, Zap, MousePointerClick, Smartphone, FileType2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";

import PdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";
pdfjsLib.GlobalWorkerOptions.workerPort = new PdfjsWorker();

function __PageMeta() {
  __useEffect(() => {
    document.title = "Free File Converter Online | PDF, DOC, PNG, Excel Converter";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Convert files online for free. Easily convert PDF to DOC, PNG to PDF, PDF to Excel, and more with our fast and secure file converter tool.");
  }, []);
  return null;
}

const MIME = { PNG: "image/png", JPG: "image/jpeg", WEBP: "image/webp" };

function download(href, name) {
  const a = document.createElement("a");
  a.href = href;
  a.download = name;
  a.click();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function Page() {
  return <>
    <PageHero eyebrow="Free File Converter" title={<>Convert files in <span className="text-gradient-brand">seconds</span></>} subtitle="Easily convert your files between multiple formats with our fast and reliable tool. No complex steps — just upload, convert, and download." />
    <section className="container-page pb-24 pt-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <Converter />

        <Section className="relative bg-dots">
          <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
          <EyebrowHeading eyebrow="Supported Conversions" title="Convert across popular formats" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {[
              { title: "PNG to PDF" },
              { title: "JPG to PDF" },
              { title: "Image format conversion", desc: "PNG \u00B7 JPG \u00B7 WebP" },
              { title: "PDF to Image", desc: "Export PDF pages as PNG or JPG" }
            ].map(c => <div key={c.title} className="rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-semibold text-ink">{c.title}</h4>
                <FileCheck2 className="h-5 w-5 text-brand shrink-0" />
              </div>
              {c.desc && <p className="mt-1 text-sm text-ink-muted">{c.desc}</p>}
            </div>)}
          </div>
        </Section>

        <Section className="relative bg-surface bg-gradient-radial">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
          <EyebrowHeading eyebrow="How it works" title="Four simple steps" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { title: "Upload your file", desc: "Drop an image or PDF, or click to browse." },
              { title: "Select format", desc: "Choose the output format you need." },
              { title: "Click Convert", desc: "Everything is processed right in your browser." },
              { title: "Download instantly", desc: "Save your converted file to your device." }
            ].map((s, i) => <li key={s.title} className="rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-6 shadow-soft">
              <div className="h-8 w-8 rounded-full gradient-brand text-white font-bold flex items-center justify-center">{i + 1}</div>
              <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
            </li>)}
          </ol>
        </Section>

        <Section className="relative bg-dots">
          <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
          <EyebrowHeading eyebrow="Why use it" title="Built for speed and privacy" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {[
              { icon: Zap, title: "Fast and secure", desc: "Conversions happen instantly, locally on your device." },
              { icon: MousePointerClick, title: "Simple and user-friendly", desc: "An intuitive flow anyone can use in seconds." },
              { icon: ShieldCheck, title: "No signup required", desc: "Start converting right away \u2014 no account needed." },
              { icon: FileType2, title: "Multiple formats", desc: "Images and PDFs supported, with more on the way." },
              { icon: Smartphone, title: "Works on all devices", desc: "Responsive design for desktop, tablet and mobile." },
              { icon: ShieldCheck, title: "Your privacy matters", desc: "Files are processed in your browser and never uploaded to any server." }
            ].map(b => <div key={b.title} className="rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
              <div className="h-10 w-10 rounded-lg gradient-brand text-white flex items-center justify-center"><b.icon className="h-5 w-5" /></div>
              <h4 className="mt-3 font-semibold text-ink">{b.title}</h4>
              <p className="mt-1 text-sm text-ink-muted">{b.desc}</p>
            </div>)}
          </div>
        </Section>

        <div className="rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-8 md:p-10 shadow-soft text-center">
          <div className="mx-auto h-12 w-12 rounded-xl gradient-brand text-white flex items-center justify-center"><ShieldCheck className="h-6 w-6" /></div>
          <h3 className="mt-4 text-xl font-semibold text-ink">Your privacy matters</h3>
          <p className="mt-2 text-sm text-ink-muted max-w-xl mx-auto">Your files are processed securely and entirely within your browser. Nothing is uploaded to or stored on any server, so your data always stays with you.</p>
          <Button onClick={() => { const el = document.getElementById("converter"); el?.scrollIntoView({ behavior: "smooth" }); }} className="mt-6 gradient-brand text-white">Start converting now</Button>
        </div>
      </div>
    </section>
  </>;
}

function Converter() {
  const [file, setFile] = useState(null);
  const [kind, setKind] = useState(null);
  const [preview, setPreview] = useState(null);
  const [target, setTarget] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const targetsFor = (k) => k === "image" ? ["PDF", "PNG", "JPG", "WEBP"] : k === "pdf" ? ["PNG", "JPG"] : [];
  const baseName = file ? file.name.replace(/\.[^.]+$/, "") : "converted";

  const reset = () => { setFile(null); setKind(null); setPreview(null); setTarget(""); setError(""); if (inputRef.current) inputRef.current.value = ""; };

  function onFile(f) {
    setError("");
    if (!f) return;
    const name = f.name.toLowerCase();
    const isImg = f.type.startsWith("image/") || /\.(png|jpe?g|webp)$/.test(name);
    const isPdf = f.type === "application/pdf" || name.endsWith(".pdf");
    if (!isImg && !isPdf) { setError("Unsupported file. Upload an image (PNG/JPG/WebP) or a PDF."); return; }
    const k = isPdf ? "pdf" : "image";
    setFile(f);
    setKind(k);
    setTarget(targetsFor(k)[0]);
    if (isImg) {
      const r = new FileReader();
      r.onload = () => setPreview(r.result);
      r.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  }

  async function imageToImage(dataUrl, fmt) {
    const img = await loadImage(dataUrl);
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const ctx = c.getContext("2d");
    if (fmt === "JPG") { ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, c.width, c.height); }
    ctx.drawImage(img, 0, 0);
    download(c.toDataURL(MIME[fmt], 0.92), `${baseName}.${fmt.toLowerCase()}`);
  }

  async function imageToPdf(dataUrl) {
    const img = await loadImage(dataUrl);
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext("2d").drawImage(img, 0, 0);
    const pngBytes = await fetch(c.toDataURL("image/png")).then(r => r.arrayBuffer());
    const doc = await PDFDocument.create();
    const embedded = await doc.embedPng(pngBytes);
    const page = doc.addPage([embedded.width, embedded.height]);
    page.drawImage(embedded, { x: 0, y: 0, width: embedded.width, height: embedded.height });
    const out = await doc.save();
    const url = URL.createObjectURL(new Blob([out], { type: "application/pdf" }));
    download(url, `${baseName}.pdf`);
    URL.revokeObjectURL(url);
  }

  async function pdfToImage(f, fmt) {
    const data = await f.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const scale = 2;
    const canvases = [];
    let totalH = 0, maxW = 0;
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale });
      const c = document.createElement("canvas");
      c.width = viewport.width;
      c.height = viewport.height;
      await page.render({ canvasContext: c.getContext("2d"), viewport }).promise;
      canvases.push(c);
      totalH += c.height;
      maxW = Math.max(maxW, c.width);
    }
    const out = document.createElement("canvas");
    out.width = maxW;
    out.height = totalH;
    const octx = out.getContext("2d");
    octx.fillStyle = "#ffffff";
    octx.fillRect(0, 0, out.width, out.height);
    let y = 0;
    for (const c of canvases) { octx.drawImage(c, 0, y); y += c.height; }
    download(out.toDataURL(MIME[fmt], 0.92), `${baseName}.${fmt.toLowerCase()}`);
  }

  async function convert() {
    if (!file || !target) return;
    setBusy(true);
    setError("");
    try {
      if (kind === "image" && target === "PDF") await imageToPdf(preview);
      else if (kind === "image") await imageToImage(preview, target);
      else if (kind === "pdf") await pdfToImage(file, target);
    } catch (e) {
      console.error(e);
      setError("Conversion failed. Please try another file.");
    }
    setBusy(false);
  }

  return <div id="converter" className="rounded-3xl border border-hairline bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-soft scroll-mt-24">
    {!file ? (
      <label
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); onFile(e.dataTransfer.files?.[0]); }}
        className={`block rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer transition-all ${dragOver ? "border-brand bg-brand-soft" : "border-hairline bg-surface hover:border-brand/40"}`}>
        <div className="mx-auto h-16 w-16 rounded-2xl gradient-brand text-white flex items-center justify-center"><Upload className="h-7 w-7" /></div>
        <div className="mt-4 text-lg font-semibold text-ink">Upload your file</div>
        <p className="mt-1 text-sm text-ink-muted">Drag and drop here, or click to browse.</p>
        <p className="mt-3 text-xs text-ink-muted">Supported: PNG · JPG · WebP · PDF</p>
        <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp,application/pdf,.png,.jpg,.jpeg,.webp,.pdf" className="sr-only" onChange={(e) => onFile(e.target.files?.[0])} />
      </label>
    ) : (
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-lg gradient-brand text-white flex items-center justify-center shrink-0"><FileType2 className="h-5 w-5" /></div>
            <div className="min-w-0">
              <div className="font-medium text-ink truncate">{file.name}</div>
              <div className="text-xs text-ink-muted uppercase">{kind}</div>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={reset}>Change file</Button>
        </div>

        {preview && <img src={preview} alt="preview" className="max-h-64 mx-auto rounded-lg border border-hairline" />}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <label className="text-sm text-ink-muted">Convert to</label>
          <select value={target} onChange={(e) => setTarget(e.target.value)} className="min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm">
            {targetsFor(kind).map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <Button onClick={convert} disabled={busy} className="sm:ml-auto gradient-brand text-white">
            {busy ? "Converting..." : "Convert & Download"}
          </Button>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )}
  </div>;
}

const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
