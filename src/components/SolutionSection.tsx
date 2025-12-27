import { Check, Target, Shield, Crown, Zap } from "lucide-react";

const outcomes = [
  { icon: Shield, text: "Tenang saat ditanya harga" },
  { icon: Target, text: "Tegas tanpa agresif" },
  { icon: Crown, text: "Didengar tanpa harus memaksa" },
];

const learnings = [
  "Membaca sinyal keputusan prospek",
  "Mengarahkan obrolan tanpa terasa jualan",
  "Menjawab 'kemahalan' tanpa banting harga",
  "Negosiasi elegan & win-win",
  "Menutup deal mahal dengan percaya diri",
];

const SolutionSection = () => {
  return (
    <section className="relative py-24 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Deal Maker Academy Ada Untuk Ini
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Jadi <span className="text-gradient-gold">Deal Maker</span>
            <br />
            Bukan Sales Yang Ngejar
          </h2>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-gold/30 transition-all duration-500 hover:glow-gold text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 mb-6 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-8 h-8 text-gold" />
              </div>
              <p className="text-lg font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        {/* What You'll Learn */}
        <div className="p-10 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/50 border border-gold/20">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-gold" />
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Yang Akan Kamu Pelajari
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {learnings.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-gold/5 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <p className="text-foreground/90">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              Semua lewat <span className="text-gold font-medium">praktik langsung</span> &{" "}
              <span className="text-gold font-medium">simulasi nyata</span>.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Bukan teori. Bukan motivasi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
