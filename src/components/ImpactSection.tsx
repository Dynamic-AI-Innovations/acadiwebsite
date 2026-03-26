import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 15, suffix: ",000+", label: "People Reached", color: "text-accent" },
  { value: 50, suffix: "+", label: "Communities Supported", color: "text-nigerian-green" },
  { value: 500, suffix: "+", label: "Trained Volunteers", color: "text-accent" },
  { value: 14, suffix: "", label: "Provinces Active", color: "text-nigerian-green" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-warm-surface relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.2em] uppercase text-accent mb-3 sm:mb-4 font-semibold">
            Our Impact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-3 sm:mb-4">
            Measurable Change,{" "}
            <span className="text-gradient-gold">Lasting Hope</span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg">
            Every number represents a family transformed, a youth empowered,
            a community renewed through faith and action.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-card"
            >
              <p className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${stat.color} mb-1 sm:mb-2`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-body text-muted-foreground text-xs sm:text-sm tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-12 sm:mt-16 md:mt-20 text-center px-2"
        >
          <div className="w-12 h-0.5 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground/80 italic leading-relaxed mb-4 sm:mb-6">
            "To raise a godly, peaceful and prosperous Nigerian nation, where the
            people and communities are free and empowered to worship and serve The Lord."
          </p>
          <cite className="font-body text-xs sm:text-sm text-accent not-italic tracking-wide font-semibold">
            — ACADI Vision Statement
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default ImpactSection;
