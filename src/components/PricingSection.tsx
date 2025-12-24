import { MessageCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingItems = [
  { 
    category: "Small Tattoos", 
    size: "1-2 inches", 
    price: "₹2,000 - ₹5,000",
    description: "Perfect for minimalist designs, symbols, and small quotes"
  },
  { 
    category: "Medium Tattoos", 
    size: "3-5 inches", 
    price: "₹5,000 - ₹15,000",
    description: "Ideal for detailed designs, portraits, and custom artwork"
  },
  { 
    category: "Large Tattoos", 
    size: "6-10 inches", 
    price: "₹15,000 - ₹35,000",
    description: "Half sleeves, back pieces, and elaborate designs"
  },
  { 
    category: "Full Sleeve / Back", 
    size: "Full coverage", 
    price: "₹35,000+",
    description: "Complete sleeves, full back, and large-scale masterpieces"
  },
  { 
    category: "Cover-Up Work", 
    size: "Varies", 
    price: "Custom Quote",
    description: "Transform old tattoos into stunning new artwork"
  },
  { 
    category: "Piercings", 
    size: "Various", 
    price: "₹500 - ₹2,000",
    description: "Ear, nose, and body piercings with premium jewelry"
  },
];

const PricingSection = () => {
  const whatsappMessage = encodeURIComponent("Hi Tattoo Daddy, I'd like to get a price quote for my tattoo idea.");
  const whatsappUrl = `https://wa.me/919513169561?text=${whatsappMessage}`;

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Investment</span>
          <h2 className="heading-lg text-foreground mb-4">
            Pricing <span className="text-primary">Guide</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Quality ink is an investment that lasts a lifetime. Prices vary based on 
            design complexity, placement, and size.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingItems.map((item, index) => (
            <div
              key={item.category}
              className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="font-display text-xl text-foreground mb-2">{item.category}</h3>
              <div className="text-xs text-muted-foreground tracking-wider mb-4">{item.size}</div>
              <div className="text-2xl font-display text-primary mb-4">{item.price}</div>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="bg-secondary border border-border p-6 mb-12 flex items-start gap-4">
          <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-foreground font-medium mb-2">Pricing Factors</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Final pricing depends on design complexity, placement area, color vs. black & grey, 
              number of sessions required, and custom design work. All consultations are free 
              — reach out to discuss your vision and get an accurate quote.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Get Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
