import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Calendar, Shield, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
              About Us
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-8 leading-tight">
              Crafting Steel Solutions<br />Since 1990
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Established in the year 1990 at Hyderabad, Telangana, we at M/s Sainath Engg Fabricators are a Sole Proprietorship based firm, engaged as the foremost Manufacturer and Wholesaler of MS Gratings, Iron Gates, MS Bolts and many more.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-12">
              Our products are manufactured under the surveillance of highly qualified and experienced professionals. Before being delivered to our clients, our quality analysts stringently check these products on different quality parameters, assuring their flawlessness at the user's end.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Building2, title: "Nature of Business", value: "Manufacturer" },
                { icon: Users, title: "Team Size", value: "11 to 25 People" },
                { icon: Calendar, title: "GST Registration", value: "01-07-2017" },
                { icon: Shield, title: "Legal Status", value: "Proprietorship" },
                { icon: Target, title: "Annual Turnover", value: "₹40L – ₹1.5Cr" },
                { icon: Award, title: "GST No.", value: "36AJCPK4660M2ZX" },
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{title}</p>
                    <p className="text-base font-semibold text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
