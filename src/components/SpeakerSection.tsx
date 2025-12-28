import { Award, Users, BookOpen, Target, Star, TrendingUp } from "lucide-react";
import speakerImage from "@/assets/speaker.jpg";

const achievements = [
  {
    icon: BookOpen,
    value: "207+",
    label: "Workshop Digelar",
  },
  {
    icon: Users,
    value: "108+",
    label: "Seminar Online",
  },
  {
    icon: Award,
    value: "15+",
    label: "Tahun Digital Marketer",
  },
  {
    icon: TrendingUp,
    value: "100+",
    label: "Alumni Sukses",
  },
];

const credentials = [
  "Digital Marketing Certified Coach",
  "Deal Maker Coach",
  "Digital Business Consultant - 27+ Perusahaan",
  "Author 'Brokerpreneur' Best Seller Book",
  "Keynote Speaker - Entrepreneur Gathering 7 years",
  "Flowgrammer AI Automation",
];

const SpeakerSection = () => {
  return (
    <section className="relative py-24 px-6 bg-secondary/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Pemateri
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Belajar dari <span className="text-gradient-gold">Yang Terbaik</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dipandu langsung oleh praktisi negosiasi dan closing dengan rekam jejak terbukti
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Speaker Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 glow-gold">
              <img
                src={speakerImage}
                alt="Speaker Deal Maker Academy"
                className="w-full aspect-square object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Name badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
                  Yusuf Shembah
                </h3>
                <p className="text-gold font-medium">
                  Deal Maker Coach & Digital Business Consultant
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 md:top-4 md:right-4 bg-gold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
              <Star className="w-4 h-4 text-primary-foreground fill-current" />
              <span className="text-primary-foreground font-semibold text-sm">Top Rated</span>
            </div>
          </div>

          {/* Speaker Info */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-card border border-border/50 hover:border-gold/30 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-gold mb-3" />
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="p-6 rounded-2xl bg-card border border-gold/20">
              <h4 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-gold" />
                Kredensial & Prestasi
              </h4>
              <ul className="space-y-3">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <p className="text-foreground/80 text-sm">{credential}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20">
              <p className="text-foreground/90 italic text-lg leading-relaxed">
                "Deal Maker adalah Seni Komunikasi supaya orang mengikuti. 
                Mengikuti arahan, mengikuti penawaran dengan kepercayaan yang Tepat."
              </p>
              <p className="text-gold font-medium mt-4">— Shembah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
