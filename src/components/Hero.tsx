import { useState, useEffect, useCallback } from "react";
import { artworks } from "../data/artworks";
import type { Artwork } from "../data/artworks";

interface HeroProps {
  onViewGallery: () => void;
  onArtworkClick: (artwork: Artwork) => void;
}

export function Hero({ onViewGallery, onArtworkClick }: HeroProps) {
  const featured = artworks.filter((a) => a.featured);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, featured.length, goTo]);

  const artwork = featured[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Featured artworks hero section"
    >
      {/* Background images */}
      {featured.map((art, i) => (
        <div
          key={art.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={art.image}
            alt={art.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="max-w-2xl">
          <div className="animate-slide-down">
            <span className="inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-gallery-gold mb-4 border border-gallery-gold/30 px-4 py-1.5 rounded-full">
              Featured Exhibition
            </span>
          </div>

          <h1
            className={`font-poppins text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {artwork.title}
          </h1>

          <p
            className={`font-montserrat text-lg text-white/70 mb-2 transition-all duration-700 delay-100 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            by <span className="text-gallery-gold font-medium">{artwork.artist}</span>
          </p>

          <p
            className={`font-montserrat text-base text-white/60 mb-10 max-w-lg transition-all duration-700 delay-200 ${
              isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {artwork.description}
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up">
            <button
              onClick={() => onArtworkClick(artwork)}
              className="group relative px-8 py-3.5 bg-gallery-accent text-white font-poppins font-semibold text-sm tracking-wider uppercase rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-gallery-accent/30 hover:scale-105"
            >
              <span className="relative z-10">View Artwork</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gallery-accent to-gallery-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={onViewGallery}
              className="px-8 py-3.5 border-2 border-white/30 text-white font-poppins font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-white/10 hover:border-white/50 transition-all hover:scale-105"
            >
              Explore Gallery
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-6 flex items-center gap-3">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-12 bg-gallery-gold"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          <span className="ml-4 font-montserrat text-xs text-white/40 tracking-wider">
            {String(current + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <span className="font-montserrat text-[10px] text-white/40 tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mt-8" />
      </div>
    </section>
  );
}
