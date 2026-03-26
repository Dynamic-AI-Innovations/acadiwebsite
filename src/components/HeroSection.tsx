import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="ACADI community empowerment gathering in Nigeria"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-6"
          >
            Anglican Church of Nigeria
          </motion.p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
            Compassion.{" "}
            <span className="text-gradient-gold">Development.</span>{" "}
            <br className="hidden md:block" />
            Initiative.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Empowering Nigerian communities through faith, education, and
            sustainable development — one family, one village at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#programs"
              className="px-8 py-4 bg-accent text-accent-foreground font-body font-semibold text-sm tracking-wide rounded-lg shadow-gold hover:brightness-110 transition-all duration-300"
            >
              Explore Our Programs
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm tracking-wide rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Learn About ACADI
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
