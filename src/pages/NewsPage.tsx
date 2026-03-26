import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import newsHero from "@/assets/news-hero.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";
import news6 from "@/assets/news-6.jpg";

const newsArticles = [
  {
    image: news1,
    category: "Youth Empowerment",
    title: "ACADI Launches Skills Acquisition Program for 500 Youth in Abuja",
    excerpt: "A new initiative equipping young Nigerians with vocational skills to combat unemployment and build sustainable livelihoods across communities.",
    date: "March 15, 2026",
    featured: true,
  },
  {
    image: news2,
    category: "Health",
    title: "Malaria Prevention Campaign Reaches 10,000 Families in Benue State",
    excerpt: "ACADI distributes insecticide-treated nets and conducts health education workshops in underserved rural communities.",
    date: "February 28, 2026",
    featured: true,
  },
  {
    image: news3,
    category: "NAWADA",
    title: "NAWADA Anti-Drug Abuse Seminar Educates 2,000 Students",
    excerpt: "Partnering with schools across Lagos to provide drug abuse awareness and prevention training for secondary school students.",
    date: "February 10, 2026",
  },
  {
    image: news4,
    category: "Governance",
    title: "Godly Governance Training Empowers 300 Community Leaders",
    excerpt: "Anglican leaders gather for intensive training on ethical leadership, transparency, and community-centered governance practices.",
    date: "January 22, 2026",
  },
  {
    image: news5,
    category: "Women Empowerment",
    title: "Women's Vocational Training Center Opens in Enugu",
    excerpt: "A new center teaching tailoring, bead-making, and digital literacy to over 200 women, fostering economic independence.",
    date: "January 5, 2026",
  },
  {
    image: news6,
    category: "Community",
    title: "Clean Water Borehole Project Serves 5 Villages in Niger State",
    excerpt: "ACADI completes its latest clean water initiative, providing safe drinking water to thousands of rural residents.",
    date: "December 18, 2025",
  },
];

const NewsPage = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const featured = newsArticles.filter((a) => a.featured);
  const rest = newsArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={newsHero} alt="ACADI News" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-accent font-semibold mb-3"
          >
            Latest Updates
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight"
          >
            News & <span className="text-gradient-gold">Stories</span>
          </motion.h1>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {featured.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-accent-foreground font-body text-xs font-bold rounded-full">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-2 text-muted-foreground font-body text-xs sm:text-sm mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl text-foreground leading-snug mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-body text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* More Articles Grid */}
          <div ref={gridRef}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-10">
              More <span className="text-gradient-gold">Stories</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {rest.map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 bg-accent text-accent-foreground font-body text-[10px] sm:text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="font-body text-muted-foreground text-[11px] sm:text-xs mb-2">{article.date}</p>
                    <h3 className="font-heading text-base sm:text-lg text-foreground leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4">
            Want to Support Our <span className="text-gradient-gold">Mission</span>?
          </h2>
          <p className="font-body text-primary-foreground/70 text-sm sm:text-base max-w-lg mx-auto mb-6 sm:mb-8">
            Your donation helps us continue impacting lives across Nigeria.
          </p>
          <Link
            to="/donate"
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-destructive text-destructive-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-lg"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default NewsPage;
