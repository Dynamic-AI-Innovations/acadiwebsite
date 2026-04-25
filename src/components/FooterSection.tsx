import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import acadiLogo from "@/assets/acadi-logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-teal-deep py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={acadiLogo}
                alt="ACADI Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
              <span className="font-heading text-lg sm:text-xl text-primary-foreground">ACADI</span>
            </div>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Anglican Compassion and Development Initiative — a faith-based NGO
              under the Church of Nigeria (Anglican Communion).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-base sm:text-lg text-primary-foreground mb-3 sm:mb-4">Quick Links</h3>
            <div className="flex flex-col items-start gap-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/#programs" },
                { label: "Our Team", href: "/team" },
                { label: "Partner With Us", href: "/about#get-involved" },
                { label: "Blog", href: "/news" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-block whitespace-nowrap font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-base sm:text-lg text-primary-foreground mb-3 sm:mb-4">Social Media</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Youtube, href: "https://youtube.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/30 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base sm:text-lg text-primary-foreground mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60 break-all">
                  conacadi01@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">+234 913 363 8838</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">
                  24, Douala Street, Wuse Zone 5, Abuja
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="font-body text-xs text-primary-foreground/40 text-center sm:text-left space-y-1">
            <p>Church of Nigeria (Anglican Communion)</p>
            <p>Registered with CAC as an Incorporated Trustee · Reg. No. 162096</p>
          </div>
          <p className="font-body text-xs text-primary-foreground/40 text-center sm:text-right">
            © {new Date().getFullYear()} ACADI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
