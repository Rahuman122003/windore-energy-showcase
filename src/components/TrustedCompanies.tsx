import { motion } from "framer-motion";

const companies = [
  "Brigade group",
  "Puravankara",
  "BMRL",
  "Divyasree",
  "Infiniti",
  "Brigade group",
  "Puravankara",
  "BMRL",
  "Divyasree",
  "Infiniti",
];

const TrustedCompanies = () => (
  <section className="py-16 border-y border-border/20 overflow-hidden">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-10 font-heading"
    >
      Trusted by industry leaders
    </motion.p>
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="overflow-hidden">
        <div className="marquee-track">
          {[...companies, ...companies].map((name, i) => (
            <span
              key={i}
              className="mx-10 text-xl md:text-2xl font-display font-bold text-foreground/20 whitespace-nowrap select-none hover:text-foreground/40 transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedCompanies;
