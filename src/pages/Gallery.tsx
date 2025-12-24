import Navigation from "@/components/Navigation";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Tattoo Gallery | Sleeve, Couple, Name, Coverup & Tribal Designs | Tattoo Daddy"
        description="Browse our stunning tattoo gallery featuring sleeve designs, couple tattoos, name tattoos, coverup work, and tribal & geometric art. All tattoos created by our professionally trained artists with extensive experience."
        keywords="tattoo gallery, sleeve tattoos, couple tattoos, name tattoos, coverup tattoos, tribal tattoos, geometric tattoos, custom tattoos, tattoo art, tattoo inspiration, tattoo training"
      />
      <Navigation />
      <GallerySection />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Gallery;
