import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Investasi
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Satu Cara Berpikir Yang <span className="text-gradient-gold">Benar</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Bisa ngubah caramu closing selamanya.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="relative max-w-lg mx-auto">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-xl animate-glow-pulse" />
          
          <div className="relative p-10 rounded-3xl border-gradient-gold bg-card overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 px-4 py-2 bg-gold text-primary-foreground text-sm font-semibold rounded-bl-2xl">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Exclusive
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Deal Maker Academy
                </h3>
                <p className="text-muted-foreground">Offline Intensive Event</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold text-gradient-gold">
                  Rp 2.900.000
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Investasi sekali untuk perubahan permanen
              </p>
            </div>

            <Button variant="gold" size="xl" className="w-full group">
              Daftar Sekarang
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Kuota terbatas untuk menjaga kualitas training
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
