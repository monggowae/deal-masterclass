const ProblemSection = () => {
  return (
    <section className="relative py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Yang Sering Kejadian
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Begitu prospek nanya harga...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* The Wrong Way */}
          <div className="relative p-8 rounded-2xl bg-card border border-border/50">
            <div className="absolute -top-4 left-8 px-4 py-1 bg-destructive/20 text-destructive text-sm font-medium rounded-full">
              Yang Biasa Terjadi
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-foreground/80 italic border-l-2 border-destructive/50 pl-4">
                "Kalau harganya berapa?"
              </p>
              <div className="space-y-3 text-muted-foreground">
                <p>→ Mulai jelasin fitur</p>
                <p>→ Mulai pembenaran harga</p>
                <p>→ Mulai defensif</p>
              </div>
            </div>
          </div>

          {/* The Result */}
          <div className="relative p-8 rounded-2xl bg-card border border-gold/20 glow-gold">
            <div className="absolute -top-4 left-8 px-4 py-1 bg-gold/20 text-gold text-sm font-medium rounded-full">
              Yang Sebenarnya Terjadi
            </div>
            <div className="mt-4 space-y-4">
              <p className="text-foreground/90 leading-relaxed">
                Tanpa sadar… <span className="text-gold font-semibold">posisimu turun.</span>
              </p>
              <p className="text-muted-foreground">
                Dari orang yang <span className="text-foreground">memimpin obrolan</span>,
                jadi orang yang meyakinkan diri.
              </p>
              <div className="pt-4 border-t border-border/50">
                <p className="text-gold font-medium">
                  Padahal di titik itu, yang dibutuhkan bukan penjelasan.
                </p>
                <p className="font-serif text-2xl text-foreground mt-2">Tapi arah.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="text-center p-10 rounded-2xl border-gradient-gold bg-card">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Closing Itu Bukan Soal <span className="text-gradient-gold">Ngomong Manis</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-destructive">❌</span> Kata-kata sakti
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-destructive">❌</span> Script hafalan
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-destructive">❌</span> Teknik maksa
            </div>
          </div>
          <p className="text-xl text-foreground mb-4">
            Closing itu soal <span className="text-gold font-semibold">POSISI</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Yang selalu menang adalah orang yang{" "}
            <span className="text-gold">DIHORMATI</span> saat negosiasi,
            dan <span className="text-gold">DIPERCAYA</span> saat keputusan diambil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
