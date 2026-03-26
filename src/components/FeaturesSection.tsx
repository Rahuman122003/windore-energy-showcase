import { motion } from "framer-motion";
import { Sun, Zap, Shield, Leaf } from "lucide-react";

const features = [
  { icon: Sun, title: "Solar Installation", description: "Premium solar panel systems designed for maximum efficiency and minimal footprint." },
  { icon: Zap, title: "Energy Storage", description: "Advanced battery solutions to store surplus energy for round-the-clock power." },
  { icon: Shield, title: "25-Year Warranty", description: "Industry-leading warranty coverage ensuring your investment is fully protected." },
  { icon: Leaf, title: "Carbon Neutral", description: "Reduce your carbon emissions to zero with our comprehensive green energy plans." },
];

const FeaturesSection = () => (
  <section id="services" className="relative py-32 px-6 noise-overlay">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Why Choose <span className="text-gradient">Probiz Energy</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.04 }}
            className="glass-card glass-card-hover p-8 flex flex-col items-start gap-4 transition-all duration-300 cursor-default"
          >
            <div className="p-3 rounded-xl bg-primary/10">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
