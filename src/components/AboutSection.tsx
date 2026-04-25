import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-warm-surface" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="ACADI volunteer empowering communities"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-card p-4 sm:p-6 rounded-xl shadow-elevated border border-border"
            >
              <p className="font-heading text-2xl sm:text-3xl text-accent">Since 2010</p>
              <p className="font-body text-xs sm:text-sm text-muted-foreground">Serving Nigerian Communities</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4 font-semibold">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4 sm:mb-6">
              Faith-Driven Impact{" "}
              <span className="text-gradient-gold">Across Nigeria</span>
            </h2>
            <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
              The Anglican Compassion and Development Initiative (ACADI) is a faith-based
              non-governmental organization established under the Church of Nigeria (Anglican Communion)
              to intervene in issues affecting individuals, families and communities — extending
              the assistance of the Church to people in their everyday struggles of life.
            </p>
            <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Registered with the Corporate Affairs Commission as an Incorporated Trustee on
              22 July 2021 (CAC No. 162096), ACADI enables communities to engage with issues of
              development, welfare, health and other concerns across all 14 Anglican provinces.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {[
                { icon: Heart, label: "Our Vision", desc: "A godly, peaceful and prosperous Nigerian nation where people are free to worship and serve The Lord." },
                { icon: Users, label: "Our Mission", desc: "Promoting Nigerian communities through godly principles and interventions that teach mutual support." },
                { icon: BookOpen, label: "Our Values", desc: "Faith, compassion, integrity, and service to all communities." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="text-center p-3 sm:p-4 bg-card rounded-xl shadow-card"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-base sm:text-lg text-foreground mb-1">{item.label}</h3>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
