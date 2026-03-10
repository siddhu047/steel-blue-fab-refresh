import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-bold mb-4">Sainath Engg Fabricators</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Leading manufacturer of steel fabrication products since 1990. Quality you can trust.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Mild Steel Grating</li>
              <li>Stainless Steel Gratings</li>
              <li>MS Foundation Bolt</li>
              <li>Shutter Strip</li>
              <li>Pole & MS Clamps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" /> +91-7942542612
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" /> info@sainathengg.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Hyderabad, Telangana
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Sainath Engg Fabricators. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
