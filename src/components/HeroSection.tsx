import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteDialog from "./QuoteDialog";

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-4">
              Since 1990 · Hyderabad
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Engineering
              <br />
              <span className="text-accent">Strength</span> in Steel
            </h1>
            <p className="text-primary-foreground/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
              Leading manufacturer of MS Gratings, Foundation Bolts, Clamps & more — built to last, delivered on time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg text-sm"
              >
                Get a Quote
              </button>
              <button
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
              >
                View Products
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default HeroSection;
