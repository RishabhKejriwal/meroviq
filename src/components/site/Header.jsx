import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const NAV_GROUPS = [
  {
    label: "Solutions",
    items: [
      { to: "/meroviq-360", label: "Meroviq 360" },
      { to: "/services", label: "Services" }
    ]
  },
  {
    label: "Programs",
    items: [
      { to: "/launchpad", label: "Launchpad" },
      { to: "/impact", label: "Impact" }
    ]
  },
  {
    label: "Resources",
    items: [
      { to: "/tools", label: "Tools" },
      { to: "/resources", label: "Resources" },
      { to: "/contact", label: "Contact" }
    ]
  }
];
const NAV_LINKS = [{ to: "/", label: "Home" }];
function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header
    className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-md border-b border-hairline shadow-soft" : "bg-transparent"
    )}
  >
      <div className="container-page flex h-20 md:h-24 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Meroviq Technologies home">
          <img src="/images/logo.png" alt="Meroviq Technologies" className="h-[70px] w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === n.to
                  ? "text-brand bg-brand-soft"
                  : "text-ink/80 hover:text-brand hover:bg-brand-soft"
              )}
              aria-current={location.pathname === n.to ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
          {NAV_GROUPS.map((group) => (
            <div key={group.label} className="relative group">
              <button
                className={cn(
                  "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                  group.items.some((i) => location.pathname === i.to)
                    ? "text-brand bg-brand-soft"
                    : "text-ink/80 hover:text-brand hover:bg-brand-soft"
                )}
              >
                {group.label} <ChevronDown className="h-3 w-3" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md border border-hairline bg-white shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors",
                        location.pathname === item.to
                          ? "text-brand bg-brand-soft"
                          : "text-ink/80 hover:text-brand hover:bg-brand-soft"
                      )}
                      aria-current={location.pathname === item.to ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild className="gradient-brand text-white shadow-soft hover:opacity-95">
            <Link to="/meroviq-360">Try For Free</Link>
          </Button>
        </div>

        <button
    className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-brand-soft"
    aria-label="Toggle menu"
    aria-expanded={open}
    onClick={() => setOpen((v) => !v)}
  >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && <div className="lg:hidden border-t border-hairline bg-white">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-md font-medium",
                  location.pathname === n.to
                    ? "text-brand bg-brand-soft"
                    : "text-ink/90 hover:bg-brand-soft hover:text-brand"
                )}
                aria-current={location.pathname === n.to ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="px-3 py-2">
                <p className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1">{group.label}</p>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium",
                        location.pathname === item.to
                          ? "text-brand bg-brand-soft"
                          : "text-ink/90 hover:bg-brand-soft hover:text-brand"
                      )}
                      aria-current={location.pathname === item.to ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-3">
              <Button asChild className="flex-1 gradient-brand text-white">
                <Link to="/meroviq-360" onClick={() => setOpen(false)}>Try Free</Link>
              </Button>
            </div>
          </nav>
        </div>}
    </header>;
}
export {
  Header
};
