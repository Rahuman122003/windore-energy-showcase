import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden noise-overlay">
      {/* Parallax Video BG */}
      <motion.div
        ref={bgRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-overlay z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight max-w-5xl font-heading"
        >
          Energy Saving{" "}
          <span className="text-gradient">Renewable Solar</span>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-foreground/60 max-w-2xl"
        >
          Sustainable energy solutions for a cleaner future
        </motion.p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center">
          <motion.a
            href="#contact"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold btn-primary-glow transition-transform duration-200 hover:scale-105"
          >
            Get a Free Quote
          </motion.a>
          <motion.a
            href="#about"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="glass-card px-8 py-4 rounded-xl text-base font-semibold text-foreground/90 transition-transform duration-200 hover:scale-105"
          >
            Learn More
          </motion.a>
        </div>

        {/* Floating glass card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-16 glass-card px-8 py-4 animate-float"
        >
          <p className="text-sm text-foreground/50">
            Trusted by <span className="text-gradient font-bold">100+</span> homeowners in South India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
