import { useState, useEffect } from "react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (sectionId: string) => {
    setMobileOpen(false);
    onNavigate(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <button
          onClick={() => handleClick("home")}
          className="group flex items-center gap-2"
          aria-label="Go to homepage"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gallery-accent to-gallery-gold">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className={`font-poppins text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-gallery-dark" : "text-white"
          }`}>
            Artivio
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative font-montserrat text-sm font-medium tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === link.id
                    ? "text-gallery-accent"
                    : "text-gallery-text hover:text-gallery-accent"
                  : activeSection === link.id
                  ? "text-gallery-gold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gallery-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            mobileOpen ? "translate-y-2 rotate-45" : ""
          } ${scrolled ? "bg-gallery-dark" : "bg-white"}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          } ${scrolled ? "bg-gallery-dark" : "bg-white"}`} />
          <span className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
            mobileOpen ? "-translate-y-2 -rotate-45" : ""
          } ${scrolled ? "bg-gallery-dark" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-6 py-4 space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`block w-full text-left font-montserrat text-sm font-medium tracking-wider uppercase transition-colors ${
                activeSection === link.id
                  ? "text-gallery-accent"
                  : "text-gallery-text hover:text-gallery-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
