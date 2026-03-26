import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Installations" },
  { value: 40, suffix: "%", label: "Energy Savings" },
  { value: 100, suffix: "%", label: "Renewable" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black text-gradient font-display">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="relative py-32 px-6 noise-overlay">
    <div className="max-w-5xl mx-auto">
      <div className="glass-card p-12 md:p-16 grid md:grid-cols-3 gap-12 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="mt-3 text-foreground/50 font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
