import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen, Target, Globe, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PartnerVolunteerForm from "@/components/PartnerVolunteerForm";
import aboutImage from "@/assets/about-portrait.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";

const values = [
  { icon: Heart, title: "Compassion", desc: "We serve with Christ-like love and empathy for every individual." },
  { icon: Target, title: "Integrity", desc: "Transparency and accountability in every action and initiative." },
  { icon: Globe, title: "Inclusivity", desc: "Reaching every community regardless of ethnicity, language, or location." },
  { icon: Award, title: "Excellence", desc: "Delivering impactful, sustainable programs of the highest standard." },
  { icon: Users, title: "Partnership", desc: "Collaborating with local and international organizations for greater reach." },
  { icon: BookOpen, title: "Faith", desc: "Grounded in Anglican Christian principles and guided by scripture." },
];

const milestones = [
  { year: "2010", event: "ACADI established under the Anglican Church of Nigeria" },
  { year: "2013", event: "NAWADA program launched for drug abuse prevention" },
  { year: "2015", event: "Expanded to 10 Anglican provinces across Nigeria" },
  { year: "2018", event: "Malaria Intervention Program reaches 50+ communities" },
  { year: "2020", event: "Youth Empowerment Centers opened in 6 major cities" },
  { year: "2023", event: "Active across all 14 Anglican provinces, 36+ states" },
];

const AboutPage = () => {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-80px" });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-14 sm:pt-16 lg:pt-20">
        <div className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center overflow-hidden">
          <img
            src={heroSlide2}
            alt="ACADI community gathering"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-2 sm:mb-3 font-semibold">
                About ACADI
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight">
                Faith-Driven Impact
                <br />
                <span className="text-gradient-gold">Across Nigeria</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 sm:py-20 md:py-28 bg-warm-surface" ref={missionRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImage}
                  alt="ACADI volunteers empowering communities"
                  className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[520px] object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={missionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-card p-3 sm:p-5 rounded-xl shadow-elevated border border-border"
              >
                <p className="font-heading text-xl sm:text-3xl text-accent">Since 2010</p>
                <p className="font-body text-[10px] sm:text-sm text-muted-foreground">Serving Nigerian Communities</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 lg:mt-0"
            >
              <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-2 sm:mb-4 font-semibold">
                Who We Are
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4 sm:mb-6">
                A Movement of{" "}
                <span className="text-gradient-gold">Compassion</span>
              </h2>
              <p className="font-body text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                ACADI — the Anglican Compassion and Development Initiative — is a faith-based
                non-governmental organization established under the Anglican Church of Nigeria.
                We intervene in issues affecting communities, individuals, and families through
                organized, systematic, and sustained action.
              </p>
              <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Our work spans drug abuse prevention (NAWADA), malaria interventions,
                youth empowerment, godly governance training, agricultural cooperatives,
                and holistic community development across all 14 Anglican provinces and 36+ states.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                <div className="bg-card rounded-xl p-4 sm:p-5 shadow-card border-l-4 border-accent">
                  <h3 className="font-heading text-lg sm:text-xl text-foreground mb-1">Our Vision</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    A godly, peaceful, and prosperous Nigerian nation where people and communities
                    are free and empowered to worship and serve The Lord.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 sm:p-5 shadow-card border-l-4 border-nigerian-green">
                  <h3 className="font-heading text-lg sm:text-xl text-foreground mb-1">Our Mission</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    To empower Nigerian communities through godly principles, compassionate action,
                    and sustainable development programs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 sm:py-20 md:py-28 bg-background" ref={valuesRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
          >
            <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-2 sm:mb-4 font-semibold">
              Our Foundation
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-foreground leading-tight">
              Core <span className="text-gradient-gold">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-card-hover transition-shadow duration-500 text-center"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="font-heading text-base sm:text-lg md:text-xl text-foreground mb-1 sm:mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground text-[11px] sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-20 md:py-28 bg-warm-surface" ref={timelineRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
          >
            <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-2 sm:mb-4 font-semibold">
              Our Journey
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-foreground leading-tight">
              Key <span className="text-gradient-gold">Milestones</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                    <span className="font-heading text-xs sm:text-sm text-accent">{item.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent/20 mt-2" />
                  )}
                </div>
                <div className="bg-card rounded-xl p-4 sm:p-5 shadow-card flex-1 mt-1">
                  <p className="font-body text-sm sm:text-base text-foreground leading-relaxed">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden" ref={teamRef}>
        <img
          src={heroSlide4}
          alt="ACADI healthcare outreach"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-cta" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl text-primary-foreground leading-tight mb-3 sm:mb-6">
              Ready to Make a{" "}
              <span className="text-gradient-gold">Difference?</span>
            </h2>
            <p className="font-body text-primary-foreground/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
              Join thousands of volunteers, donors, and partners transforming Nigerian communities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3 sm:py-4 bg-accent text-accent-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-gold"
              >
                Get Involved <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3 sm:py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm rounded-full hover:bg-primary-foreground/10 transition-all"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <PartnerVolunteerForm />
      <FooterSection />
    </div>
  );
};

export default AboutPage;
