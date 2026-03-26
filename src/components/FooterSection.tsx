import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-teal-deep py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-heading text-lg text-accent-foreground">
                A
              </div>
              <span className="font-heading text-xl text-primary-foreground">ACADI</span>
            </div>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Anglican Compassion and Development Initiative — a faith-based NGO
              under the Anglican Church of Nigeria, dedicated to holistic community
              transformation.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Youtube, href: "https://youtube.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-4">Quick Links</h3>
            {["About Us", "Our Projects", "NAWADA Program", "Partner With Us", "Blog"].map((link) => (
              <a
                key={link}
                href="#"
                className="block font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors mb-2"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg text-primary-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">
                  24, Douala Street, Wuse, Zone 5, Abuja, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">+234 913 363 8838</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">info@acadi.org.ng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} ACADI — Anglican Compassion and Development Initiative. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/30">
            Under the Anglican Church of Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
