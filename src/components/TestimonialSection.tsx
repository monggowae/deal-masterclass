import { Play, Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "CEO, PT Maju Bersama",
    quote: "Setelah ikut Deal Maker Academy, closing rate saya naik 3x lipat. Yang paling berubah bukan skill, tapi mindset dan kepercayaan diri saat negosiasi.",
    videoId: "dQw4w9WgXcQ", // Dummy YouTube ID
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Sales Director, Finansial Corp",
    quote: "Dulu saya selalu grogi kalau ditanya harga. Sekarang saya yang mengendalikan arah pembicaraan. Ini game changer!",
    videoId: "jNQXAC9IVRw", // Dummy YouTube ID
  },
  {
    id: 3,
    name: "Hendra Wijaya",
    role: "Business Owner",
    quote: "Investasi terbaik yang pernah saya keluarkan untuk pengembangan diri. ROI-nya? Deal pertama setelah training sudah 10x lipat dari biaya.",
    videoId: "QH2-TGUlwu4", // Dummy YouTube ID
  },
];

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6 bg-secondary/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Testimoni Alumni
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Mereka Sudah <span className="text-gradient-gold">Membuktikan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengarkan langsung cerita transformasi dari para alumni Deal Maker Academy
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-gold/30 transition-all duration-500 hover:glow-gold"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-secondary overflow-hidden">
                {activeVideo === testimonial.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                    title={`Testimonial ${testimonial.name}`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                      alt={`Testimonial ${testimonial.name}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                      <button
                        onClick={() => setActiveVideo(testimonial.videoId)}
                        className="w-16 h-16 rounded-full bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.5)]"
                      >
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold/20" />
                  <p className="text-foreground/80 text-sm leading-relaxed pl-4">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
