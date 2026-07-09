import { useRef, useState, useEffect, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import SignaturePad from "signature_pad";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Section, EyebrowHeading } from "@/components/site/Section";
import { useEffect as __useEffect } from "react";

import PdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";
pdfjsLib.GlobalWorkerOptions.workerPort = new PdfjsWorker();

function __PageMeta() {
  __useEffect(() => {
    document.title = "Free Online Digital Signature \u2014 Meroviq";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "Sign PDF documents online with free electronic signatures. Draw, type, add text, dates and checkboxes. Nothing leaves your browser.");
  }, []);
  return null;
}

function formatDate(date, fmt) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const names = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  switch (fmt) {
    case "DD/MM/YYYY": return `${day}/${month}/${year}`;
    case "YYYY-MM-DD": return `${year}-${month}-${day}`;
    case "MMMM D, YYYY": return `${names[d.getMonth()]} ${d.getDate()}, ${year}`;
    default: return `${month}/${day}/${year}`;
  }
}

const measureCtx = document.createElement("canvas").getContext("2d");
function measureTextWidth(text, fontSize, fontFamily) {
  measureCtx.font = `${fontSize}px ${fontFamily}`;
  return Math.ceil(measureCtx.measureText(text).width);
}

function Page() {
  const [pdfBytes, setPdfBytes] = useState(null);
  return <>
    <PageHero eyebrow="Free Tool" title={<>Sign PDF documents <span className="text-gradient-brand">online</span></>} subtitle="Upload a PDF, add signatures, text, dates and checkboxes, then download your signed document. Nothing leaves your browser." />
    <section className="container-page pb-24 pt-8">
      <div className="max-w-6xl mx-auto">
        {!pdfBytes ? <Landing onUpload={setPdfBytes} /> : <Editor pdfBytes={pdfBytes} onReset={() => setPdfBytes(null)} />}
      </div>
    </section>
  </>;
}

function Landing({ onUpload }) {
  const fileRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState("");

  const processFile = async (file) => {
    setError("");
    const isPdf = file && (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf"));
    if (!isPdf) { setError("Please select a valid PDF file."); return; }
    try {
      const buf = await file.arrayBuffer();
      onUpload(buf);
    } catch { setError("Could not read PDF. Please try another file."); }
  };

  return <div className="space-y-10">
    <div className="max-w-2xl mx-auto">
      <div onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={(e) => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]); }}
        className={`rounded-3xl border-2 border-dashed p-10 text-center transition-all ${dragOver ? "border-brand bg-brand-soft" : "border-hairline bg-white/95 backdrop-blur-sm"} shadow-soft`}>
        <div className="mx-auto h-16 w-16 rounded-2xl gradient-brand text-white flex items-center justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        </div>
        <h3 className="text-xl font-semibold text-ink">Upload Your PDF Document</h3>
        <p className="mt-2 text-ink-muted text-sm">Drag and drop your file here, or click to browse. Only PDF files are supported.</p>
        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        <input ref={fileRef} type="file" accept=".pdf,application/pdf" onChange={(e) => { const f = e.target.files?.[0]; if (f) processFile(f); }} className="hidden" />
        <Button onClick={() => fileRef.current?.click()} className="mt-6 gradient-brand text-white">Choose PDF File</Button>
        <p className="mt-3 text-xs text-ink-muted">Maximum file size: 10MB</p>
      </div>
    </div>

    <Section className="relative bg-dots">
      <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
      <EyebrowHeading eyebrow="How it works" title="Detailed step-by-step guide" />
      <ol className="grid md:grid-cols-3 gap-6 relative">
        {[
          {
            title: "Upload Your PDF Document",
            desc: "Click \u201CChoose PDF File\u201D or drag and drop your document onto the upload area.",
            points: ["PDF format only (.pdf)", "Maximum size: 10MB", "Remove password protection first", "Processed entirely in your browser"]
          },
          {
            title: "Add Your Signature & Elements",
            desc: "Use the signing interface to place signatures, text, dates, and checkboxes.",
            points: ["Draw or type your signature", "Insert text, dates and checkboxes", "Click to place, drag to reposition", "Navigate between multiple pages"]
          },
          {
            title: "Download Your Signed Document",
            desc: "Apply all fields and download the completed PDF instantly.",
            points: ["One-click \u201CApply Fields & Download\u201D", "Generated locally on your device", "Nothing is uploaded to any server", "Verify, save, share or print"]
          }
        ].map((s, i) => <li key={s.title} className="rounded-2xl border border-hairline bg-white/95 backdrop-blur-sm p-6 shadow-soft">
          <div className="h-8 w-8 rounded-full gradient-brand text-white font-bold flex items-center justify-center">{i + 1}</div>
          <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
          <p className="mt-1 text-sm text-ink-muted">{s.desc}</p>
          <ul className="mt-3 space-y-1.5">
            {s.points.map(p => <li key={p} className="flex items-start gap-2 text-sm text-ink-muted">
              <svg className="mt-0.5 shrink-0 text-brand" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span>{p}</span>
            </li>)}
          </ul>
        </li>)}
      </ol>
    </Section>

    <Section className="relative bg-surface bg-gradient-radial">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
      <EyebrowHeading eyebrow="Features" title="What you can add" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {[
          { title: "Draw Signature", desc: "Use your mouse or touchscreen to draw a natural signature." },
          { title: "Type Signature", desc: "Type your name and choose from multiple professional fonts." },
          { title: "Add Text", desc: "Insert custom text fields anywhere on the document." },
          { title: "Add Date", desc: "Insert current or custom dates in various formats." },
          { title: "Add Checkbox", desc: "Insert checkboxes for forms and agreements." },
          { title: "Drag to Position", desc: "Click to place, then drag fields to position precisely." }
        ].map(f => <div key={f.title} className="rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
          <h4 className="font-semibold text-ink">{f.title}</h4>
          <p className="mt-1 text-sm text-ink-muted">{f.desc}</p>
        </div>)}
      </div>
    </Section>

    <Section className="relative bg-dots">
      <div aria-hidden className="absolute inset-0 bg-gradient-radial opacity-50" />
      <EyebrowHeading eyebrow="Common Use Cases" title="Perfect for various document types" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
        {[
          { title: "Business Contracts", desc: "Employment agreements, vendor contracts, service agreements, NDAs, partnership documents." },
          { title: "Real Estate", desc: "Rental agreements, lease documents, property management forms, tenant applications." },
          { title: "Financial Documents", desc: "Invoices, purchase orders, payment authorizations, loan applications, banking forms." },
          { title: "Legal Papers", desc: "Consent forms, declarations, acknowledgments, legal notices, settlement agreements." },
          { title: "HR Documents", desc: "Offer letters, employment contracts, policy acknowledgments, performance reviews." },
          { title: "Application Forms", desc: "Registration forms, enrollment applications, subscription agreements, consent forms." }
        ].map(c => <div key={c.title} className="rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
          <h4 className="font-semibold text-ink">{c.title}</h4>
          <p className="mt-1 text-sm text-ink-muted">{c.desc}</p>
        </div>)}
      </div>
    </Section>

    <Section className="relative bg-surface bg-gradient-radial">
      <div aria-hidden className="absolute inset-0 bg-dots opacity-30" />
      <EyebrowHeading eyebrow="FAQ" title="Frequently asked questions" />
      <div className="max-w-3xl mx-auto space-y-3 relative">
        {[
          { q: "Is my document secure?", a: "Yes. Your PDF never leaves your device \u2014 everything is processed entirely in your browser. No files are uploaded to or stored on any server, so your data stays completely private." },
          { q: "What types of signatures can I add?", a: "You can draw a signature with your mouse or touchscreen, type your name and choose from multiple professional fonts, and add text fields, dates, and checkboxes anywhere on the document." },
          { q: "Is there a file size limit?", a: "We recommend keeping documents under 10MB for the best performance. For larger files, consider compressing them or splitting them into smaller documents before signing." },
          { q: "Are digital signatures legally valid in India?", a: "Electronic signatures are recognized under the Indian IT Act 2000 and the Information Technology (Amendment) Act 2008, which provide a legal framework for signing documents electronically in India." },
          { q: "What types of documents can I sign?", a: "Any standard PDF document \u2014 contracts, agreements, forms, invoices, NDAs, employment documents, and more. The tool maintains your document's integrity throughout." }
        ].map(item => <details key={item.q} className="group rounded-xl border border-hairline bg-white/95 backdrop-blur-sm p-5 shadow-soft">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-ink list-none">
            <span>{item.q}</span>
            <svg className="shrink-0 text-ink-muted transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <p className="mt-3 text-sm text-ink-muted">{item.a}</p>
        </details>)}
      </div>
    </Section>
  </div>;
}

function Editor({ pdfBytes, onReset }) {
  const [pdfProxy, setPdfProxy] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const scale = 1.5;
  const [fieldType, setFieldType] = useState("signature");
  const [sigMode, setSigMode] = useState("draw");
  const [fields, setFields] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [dragEnabled, setDragEnabled] = useState(true);
  const [draggingId, setDraggingId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizingId, setResizingId] = useState(null);
  const [resizeStart, setResizeStart] = useState(null);
  const [overlaySize, setOverlaySize] = useState({ w: 0, h: 0 });
  const [viewportDim, setViewportDim] = useState({ w: 0, h: 0 });

  const [savedSig, setSavedSig] = useState(null);
  const [savedText, setSavedText] = useState("");
  const [savedTextSize, setSavedTextSize] = useState(16);
  const [savedTextFont, setSavedTextFont] = useState("Arial");
  const [savedDate, setSavedDate] = useState("");
  const [savedDateFmt, setSavedDateFmt] = useState("MM/DD/YYYY");
  const [savedCbSize, setSavedCbSize] = useState("medium");

  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const suppressClickRef = useRef(false);
  const sigCanvasRef = useRef(null);
  const sigPadRef = useRef(null);
  const typedInputRef = useRef(null);
  const textInputRef = useRef(null);
  const dateInputRef = useRef(null);

  useEffect(() => {
    if (!pdfBytes) return;
    let cancelled = false;
    (async () => {
      try {
        const pdf = await pdfjsLib.getDocument({ data: pdfBytes.slice(0) }).promise;
        if (cancelled) return;
        setPdfProxy(pdf);
        setNumPages(pdf.numPages);
        setPageNum(1);
        setFields([]);
      } catch (err) {
        console.error("PDF load error:", err);
        alert("Could not load PDF: " + (err?.message || String(err)));
      }
    })();
    return () => { cancelled = true; };
  }, [pdfBytes]);

  const renderPage = useCallback(async () => {
    if (!pdfProxy || !canvasRef.current) return;
    try {
      const page = await pdfProxy.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const ctx = canvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport }).promise;
      setOverlaySize({ w: viewport.width, h: viewport.height });
      setViewportDim({ w: viewport.width, h: viewport.height });
    } catch (err) {
      console.error("Render error:", err);
    }
  }, [pdfProxy, pageNum, scale]);

  useEffect(() => { renderPage(); }, [renderPage]);

  useEffect(() => {
    const canvas = sigCanvasRef.current;
    if (fieldType !== "signature" || sigMode !== "draw" || !canvas) {
      sigPadRef.current = null;
      return;
    }
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    sigPadRef.current = new SignaturePad(canvas, { backgroundColor: "rgba(0,0,0,0)" });
    return () => { sigPadRef.current = null; };
  }, [fieldType, sigMode]);

  useEffect(() => {
    if (!draggingId) return;
    const onMove = (e) => {
      const overlay = overlayRef.current;
      if (!overlay) return;
      const r = overlay.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = Math.max(0, Math.min(clientX - r.left - dragOffset.x, overlay.offsetWidth - 10));
      const y = Math.max(0, Math.min(clientY - r.top - dragOffset.y, overlay.offsetHeight - 10));
      setFields(prev => prev.map(f => f.id === draggingId ? { ...f, x, y } : f));
    };
    const onUp = () => {
      setDraggingId(null);
      // the release can land on the overlay and fire a click that would add a new field
      suppressClickRef.current = true;
      setTimeout(() => { suppressClickRef.current = false; }, 0);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [draggingId, dragOffset]);

  const startDrag = (e, id) => {
    if (!dragEnabled) return;
    e.preventDefault();
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    const cy = e.touches ? e.touches[0].clientY : e.clientY;
    setDragOffset({ x: cx - rect.left, y: cy - rect.top });
    setDraggingId(id);
  };

  useEffect(() => {
    if (!resizingId || !resizeStart) return;
    const onMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const newWidth = Math.max(40, resizeStart.width + (clientX - resizeStart.x));
      const scale = newWidth / resizeStart.width;
      setFields(prev => prev.map(f => {
        if (f.id !== resizingId) return f;
        if (f.type === "signature") {
          return { ...f, width: newWidth, height: Math.max(16, Math.round(resizeStart.height * scale)) };
        }
        if (f.type === "text") {
          const fontSize = Math.min(72, Math.max(8, Math.round(resizeStart.fontSize * scale)));
          return { ...f, fontSize, width: measureTextWidth(f.text, fontSize, f.fontFamily) + 8, height: fontSize + 10 };
        }
        return f;
      }));
    };
    const onUp = () => {
      setResizingId(null);
      // when growing, the release lands outside the field and fires a click on the overlay
      suppressClickRef.current = true;
      setTimeout(() => { suppressClickRef.current = false; }, 0);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [resizingId, resizeStart]);

  const startResize = (e, f) => {
    e.preventDefault();
    e.stopPropagation();
    const cx = e.touches ? e.touches[0].clientX : e.clientX;
    setResizeStart({ x: cx, width: f.width, height: f.height, fontSize: f.fontSize });
    setResizingId(f.id);
  };

  const addField = (x, y) => {
    const id = `${Date.now()}-${Math.random()}`;
    const ow = overlayRef.current?.clientWidth || viewportDim.w;
    const oh = overlayRef.current?.clientHeight || viewportDim.h;
    let f = { id, type: fieldType, page: pageNum, x, y, viewportWidth: ow, viewportHeight: oh };
    if (fieldType === "signature") {
      if (!savedSig) { alert("Please save a signature first"); return; }
      f = { ...f, data: savedSig, width: 200, height: 80 };
    } else if (fieldType === "text") {
      if (!savedText) { alert("Please save text first"); return; }
      f = { ...f, text: savedText, fontSize: savedTextSize, fontFamily: savedTextFont, width: measureTextWidth(savedText, savedTextSize, savedTextFont) + 8, height: savedTextSize + 10 };
    } else if (fieldType === "date") {
      if (!savedDate) { alert("Please save a date first"); return; }
      f = { ...f, date: savedDate, fontSize: 14, fontFamily: "Arial", width: 130, height: 24 };
    } else if (fieldType === "checkbox") {
      const sizes = { small: 15, medium: 20, large: 25 };
      const s = sizes[savedCbSize] || 20;
      f = { ...f, checkboxSize: savedCbSize, width: s + 4, height: s + 4 };
    }
    setFields(prev => [...prev, f]);
  };

  const onOverlayClick = (e) => {
    if (suppressClickRef.current) { suppressClickRef.current = false; return; }
    if (e.target.closest("[data-field]")) return;
    const r = overlayRef.current.getBoundingClientRect();
    addField(e.clientX - r.left, e.clientY - r.top);
  };

  const removeField = (id) => setFields(prev => prev.filter(f => f.id !== id));

  const applyAndDownload = async () => {
    if (!pdfBytes || fields.length === 0) return;
    setProcessing(true);
    try {
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const pages = pdfDoc.getPages();
      const sigImage = savedSig ? await pdfDoc.embedPng(Uint8Array.from(atob(savedSig.replace(/^data:image\/\w+;base64,/, "")), c => c.charCodeAt(0))) : null;

      const fontMap = {
        "Arial": StandardFonts.Helvetica,
        "Verdana": StandardFonts.Helvetica,
        "Times New Roman": StandardFonts.TimesRoman,
        "Georgia": StandardFonts.TimesRoman,
        "Courier New": StandardFonts.Courier
      };
      const fontCache = {};
      const getFont = async (family) => {
        const std = fontMap[family] || StandardFonts.Helvetica;
        if (!fontCache[std]) fontCache[std] = await pdfDoc.embedFont(std);
        return fontCache[std];
      };

      const byPage = {};
      fields.forEach(f => { const i = f.page - 1; (byPage[i] = byPage[i] || []).push(f); });

      for (const [idx, list] of Object.entries(byPage)) {
        const page = pages[parseInt(idx)];
        const { width: pw, height: ph } = page.getSize();
        for (const pos of list) {
          const rx = pw / pos.viewportWidth;
          const ry = ph / pos.viewportHeight;
          const x = pos.x * rx;
          const y = ph - (pos.y * ry);
          if (pos.type === "signature" && sigImage) {
            const w = pos.width * rx; const h = pos.height * ry;
            page.drawImage(sigImage, { x, y: y - h, width: w, height: h });
          } else if (pos.type === "text" && pos.text) {
            const font = await getFont(pos.fontFamily);
            const size = (pos.fontSize || 16) * ry;
            page.drawText(pos.text, { x: x + 2 * rx, y: y - size, size, font, color: rgb(0, 0, 0) });
          } else if (pos.type === "date" && pos.date) {
            const font = await getFont(pos.fontFamily);
            const size = (pos.fontSize || 16) * ry;
            page.drawText(pos.date, { x: x + 2 * rx, y: y - size, size, font, color: rgb(0, 0, 0) });
          } else if (pos.type === "checkbox") {
            const sBox = (pos.width || 24) * rx;
            page.drawLine({ start: { x: x + sBox * 0.18, y: y - sBox * 0.5 }, end: { x: x + sBox * 0.38, y: y - sBox + sBox * 0.15 }, color: rgb(0, 0, 0), thickness: 2 });
            page.drawLine({ start: { x: x + sBox * 0.38, y: y - sBox + sBox * 0.15 }, end: { x: x + sBox * 0.85, y: y - sBox * 0.15 }, color: rgb(0, 0, 0), thickness: 2 });
          }
        }
      }
      const out = await pdfDoc.save();
      const blob = new Blob([out], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "signed-document.pdf"; a.click();
      URL.revokeObjectURL(url);
    } catch (e) { console.error(e); alert("Error signing document."); }
    setProcessing(false);
  };

  const saveTypedSig = () => {
    const text = typedInputRef.current?.value.trim();
    if (!text) return alert("Please type your name first");
    const c = document.createElement("canvas"); c.width = 400; c.height = 100;
    const ctx = c.getContext("2d");
    const font = (document.getElementById("sig-font")?.value) || "Arial";
    ctx.font = `italic 40px ${font}`; ctx.fillStyle = "blue";
    ctx.fillText(text, 10, 60);
    setSavedSig(c.toDataURL());
  };

  const pageFields = fields.filter(f => f.page === pageNum);

  return <div className="grid lg:grid-cols-3 gap-6">
    {/* Viewer */}
    <div className="lg:col-span-2 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-ink">Document Viewer</h3>
        <div className="text-sm text-ink-muted">Page <span className="font-semibold text-ink">{pageNum}</span> / {numPages}</div>
      </div>
      <div className="relative overflow-auto border border-hairline rounded-xl bg-surface" style={{ maxHeight: "70vh" }}>
        <div style={{ position: "relative", width: "100%", maxWidth: overlaySize.w || "100%", margin: "0 auto" }}>
          <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "auto" }} />
          <div ref={overlayRef} onClick={onOverlayClick} className="absolute inset-0">
            {pageFields.map(f => (
              <div key={f.id} data-field data-field-id={f.id}
                onMouseDown={(e) => startDrag(e, f.id)} onTouchStart={(e) => startDrag(e, f.id)}
                className="absolute cursor-move select-none group"
                style={{ left: f.x, top: f.y, zIndex: draggingId === f.id ? 1000 : 100 }}>
                <div className="border-2 border-dashed border-brand bg-brand/10 rounded overflow-hidden flex items-start" style={{ width: f.width, height: f.height }}>
                  {f.type === "signature" && f.data && <img src={f.data} alt="sig" className="w-full h-full object-contain" />}
                  {f.type === "text" && <span className="text-ink leading-none whitespace-nowrap" style={{ fontSize: f.fontSize, fontFamily: f.fontFamily, paddingLeft: 2 }}>{f.text}</span>}
                  {f.type === "date" && <span className="text-ink leading-none whitespace-nowrap" style={{ fontSize: f.fontSize, fontFamily: f.fontFamily, paddingLeft: 2 }}>{f.date}</span>}
                  {f.type === "checkbox" && (
                    <div className="flex items-center justify-center w-full h-full">
                      <input type="checkbox" checked readOnly className="accent-brand" style={{ width: f.width - 4, height: f.height - 4 }} />
                    </div>
                  )}
                </div>
                <button onClick={(e) => { e.stopPropagation(); removeField(f.id); }}
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs hidden group-hover:flex items-center justify-center">&times;</button>
                {(f.type === "signature" || f.type === "text") && (
                  <div
                    onMouseDown={(e) => startResize(e, f)}
                    onTouchStart={(e) => startResize(e, f)}
                    className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-brand border-2 border-white shadow cursor-nwse-resize hidden group-hover:block"
                    title="Drag to resize"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="outline" disabled={pageNum <= 1} onClick={() => setPageNum(p => p - 1)}>Previous Page</Button>
        <Button variant="outline" disabled={pageNum >= numPages} onClick={() => setPageNum(p => p + 1)}>Next Page</Button>
      </div>
      <Button variant="outline" onClick={onReset} className="text-ink-muted">Upload New Document</Button>
    </div>

    {/* Tools */}
    <div className="space-y-4">
      {/* Field type */}
      <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft">
        <h4 className="font-semibold text-ink mb-3">Form Field Tools</h4>
        <label className="text-xs font-medium text-ink-muted uppercase tracking-wider">Choose Field Type</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            { k: "signature", l: "Signature" },
            { k: "text", l: "Text" },
            { k: "date", l: "Date" },
            { k: "checkbox", l: "Checkbox" }
          ].map(t => (
            <button key={t.k} onClick={() => setFieldType(t.k)}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${fieldType === t.k ? "bg-brand text-white border-brand" : "bg-white text-ink-muted border-hairline hover:border-brand"}`}>
              {t.l}
            </button>
          ))}
        </div>
      </div>

      {/* Signature panel */}
      {fieldType === "signature" && (
        <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft space-y-3">
          <h4 className="font-semibold text-ink">Create Your Signature</h4>
          <div className="flex gap-2 mb-2 p-1 bg-surface rounded-lg">
            <button onClick={() => setSigMode("draw")} className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${sigMode === "draw" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"}`}>Draw</button>
            <button onClick={() => setSigMode("type")} className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${sigMode === "type" ? "bg-brand text-white" : "text-ink-muted hover:text-ink"}`}>Type</button>
          </div>

          {sigMode === "draw" ? (
            <>
              <div className="border border-hairline rounded-lg bg-surface">
                <canvas ref={sigCanvasRef} className="w-full block" style={{ height: 150, touchAction: "none" }} />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => sigPadRef.current?.clear()}>Clear</Button>
                <Button size="sm" className="flex-1 gradient-brand text-white" onClick={() => { if (sigPadRef.current && !sigPadRef.current.isEmpty()) setSavedSig(sigPadRef.current.toDataURL()); else alert("Draw a signature first"); }}>Save Signature</Button>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <input ref={typedInputRef} placeholder="Type your name" className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
              <select id="sig-font" className="w-full min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm">
                {["Arial","Times New Roman","Courier New","Georgia","Verdana"].map(f => <option key={f} value={f}>{f}</option>)}
              </select>
              <Button size="sm" className="w-full gradient-brand text-white" onClick={saveTypedSig}>Save Typed Signature</Button>
            </div>
          )}
          {savedSig && <div className="border border-hairline rounded-lg p-2 bg-surface"><img src={savedSig} alt="saved signature" className="max-h-20 mx-auto" /></div>}
        </div>
      )}

      {/* Text panel */}
      {fieldType === "text" && (
        <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft space-y-3">
          <h4 className="font-semibold text-ink">Enter Text</h4>
          <input ref={textInputRef} placeholder="Enter your text here" className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <div className="flex gap-2">
            <select onChange={e => setSavedTextSize(parseInt(e.target.value))} defaultValue="16" className="flex-1 min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm">
              <option value="12">Small</option>
              <option value="16">Medium</option>
              <option value="24">Large</option>
            </select>
            <select onChange={e => setSavedTextFont(e.target.value)} defaultValue="Arial" className="flex-1 min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm">
              {["Arial","Times New Roman","Courier New","Georgia","Verdana"].map(ft => <option key={ft} value={ft}>{ft}</option>)}
            </select>
          </div>
          <Button size="sm" className="w-full gradient-brand text-white" onClick={() => { const v = textInputRef.current?.value.trim(); if (v) setSavedText(v); else alert("Enter text first"); }}>Save Text</Button>
          {savedText && <div className="border rounded-lg p-2 bg-surface text-center text-ink" style={{ fontSize: savedTextSize, fontFamily: savedTextFont }}>{savedText}</div>}
        </div>
      )}

      {/* Date panel */}
      {fieldType === "date" && (
        <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft space-y-3">
          <h4 className="font-semibold text-ink">Select Date</h4>
          <input ref={dateInputRef} type="date" defaultValue={new Date().toISOString().split("T")[0]} className="w-full rounded-lg border border-hairline bg-surface px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <div className="flex gap-2">
            <select onChange={e => setSavedDateFmt(e.target.value)} defaultValue="MM/DD/YYYY" className="flex-1 min-w-0 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm">
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              <option value="MMMM D, YYYY">Month D, YYYY</option>
            </select>
            <Button size="sm" className="flex-1 gradient-brand text-white" onClick={() => { const v = dateInputRef.current?.value; if (v) setSavedDate(formatDate(v, savedDateFmt)); else alert("Select a date"); }}>Save Date</Button>
          </div>
          {savedDate && <div className="border rounded-lg p-2 bg-surface text-center text-sm text-ink">{savedDate}</div>}
        </div>
      )}

      {/* Checkbox panel */}
      {fieldType === "checkbox" && (
        <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft space-y-3">
          <h4 className="font-semibold text-ink">Checkbox Field</h4>
          <div className="flex items-center justify-between border border-hairline rounded-lg p-3 bg-surface">
            <div className="flex items-center gap-2">
              <input type="checkbox" checked readOnly className="accent-brand" style={{ width: { small: 15, medium: 20, large: 25 }[savedCbSize], height: { small: 15, medium: 20, large: 25 }[savedCbSize] }} />
              <span className="text-sm text-ink-muted">Preview</span>
            </div>
            <select value={savedCbSize} onChange={e => setSavedCbSize(e.target.value)} className="min-w-0 rounded-lg border border-hairline bg-surface px-2 py-1.5 text-sm">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <p className="text-xs text-ink-muted">Click anywhere on the document to place the checkbox.</p>
        </div>
      )}

      {/* Instructions */}
      <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft">
        <h4 className="font-semibold text-ink mb-2">Instructions</h4>
        <ol className="text-sm text-ink-muted list-decimal pl-4 space-y-1">
          <li>Choose field type (Signature, Text, Date, or Checkbox)</li>
          <li>Configure your field and click Save</li>
          <li>Click anywhere on the document to place your field</li>
          <li>Drag the field to position it exactly where you want</li>
          <li>Drag the corner handle to resize signatures and text</li>
          <li>Add multiple fields if needed</li>
        </ol>
        <label className="flex items-center gap-2 mt-3 text-sm text-ink">
          <input type="checkbox" checked={dragEnabled} onChange={e => setDragEnabled(e.target.checked)} />
          Enable field dragging
        </label>
      </div>

      {/* Finish */}
      <div className="rounded-2xl border border-hairline p-5 bg-white/95 backdrop-blur-sm shadow-soft">
        <h4 className="font-semibold text-ink mb-3">Finish Signing</h4>
        <Button onClick={applyAndDownload} disabled={processing || fields.length === 0} className="w-full gradient-brand text-white">
          {processing ? "Processing..." : "Apply Fields & Download"}
        </Button>
      </div>
    </div>
  </div>;
}

const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
