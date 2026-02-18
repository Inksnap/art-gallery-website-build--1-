import { useEffect, useCallback } from "react";
import type { Artwork } from "../data/artworks";

interface LightboxProps {
  artwork: Artwork;
  onClose: () => void;
}

export function Lightbox({ artwork, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 lightbox-enter"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox view of ${artwork.title}`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[90vh] mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={artwork.image}
          alt={`${artwork.title} by ${artwork.artist}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Info bar */}
        <div className="mt-4 text-center">
          <h3 className="font-poppins text-xl font-bold text-white">{artwork.title}</h3>
          <p className="font-montserrat text-sm text-white/60 mt-1">
            {artwork.artist} • {artwork.year} • {artwork.medium}
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <p className="font-montserrat text-xs text-white/30 tracking-wider">
          Press ESC or click outside to close
        </p>
      </div>
    </div>
  );
}
