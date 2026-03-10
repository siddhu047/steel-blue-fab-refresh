import { useState } from "react";
import { ArrowRight } from "lucide-react";
import QuoteDialog from "./QuoteDialog";

const products = [
  {
    name: "Mild Steel Grating",
    desc: "Durable MS gratings for industrial flooring and drainage systems.",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/8/337375398/NO/PI/LG/105340714/mild-steel-grating-250x250.jpg",
  },
  {
    name: "Stainless Steel Gratings",
    desc: "Corrosion-resistant SS gratings for heavy-duty applications.",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/7/431898250/WN/HB/OR/105340714/heavy-duty-mild-steel-gratings-250x250.png",
  },
  {
    name: "MS Foundation Bolt",
    desc: "High-strength foundation bolts for structural anchoring.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/1/FM/GZ/HZ/105340714/galvanized-mild-steel-grating-250x250.jpg",
  },
  {
    name: "Shutter Strip",
    desc: "Precision-cut shutter strips for construction shuttering work.",
    img: "https://5.imimg.com/data5/IOS/Default/2024/8/444261740/RY/FQ/ZI/105340714/product-jpeg-250x250.png",
  },
  {
    name: "Pole Clamp",
    desc: "Sturdy pole clamps for electrical and telecom installations.",
    img: "https://5.imimg.com/data5/IOS/Default/2023/12/368433159/EO/AD/OY/105340714/product-jpeg-250x250.png",
  },
  {
    name: "Mild Steel Clamp",
    desc: "Versatile MS clamps for piping and structural support.",
    img: "https://5.imimg.com/data5/IOS/Default/2023/12/368433138/MH/QV/ZL/105340714/product-jpeg-250x250.png",
  },
  {
    name: "PPE Kit",
    desc: "Complete personal protective equipment kits for worker safety.",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/12/567310294/OZ/IG/GL/105340714/floor-gratings-ms-glvanised-250x250.jpeg",
  },
];

const ProductsSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <section id="products" className="py-20 sm:py-28" style={{ background: "var(--section-gradient)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              What We Make
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1.5">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.desc}</p>
                  <button
                    onClick={() => setQuoteOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default ProductsSection;
