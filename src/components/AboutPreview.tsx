import { Link } from "react-router-dom";
import { Building2, Users, Calendar, Shield } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Established", value: "1990" },
  { icon: Users, label: "Team Size", value: "11–25" },
  { icon: Building2, label: "Location", value: "Hyderabad" },
  { icon: Shield, label: "GST Verified", value: "Yes" },
];

const AboutPreview = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Built on Trust & Quality
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Established in 1990, Sainath Engg Fabricators is a proprietorship firm based in Hyderabad, Telangana. We are a leading manufacturer and wholesaler of MS Gratings, Iron Gates, MS Bolts and more — delivering quality products under strict quality control.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-10">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-lg font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex px-6 py-3 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
