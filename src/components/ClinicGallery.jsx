import { useRef, useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export default function ClinicGallery({ gallery }) {
  const stripRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const images = gallery?.images || [];
  if (!images.length) return null;

  const activeImage = activeIndex === null ? null : images[activeIndex];
  const scrollPhotos = (direction) => {
    const strip = stripRef.current;
    strip?.scrollBy({ left: direction * strip.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="clinic-gallery" className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-body text-[8px] tracking-[0.4em] uppercase text-accent font-semibold mb-3">
              {gallery.badge}
            </p>
            <h2 className="font-display font-light text-secondary leading-tight text-[36px] lg:text-[56px] mb-4">
              {gallery.title}
            </h2>
            <p className="font-body text-[12px] leading-relaxed text-text-muted">
              {gallery.description}
            </p>
          </div>
          <div className="flex gap-2">
            {[-1, 1].map((direction) => (
              <button
                key={direction}
                type="button"
                onClick={() => scrollPhotos(direction)}
                aria-label={`Scroll clinic photos ${direction < 0 ? "left" : "right"}`}
                className="w-11 h-11 border border-border text-secondary hover:bg-secondary hover:text-accent transition-colors flex items-center justify-center cursor-pointer"
              >
                {direction < 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={stripRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "thin" }}
          role="region"
          aria-label="Clinic photo gallery"
          tabIndex={0}
        >
          {images.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Enlarge photo ${index + 1}: ${photo.label}`}
              aria-haspopup="dialog"
              className="group flex-shrink-0 w-56 lg:w-64 snap-start text-left bg-white border border-border cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              <div className="relative h-[380px] lg:h-[400px] overflow-hidden bg-surface">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: photo.position || "50% 55%" }}
                />
                <span className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-secondary/70 text-white">
                  <Expand size={14} />
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-5">
                <span className="font-body text-[10px] text-secondary bg-accent px-2 py-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-body text-[10px] text-secondary tracking-wide">
                  {photo.label}
                </span>
              </div>
            </button>
          ))}
        </div>
        <p className="font-body text-[9px] text-text-muted tracking-[0.15em] uppercase mt-4">
          Scroll to explore · Select a photo to enlarge
        </p>
      </div>

      <Dialog
        open={activeImage !== null}
        onClose={() => setActiveIndex(null)}
        className="relative z-[500]"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            const direction = event.key === "ArrowLeft" ? -1 : 1;
            setActiveIndex((index) => Math.max(0, Math.min(images.length - 1, index + direction)));
          }
        }}
      >
        <div className="fixed inset-0 bg-secondary/95 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
          <DialogPanel className="relative w-full max-w-5xl text-white pt-14 pb-4">
            <button
              type="button"
              data-autofocus
              aria-label="Close clinic photo"
              onClick={() => setActiveIndex(null)}
              className="absolute right-0 top-0 w-11 h-11 flex items-center justify-center border border-white/30 hover:bg-white/10 cursor-pointer"
            >
              <X size={22} />
            </button>
            {activeImage && (
              <>
                <img src={activeImage.src} alt={activeImage.alt} className="w-full max-h-[68dvh] object-contain" />
                <div className="flex items-center justify-between gap-4 mt-5">
                  <button
                    type="button"
                    aria-label="Previous clinic photo"
                    disabled={activeIndex === 0}
                    onClick={() => setActiveIndex((index) => index - 1)}
                    className="w-11 h-11 shrink-0 border border-white/30 flex items-center justify-center hover:bg-white/10 disabled:opacity-25 disabled:cursor-default cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <div className="text-center" aria-live="polite">
                    <DialogTitle className="font-body text-[12px] text-white">{activeImage.label}</DialogTitle>
                    <p className="font-body text-[9px] text-white/60 mt-2">{activeIndex + 1} / {images.length}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Next clinic photo"
                    disabled={activeIndex === images.length - 1}
                    onClick={() => setActiveIndex((index) => index + 1)}
                    className="w-11 h-11 shrink-0 border border-white/30 flex items-center justify-center hover:bg-white/10 disabled:opacity-25 disabled:cursor-default cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}
