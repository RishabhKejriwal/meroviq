import { useEffect, useState } from "react";
import { useEffect as __useEffect } from "react";
function __PageMeta() {
  __useEffect(() => {
    document.title = "Privacy Policy \u2014 Meroviq Technologies";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", "How Meroviq Technologies collects, uses and protects your data.");
  }, []);
  return null;
}
const SECTIONS = [
  {
    id: "intro",
    title: "1. Introduction",
    body: <>Welcome to Meroviq Technologies. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.</>
  },
  {
    id: "dont-collect",
    title: "2. Information We Don't Collect",
    body: <>We want to be completely transparent about what happens to your documents and data:
      <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-muted">
        <li>We do not store your uploaded documents on our servers after processing</li>
        <li>We do not keep copies of your signed documents</li>
        <li>We do not store your signature images or any other field data after processing</li>
        <li>We do not track your activity across other websites or services</li>
      </ul>
    </>
  },
  {
    id: "process",
    title: "3. How We Process Your Documents",
    body: <>When you use our service to sign documents:
      <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-muted">
        <li>Your document is temporarily uploaded to our server for processing</li>
        <li>The document is processed in memory and never written to disk</li>
        <li>Once you download the signed document, the original and processed copies are immediately deleted</li>
        <li>If you close the browser without downloading, the files are automatically deleted</li>
      </ul>
    </>
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking",
    body: <>We use different types of cookies to enhance your experience:
      <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-muted">
        <li><strong>Essential cookies:</strong> Required for basic site functionality and maintaining your session</li>
        <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website to improve our services</li>
        <li><strong>Advertising cookies:</strong> Used by Google AdSense to display relevant advertisements</li>
      </ul>
      <p className="mt-2 text-ink-muted">You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect site functionality.</p>
    </>
  },
  {
    id: "third-party",
    title: "5. Third-Party Services and Advertising",
    body: <>We use select third-party services to improve our platform:
      <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-muted">
        <li><strong>Google AdSense:</strong> Displays relevant advertisements to support our free service. Google may use cookies to show ads based on your interests.</li>
        <li><strong>Analytics services:</strong> Help us understand website usage patterns to improve user experience.</li>
      </ul>
      <p className="mt-2 text-ink-muted">We do not share your documents or personal information with advertising partners. All document processing happens on our secure servers.</p>
      <p className="mt-2 text-ink-muted">For more information about Google's privacy practices, please visit <a href="https://policies.google.com/privacy" className="text-brand hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</p>
    </>
  },
  {
    id: "security",
    title: "6. Security Measures",
    body: <>We implement appropriate technical and organizational measures to protect your data, including:
      <ul className="list-disc pl-5 mt-2 space-y-1 text-ink-muted">
        <li>Secure server-side document processing</li>
        <li>Automatic deletion of documents after processing</li>
        <li>Regular security audits and updates</li>
      </ul>
    </>
  },
  {
    id: "rights",
    title: "7. Your Rights",
    body: "Since we don't store your personal data, there's no need to request its deletion."
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date."
  }
];
function Page() {
  const [active, setActive] = useState(SECTIONS[0].id);
  useEffect(() => {
    const onScroll = () => {
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 140) current = s.id;
      }
      setActive(current);
      if (window.location.hash !== `#${current}`) {
        window.history.replaceState(null, "", `#${current}`);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="pt-32 pb-24">
      <div className="container-page">
        <header className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">Legal</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-ink">Privacy Policy</h1>
          <p className="mt-3 text-ink-muted">Last updated: June 30, 2026</p>
        </header>

        <div className="mt-12 grid lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Contents</div>
              <ul className="space-y-1.5">
                {SECTIONS.map((s) => <li key={s.id}>
                    <a href={`#${s.id}`} className={`block text-sm py-1.5 px-3 rounded-md ${active === s.id ? "bg-brand-soft text-brand font-semibold" : "text-ink-muted hover:text-brand"}`}>{s.title}</a>
                  </li>)}
              </ul>
            </div>
          </aside>
          <article className="max-w-3xl">
            {SECTIONS.map((s) => <section key={s.id} id={s.id} className="mb-10 scroll-mt-28">
                <h2 className="text-2xl font-bold text-ink mb-3">{s.title}</h2>
                <div className="text-ink-muted leading-relaxed">{s.body}</div>
              </section>)}
          </article>
        </div>
      </div>
    </div>;
}
const __Default = () => <><__PageMeta /><Page /></>;
var stdin_default = __Default;
export {
  stdin_default as default
};
