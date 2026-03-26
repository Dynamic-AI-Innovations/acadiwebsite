import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 36, suffix: "+", label: "States Reached", color: "text-accent" },
  { value: 150, suffix: "K+", label: "Lives Impacted", color: "text-nigerian-green" },
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
      {count}
      {suffix}
    </span>
  );
}

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="py-24 md:py-32 bg-gradient-teal relative overflow-hidden" ref={ref}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-4">
            Our Impact
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground leading-tight mb-4">
            Measurable Change,{" "}
            <span className="text-gradient-gold">Lasting Hope</span>
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg">
            Every number represents a family transformed, a youth empowered,
            a community renewed through faith and action.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <p className={`font-heading text-5xl md:text-6xl ${stat.color} mb-2`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-body text-primary-foreground/60 text-sm tracking-wide">
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
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <div className="w-12 h-0.5 bg-accent mx-auto mb-8" />
          <p className="font-heading text-2xl md:text-3xl text-primary-foreground/90 italic leading-relaxed mb-6">
            "To raise a godly, peaceful and prosperous Nigerian nation, where the
            people and communities are free and empowered to worship and serve The Lord."
          </p>
          <cite className="font-body text-sm text-accent not-italic tracking-wide">
            — ACADI Vision Statement
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default ImpactSection;
