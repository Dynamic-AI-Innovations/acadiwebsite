import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen } from "lucide-react";
import aboutImage from "@/assets/about-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="ACADI volunteer empowering communities"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated"
            >
              <p className="font-heading text-3xl text-accent">Since 2010</p>
              <p className="font-body text-sm text-muted-foreground">Serving Nigerian Communities</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
              Who We Are
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Faith-Driven Impact{" "}
              <span className="text-gradient-gold">Across Nigeria</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              ACADI is a faith-based NGO established under the Anglican Church of Nigeria
              to intervene in issues affecting communities, individuals, and families.
              We act in an organized, systematic, and sustained manner to overcome the
              daunting challenges facing our nation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Heart, label: "Our Vision", desc: "A godly, peaceful, and prosperous Nigeria" },
                { icon: Users, label: "Our Mission", desc: "Empowering communities through godly principles" },
                { icon: BookOpen, label: "Our Values", desc: "Faith, compassion, integrity, and service" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="text-center p-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{item.label}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
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
