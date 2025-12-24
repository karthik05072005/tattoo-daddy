import { Shield, Sparkles, Syringe, Wind, CheckCircle } from "lucide-react";

const hygienePoints = [
  {
    icon: Syringe,
    title: "Single-Use Needles",
    description: "Every needle is brand new, sealed, and disposed of after single use."
  },
  {
    icon: Shield,
    title: "Hospital-Grade Sterilization",
    description: "All equipment is sterilized using autoclave machines to medical standards."
  },
  {
    icon: Sparkles,
    title: "Premium Inks",
    description: "We use only imported, vegan-friendly, and certified tattoo inks."
  },
  {
    icon: Wind,
    title: "Clean Environment",
    description: "Studio is sanitized before and after every session with medical-grade disinfectants."
  }
];

const HygieneSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="label-text text-primary mb-4 block">Your Safety First</span>
            <h2 className="heading-lg text-foreground mb-6">
              Hygiene & <span className="text-primary">Safety</span>
            </h2>
            
            <p className="body-text mb-8">
              Your health and safety are our top priority. We maintain the highest 
              standards of cleanliness and use only the best, certified equipment 
              and materials.
            </p>

            <div className="space-y-6">
              {hygienePoints.map((point, index) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 border border-primary flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">{point.title}</h3>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="bg-secondary border border-border p-8">
              <h3 className="font-display text-2xl text-foreground mb-6">
                Our Safety Commitment
              </h3>
              <ul className="space-y-4">
                {[
                  "Licensed and certified professional artist",
                  "Extensive training in safety protocols",
                  "Disposable gloves changed for every client",
                  "Fresh ink caps for every session",
                  "Proper waste disposal protocols",
                  "Clean and sanitized workstation",
                  "Sealed, single-use needle cartridges",
                  "Autoclave sterilization of all tools",
                  "Comfortable, private studio space"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HygieneSection;
