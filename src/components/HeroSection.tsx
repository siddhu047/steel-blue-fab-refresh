import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteDialog from "./QuoteDialog";

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "30+", label: "Years of Excellence" },
  { value: "99%", label: "Client Satisfaction" },
];

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-hero-bg">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-hero-bg/95 to-hero-bg/80" />

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary">Since 1990 · Hyderabad, India</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-hero-fg leading-[1.1] mb-6">
                Engineered Solutions
                <br />
                <span className="text-primary">Built to Last</span>
              </h1>

              <p className="text-hero-fg/60 text-base sm:text-lg leading-relaxed mb-10 max-w-md">
                Leading manufacturer of MS Gratings, Foundation Bolts, Clamps & industrial steel products — precision engineered, delivered on time.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="btn-pill-primary px-8 py-3.5 text-sm gap-2 shadow-lg shadow-primary/20"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-pill text-hero-fg/70 border border-hero-fg/20 px-8 py-3.5 text-sm hover:bg-hero-fg/5"
                >
                  Explore Products
                </button>
              </div>
            </motion.div>

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-hero-fg/[0.04] border border-hero-fg/[0.08] backdrop-blur-sm"
                  >
                    <span className="font-display text-4xl font-bold text-primary">{stat.value}</span>
                    <span className="text-sm text-hero-fg/50 font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:hidden grid grid-cols-3 gap-3 mt-14"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-hero-fg/[0.04] border border-hero-fg/[0.08]">
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-[11px] text-hero-fg/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default HeroSection;
