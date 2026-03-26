import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/98 backdrop-blur-md shadow-card py-3"
          : "bg-card/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center">
            <span className="font-heading text-lg text-accent-foreground leading-none">✝</span>
          </div>
          <span className="font-heading text-2xl text-foreground tracking-tight">
            ACADI
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.filter(l => l.label !== "Donate").map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="px-7 py-2.5 bg-destructive text-destructive-foreground font-body font-bold text-sm rounded-full hover:brightness-110 transition-all shadow-sm"
          >
            Donate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-foreground text-lg py-2 border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-destructive text-destructive-foreground font-body font-bold text-center rounded-full"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
