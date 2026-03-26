import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/contact-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Ready to make the switch to clean energy? Contact us for a free consultation and quote.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover transition-all">
              <div className="p-3 rounded-xl bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Email Us</h3>
                <p className="text-muted-foreground text-sm">hello@probizenergy.com</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover transition-all">
              <div className="p-3 rounded-xl bg-primary/10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Call Us</h3>
                <p className="text-muted-foreground text-sm">+1 (800) 555-SOLAR</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4 glass-card-hover transition-all">
              <div className="p-3 rounded-xl bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">Visit Us</h3>
                <p className="text-muted-foreground text-sm">123 Solar Avenue, Austin, TX 78701</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 flex flex-col gap-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="First Name"
                className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email Address"
              className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            <textarea
              required
              rows={4}
              placeholder="Tell us about your energy needs..."
              className="bg-secondary/50 border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold btn-primary-glow transition-transform duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
