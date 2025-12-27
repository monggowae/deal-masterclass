import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById("pain-points")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8 animate-fade-up opacity-0">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm text-gold font-medium tracking-wide uppercase">Offline Intensive Training</span>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-100">
          <span className="text-gradient-gold">Deal Maker</span>
          <br />
          <span className="text-foreground">Academy</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 animation-delay-200">
          Bukan buat ngajarin kamu ngejar prospek.
          <br className="hidden md:block" />
          Tapi bikin kamu jadi <span className="text-gold font-medium">Deal Maker</span> yang mengarahkan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0 animation-delay-300">
          <Button variant="gold" size="xl" className="group">
            Daftar Sekarang
            <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button variant="goldOutline" size="xl" onClick={scrollToContent}>
            Pelajari Lebih Lanjut
          </Button>
        </div>

        {/* Trust indicator */}
        <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up opacity-0 animation-delay-400">
          <p className="text-sm text-muted-foreground mb-4">Investasi untuk perubahan permanen</p>
          <div className="flex items-center justify-center gap-8 text-gold/70">
            <div className="text-center">
              <p className="font-serif text-2xl font-bold text-gold">100%</p>
              <p className="text-xs text-muted-foreground">Praktik Langsung</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-serif text-2xl font-bold text-gold">Live</p>
              <p className="text-xs text-muted-foreground">Simulasi Nyata</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-serif text-2xl font-bold text-gold">Elite</p>
              <p className="text-xs text-muted-foreground">Kelas Terbatas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gold/50" />
      </div>
    </section>
  );
};

export default HeroSection;
