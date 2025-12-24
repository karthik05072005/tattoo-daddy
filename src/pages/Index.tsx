import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Tattoo Daddy - Professional Tattoo Studio | Custom Body Art"
        description="Experience exceptional tattoo artistry at Tattoo Daddy. Book your custom tattoo appointment with our skilled artists today. View our gallery and get inspired."
        keywords="tattoo, tattoo studio, tattoo artist, custom tattoo, body art, tattoo design, tattoo gallery, tattoo near me, professional tattoo"
      />
      <Navigation />
      <HeroSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
