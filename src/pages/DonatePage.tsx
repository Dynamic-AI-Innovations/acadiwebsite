import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Heart, CreditCard, Building2, Copy, Check, Shield, Users, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import donateHero from "@/assets/donate-hero.jpg";

const impactCards = [
  { icon: Heart, amount: "₦5,000", desc: "Provides mosquito nets for a family of 5" },
  { icon: Users, amount: "₦20,000", desc: "Sponsors a youth through vocational training" },
  { icon: Globe, amount: "₦50,000", desc: "Funds a community clean water borehole contribution" },
];

const DonatePage = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"transfer" | "card">("transfer");
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true, margin: "-80px" });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={donateHero} alt="Support ACADI" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs sm:text-sm tracking-[0.25em] uppercase text-accent font-semibold mb-3"
          >
            Make a Difference
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight"
          >
            Donate to <span className="text-gradient-gold">ACADI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-primary-foreground/70 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto"
          >
            Every contribution transforms lives across Nigeria
          </motion.p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Tab Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex bg-muted rounded-xl p-1.5 mb-8 sm:mb-10"
            >
              <button
                onClick={() => setActiveTab("transfer")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-lg font-body font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "transfer"
                    ? "bg-card text-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                Bank Transfer
              </button>
              <button
                onClick={() => setActiveTab("card")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-lg font-body font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "card"
                    ? "bg-card text-foreground shadow-card"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                Card Payment
              </button>
            </motion.div>

            {/* Bank Transfer */}
            {activeTab === "transfer" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-2">
                    Direct Bank Transfer
                  </h2>
                  <p className="font-body text-muted-foreground text-sm sm:text-base">
                    Send your donation directly to our bank account
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {[
                    { label: "Bank", value: "GTB (Guaranty Trust Bank)" },
                    { label: "Account Name", value: "D-DYNAMICS TECHNOLOGY SOLUTIONS" },
                    { label: "Account Number", value: "0831879528", copyable: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 bg-muted/50 rounded-xl border border-border/50"
                    >
                      <div className="mb-2 sm:mb-0">
                        <p className="font-body text-xs sm:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                          {item.label}
                        </p>
                        <p className="font-body text-base sm:text-lg font-bold text-foreground mt-0.5">
                          {item.value}
                        </p>
                      </div>
                      {item.copyable && (
                        <button
                          onClick={() => copyToClipboard(item.value)}
                          className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-body text-xs sm:text-sm font-bold rounded-full hover:brightness-110 transition-all self-start sm:self-auto"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" /> Copy
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Important Note</p>
                      <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                        After making your transfer, kindly send your payment confirmation to{" "}
                        <a href="mailto:info@acadi.org.ng" className="text-accent font-semibold hover:underline">
                          info@acadi.org.ng
                        </a>{" "}
                        or WhatsApp us with your receipt for acknowledgment.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Card Payment */}
            {activeTab === "card" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl shadow-elevated p-6 sm:p-8 md:p-10"
              >
                <div className="text-center mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-2">
                    Card Payment
                  </h2>
                  <p className="font-body text-muted-foreground text-sm sm:text-base">
                    Pay securely with your debit or credit card
                  </p>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <p className="font-body text-sm font-semibold text-foreground mb-3">Select Amount</p>
                  <div className="grid grid-cols-3 gap-3">
                    {["₦5,000", "₦10,000", "₦20,000", "₦50,000", "₦100,000", "Custom"].map((amt) => (
                      <button
                        key={amt}
                        className="py-3 sm:py-3.5 rounded-xl border-2 border-border font-body text-sm sm:text-base font-semibold text-foreground hover:border-accent hover:bg-accent/5 transition-all duration-300 focus:border-accent focus:bg-accent/5"
                      >
                        {amt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Form */}
                <div className="space-y-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>

                  <button className="w-full py-3.5 sm:py-4 bg-destructive text-destructive-foreground font-body font-bold text-sm sm:text-base rounded-xl hover:brightness-110 transition-all shadow-lg mt-2">
                    Proceed to Pay
                  </button>

                  <p className="text-center font-body text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Secured by Paystack — your data is encrypted
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-14 sm:py-16 md:py-20 bg-warm-surface" ref={impactRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              Your Donation <span className="text-gradient-gold">Impact</span>
            </h2>
            <p className="font-body text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              See how your generosity directly changes lives
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto">
            {impactCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={impactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-6 sm:p-7 text-center shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <p className="font-heading text-2xl sm:text-3xl text-foreground mb-2">{card.amount}</p>
                <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default DonatePage;
