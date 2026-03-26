import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ctaBg from "@/assets/cta-background.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="donate" className="relative py-32 overflow-hidden" ref={ref}>
      <img
        src={ctaBg}
        alt="Nigerian children playing joyfully"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-cta" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4 font-semibold">
            Join Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground leading-tight mb-6">
            Together, We Can{" "}
            <span className="text-gradient-gold">Transform Nigeria</span>
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-10">
            Whether you donate, volunteer, or partner with us — your contribution
            directly impacts families and communities across all 36 states.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://acadi.org.ng/donation"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-destructive text-destructive-foreground font-body font-bold text-sm tracking-wide rounded-full hover:brightness-110 transition-all duration-300 shadow-lg"
            >
              Donate Now
            </a>
            <a
              href="https://acadi.org.ng/become-a-volunteer/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-full hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Become a Volunteer
            </a>
            <a
              href="https://acadi.org.ng/partner"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-accent text-accent-foreground font-body font-semibold text-sm tracking-wide rounded-full hover:brightness-110 transition-all duration-300 shadow-gold"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
