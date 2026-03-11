import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Shield, BadgeCheck, Building } from "lucide-react";
import gratingImg from "@/assets/grating-illustration.png";
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
      <section className="relative bg-background -mt-16 sm:-mt-20 pt-20 sm:pt-24 pb-6 sm:pb-10 lg:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground leading-[1.15] mb-8 max-w-3xl"
          >
            Engineered solutions for industrial steel fabrication
          </motion.h1>

          {/* Two-box layout like the reference */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
            {/* Box 1 — Main content (longer) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 relative rounded-[1.5rem] overflow-hidden bg-hero-bg text-hero-fg min-h-[340px] sm:min-h-[380px] flex flex-col justify-between"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5 pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }} />

              <div className="relative z-10 p-7 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-hero-fg/[0.08] border border-hero-fg/[0.1] mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-hero-fg/70">Since 1990 · Hyderabad, India</span>
                  </div>

                  <p className="text-hero-fg/50 text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                    Leading manufacturer of MS Gratings, Foundation Bolts, Clamps & industrial steel products — precision engineered, delivered on time across India.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="btn-pill-primary px-7 py-3 text-sm gap-2"
                    >
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                      className="btn-pill text-hero-fg/60 border border-hero-fg/15 px-7 py-3 text-sm hover:bg-hero-fg/5"
                    >
                      Explore Products
                    </button>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-6">
                    {stats.map((stat, i) => (
                      <div key={stat.label} className="text-center">
                        <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                        <p className="text-[10px] sm:text-xs text-hero-fg/40 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 2 — Illustration (smaller) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-[1.5rem] overflow-hidden bg-hero-bg min-h-[260px] lg:min-h-0"
            >
              <img
                src={gratingImg}
                alt="Metal steel grating illustration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-lg font-bold text-hero-fg">MS Gratings</p>
                <p className="text-xs text-hero-fg/50 mt-1">Precision fabricated for industrial use</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default HeroSection;
