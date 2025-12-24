import { useParams } from "react-router-dom";
import { Calendar, User, MessageCircle, Share2, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Tattoo Design: From Concept to Canvas",
      excerpt: "Discover the creative process behind designing custom tattoos, from initial sketches to the final masterpiece on skin.",
      date: "December 15, 2025",
      author: "Tattoo Daddy",
      readTime: "5 min read",
      content: `The art of tattoo design is a fascinating journey that begins with an idea and transforms into a permanent piece of body art. The process involves several stages, each requiring creativity, skill, and a deep understanding of both the client's vision and the technical aspects of tattooing.

At the initial consultation, the artist works closely with the client to understand their vision, preferences, and the story they want their tattoo to tell. This is where the creative process truly begins, as the artist starts to visualize how the concept will look on the human form.

The design phase involves sketching initial concepts, refining details, and considering how the design will work with the body's natural contours. The artist must think about size, placement, and how the design will age over time. Factors like skin type, body hair, and the area of placement all influence the final design decisions.

Color selection is another crucial aspect of the design process. Some designs work better in black and gray, while others benefit from vibrant colors. The artist considers how colors will fade over time and which combinations will provide the best long-term results.

Finally, the artist creates detailed stencils that will be transferred to the skin. This is where technical precision meets artistic vision, ensuring that the final tattoo will match the intended design while accounting for the unique canvas of human skin.

The collaboration between artist and client during this process is essential for creating a tattoo that both parties are satisfied with. Good communication throughout the design process helps ensure that expectations are aligned and the final result meets the client's vision.`
    },
    {
      id: 2,
      title: "Aftercare Essentials: Keeping Your Ink Looking Fresh",
      excerpt: "Proper aftercare is crucial for maintaining the quality and longevity of your new tattoo. Here's our comprehensive guide.",
      date: "December 10, 2025",
      author: "Tattoo Daddy",
      readTime: "7 min read",
      content: `Proper aftercare is one of the most critical aspects of getting a new tattoo. Your tattoo is essentially an open wound, and how you care for it during the healing process will significantly impact how it looks once fully healed and how long it lasts.

Immediately after getting your tattoo, your artist will cover it with a protective wrap. Keep this on for the time specified by your artist, typically 2-6 hours. When you remove the wrap, gently wash the tattoo with antimicrobial soap and lukewarm water. Pat dry with a clean paper towel.

Apply a thin layer of the recommended aftercare product. Avoid using petroleum-based products like Vaseline, as they can clog pores and trap bacteria. Instead, use specialized tattoo aftercare products or fragrance-free lotions.

During the first few days, your tattoo will begin to peel and flake. This is normal and part of the healing process. Never pick at the peeling skin, as this can cause scarring or color loss. Keep the area moisturized and avoid excessive sun exposure.

Avoid swimming, hot tubs, and excessive sweating for at least 2-3 weeks. These can introduce bacteria to the healing tattoo and cause infections. Also, avoid direct sunlight, which can fade colors and cause irritation.

The complete healing process can take 2-4 weeks for the surface to heal, but deeper healing can take months. During this time, continue moisturizing regularly and protecting the tattoo from sun exposure with SPF 30+ sunscreen.

If you notice signs of infection such as excessive redness, swelling, pus, or fever, contact your tattoo artist or a healthcare professional immediately.`
    },
    {
      id: 3,
      title: "Understanding Tattoo Styles: A Complete Guide",
      excerpt: "From traditional to realistic, watercolor to geometric - explore the most popular tattoo styles and find the perfect fit for you.",
      date: "December 5, 2025",
      author: "Tattoo Daddy",
      readTime: "6 min read",
      content: `Tattooing has evolved into an incredibly diverse art form with numerous distinct styles, each with its own characteristics, techniques, and aesthetic appeal. Understanding these styles can help you choose the perfect design that matches your personality and preferences.

Traditional tattoos, also known as "old school," are characterized by bold outlines, limited color palettes, and classic imagery like roses, anchors, and pin-up girls. This style has a timeless appeal and holds up well over time due to its bold lines and simple color schemes.

Realistic tattoos aim to recreate images as lifelike as possible. These can include portraits, animals, or landscapes that appear to be photographs on skin. This style requires exceptional skill from the artist and is popular for memorial tattoos or portraits of loved ones.

Watercolor tattoos mimic the appearance of watercolor paintings on skin, with soft edges, flowing colors, and artistic splashes. These tattoos often look like paintings rather than traditional tattoos and are popular for their artistic appearance.

Geometric tattoos use precise lines, shapes, and patterns to create designs. These can range from simple geometric shapes to complex sacred geometry patterns. They often have a modern, clean appearance and can incorporate other styles.

Blackwork tattoos focus on bold, solid black areas and heavy shading. This style can range from simple black designs to complex patterns and mandalas. Blackwork tattoos often have a bold, dramatic appearance.

New School tattoos feature bright colors, cartoon-like features, and exaggerated proportions. This style is more modern and playful, often featuring characters or imagery in a stylized format.

Minimalist tattoos focus on simple, clean lines and often feature small, subtle designs. These are perfect for first-time tattoo recipients or those who prefer understated body art.

When choosing a style, consider how it will age, the level of detail you want, and the skill level of available artists in your area. Some styles require specific expertise, so research artists who specialize in your preferred style.`
    },
    {
      id: 4,
      title: "Top 10 Tattoo Placement Ideas for First-Timers",
      excerpt: "Choosing your first tattoo can be overwhelming. We've compiled the most popular placement ideas for beginners.",
      date: "November 28, 2025",
      author: "Tattoo Daddy",
      readTime: "4 min read",
      content: `Getting your first tattoo is an exciting milestone, but choosing the right placement can be challenging. The placement affects not only how your tattoo looks but also the pain level, healing process, and how easily it can be shown or hidden.

1. Forearm: A popular choice for first-time tattoos due to minimal pain and easy visibility. The skin is relatively thick and holds ink well.

2. Upper arm: Offers a large canvas with less sensitivity. Great for medium to large designs that you want to show off.

3. Calf: Provides a flat surface area with moderate pain levels. Good for designs that flow with the muscle.

4. Thigh: Offers a large, flat area with minimal pain. Good for larger, detailed pieces.

5. Shoulder blade: Provides a large canvas that's easily hidden under clothing. Moderate pain level.

6. Behind the ear: For very small, delicate designs. More painful but great for subtle pieces.

7. Wrist: Popular for small, meaningful symbols or text. Moderate pain due to proximity to bones.

8. Ankle: Good for small, delicate designs. Can be more painful due to proximity to bone.

9. Upper back: Large canvas area with low pain level. Easily hidden under most clothing.

10. Ribcage: For those wanting a more private, intimate placement. Can be quite painful, especially for lower ribs.

When choosing placement, consider your pain tolerance, profession, lifestyle, and how the design will age in that location. Areas with less fat, more nerve endings, or constant friction will be more painful and may not age as well.

Think about whether you want your tattoo to be visible at work or easily hidden. Some professions have strict policies about visible tattoos, so consider your career path.

Also consider how the placement will change with age, weight fluctuations, or pregnancy, which might affect the appearance of your tattoo over time.`
    },
    {
      id: 5,
      title: "The Evolution of Tattoo Culture Through the Decades",
      excerpt: "From sailors to celebrities - how tattoo culture has transformed and become mainstream in modern society.",
      date: "November 20, 2025",
      author: "Tattoo Daddy",
      readTime: "8 min read",
      content: `Tattoo culture has undergone a dramatic transformation over the past century, evolving from a subcultural practice associated with sailors and outcasts to a mainstream form of self-expression embraced by people from all walks of life.

In the early 1900s, tattoos were primarily associated with sailors, circus performers, and military personnel. These early adopters often got tattoos as souvenirs of their travels or to commemorate their service. The designs were typically simple and bold, reflecting the limitations of early tattoo equipment.

The 1960s and 70s saw tattoos become associated with counterculture movements, bikers, and rebels. This period established many stereotypes about tattooed individuals that would persist for decades. Despite the negative associations, the art form continued to evolve technically.

The 1980s and 90s brought more sophisticated equipment and techniques, allowing for more detailed and colorful tattoos. However, the stigma remained strong in mainstream society, and many tattooed individuals faced discrimination in professional settings.

The 2000s marked a turning point as celebrities began prominently displaying their tattoos, helping to normalize the practice. Reality TV shows featuring tattoo artists also contributed to the growing acceptance of tattoos as art.

Today, tattoos are more accepted than ever before. Surveys show that nearly one in three adults have at least one tattoo. The practice has become mainstream across age groups, professions, and social classes.

Modern tattoo culture emphasizes artistry and personal expression. Tattoo artists are recognized as legitimate artists, and tattoo conventions draw thousands of visitors. The stigma has largely lifted, with tattoos now seen as a form of personal art and self-expression.

Social media has also played a significant role in normalizing tattoos and connecting tattoo artists with clients. Artists can showcase their work to global audiences, and clients can research and plan their tattoos more thoroughly than ever before.

The future of tattoo culture continues to evolve with new techniques, safer equipment, and innovative approaches to the art form.`
    },
    {
      id: 6,
      title: "Debunking Common Tattoo Myths and Misconceptions",
      excerpt: "Separating fact from fiction when it comes to tattoos. We address the most common myths and concerns.",
      date: "November 15, 2025",
      author: "Tattoo Daddy",
      readTime: "5 min read",
      content: `Despite the growing acceptance of tattoos, many myths and misconceptions still persist. Let's address some of the most common concerns and separate fact from fiction.

Myth: "Tattoos are unprofessional"
Fact: Many successful professionals have tattoos, and workplace attitudes continue to evolve. The key is choosing appropriate placement and designs that align with your career expectations.

Myth: "Tattoos are dangerous and unhygienic"
Fact: Reputable tattoo studios follow strict health and safety protocols. Licensed artists use sterile equipment, fresh ink, and proper aftercare procedures to ensure client safety.

Myth: "Tattoos don't last and fade quickly"
Fact: With proper care and quality work, tattoos can last decades. The artist's skill, ink quality, and aftercare all play crucial roles in longevity.

Myth: "You can't donate blood if you have tattoos"
Fact: This is generally false in most countries, including the US and UK, provided the tattoo was done at a licensed, regulated facility.

Myth: "Tattoos interfere with MRI scans"
Fact: While some tattoo inks contain metals that can cause minor heating during MRI, serious complications are extremely rare. Inform your technician about tattoos if you have them.

Myth: "All tattoo artists are the same"
Fact: Tattoo artists vary greatly in skill, specialization, and artistic ability. Research and choose an artist who specializes in your desired style and has a portfolio you admire.

Myth: "Tattoos are easy to remove"
Fact: Tattoo removal is expensive, time-consuming, and often leaves scarring. It's always better to be certain about your tattoo choice than to rely on removal.

Myth: "Tattoos cause skin cancer"
Fact: No scientific evidence links tattoos to skin cancer. However, tattoos can make it harder to spot changes in moles, so regular skin checks are important.

Myth: "Tattoos are easy to get"
Fact: Getting a tattoo requires research, planning, and preparation. It's a permanent decision that deserves careful consideration of design, placement, and artist selection.

Always choose licensed, reputable tattoo artists who follow proper health and safety protocols. Research thoroughly before getting your first tattoo to ensure the best possible experience and results.`
    }
  ];

  const blogPost = blogPosts.find(post => post.id === parseInt(id || "1"));

  if (!blogPost) {
    return (
      <main className="min-h-screen bg-background">
        <SEO 
          title="Blog Post Not Found | Tattoo Daddy"
          description="The blog post you're looking for doesn't exist. Explore our other tattoo articles and insights."
          keywords="tattoo blog, blog post, tattoo articles, tattoo tips"
        />
        <Navigation />
        <div className="container-luxury px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
        <FloatingButtons />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title={`${blogPost.title} | Tattoo Daddy Blog`}
        description={blogPost.excerpt}
        keywords={`${blogPost.title.toLowerCase().replace(/[\s\-]/g, ', ')}, tattoo, body art, tattoo tips, tattoo advice`}
      />
      <Navigation />
      
      <article className="py-16 md:py-24">
        <div className="container-luxury px-4 max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{blogPost.author}</span>
              </div>
              <span>{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button variant="ghost" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>
            
            <div className="prose prose-lg max-w-none">
              {blogPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-bold mb-6">About the Author</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                {blogPost.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold">{blogPost.author}</h4>
                <p className="text-muted-foreground">Professional tattoo artist with over 10 years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default BlogPost;