import Navigation from "@/components/Navigation";
import HygieneSection from "@/components/HygieneSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Hygiene = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Hygiene & Safety | Tattoo Daddy Studio Standards"
        description="Learn about our strict hygiene and safety standards at Tattoo Daddy. We maintain the highest health standards for your safety and peace of mind."
        keywords="tattoo hygiene, tattoo safety, tattoo sterilization, hygiene standards, safe tattooing, tattoo health standards"
      />
      <Navigation />
      <HygieneSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Hygiene;
