import { Clock, Flame, Eye } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Timing",
    description: "Closing itu soal timing yang tepat",
  },
  {
    icon: Flame,
    title: "Energi",
    description: "Negosiasi itu soal energi yang terpancar",
  },
  {
    icon: Eye,
    title: "Presence",
    description: "Deal itu soal presence yang dirasakan",
  },
];

const WhyOfflineSection = () => {
  return (
    <section className="relative py-24 px-6 bg-secondary/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Kenapa Harus Offline?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Skill Ini Harus <span className="text-gradient-gold">Dibentuk</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Bukan sekadar dipahami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-border/50 group-hover:border-gold/30 transition-colors bg-card">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOfflineSection;
