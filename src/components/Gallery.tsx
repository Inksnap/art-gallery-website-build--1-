import { useState, useEffect, useRef } from "react";
import { artworks, categories } from "../data/artworks";
import type { Artwork } from "../data/artworks";

interface GalleryProps {
  onArtworkClick: (artwork: Artwork) => void;
  onLightbox: (artwork: Artwork) => void;
}

type FilterType = "medium" | "style" | "artist";

export function Gallery({ onArtworkClick, onLightbox }: GalleryProps) {
  const [filterType, setFilterType] = useState<FilterType>("style");
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const filtered =
    activeFilter === "All"
      ? artworks
      : artworks.filter((a) => a[filterType] === activeFilter);

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  const filterOptions = categories[filterType];

  return (
    <section
      id="gallery"
      className="py-24 bg-gallery-cream"
      aria-label="Art gallery"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-gallery-accent mb-3">
            Our Collection
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl font-bold text-gallery-dark mb-4">
            Curated Artworks
          </h2>
          <p className="font-montserrat text-gallery-muted max-w-xl mx-auto">
            Explore our carefully curated collection of extraordinary artworks from
            world-renowned artists across multiple disciplines.
          </p>
        </div>

        {/* Filter controls */}
        <div className="mb-12">
          {/* Filter type selector */}
          <div className="flex justify-center gap-2 mb-6">
            {(["style", "medium", "artist"] as FilterType[]).map((type) => (
              <button
                key={type}
                onClick={() => {
                  setFilterType(type);
                  setActiveFilter("All");
                }}
                className={`px-5 py-2 rounded-full font-montserrat text-xs font-semibold tracking-wider uppercase transition-all ${
                  filterType === type
                    ? "bg-gallery-dark text-white shadow-lg"
                    : "bg-white text-gallery-muted hover:bg-gallery-warm hover:text-gallery-dark"
                }`}
                aria-pressed={filterType === type}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Filter options */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-4 py-1.5 rounded-full font-montserrat text-xs font-medium transition-all ${
                  activeFilter === option
                    ? "bg-gallery-accent text-white shadow-md shadow-gallery-accent/20"
                    : "bg-white text-gallery-muted hover:bg-gallery-accent/10 hover:text-gallery-accent border border-gray-200"
                }`}
                aria-pressed={activeFilter === option}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Artwork grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-montserrat text-gallery-muted text-lg">
              No artworks match the selected filter.
            </p>
          </div>
        ) : (
          <div className="masonry-grid">
            {filtered.map((artwork, index) => (
              <div
                key={artwork.id}
                data-id={artwork.id}
                ref={(el) => {
                  if (el) itemRefs.current.set(artwork.id, el);
                }}
                className={`group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                  visibleItems.has(artwork.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={`${artwork.title} by ${artwork.artist}`}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="font-montserrat text-xs text-gallery-gold tracking-wider uppercase mb-1">
                        {artwork.medium}
                      </p>
                      <h3 className="font-poppins text-xl font-bold text-white mb-1">
                        {artwork.title}
                      </h3>
                      <p className="font-montserrat text-sm text-white/70">
                        {artwork.artist}
                      </p>
                    </div>
                    {/* Action buttons */}
                    <div className="flex gap-2 mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onArtworkClick(artwork);
                        }}
                        className="flex-1 py-2 bg-white text-gallery-dark font-montserrat text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-gallery-gold hover:text-white transition-colors"
                        aria-label={`View details for ${artwork.title}`}
                      >
                        Details
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onLightbox(artwork);
                        }}
                        className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/40 transition-colors"
                        aria-label={`View ${artwork.title} in lightbox`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card info */}
                <div className="p-5" onClick={() => onArtworkClick(artwork)}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-poppins text-base font-semibold text-gallery-dark group-hover:text-gallery-accent transition-colors">
                        {artwork.title}
                      </h3>
                      <p className="font-montserrat text-sm text-gallery-muted mt-0.5">
                        {artwork.artist}
                      </p>
                    </div>
                    <span className="shrink-0 font-montserrat text-xs font-medium text-gallery-gold bg-gallery-gold/10 px-2.5 py-1 rounded-full">
                      {artwork.year}
                    </span>
                  </div>
                  <p className="font-montserrat text-xs text-gallery-muted mt-2 line-clamp-2">
                    {artwork.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="font-montserrat text-[10px] tracking-wider uppercase text-gallery-muted bg-gray-100 px-2 py-0.5 rounded">
                      {artwork.style}
                    </span>
                    <span className="font-montserrat text-[10px] tracking-wider uppercase text-gallery-muted bg-gray-100 px-2 py-0.5 rounded">
                      {artwork.medium}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
