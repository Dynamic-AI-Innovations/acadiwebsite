import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import acadiLogo from "@/assets/acadi-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "News", href: "#impact" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/98 backdrop-blur-md shadow-card py-2"
          : "bg-card/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img
            src={acadiLogo}
            alt="ACADI Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <span className="font-heading text-xl sm:text-2xl text-foreground tracking-tight">
            ACADI
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.filter(l => l.label !== "Donate").map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="px-6 py-2.5 bg-destructive text-destructive-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-sm whitespace-nowrap"
          >
            Donate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu - full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[56px] bg-card z-40"
          >
            <div className="flex flex-col h-full px-6 py-8">
              <div className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="font-body text-foreground text-xl py-4 border-b border-border/40 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 px-6 py-4 bg-destructive text-destructive-foreground font-body font-bold text-center text-lg rounded-full"
              >
                Donate Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
