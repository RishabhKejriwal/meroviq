import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/site/Header.jsx";
import { Footer } from "@/components/site/Footer.jsx";

import Home from "./routes/index.jsx";
import Contact from "./routes/contact.jsx";
import Impact from "./routes/impact.jsx";
import Launchpad from "./routes/launchpad.jsx";
import Meroviq360 from "./routes/meroviq-360.jsx";
import Privacy from "./routes/privacy.jsx";
import Resources from "./routes/resources.jsx";
import ResourcesIt from "./routes/resources.it-professionals-faq.jsx";
import ResourcesQa from "./routes/resources.qa-tester-faq.jsx";
import ResourcesSf from "./routes/resources.salesforce-career-faq.jsx";
import Services from "./routes/services.jsx";
import ServicesDev from "./routes/services.development.jsx";
import ServicesMkt from "./routes/services.marketing.jsx";
import Tools from "./routes/tools.jsx";
import ToolsSig from "./routes/tools.digital-signature.jsx";
import ToolsFile from "./routes/tools.file-converter.jsx";
import ToolsQa from "./routes/tools.qa-estimator.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Meroviq Technologies";
  }, []);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 pt-32">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md gradient-brand px-4 py-2 text-sm font-medium text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/launchpad" element={<Launchpad />} />
          <Route path="/meroviq-360" element={<Meroviq360 />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/it-professionals-faq" element={<ResourcesIt />} />
          <Route path="/resources/qa-tester-faq" element={<ResourcesQa />} />
          <Route path="/resources/salesforce-career-faq" element={<ResourcesSf />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/development" element={<ServicesDev />} />
          <Route path="/services/marketing" element={<ServicesMkt />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/digital-signature" element={<ToolsSig />} />
          <Route path="/tools/file-converter" element={<ToolsFile />} />
          <Route path="/tools/qa-estimator" element={<ToolsQa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
