import { motion } from "framer-motion";
import solarPanels from "@/assets/solar-panels.jpeg";

const AboutSection = () => (
  <section id="about" className="relative py-32 px-6 noise-overlay">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-heading">
          Powering the Future with{" "}
          <span className="text-gradient">Clean Energy</span>
        </h2>
        <p className="text-foreground/50 leading-relaxed mb-6">
          At Probiz Energy, we believe in a world powered entirely by renewable resources.
          Our team of experts designs, installs, and maintains cutting-edge solar and wind
          energy systems that save you money while protecting our planet.
        </p>
        <p className="text-foreground/50 leading-relaxed">
          With over a decade of experience and thousands of successful installations,
          we're committed to making clean energy accessible, affordable, and reliable
          for everyone.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="glass-card overflow-hidden rounded-2xl">
          <img
            src={solarPanels}
            alt="Solar panels powering cities globally"
            className="w-full h-[400px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-4 -left-4 glass-card px-6 py-3 animate-float">
          <p className="text-sm font-semibold">
            <span className="text-gradient">10+</span> Years of Excellence
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
