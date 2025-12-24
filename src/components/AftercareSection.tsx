import { Droplets, Sun, Hand, Clock, AlertCircle, CheckCircle } from "lucide-react";

const aftercareSteps = [
  {
    icon: Clock,
    title: "First 2-3 Hours",
    instructions: [
      "Keep the bandage on for 2-3 hours",
      "Avoid touching the tattooed area",
      "Let the area breathe after removing bandage"
    ]
  },
  {
    icon: Droplets,
    title: "Cleaning",
    instructions: [
      "Wash gently with lukewarm water",
      "Use fragrance-free antibacterial soap",
      "Pat dry with a clean paper towel"
    ]
  },
  {
    icon: Hand,
    title: "Moisturizing",
    instructions: [
      "Apply a thin layer of recommended ointment",
      "Keep the tattoo moisturized but not soggy",
      "Continue for 2-3 weeks"
    ]
  },
  {
    icon: Sun,
    title: "Protection",
    instructions: [
      "Avoid direct sunlight for 2-3 weeks",
      "No swimming pools, hot tubs, or sea water",
      "Don't scratch or pick at scabs"
    ]
  }
];

const dos = [
  "Keep tattoo clean and moisturized",
  "Wear loose, comfortable clothing",
  "Stay hydrated and eat well",
  "Follow all aftercare instructions"
];

const donts = [
  "Don't soak in water (baths, pools)",
  "Don't expose to direct sunlight",
  "Don't pick or scratch the tattoo",
  "Don't apply alcohol-based products"
];

const AftercareSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Care Guide</span>
          <h2 className="heading-lg text-foreground mb-4">
            Tattoo <span className="text-primary">Aftercare</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Proper aftercare is essential for your tattoo to heal beautifully. 
            Follow these guidelines to protect your investment.
          </p>
        </div>

        {/* Aftercare Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {aftercareSteps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 bg-card border border-border animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <step.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg text-foreground mb-4">{step.title}</h3>
              <ul className="space-y-2">
                {step.instructions.map((instruction, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="p-8 bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl text-foreground">Do's</h3>
            </div>
            <ul className="space-y-3">
              {dos.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="p-8 bg-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-destructive" />
              <h3 className="font-display text-xl text-foreground">Don'ts</h3>
            </div>
            <ul className="space-y-3">
              {donts.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary-foreground">
                  <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AftercareSection;
