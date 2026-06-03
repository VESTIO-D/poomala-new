'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages } from '@/lib/data';

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToPrevious();
      else goToNext();
    }
    setTouchStart(null);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-72 sm:h-80 flex items-center justify-center">
        <Image
          src="/IMG-20251101-WA0010.jpg"
          alt="Serene backwaters and countryside of Poomala"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#2d2a26]/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Photo Gallery
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            Capturing the essence of Poomala through the lens.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-[#f8f6f3]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                onClick={() => openLightbox(i)}
                className="relative w-full break-inside-avoid rounded-lg overflow-hidden group cursor-pointer block"
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#2d2a26]/0 group-hover:bg-[#2d2a26]/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                    View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] lightbox-overlay flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={galleryImages[currentIndex].width}
              height={galleryImages[currentIndex].height}
              className="object-contain max-h-[85vh] w-auto h-auto rounded-lg"
              sizes="90vw"
            />
            <p className="text-center text-white/70 text-sm mt-3">
              {galleryImages[currentIndex].alt}
            </p>
            <p className="text-center text-white/50 text-xs mt-1">
              {currentIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
