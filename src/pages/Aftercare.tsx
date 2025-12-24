import Navigation from "@/components/Navigation";
import AftercareSection from "@/components/AftercareSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Aftercare = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Tattoo Aftercare Guide | Proper Tattoo Care at Tattoo Daddy"
        description="Complete guide to proper tattoo aftercare. Learn how to care for your new tattoo and ensure it heals properly with our expert tips."
        keywords="tattoo aftercare, tattoo care, tattoo healing, aftercare guide, tattoo healing process, tattoo care instructions"
      />
      <Navigation />
      <AftercareSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Aftercare;
