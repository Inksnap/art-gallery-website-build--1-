import { useEffect } from "react";
import type { Artwork } from "../data/artworks";

interface ArtworkDetailProps {
  artwork: Artwork;
  onClose: () => void;
  onLightbox: (artwork: Artwork) => void;
}

export function ArtworkDetail({ artwork, onClose, onLightbox }: ArtworkDetailProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(`Check out "${artwork.title}" by ${artwork.artist} at Artivio Gallery!`);

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lightbox-enter"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${artwork.title}`}
    >
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-4xl bg-white overflow-y-auto shadow-2xl animate-fade-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 left-4 z-10 float-left ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-gallery-accent hover:text-white transition-all"
          aria-label="Close artwork details"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero image */}
        <div className="relative">
          <img
            src={artwork.image}
            alt={`${artwork.title} by ${artwork.artist}`}
            className="w-full max-h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <button
            onClick={() => onLightbox(artwork)}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-montserrat text-xs font-medium hover:bg-white/40 transition-colors"
            aria-label="View full size image"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            View Full Size
          </button>
        </div>

        {/* Content */}
        <div className="px-8 sm:px-12 py-10">
          {/* Title & meta */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase text-gallery-accent bg-gallery-accent/10 px-3 py-1 rounded-full">
                {artwork.style}
              </span>
              <span className="font-montserrat text-[10px] font-semibold tracking-[0.2em] uppercase text-gallery-gold bg-gallery-gold/10 px-3 py-1 rounded-full">
                {artwork.medium}
              </span>
            </div>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-gallery-dark mb-2">
              {artwork.title}
            </h2>
            <p className="font-montserrat text-lg text-gallery-muted">
              by <span className="text-gallery-accent font-medium">{artwork.artist}</span>
            </p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 bg-gallery-cream rounded-xl">
            <div>
              <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gallery-muted mb-1">Year</p>
              <p className="font-poppins text-sm font-semibold text-gallery-dark">{artwork.year}</p>
            </div>
            <div>
              <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gallery-muted mb-1">Medium</p>
              <p className="font-poppins text-sm font-semibold text-gallery-dark">{artwork.medium}</p>
            </div>
            <div>
              <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gallery-muted mb-1">Dimensions</p>
              <p className="font-poppins text-sm font-semibold text-gallery-dark">{artwork.dimensions}</p>
            </div>
            <div>
              <p className="font-montserrat text-[10px] tracking-[0.2em] uppercase text-gallery-muted mb-1">Price</p>
              <p className="font-poppins text-sm font-semibold text-gallery-accent">{artwork.price}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h3 className="font-poppins text-lg font-semibold text-gallery-dark mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gallery-accent rounded-full" />
              About This Work
            </h3>
            <p className="font-montserrat text-sm leading-relaxed text-gallery-muted">
              {artwork.longDescription}
            </p>
          </div>

          {/* Artist bio */}
          <div className="mb-10 p-6 bg-gallery-dark rounded-xl text-white">
            <h3 className="font-poppins text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gallery-gold rounded-full" />
              About the Artist
            </h3>
            <p className="font-montserrat text-sm leading-relaxed text-white/70">
              {artwork.artistBio}
            </p>
          </div>

          {/* Social sharing */}
          <div className="mb-10">
            <h3 className="font-poppins text-sm font-semibold text-gallery-dark mb-3">
              Share This Artwork
            </h3>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:scale-110 transition-transform"
                aria-label="Share on Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4267B2] text-white hover:scale-110 transition-transform"
                aria-label="Share on Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BD081C] text-white hover:scale-110 transition-transform"
                aria-label="Share on Pinterest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
                </svg>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gallery-muted text-white hover:scale-110 hover:bg-gallery-dark transition-all"
                aria-label="Copy link"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </button>
            </div>
          </div>

          {/* Inquiry button */}
          <button
            onClick={() => {
              onClose();
              setTimeout(() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            className="w-full py-4 bg-gallery-accent text-white font-poppins font-semibold tracking-wider uppercase rounded-xl hover:bg-gallery-dark transition-colors"
          >
            Inquire About This Artwork
          </button>
        </div>
      </div>
    </div>
  );
}
