import { Phone, MessageCircle, Star, Clock, MapPin, Award, Shield, Users, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Tattoo Daddy, I'd like to book a tattoo consultation.");
  const whatsappUrl = `https://wa.me/919513169561?text=${whatsappMessage}`;
  const phoneNumber = "tel:+919513169561";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Professional tattoo artist at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-4 py-20">
        {/* Trust Badge */}
        <div className="animate-fade-up opacity-0 mb-8" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary text-xs tracking-[0.2em] uppercase">
            <Award className="w-4 h-4" />
            14+ Years of Excellence
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="heading-xl text-foreground mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="text-primary">TATTOO</span> DADDY
        </h1>

        {/* Subheading */}
        <p className="body-text max-w-2xl mx-auto mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Premium Tattoo & Piercing Studio in Bengaluru
        </p>

        {/* Brand Statement */}
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          A seasoned tattoo artist blending technical mastery with artistic flair, 
          transforming visions into timeless ink.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-foreground font-medium">4.9</span>
            <span className="text-muted-foreground text-sm">Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">264+</span>
            <span className="text-muted-foreground text-sm">Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">14+</span>
            <span className="text-muted-foreground text-sm">Years</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button variant="hero" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </a>
          </Button>
          <Button variant="heroSolid" size="xl" asChild>
            <a href={phoneNumber}>
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Location & Hours */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 text-sm text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Kengeri, Bengaluru
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Open till 10 PM
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link 
          to="/gallery"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer"
          aria-label="View gallery"
        >
          <ChevronDown className="w-8 h-8" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
