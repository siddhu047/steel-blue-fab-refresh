import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <section id="products" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              What We Make
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Our Products
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Premium steel fabrication products manufactured with precision and delivered across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="aspect-[5/3] overflow-hidden bg-muted">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{product.desc}</p>
                <button
                  onClick={() => {
                    const routes: Record<string, string> = {
                      "Mild Steel Grating": "/products/mild-steel-grating",
                      "Stainless Steel Gratings": "/products/stainless-steel-gratings",
                      "MS Foundation Bolt": "/products/ms-foundation-bolt",
                      "Shutter Strip": "/products/shutter-strip",
                      "Pole Clamp": "/products/pole-clamp",
                      "Mild Steel Clamp": "/products/mild-steel-clamp",
                      "PPE Kit": "/products/ppe-kit",
                    };
                    const route = routes[product.name];
                    if (route) {
                      navigate(route);
                    } else {
                      document.getElementById("callback")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300"
                >
                  Explore More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@Sainath_Engg_Fabricators"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-outline px-8 py-3.5 text-sm font-semibold gap-3 text-foreground border-border hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch Product Videos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
