import { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";
import { ArtworkDetail } from "./components/ArtworkDetail";
import type { Artwork } from "./data/artworks";

export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxArtwork, setLightboxArtwork] = useState<Artwork | null>(null);
  const [detailArtwork, setDetailArtwork] = useState<Artwork | null>(null);

  // Scroll spy to highlight active nav section
  const handleScroll = useCallback(() => {
    const sections = ["home", "gallery", "about", "contact"];
    const scrollPos = window.scrollY + 200;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const handleViewGallery = () => {
    const el = document.getElementById("gallery");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const openLightbox = (artwork: Artwork) => {
    setDetailArtwork(null);
    setLightboxArtwork(artwork);
  };

  const openDetail = (artwork: Artwork) => {
    setLightboxArtwork(null);
    setDetailArtwork(artwork);
  };

  return (
    <div className="min-h-screen bg-gallery-cream">
      {/* Skip to main content link for accessibility */}
      <a
        href="#gallery"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-gallery-accent focus:text-white focus:rounded-lg font-montserrat text-sm"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content */}
      <main>
        {/* Hero / Home section */}
        <Hero onViewGallery={handleViewGallery} onArtworkClick={openDetail} />

        {/* Welcome banner */}
        <section className="py-20 bg-white" aria-label="Welcome message">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-gallery-gold" />
              <span className="font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-gallery-gold">
                Welcome to Artivio
              </span>
              <span className="w-12 h-px bg-gallery-gold" />
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gallery-dark mb-6 leading-snug">
              Discover Extraordinary Art That
              <br />
              <span className="text-gallery-accent">Inspires & Transforms</span>
            </h2>
            <p className="font-montserrat text-gallery-muted leading-relaxed max-w-2xl mx-auto">
              Welcome to Artivio, where we curate the finest contemporary and classical artworks
              from visionary artists around the world. Each piece in our collection has been
              carefully selected to challenge, inspire, and delight. Explore our gallery and
              discover your next masterpiece.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Curated Exhibitions",
                  desc: "Thoughtfully curated shows that tell compelling stories through art.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  ),
                  title: "Emerging Artists",
                  desc: "Discover the next generation of groundbreaking creative talent.",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  ),
                  title: "Private Collections",
                  desc: "Build your personal collection with guidance from our expert curators.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-2xl bg-gallery-cream hover:bg-gallery-dark transition-all duration-500 cursor-default"
                >
                  <div className="flex justify-center mb-4 text-gallery-accent group-hover:text-gallery-gold transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-poppins text-base font-semibold text-gallery-dark group-hover:text-white transition-colors mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-sm text-gallery-muted group-hover:text-white/60 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <Gallery onArtworkClick={openDetail} onLightbox={openLightbox} />

        {/* About */}
        <About />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Lightbox overlay */}
      {lightboxArtwork && (
        <Lightbox
          artwork={lightboxArtwork}
          onClose={() => setLightboxArtwork(null)}
        />
      )}

      {/* Artwork detail panel */}
      {detailArtwork && (
        <ArtworkDetail
          artwork={detailArtwork}
          onClose={() => setDetailArtwork(null)}
          onLightbox={openLightbox}
        />
      )}

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gallery-accent text-white shadow-lg shadow-gallery-accent/30 hover:bg-gallery-dark hover:scale-110 transition-all"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
