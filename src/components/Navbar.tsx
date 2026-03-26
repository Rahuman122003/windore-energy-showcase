import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 200], [0.8, 1]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ scale, opacity }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card px-8 py-3 flex items-center gap-8"
    >
      <span className="text-lg font-bold text-gradient mr-4 font-heading">Probiz Energy</span>
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="ml-4 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold btn-primary-glow transition-transform duration-200 hover:scale-105"
      >
        Get Started
      </a>
    </motion.nav>
  );
};

export default Navbar;
