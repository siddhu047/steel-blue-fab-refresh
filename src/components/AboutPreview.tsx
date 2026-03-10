import { Building2, Users, Calendar, Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const details = [
  { icon: Calendar, label: "Established", value: "1990" },
  { icon: Users, label: "Team Size", value: "11–25 People" },
  { icon: Building2, label: "Location", value: "Hyderabad, Telangana" },
  { icon: Shield, label: "GST Verified", value: "36AJCPK4660M2ZX" },
  { icon: Award, label: "Legal Status", value: "Proprietorship" },
  { icon: CheckCircle, label: "IndiaMART", value: "Verified Supplier" },
];

const AboutPreview = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-hero-bg text-hero-fg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Built on Trust
              <br />
              <span className="text-primary">& Quality</span>
            </h2>
            <p className="text-hero-fg/60 text-base leading-relaxed mb-4">
              Established in 1990, Sainath Engg Fabricators is a proprietorship firm based in Hyderabad, Telangana. We are a leading manufacturer and wholesaler of MS Gratings, Iron Gates, MS Bolts and more.
            </p>
            <p className="text-hero-fg/60 text-base leading-relaxed mb-8">
              Our products are manufactured under the surveillance of highly qualified professionals and stringently checked on quality parameters before delivery.
            </p>

            {/* IndiaMART Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-hero-fg/[0.06] border border-hero-fg/[0.1]">
              <svg viewBox="0 0 120 20" className="h-4 opacity-70" fill="currentColor">
                <text x="0" y="16" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" fill="hsl(var(--hero-fg))">
                  IndiaMART
                </text>
              </svg>
              <span className="text-xs font-medium text-hero-fg/60">Verified & Certified Supplier</span>
              <CheckCircle className="w-4 h-4 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {details.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="p-5 rounded-2xl bg-hero-fg/[0.04] border border-hero-fg/[0.08] hover:bg-hero-fg/[0.06] transition-colors"
              >
                <Icon className="w-5 h-5 text-primary mb-3" />
                <p className="text-xs text-hero-fg/40 uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm font-semibold text-hero-fg/90">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
