import { motion } from "framer-motion";

const CTASection = () => (
  <section id="contact" className="relative py-32 px-6 noise-overlay">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Start Your <span className="text-gradient">Solar Journey</span> Today
      </h2>
      <p className="text-foreground/50 text-lg mb-10">
        Join thousands of homeowners who have already made the switch to clean,
        affordable renewable energy.
      </p>
      <a
        href="#contact"
        className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold btn-primary-glow transition-transform duration-200 hover:scale-105"
      >
        Get a Free Quote
      </a>
    </motion.div>
  </section>
);

export default CTASection;
