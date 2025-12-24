import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Instagram, Clock } from "lucide-react";

const Footer = () => {
  const whatsappMessage = encodeURIComponent("Hi Tattoo Daddy, I'd like to book a tattoo consultation.");
  const whatsappUrl = `https://wa.me/919513169561?text=${whatsappMessage}`;

  const quickLinks = [
    { label: "Gallery", href: "/gallery" },
    { label: "Styles", href: "/styles" },
    { label: "Artist", href: "/artist" },
    { label: "Reviews", href: "/reviews" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4">
              <span className="text-primary">TATTOO</span> DADDY
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              A seasoned tattoo artist blending technical mastery with artistic flair, 
              transforming visions into timeless ink.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/official_tattoo_daddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium mb-4 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-medium mb-4 tracking-wider uppercase text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Custom Tattoos</li>
              <li>Cover-Up Work</li>
              <li>Portrait Tattoos</li>
              <li>Minimal Designs</li>
              <li>Color & Black Grey</li>
              <li>Piercings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-medium mb-4 tracking-wider uppercase text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  1890, 1st A Main Rd, Kengeri Satellite Town, 
                  Bengaluru, Karnataka – 560060
                </span>
              </li>
              <li>
                <a href="tel:+919513169561" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                Open till 10 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TATTOO DADDY. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Premium Tattoo Studio in Kengeri, Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
