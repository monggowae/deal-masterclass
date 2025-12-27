import { X } from "lucide-react";

const painPoints = [
  "Deg-degan tiap kali prospek nanya 'Berapa harganya?'",
  "Menjelaskan panjang lebar tapi ujungnya gak ada keputusan",
  "Ngerasa prospek 'kayaknya tertarik', tapi gak pernah benar-benar fix",
  "Sering banting harga biar closing, tapi dalem hati kesel",
  "Banyak ngobrol, banyak follow up, sedikit deal",
];

const PainPointsSection = () => {
  return (
    <section id="pain-points" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Kalau kamu masih...
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Apakah Ini <span className="text-gradient-gold">Kamu?</span>
          </h2>
        </div>

        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-destructive/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-destructive" />
              </div>
              <p className="text-foreground/90 text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-card to-secondary/50 border border-border/50">
            <p className="text-xl md:text-2xl text-foreground mb-4">
              <span className="font-serif font-semibold">Tenang.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Itu bukan karena kamu gak bisa jualan.
              <br />
              <span className="text-gold font-medium">
                Itu tanda kamu belum pegang kendali keputusan.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
