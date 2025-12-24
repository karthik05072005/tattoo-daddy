import { Palette, Sparkles, Heart, User, Brush, Layers } from "lucide-react";

const styles = [
  {
    icon: Layers,
    title: "Realism",
    description: "Photorealistic tattoos that capture every detail with stunning precision.",
  },
  {
    icon: Sparkles,
    title: "Minimal",
    description: "Clean, delicate designs with fine lines and elegant simplicity.",
  },
  {
    icon: User,
    title: "Portrait",
    description: "Lifelike portraits that honor the people and moments you cherish.",
  },
  {
    icon: Heart,
    title: "Couple Tattoos",
    description: "Meaningful matching designs that celebrate your bond forever.",
  },
  {
    icon: Brush,
    title: "Custom Designs",
    description: "One-of-a-kind creations tailored to your unique vision and story.",
  },
  {
    icon: Palette,
    title: "Color & Black",
    description: "From vibrant color work to classic black & grey masterpieces.",
  },
];

const StylesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Specializations</span>
          <h2 className="heading-lg text-foreground mb-4">
            Tattoo <span className="text-primary">Styles</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Master of multiple disciplines, dedicated to bringing your vision to life 
            in the style that speaks to you.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <div
              key={style.title}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <style.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl text-foreground mb-3">{style.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
