import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Training Session", caption: "Intensive Workshop Session" },
  { src: gallery2, alt: "Certificate Ceremony", caption: "Sertifikasi Alumni" },
  { src: gallery3, alt: "Negotiation Practice", caption: "Praktik Negosiasi" },
  { src: gallery4, alt: "Audience Engagement", caption: "Antusiasme Peserta" },
  { src: gallery5, alt: "Networking Session", caption: "Sesi Networking" },
  { src: gallery6, alt: "Group Discussion", caption: "Diskusi Kelompok" },
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1);
    }
  };
  
  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Dokumentasi Kegiatan
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Suasana <span className="text-gradient-gold">Training</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat langsung bagaimana suasana eksklusif Deal Maker Academy
          </p>
        </div>

        {/* Uniform Grid - All images with same ratio */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-foreground font-medium text-sm md:text-base">{image.caption}</p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-xl transition-colors duration-500" />
                
                {/* Camera icon indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-4 h-4 text-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close button - positioned for mobile visibility */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[1000] w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 transition-colors shadow-lg"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          {/* Navigation buttons - positioned at center sides with higher z-index */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[1000] w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[1000] w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-gold/10 hover:border-gold/50 transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
          </button>

          <div className="max-w-5xl max-h-[70vh] relative mx-12 md:mx-20">
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background/80 to-transparent rounded-b-xl">
              <p className="text-center text-foreground font-medium text-sm md:text-lg">
                {galleryImages[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
