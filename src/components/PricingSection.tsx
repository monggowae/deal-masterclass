import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Briefcase, ArrowRight, Sparkles, MapPin, Clock, Users, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const schedules = [
  { id: "jan-2025", date: "25 Januari 2025", seats: 8 },
  { id: "feb-2025", date: "15 Februari 2025", seats: 5 },
  { id: "mar-2025", date: "8 Maret 2025", seats: 12 },
];

const PricingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    schedule: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.schedule) {
      toast.error("Mohon lengkapi semua data pendaftaran");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Pendaftaran berhasil! Tim kami akan menghubungi Anda segera.");
      setFormData({ name: "", phone: "", email: "", schedule: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="pricing" className="relative py-24 px-6">
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
          
          <div className="relative p-8 md:p-10 rounded-3xl border-gradient-gold bg-card overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 px-4 py-2 bg-gold text-primary-foreground text-sm font-semibold rounded-bl-2xl">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Exclusive
            </div>

            <div className="flex items-center gap-4 mb-6">
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

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold">
                  Rp 2.900.000
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Investasi sekali untuk perubahan permanen
              </p>
            </div>

            {/* Event Details */}
            <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-xl bg-secondary/30 border border-border/50">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-foreground">Solo</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-foreground">09:00 - 16:00 WIB</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-gold" />
                <span className="text-foreground">Terbatas 20 Peserta</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-gold/50 placeholder:text-muted-foreground/60"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-gold/50 placeholder:text-muted-foreground/60"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-gold/50 placeholder:text-muted-foreground/60"
                />
              </div>
              <div>
                <Select
                  value={formData.schedule}
                  onValueChange={(value) => setFormData({ ...formData, schedule: value })}
                >
                  <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-gold/50 text-foreground">
                    <SelectValue placeholder="Pilih Jadwal Training" />
                  </SelectTrigger>
                  <SelectContent 
                    className="bg-card border-border"
                    position="item-aligned"
                  >
                    {schedules.map((schedule) => (
                      <SelectItem 
                        key={schedule.id} 
                        value={schedule.id}
                        className="focus:bg-gold/10 cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span>{schedule.date}</span>
                          <span className="text-gold text-xs font-medium">
                            Sisa {schedule.seats} seat
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                variant="gold" 
                size="xl" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Memproses..." : "Daftar Sekarang"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>

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
