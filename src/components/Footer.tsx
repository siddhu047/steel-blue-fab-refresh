import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-hero-fg border-t border-hero-fg/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-primary rotate-6" />
                <div className="relative w-full h-full rounded-lg bg-hero-fg flex items-center justify-center">
                  <span className="text-hero-bg font-display font-bold text-sm">SE</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-display font-bold leading-none">Sainath Engg</p>
                <p className="text-[10px] text-hero-fg/40 mt-0.5">Fabricators</p>
              </div>
            </div>
            <p className="text-sm text-hero-fg/40 leading-relaxed">
              Leading manufacturer of steel fabrication products since 1990.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-hero-fg/30 mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm text-hero-fg/50">
              <li className="hover:text-primary transition-colors cursor-pointer">Mild Steel Grating</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Stainless Steel Gratings</li>
              <li className="hover:text-primary transition-colors cursor-pointer">MS Foundation Bolt</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Shutter Strip</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Pole & MS Clamps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-hero-fg/30 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-hero-fg/50">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 shrink-0 text-primary" /> +91-7942542612
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-primary" /> info@sainathengg.com
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" /> Hyderabad, Telangana
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-hero-fg/30 mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-hero-fg/[0.04] border border-hero-fg/[0.08] text-xs text-hero-fg/50">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/IndiaMART_logo.svg/200px-IndiaMART_logo.svg.png"
                  alt="IndiaMART"
                  className="h-3.5 brightness-0 invert opacity-50"
                />
                Verified
              </div>
              <p className="text-xs text-hero-fg/30">GST: 36AJCPK4660M2ZX</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-hero-fg/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-hero-fg/25">
            © {new Date().getFullYear()} Sainath Engg Fabricators. All rights reserved.
          </p>
          <p className="text-xs text-hero-fg/25">Made in Hyderabad, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
