import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";

const product = {
  name: "Round Pole Clamp",
  price: "₹160",
  unit: "Piece",
  minOrder: "50 Pieces",
  specs: ["Material: Mild Steel", "Diameter: 3 inch", "Polished finish", "Corrosion resistant", "Silver", "Made in India"],
  category: "Pole Clamp",
  img: "https://5.imimg.com/data5/IOS/Default/2023/3/AP/FZ/FA/105340714/product-jpeg-250x250.png",
};

const PoleClamp = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">Product Category</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Pole Clamp</h1>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">Precision mild steel round pole clamps — corrosion resistant, polished finish, available in all pole sizes for industrial use.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 max-w-[480px]">
            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[11px] font-semibold text-muted-foreground border border-border">{product.category}</span>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-bold text-foreground mb-2">{product.name}</h3>
              <div className="inline-flex items-baseline gap-1 px-3 py-1.5 rounded-full bg-primary/10 mb-3">
                <span className="text-sm font-bold text-primary">Approx. {product.price}</span>
                <span className="text-xs text-primary/70">/ {product.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">Min. Order: {product.minOrder}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {product.specs.map((spec) => (
                  <span key={spec} className="px-2 py-0.5 rounded-full bg-secondary text-[11px] text-muted-foreground">{spec}</span>
                ))}
              </div>
              <button onClick={() => setQuoteOpen(true)} className="w-full btn-pill-primary px-5 py-2.5 text-sm gap-2 justify-center">
                Get Best Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default PoleClamp;