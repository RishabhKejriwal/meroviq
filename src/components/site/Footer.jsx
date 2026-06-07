import { Link } from "react-router-dom";
import { Linkedin, Mail, Phone } from "lucide-react";
const COLS = [
  {
    title: "Company",
    links: [
      { to: "/", label: "Home" },
      { to: "/impact", label: "Impact" },
      { to: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Services",
    links: [
      { to: "/services/development", label: "Development & Testing" },
      { to: "/services/marketing", label: "Digital Marketing" },
      { to: "/meroviq-360", label: "Meroviq 360 CRM" }
    ]
  },
  {
    title: "Programs",
    links: [
      { to: "/launchpad", label: "Launchpad Internships" },
      { to: "/impact", label: "Community Initiatives" }
    ]
  },
  {
    title: "Resources",
    links: [
      { to: "/tools", label: "Free Tools" },
      { to: "/resources", label: "Guides & FAQs" }
    ]
  },
  {
    title: "Legal",
    links: [{ to: "/privacy", label: "Privacy Policy" }]
  }
];
function Footer() {
  return <footer className="mt-24 border-t border-hairline bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Meroviq Technologies" className="h-[70px] w-auto" />
            </Link>
            <p className="mt-4 text-sm text-ink-muted max-w-sm">
              Transforming ideas into scalable digital solutions for small businesses, entrepreneurs and the next generation of IT talent.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:hello@meroviq.com" className="flex items-center gap-2 text-ink-muted hover:text-brand">
                <Mail className="h-4 w-4" /> hello@meroviq.com
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-2 text-ink-muted hover:text-brand">
                <Phone className="h-4 w-4" /> +91 00000 00000
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink-muted hover:text-brand">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {COLS.map((col) => <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => <li key={l.to + l.label}>
                    <Link to={l.to} className="text-sm text-ink-muted hover:text-brand transition-colors">
                      {l.label}
                    </Link>
                  </li>)}
              </ul>
            </div>)}
        </div>

        <div className="mt-12 pt-8 border-t border-hairline flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-ink-muted">© 2026 Meroviq Technologies. All rights reserved.</p>
          <p className="text-xs text-ink-muted">Built with purpose · Made for growth</p>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};
