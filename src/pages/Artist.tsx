import Navigation from "@/components/Navigation";
import ArtistSection from "@/components/ArtistSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Artist = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="About Us | The Tattoo Daddy Brand Story & 14+ Years of Experience"
        description="Discover the Tattoo Daddy brand story, our 14+ years of premium tattoo experience, and our commitment to quality and customer satisfaction in the tattoo industry."
        keywords="tattoo brand, tattoo daddy, about us, tattoo experience, tattoo studio, premium tattoos, tattoo industry, branding experience"
      />
      <Navigation />
      <ArtistSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Artist;
