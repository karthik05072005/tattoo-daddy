import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    text: "Absolutely incredible work! Got a full sleeve done and the detail is mind-blowing. Super hygienic studio and professional service. Highly recommend!",
    date: "2 months ago",
  },
  {
    name: "Priya Menon",
    rating: 5,
    text: "Best tattoo experience ever. The artist really listened to what I wanted and delivered beyond my expectations. Clean, comfortable, and worth every rupee.",
    date: "1 month ago",
  },
  {
    name: "Karthik Reddy",
    rating: 5,
    text: "Got my first tattoo here and couldn't be happier. The patience and skill shown was exceptional. The studio is super clean and the vibe is great.",
    date: "3 weeks ago",
  },
  {
    name: "Ananya K",
    rating: 5,
    text: "Amazing portrait work! He captured every detail perfectly. Professional from start to finish. This is the only place I'll go for tattoos now.",
    date: "1 week ago",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Testimonials</span>
          <h2 className="heading-lg text-foreground mb-4">
            Client <span className="text-primary">Reviews</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-foreground font-display text-xl">4.9</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          <p className="body-text">Based on 264+ Google Reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-secondary-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-foreground font-medium">{review.name}</div>
                  <div className="text-muted-foreground text-xs">{review.date}</div>
                </div>
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                  alt="Google Review" 
                  className="h-6 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=tattoo+daddy+kengeri+reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors text-sm tracking-wider uppercase"
          >
            View All Reviews on Google
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
