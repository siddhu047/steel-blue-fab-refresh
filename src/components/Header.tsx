import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QuoteDialog from "./QuoteDialog";

const products = [
  { name: "Mild Steel Grating", path: "/products/mild-steel-grating" },
  { name: "Stainless Steel Gratings", path: "/products/stainless-steel-gratings" },
  { name: "MS Foundation Bolt", path: "/products/ms-foundation-bolt" },
  { name: "Shutter Strip", path: "/products/shutter-strip" },
  { name: "Pole Clamp", path: "/products/pole-clamp" },
  { name: "Mild Steel Clamp", path: "/products/mild-steel-clamp" },
  { name: "PPE Kit", path: "/products/ppe-kit" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setProductsOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProductClick = (product: typeof products[0]) => {
    setMobileOpen(false);
    setProductsOpen(false);
    if (product.path) {
      navigate(product.path);
    } else {
      scrollTo("products");
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-primary rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="relative w-full h-full rounded-xl bg-foreground flex items-center justify-center">
                  <span className="text-background font-display font-bold text-lg tracking-tight">SE</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-base font-display font-bold text-foreground leading-none tracking-tight">Sainath Engg</p>
                <p className="text-xs text-muted-foreground leading-tight mt-0.5">Fabricators</p>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-full hover:bg-secondary transition-all">
                  Products
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card rounded-2xl shadow-2xl py-2 min-w-[240px] border border-border">
                        {products.map((product) => (
                          <button
                            key={product.name}
                            onClick={() => handleProductClick(product)}
                            className="block w-full text-left px-5 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {product.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollTo("about")}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-full hover:bg-secondary transition-all"
              >
              About Us
              </button>

              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-pill-primary ml-2 px-6 py-2.5 text-sm"
              >
                Get a Quote
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-foreground rounded-full hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground rounded-xl px-3 hover:bg-secondary"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-3 space-y-0.5 overflow-hidden"
                    >
                      {products.map((product) => (
                        <button
                          key={product.name}
                          onClick={() => handleProductClick(product)}
                          className="block w-full text-left py-2.5 px-3 text-sm text-muted-foreground hover:text-primary rounded-lg hover:bg-secondary transition-colors"
                        >
                          {product.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => scrollTo("about")}
                  className="block w-full text-left py-3 text-sm font-medium text-foreground rounded-xl px-3 hover:bg-secondary"
                >
                  About Us
                </button>
                <button
                  onClick={() => { setQuoteOpen(true); setMobileOpen(false); }}
                  className="w-full mt-3 btn-pill-primary px-6 py-3 text-sm"
                >
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Header;
