import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Austin TX",
    quote: "Probiz Energy transformed our home. Our electricity bill dropped by 60% in the first month. The installation was seamless and the team was incredibly professional.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO, GreenTech Solutions",
    quote: "We partnered with Probiz for our corporate campus solar installation. Their expertise in large-scale projects is unmatched. Highly recommend for commercial deployments.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Property Developer",
    quote: "Every new development we build now includes Probiz solar panels. It adds tremendous value to our properties and our buyers love the energy savings.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "Sustainability Director",
    quote: "Working with Probiz helped us achieve our net-zero goals two years ahead of schedule. Their renewable energy solutions are world-class.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-28 px-6 noise-overlay">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>

        <div className="relative glass-card p-10 md:p-14 min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-card p-2 rounded-full hover:bg-accent/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground/60" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-card p-2 rounded-full hover:bg-accent/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground/60" />
          </button>
        </div>

        <div className="flex gap-2 justify-center mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-foreground/20"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
