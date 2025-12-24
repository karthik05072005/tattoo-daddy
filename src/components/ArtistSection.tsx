import { Award, Shield, Clock, Users } from "lucide-react";
import brandImage from "@/assets/logo.png";

const highlights = [
  { icon: Award, label: "14+ Years", desc: "Experience" },
  { icon: Users, label: "1000+", desc: "Satisfied Clients" },
  { icon: Shield, label: "Premium", desc: "Quality" },
  { icon: Clock, label: "Trusted", desc: "Since 2010" },
];

const ArtistSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="overflow-hidden">
              <img
                src={brandImage}
                alt="Tattoo Daddy - Premium Tattoo Branding Experience"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="label-text text-primary mb-4 block">Our Brand Story</span>
            <h2 className="heading-lg text-foreground mb-6">
              <span className="text-primary">14+ Years</span> of Premium Branding Experience
            </h2>
            
            <p className="body-text mb-6">
              Tattoo Daddy has been the premier destination for custom tattoos and branding excellence 
              for over 14 years, establishing a legacy of trust and artistic innovation in the tattoo industry.
            </p>
            
            <p className="body-text mb-8">
              Our brand represents the perfect fusion of artistic vision and professional service. 
              From the initial concept to the final masterpiece, we provide an unparalleled experience 
              that reflects our commitment to quality and customer satisfaction.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="text-center p-4 bg-secondary border border-border"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-foreground font-display text-lg">{item.label}</div>
                  <div className="text-muted-foreground text-xs">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Brand Values */}
            <div className="space-y-4">
              <h3 className="font-bold text-foreground mb-2">Our Brand Values:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Commitment to excellence in every design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Consistent quality and customer satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Trust and reliability built over 14+ years</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
