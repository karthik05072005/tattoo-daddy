import { useState } from "react";
import sleeve1 from "@/assets/sleeve/sleeve1.jpg";
import sleeve2 from "@/assets/sleeve/sleeve2.jpg";
import sleeve3 from "@/assets/sleeve/sleeve3.jpg";
import sleeve4 from "@/assets/sleeve/sleeve4.jpg";
import sleeve5 from "@/assets/sleeve/sleeve5.jpg";
import sleeve6 from "@/assets/sleeve/sleeve6.jpg";
import couple1 from "@/assets/couple/couple1.jpg";
import couple2 from "@/assets/couple/couple2.jpg";
import couple3 from "@/assets/couple/couple3.jpg";
import couple4 from "@/assets/couple/couple4.jpg";
import couple5 from "@/assets/couple/couple5.jpg";
import couple6 from "@/assets/couple/couple6.jpg";
import couple7 from "@/assets/couple/couple7.jpg";
import couple8 from "@/assets/couple/couple8.jpg";
import name1 from "@/assets/name/name1.jpg";
import name2 from "@/assets/name/name2.jpg";
import name3 from "@/assets/name/name3.jpg";
import name4 from "@/assets/name/name4.jpg";
import name5 from "@/assets/name/name5.jpg";
import name6 from "@/assets/name/name6.jpg";
import name7 from "@/assets/name/name7.jpg";
import name8 from "@/assets/name/name8.jpg";
import name9 from "@/assets/name/name9.jpg";
import name10 from "@/assets/name/name10.jpg";
import coverup1 from "@/assets/coverup/coverup1.jpg";
import coverup2 from "@/assets/coverup/coverup2.jpg";
import coverup3 from "@/assets/coverup/coverup3.jpg";
import coverup4 from "@/assets/coverup/coverup4.jpg";
import coverup5 from "@/assets/coverup/coverup5.jpg";
import coverup6 from "@/assets/coverup/coverup6.jpg";
import coverup7 from "@/assets/coverup/coverup7.jpg";
import tribal1 from "@/assets/tribal-geometric/tribal1.jpg";
import tribal2 from "@/assets/tribal-geometric/tribal2.jpg";
import tribal3 from "@/assets/tribal-geometric/tribal3.jpg";
import tribal4 from "@/assets/tribal-geometric/tribal4.jpg";
import tribal5 from "@/assets/tribal-geometric/tribal5.jpg";
import tribal6 from "@/assets/tribal-geometric/tribal6.jpg";
import tribal7 from "@/assets/tribal-geometric/tribal7.jpg";
import tribal8 from "@/assets/tribal-geometric/tribal8.jpg";
import tribal9 from "@/assets/tribal-geometric/tribal9.jpg";
import tribal10 from "@/assets/tribal-geometric/tribal10.jpg";

const galleryItems = [
  { id: 1, src: sleeve1, category: "Sleeve", title: "Full Arm Sleeve Design" },
  { id: 2, src: sleeve2, category: "Sleeve", title: "Intricate Sleeve Artwork" },
  { id: 3, src: sleeve3, category: "Sleeve", title: "Colorful Sleeve Tattoo" },
  { id: 4, src: sleeve4, category: "Sleeve", title: "Detailed Sleeve Coverup" },
  { id: 5, src: sleeve5, category: "Sleeve", title: "Black & Gray Sleeve" },
  { id: 6, src: sleeve6, category: "Sleeve", title: "Full Sleeve Masterpiece" },
  { id: 7, src: couple1, category: "Couple Tattoo", title: "Matching Couple Tattoos" },
  { id: 8, src: couple2, category: "Couple Tattoo", title: "Romantic Couple Design" },
  { id: 9, src: name1, category: "Name", title: "Beautiful Name Tattoo" },
  { id: 10, src: name2, category: "Name", title: "Elegant Name Tattoo" },
  { id: 11, src: name3, category: "Name", title: "Stylish Name Design" },
  { id: 12, src: name4, category: "Name", title: "Creative Name Tattoo" },
  { id: 13, src: name5, category: "Name", title: "Artistic Name Tattoo" },
  { id: 14, src: name6, category: "Name", title: "Unique Name Design" },
  { id: 15, src: name7, category: "Name", title: "Modern Name Tattoo" },
  { id: 16, src: name8, category: "Name", title: "Classic Name Tattoo" },
  { id: 17, src: name9, category: "Name", title: "Custom Name Tattoo" },
  { id: 18, src: name10, category: "Name", title: "Personalized Name Tattoo" },
  { id: 19, src: coverup1, category: "Coverup", title: "Creative Coverup Design" },
  { id: 20, src: coverup2, category: "Coverup", title: "Effective Coverup Art" },
  { id: 21, src: coverup3, category: "Coverup", title: "Skillful Coverup Work" },
  { id: 22, src: coverup4, category: "Coverup", title: "Creative Coverup Solution" },
  { id: 23, src: coverup5, category: "Coverup", title: "Artistic Coverup Design" },
  { id: 24, src: coverup6, category: "Coverup", title: "Professional Coverup" },
  { id: 25, src: coverup7, category: "Coverup", title: "Master Coverup Art" },
  { id: 26, src: tribal1, category: "Tribal & Geometric", title: "Tribal Geometric Fusion" },
  { id: 27, src: tribal2, category: "Tribal & Geometric", title: "Intricate Tribal Design" },
  { id: 28, src: tribal3, category: "Tribal & Geometric", title: "Geometric Tribal Art" },
  { id: 29, src: tribal4, category: "Tribal & Geometric", title: "Bold Tribal Pattern" },
  { id: 30, src: tribal5, category: "Tribal & Geometric", title: "Sacred Geometry Tattoo" },
  { id: 31, src: tribal6, category: "Tribal & Geometric", title: "Abstract Geometric Design" },
  { id: 32, src: tribal7, category: "Tribal & Geometric", title: "Modern Tribal Art" },
  { id: 33, src: tribal8, category: "Tribal & Geometric", title: "Symmetrical Geometric" },
  { id: 34, src: tribal9, category: "Tribal & Geometric", title: "Complex Tribal Pattern" },
  { id: 35, src: tribal10, category: "Tribal & Geometric", title: "Contemporary Tribal" },
  { id: 36, src: couple3, category: "Couple Tattoo", title: "Beautiful Couple Tattoos" },
  { id: 37, src: couple4, category: "Couple Tattoo", title: "Elegant Matching Tattoos" },
];

const categories = ["All", "Sleeve", "Couple Tattoo", "Name", "Coverup", "Tribal & Geometric"];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="label-text text-primary mb-4 block">Our Work</span>
          <h2 className="heading-lg text-foreground mb-4">
            Premium <span className="text-primary">Portfolio</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            Each piece tells a unique story. Explore our collection of meticulously crafted tattoos.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                activeFilter === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer luxury-card animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs tracking-widest uppercase text-primary">{item.category}</span>
                  <h3 className="text-foreground font-display text-lg mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-2xl">&times;</span>
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
