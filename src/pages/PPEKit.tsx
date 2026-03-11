import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const product = {
  name: "M.S Pipe Travis AI Crate, For Cattle",
  price: "₹14,000",
  unit: "Piece",
  minOrder: "1 Piece",
  specs: ["Automation: Manual", "Assembly type: Assemble", "Weight: 80kg", "Capacity: 1", "Grade: C", "Finishing: Galvanized"],
  category: "Fabricated Structure",
  img: "https://5.imimg.com/data5/SELLER/Default/2023/9/348272079/NR/BV/NZ/105340714/galvanised-pipe-travis-ai-crate-for-cattle-250x250.jpg",
};

const PPEKit = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = () => { setEnquiryOpen(false); setMobile(""); setRequirement(""); };

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
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">PPE Kit</h1>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">Galvanised MS pipe fabrications including Travis AI Cattle Crates — manually assembled, durable, heavy-duty construction for agricultural and industrial use.</p>
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
              <button onClick={() => setEnquiryOpen(true)} className="w-full btn-pill-primary px-5 py-2.5 text-sm gap-2 justify-center">
                Get Best Quote <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {enquiryOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setEnquiryOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }} className="bg-card rounded-2xl border border-border shadow-2xl w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setEnquiryOpen(false)} className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-secondary transition-colors text-muted-foreground"><X className="w-4 h-4" /></button>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">Get Best Quote</h3>
              <p className="text-sm text-muted-foreground mb-5">For: <span className="text-foreground font-medium">{product.name}</span></p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mobile Number</label>
                  <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Requirement</label>
                  <textarea value={requirement} onChange={(e) => setRequirement(e.target.value)} placeholder="Describe your requirements..." rows={3} className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" />
                </div>
                <button onClick={handleSubmit} className="w-full btn-pill-primary px-6 py-3 text-sm gap-2 justify-center">That's it — Send Enquiry <ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default PPEKit;
