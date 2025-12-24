import Navigation from "@/components/Navigation";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Reviews = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Customer Reviews | Tattoo Daddy Studio"
        description="Read genuine reviews from our satisfied customers at Tattoo Daddy. See why we're the top choice for custom tattoos and body art."
        keywords="tattoo reviews, customer reviews, tattoo studio reviews, tattoo artist reviews, body art testimonials"
      />
      <Navigation />
      <ReviewsSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Reviews;
