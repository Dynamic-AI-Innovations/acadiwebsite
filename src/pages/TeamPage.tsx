import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg";

const teamMembers = [
  {
    name: "Rev. Canon Obinna Ekeocha",
    role: "Executive Director",
    image: team1,
    bio: "A visionary leader with over 20 years of experience in community development and faith-based initiatives across Nigeria. He founded ACADI to bridge the gap between spiritual growth and socioeconomic empowerment.",
  },
  {
    name: "Mrs. Adaeze Nwosu",
    role: "Director of Programs",
    image: team2,
    bio: "An accomplished program strategist who oversees ACADI's core initiatives including NAWADA, malaria interventions, and youth empowerment. She brings 15 years of NGO management expertise.",
  },
  {
    name: "Mr. Chukwuemeka Obi",
    role: "Communications Lead",
    image: team3,
    bio: "A creative communications professional passionate about telling the stories of impact across Nigerian communities. He manages ACADI's outreach, media, and public engagement strategy.",
  },
  {
    name: "Ms. Blessing Afolabi",
    role: "NAWADA Program Coordinator",
    image: team4,
    bio: "A dedicated youth advocate leading the NAWADA drug abuse prevention initiative. She has trained over 2,000 young Nigerians and established peer-support networks in 12 states.",
  },
  {
    name: "Alhaji Ibrahim Musa",
    role: "Community Relations Officer",
    image: team5,
    bio: "An interfaith dialogue expert who builds bridges between communities. He coordinates ACADI's grassroots partnerships with traditional rulers, local governments, and religious bodies.",
  },
  {
    name: "Ms. Funke Adeyemi",
    role: "Finance & Admin Manager",
    image: team6,
    bio: "A meticulous finance professional ensuring transparency and accountability in all of ACADI's operations. She manages donor reporting, budgets, and organizational compliance.",
  },
];

const TeamPage = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-28 sm:py-32 md:py-36 bg-gradient-teal overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.08),transparent_70%)]" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-accent font-semibold mb-3"
          >
            The People Behind ACADI
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight"
          >
            Meet Our <span className="text-gradient-gold">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-primary-foreground/70 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto"
          >
            Passionate individuals committed to transforming communities across Nigeria
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 sm:py-20 md:py-24" ref={gridRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={512}
                    height={640}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-foreground" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/90 flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Mail className="w-4 h-4 text-foreground" />
                    </a>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-lg sm:text-xl text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TeamPage;
