import { Play, Star, Quote } from "lucide-react";
import { useState } from "react";

// Video testimonials - shorts (9:16) and landscape (16:9)
const testimonials = [
  // Landscape videos (16:9)
  {
    id: 1,
    videoId: "FpNloH56La4",
    isShort: false,
  },
  {
    id: 2,
    videoId: "-nsQ3Ja4obI",
    isShort: false,
  },
  // Shorts (9:16)
  {
    id: 3,
    videoId: "fe29Io-BjWc",
    isShort: true,
  },
  {
    id: 4,
    videoId: "H7vUg_-LGW0",
    isShort: true,
  },
  {
    id: 5,
    videoId: "SYdnSm8DH3k",
    isShort: true,
  },
  {
    id: 6,
    videoId: "vGAdfbzc5ok",
    isShort: true,
  },
  // More landscape
  {
    id: 7,
    videoId: "LjLuS7-xD5I",
    isShort: false,
  },
  {
    id: 8,
    videoId: "6yWQ8I_1uNY",
    isShort: false,
  },
];

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const landscapeVideos = testimonials.filter((t) => !t.isShort);
  const shortVideos = testimonials.filter((t) => t.isShort);

  const VideoCard = ({ videoId, isShort }: { videoId: string; isShort: boolean }) => (
    <div
      className={`group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-gold/30 transition-all duration-500 hover:glow-gold ${
        isShort ? "" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isShort ? "aspect-[9/16]" : "aspect-video"}`}>
        {activeVideo === videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`Testimonial Video`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`Testimonial Video`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
              <button
                onClick={() => setActiveVideo(videoId)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_hsl(43_74%_49%_/_0.5)]"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground ml-1" fill="currentColor" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section className="relative py-24 px-6 bg-secondary/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
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

        {/* Landscape Videos - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {landscapeVideos.slice(0, 2).map((testimonial) => (
            <VideoCard key={testimonial.id} videoId={testimonial.videoId} isShort={false} />
          ))}
        </div>

        {/* Shorts Videos - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {shortVideos.map((testimonial) => (
            <VideoCard key={testimonial.id} videoId={testimonial.videoId} isShort={true} />
          ))}
        </div>

        {/* More Landscape Videos - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {landscapeVideos.slice(2).map((testimonial) => (
            <VideoCard key={testimonial.id} videoId={testimonial.videoId} isShort={false} />
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold fill-gold" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Dipercaya oleh <span className="text-gold font-semibold">500+</span> alumni dari berbagai industri
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
