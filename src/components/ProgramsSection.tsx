import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Leaf, Scale, Users } from "lucide-react";
import nawadaImg from "@/assets/programs-nawada.jpg";
import youthImg from "@/assets/programs-youth.jpg";
import governanceImg from "@/assets/programs-governance.jpg";
import empowermentImg from "@/assets/programs-empowerment.jpg";

const programs = [
  {
    icon: Shield,
    title: "NAWADA",
    subtitle: "Drug Abuse Prevention",
    desc: "National Anglican War Against Drug Abuse — training volunteers, establishing drug-free clubs, and partnering with NDLEA across all provinces.",
    image: nawadaImg,
    tag: "Flagship Program",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    subtitle: "Education & Skills",
    desc: "Equipping young Nigerians with education, vocational skills, and spiritual mentorship for a brighter future.",
    image: youthImg,
    tag: "Education",
  },
  {
    icon: Scale,
    title: "Godly Governance",
    subtitle: "Advocacy & Training",
    desc: "Advocating for righteous policies and training leaders to influence governance systems toward justice and integrity.",
    image: governanceImg,
    tag: "Governance",
  },
  {
    icon: Leaf,
    title: "Community Development",
    subtitle: "Agriculture & Health",
    desc: "Malaria interventions, agricultural cooperatives, nutrition programs, and economic empowerment for families.",
    image: empowermentImg,
    tag: "Development",
  },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4 font-semibold">
            Our Programs
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-3 sm:mb-4">
            Transforming Lives Through{" "}
            <span className="text-gradient-gold">Holistic Care</span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg">
            From drug abuse prevention to economic empowerment, our programs reach
            every corner of Nigerian communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1 bg-accent/90 text-accent-foreground text-[10px] sm:text-xs font-body font-semibold tracking-wide rounded-full">
                  {program.tag}
                </span>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <program.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg sm:text-xl text-foreground truncate">{program.title}</h3>
                    <p className="font-body text-[10px] sm:text-xs text-muted-foreground">{program.subtitle}</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
