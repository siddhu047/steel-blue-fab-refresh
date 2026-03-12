import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteDialog from "@/components/QuoteDialog";

interface Product {
  name: string;
  price: string;
  unit: string;
  minOrder?: string;
  specs: string[];
  category: string;
  img: string;
}

const products: Product[] = [
  {
    name: "GI Floor Gratings",
    price: "₹110",
    unit: "Piece",
    minOrder: "200 Pcs",
    specs: ["8–10mm thick", "Galvanized Iron", "Hot Rolled", "Rectangle"],
    category: "Galvanized",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/1/FM/GZ/HZ/105340714/galvanized-mild-steel-grating-250x250.jpg",
  },
  {
    name: "Mild Steel Grating",
    price: "₹85",
    unit: "Kg",
    minOrder: "200 Kg",
    specs: ["5mm", "Mild Steel", "Hot Rolled", "Color Coated", "Brown"],
    category: "Hot Rolled",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/337375398/NO/PI/LG/105340714/mild-steel-grating-250x250.jpg",
  },
  {
    name: "M S Floor Grating",
    price: "₹90",
    unit: "Kg",
    specs: ["30mm", "Stainless Steel", "Galvanized", "1220×3660mm", "Medium Duty"],
    category: "Galvanized",
    img: "https://5.imimg.com/data5/IOS/Default/2023/12/368433159/EO/AD/OY/105340714/product-jpeg-250x250.png",
  },
  {
    name: "MS Painted Gratings",
    price: "₹90",
    unit: "Kg",
    minOrder: "100 Kg",
    specs: ["10mm", "Mild Steel", "Epoxy Painted", "Heavy Duty", "Welded"],
    category: "Heavy Duty",
    img: "https://5.imimg.com/data5/IOS/Default/2023/12/368433138/MH/QV/ZL/105340714/product-jpeg-250x250.png",
  },
  {
    name: "MS Intermesh Profiles Grating",
    price: "₹90",
    unit: "Kg",
    specs: ["5mm", "Hot Dip Galvanized", "Serrated", "1220×3660mm", "Welded"],
    category: "Galvanized",
    img: "https://5.imimg.com/data5/IOS/Default/2024/8/444262181/JD/QW/QS/105340714/product-jpeg-250x250.png",
  },
  {
    name: "MS Plain Grating",
    price: "₹85",
    unit: "Kg",
    specs: ["5mm", "Mild Steel", "Serrated", "1220×2440mm", "25×100mm Mesh", "Medium Duty"],
    category: "Medium Duty",
    img: "https://5.imimg.com/data5/IOS/Default/2024/8/444261923/DT/VJ/KA/105340714/product-jpeg-250x250.png",
  },
  {
    name: "Industrial Metal Gratings",
    price: "₹90",
    unit: "Kg",
    specs: ["10mm", "Heavy Duty", "1220×3660mm", "Welded"],
    category: "Heavy Duty",
    img: "https://5.imimg.com/data5/IOS/Default/2024/8/444262470/CQ/SU/PS/105340714/product-jpeg-250x250.png",
  },
  {
    name: "Without Coat MS Grating",
    price: "₹75",
    unit: "Kg",
    specs: ["5mm", "Galvanized", "Serrated", "1220×2440mm", "Medium Duty"],
    category: "Medium Duty",
    img: "https://5.imimg.com/data5/IOS/Default/2024/8/444262040/MA/JZ/ZS/105340714/product-jpeg-250x250.png",
  },
  {
    name: "MS Stair Gratings",
    price: "₹5,000",
    unit: "Sq.Meter",
    specs: ["50mm", "Anti-Skid Nosing", "Galvanized", "Welded", "Industrial Stair / Fire Exit"],
    category: "Stair",
    img: "https://5.imimg.com/data5/IOS/Default/2023/12/368433101/OM/XF/RT/105340714/product-jpeg-250x250.png",
  },
];

const MildSteelGrating = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-4 sm:pt-8 pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              Product Category
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Mild Steel Gratings
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
              Our Mild Steel Grating is a durable and versatile solution for a variety of industrial and commercial applications. Made from high-quality mild steel, it offers excellent strength and load-bearing capacity while being corrosion-resistant. Ideal for use in walkways, platforms, drains, and ventilation systems, this grating provides safety, stability, and reliability. Available in custom sizes and configurations, our Mild Steel Grating is easy to install and maintain, ensuring long-lasting performance in demanding environments. Trust our product for superior quality and cost-effective solutions that meet your specific needs. Order now for exceptional performance and value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-[11px] font-semibold text-muted-foreground border border-border">
                    {product.category}
                  </span>
                </div>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base font-bold text-foreground mb-2">{product.name}</h3>
                  <div className="inline-flex items-baseline gap-1 px-3 py-1.5 rounded-full bg-primary/10 mb-3">
                    <span className="text-sm font-bold text-primary">Approx. {product.price}</span>
                    <span className="text-xs text-primary/70">/ {product.unit}</span>
                  </div>
                  {product.minOrder && (
                    <p className="text-xs text-muted-foreground mb-2">Min. Order: {product.minOrder}</p>
                  )}
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
            ))}
          </div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default MildSteelGrating;
