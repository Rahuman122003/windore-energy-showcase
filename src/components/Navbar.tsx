import { motion, useScroll, useTransform } from "framer-motion";
import probizLogo from "@/assets/probiz-logo.png";

const navLinks = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 200], [1, 0.96]);
  const opacity = useTransform(scrollY, [0, 200], [0.85, 1]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ scale, opacity }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div
        className="
        flex items-center justify-between gap-8
        px-8 py-3 w-full max-w-5xl
        
        rounded-2xl
        
        bg-white/30
        backdrop-blur-2xl
        
        border border-white/40
        
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        
        relative overflow-hidden
      "
      >
        {/* Liquid highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-slate-500/10 to-transparent opacity-60 pointer-events-none" />

        {/* Logo */}
        <img
          src={probizLogo}
          alt="Probiz Energy"
          className="h-11 w-auto z-10"
        />

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 z-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                text-sm font-medium
                text-black/70
                hover:text-teal-400
                transition-all duration-300
                relative
              "
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        {/*<a
          href="#contact"
          className="
            z-10
            bg-black text-white
            px-5 py-2
            rounded-lg
            text-sm font-semibold
            
            shadow-md
            hover:shadow-lg
            
            transition-all duration-300
            hover:scale-105
          "
        >
          Get Started
        </a>*/}
        <a
          href="#contact"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold btn-primary-glow transition-transform duration-200 hover:scale-105"
        >
          {" "}
          Get Started{" "}
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
