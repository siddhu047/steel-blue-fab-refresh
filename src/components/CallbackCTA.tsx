import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const CallbackCTA = () => {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!mobile.trim()) {
      toast.error("Please enter your mobile number.");
      return;
    }
    if (!message.trim()) {
      toast.error("Please tell us what you're looking for.");
      return;
    }
    toast.success("We'll get back to you shortly!");
    setMobile("");
    setMessage("");
  };

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-[2rem] bg-hero-bg text-hero-fg px-8 sm:px-16 py-14 sm:py-20 text-center overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-hero-fg/50 mb-6 block">
              Ready to Start?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              Tell us what you're
              <br />
              <span className="text-hero-fg/40">looking for.</span>
            </h2>
            <p className="text-hero-fg/50 text-sm mb-10 max-w-md mx-auto">
              Describe your requirement and we'll get back to you within 24 hours.
            </p>

            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Your mobile number, e.g. 9876543210"
              className="w-full max-w-lg mx-auto block rounded-2xl bg-hero-fg/[0.06] border border-hero-fg/[0.1] text-hero-fg placeholder:text-hero-fg/30 px-5 py-3.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 mb-4 transition-all"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="E.g. I need MS gratings for a warehouse project in Hyderabad..."
              rows={3}
              className="w-full max-w-lg mx-auto block rounded-2xl bg-hero-fg/[0.06] border border-hero-fg/[0.1] text-hero-fg placeholder:text-hero-fg/30 px-5 py-4 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 resize-none mb-6 transition-all"
            />

            <button
              onClick={handleSubmit}
              className="btn-pill-primary px-8 py-3.5 text-sm font-semibold gap-2"
            >
              Request a Call Back <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-hero-fg/30 text-xs mt-5">
              Typically respond within 24 hours · No commitment required
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-hero-fg/50 text-sm">
              <Phone className="w-4 h-4" />
              <span>Or call us directly:</span>
              <a href="tel:+917942542612" className="text-primary font-semibold hover:underline">
                +91-7942542612
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallbackCTA;
