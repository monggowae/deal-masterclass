import { Check, Target, Shield, Crown, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";

const outcomes = [
  { icon: Shield, text: "Tenang saat ditanya harga" },
  { icon: Target, text: "Tegas tanpa agresif" },
  { icon: Crown, text: "Didengar tanpa harus memaksa" },
];

const learnings = [
  {
    title: "Membaca Sinyal Keputusan Prospek",
    description: "Pelajari cara mengidentifikasi tanda-tanda kesiapan beli dari bahasa tubuh, nada bicara, dan pertanyaan prospek.",
  },
  {
    title: "Mengarahkan Obrolan Tanpa Terasa Jualan",
    description: "Teknik percakapan natural yang membawa prospek ke keputusan tanpa terkesan memaksa atau agresif.",
  },
  {
    title: "Menjawab 'Kemahalan' Tanpa Banting Harga",
    description: "Framework elegan untuk menangani keberatan harga dengan tetap mempertahankan nilai dan margin.",
  },
  {
    title: "Negosiasi Elegan & Win-Win",
    description: "Strategi negosiasi yang menghasilkan kesepakatan menguntungkan kedua pihak tanpa merasa kalah.",
  },
  {
    title: "Menutup Deal Mahal dengan Percaya Diri",
    description: "Mindset dan teknik closing untuk produk/jasa high-ticket dengan keyakinan penuh.",
  },
  {
    title: "Membangun Trust dalam 5 Menit Pertama",
    description: "Cara cepat membangun kredibilitas dan kepercayaan sejak awal pertemuan dengan prospek.",
  },
  {
    title: "Mengatasi Penolakan dengan Elegan",
    description: "Teknik mengubah 'tidak' menjadi peluang tanpa terkesan putus asa atau memaksa.",
  },
  {
    title: "Follow Up yang Menghasilkan",
    description: "Strategi follow up yang tepat waktu dan tepat cara sehingga prospek merasa dihargai, bukan dikejar.",
  },
  {
    title: "Positioning Diri sebagai Expert",
    description: "Cara memposisikan diri sebagai ahli yang dipercaya sehingga prospek datang kepada Anda.",
  },
];

const SolutionSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/50 border border-gold/20">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-gold" />
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Yang Akan Kamu Pelajari
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {learnings.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-background/50 hover:bg-gold/5 transition-colors border border-border/30 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full flex items-start gap-3 p-4 text-left"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground/90 font-medium text-sm leading-tight">
                      {item.title}
                    </p>
                  </div>
                  <ChevronDown 
                    className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="px-4 pl-[52px] text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
