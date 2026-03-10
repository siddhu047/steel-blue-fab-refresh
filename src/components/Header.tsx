import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteDialog from "./QuoteDialog";

const products = [
  "Mild Steel Grating",
  "Stainless Steel Gratings",
  "MS Foundation Bolt",
  "Shutter Strip",
  "Pole Clamp",
  "Mild Steel Clamp",
  "PPE Kit",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const scrollToProducts = (productName?: string) => {
    setMobileOpen(false);
    setProductsOpen(false);
    const el = document.getElementById("products");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-base font-bold text-foreground leading-tight">Sainath Engg</p>
                <p className="text-xs text-muted-foreground leading-tight">Fabricators</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <div
                className="relative group"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors py-2">
                  Products
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-2">
                    <div className="bg-card rounded-xl shadow-xl border border-border py-2 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-200">
                      {products.map((product) => (
                        <button
                          key={product}
                          onClick={() => scrollToProducts(product)}
                          className="block w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                        >
                          {product}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>

              <button
                onClick={() => setQuoteOpen(true)}
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
              >
                Get a Quote
              </button>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-4 space-y-1">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-1 pb-2">
                  {products.map((product) => (
                    <button
                      key={product}
                      onClick={() => scrollToProducts(product)}
                      className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {product}
                    </button>
                  ))}
                </div>
              )}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-semibold text-foreground"
              >
                About Us
              </Link>
              <button
                onClick={() => { setQuoteOpen(true); setMobileOpen(false); }}
                className="w-full mt-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </header>

      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </>
  );
};

export default Header;
