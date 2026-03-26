import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Heart, Shield, Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-community.jpg";
import heroImage2 from "@/assets/hero-slide-2.jpg";
import heroImage3 from "@/assets/hero-slide-3.jpg";
import heroImage4 from "@/assets/hero-slide-4.jpg";

const heroSlides = [
  {
    image: heroImage1,
    alt: "ACADI community empowerment gathering in Nigeria",
    heading: (
      <>
        Anglican Compassion
        <br />
        & Development Initiative
        <br />
        <span className="text-gradient-gold">(ACADI)</span>
      </>
    ),
    subtitle: "Promoting Nigerian communities through godly principles and compassionate action",
  },
  {
    image: heroImage2,
    alt: "Nigerian Anglican church community celebrating together at golden hour",
    heading: (
      <>
        Building Communities
        <br />
        Through <span className="text-gradient-gold">Faith & Unity</span>
      </>
    ),
    subtitle: "Uniting diverse communities across all 14 Anglican provinces for collective impact",
  },
  {
    image: heroImage3,
    alt: "Nigerian youth empowerment workshop with young professionals learning skills",
    heading: (
      <>
        Empowering Youth
        <br />
        For a <span className="text-gradient-gold">Brighter Tomorrow</span>
      </>
    ),
    subtitle: "Equipping the next generation with education, vocational skills, and spiritual mentorship",
  },
  {
    image: heroImage4,
    alt: "Healthcare outreach in rural Nigerian village distributing mosquito nets",
    heading: (
      <>
        Health & Hope
        <br />
        For <span className="text-gradient-gold">Every Family</span>
      </>
    ),
    subtitle: "Malaria interventions and healthcare outreach reaching families across 36 states",
  },
];

const featureCards = [
  {
    icon: Heart,
    title: "Mission",
    desc: "Anglican Compassion & Development Initiative on community development and godly governance.",
  },
  {
    icon: Shield,
    title: "Programs",
    desc: "NAWADA for drug abuse prevention, Malaria Intervention, Youth empowerment, and health outreach.",
  },
  {
    icon: Handshake,
    title: "Partners",
    desc: "Collaborating with national and international partners to amplify impact across all 14 provinces.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative pt-14 sm:pt-16 lg:pt-20">
      {/* Hero slideshow */}
      <div className="relative min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background slides */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={slide.image}
            alt={slide.alt}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-hero" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-3 sm:mb-6">
                {slide.heading}
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-body text-sm sm:text-base md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide controls */}
        <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20 flex items-center gap-2 sm:gap-3">
          <button
            onClick={prev}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/25 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Overlapping feature cards */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 -mt-12 sm:-mt-20 md:-mt-24 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elevated hover:shadow-card-hover transition-shadow duration-500 text-center"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 md:mb-5">
                <card.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="font-heading text-base sm:text-xl md:text-2xl text-foreground mb-1 sm:mb-3">{card.title}</h3>
              <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
