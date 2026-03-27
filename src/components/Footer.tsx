import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import probizLogo from "@/assets/footer-bg.png";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/footer-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src={probizLogo} alt="Probiz Energy" className="h-14 w-auto" />
            <span className="text-xl font-bold font-heading text-gradient">Probiz Energy</span>
          </div>
          <p className="text-sm text-foreground/40 leading-relaxed">
            Powering a sustainable future with cutting-edge renewable energy solutions.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground/60 mb-5">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-foreground/40 hover:text-primary transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground/60 mb-5">Services</h4>
          <div className="flex flex-col gap-3">
            {["Solar Installation", "Wind Energy", "Energy Consulting", "Maintenance"].map((item) => (
              <span key={item} className="text-sm text-foreground/40">{item}</span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-foreground/60 mb-5">Contact</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm text-foreground/40">
              <Mail className="w-4 h-4 text-primary" />
              sales@probizenergy.com
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/40">
              <Phone className="w-4 h-4 text-primary" />
              +91 99000 29602
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/40">
              {/*<MapPin className="w-4 h-4 text-primary" />*/}
              Bengaluru, Hosur, Coimbatore, Chennai, Trichy, Madurai, Nellai & Nagercoil.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground/25">© 2026 Probiz Energy. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-foreground/25">
          <a href="#" className="hover:text-foreground/50 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground/50 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
