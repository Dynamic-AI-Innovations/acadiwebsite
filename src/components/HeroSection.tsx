import { motion } from "framer-motion";
import { Heart, Shield, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

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
  return (
    <section className="relative pt-14 sm:pt-16 lg:pt-20">
      {/* Hero image area */}
      <div className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="ACADI community empowerment gathering in Nigeria"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-4 sm:mb-6">
              Anglican Compassion
              <br />
              & Development Initiative
              <br />
              <span className="text-gradient-gold">(ACADI)</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed"
            >
              Promoting Nigerian communities through godly
              principles and compassionate action
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Overlapping feature cards */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 -mt-16 sm:-mt-20 md:-mt-24 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-elevated hover:shadow-card-hover transition-shadow duration-500 text-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-5">
                <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-3">{card.title}</h3>
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
