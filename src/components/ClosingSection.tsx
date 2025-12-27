import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ClosingSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-sm font-medium tracking-widest uppercase mb-6">
          Pertanyaan Penentu
        </p>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
          Kamu mau terus jadi orang yang{" "}
          <span className="text-muted-foreground">nunggu keputusan orang lain?</span>
        </h2>

        <p className="text-xl text-foreground mb-12">
          Atau jadi orang yang{" "}
          <span className="text-gradient-gold font-semibold">
            arah keputusannya jelas
          </span>{" "}
          setiap kali bicara?
        </p>

        <div className="p-8 rounded-2xl bg-card border border-gold/20 mb-12">
          <p className="text-lg text-muted-foreground mb-4 italic">
            "Kalau kamu sadar:"
          </p>
          <p className="font-serif text-2xl text-foreground font-semibold">
            "Gue butuh naik level, bukan nambah script…"
          </p>
        </div>

        <div className="space-y-4">
          <Button variant="gold" size="xl" className="group">
            Daftar Deal Maker Academy
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <p className="text-muted-foreground">
            Kapan lagi kamu belajar mengendalikan deal,
            <br />
            bukan sekadar berharap closing?
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Daftar sekarang, atau biarkan pola lama terus terulang.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
