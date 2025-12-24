import { Calendar, User, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Tattoo Design: From Concept to Canvas",
      excerpt: "Discover the creative process behind designing custom tattoos, from initial sketches to the final masterpiece on skin.",
      date: "December 15, 2025",
      author: "Tattoo Daddy",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Aftercare Essentials: Keeping Your Ink Looking Fresh",
      excerpt: "Proper aftercare is crucial for maintaining the quality and longevity of your new tattoo. Here's our comprehensive guide.",
      date: "December 10, 2025",
      author: "Tattoo Daddy",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Understanding Tattoo Styles: A Complete Guide",
      excerpt: "From traditional to realistic, watercolor to geometric - explore the most popular tattoo styles and find the perfect fit for you.",
      date: "December 5, 2025",
      author: "Tattoo Daddy",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Top 10 Tattoo Placement Ideas for First-Timers",
      excerpt: "Choosing your first tattoo can be overwhelming. We've compiled the most popular placement ideas for beginners.",
      date: "November 28, 2025",
      author: "Tattoo Daddy",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "The Evolution of Tattoo Culture Through the Decades",
      excerpt: "From sailors to celebrities - how tattoo culture has transformed and become mainstream in modern society.",
      date: "November 20, 2025",
      author: "Tattoo Daddy",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Debunking Common Tattoo Myths and Misconceptions",
      excerpt: "Separating fact from fiction when it comes to tattoos. We address the most common myths and concerns.",
      date: "November 15, 2025",
      author: "Tattoo Daddy",
      readTime: "5 min read"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Tattoo Blog | Tips, Trends & Industry Insights"
        description="Stay updated with the latest tattoo trends, aftercare tips, and industry insights from our professional tattoo artists at Tattoo Daddy."
        keywords="tattoo blog, tattoo tips, tattoo trends, tattoo care, tattoo industry, tattoo artist blog, tattoo inspiration"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-luxury px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Tattoo</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and stories from the world of ink
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container-luxury px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg">
              Load More Articles
              <MessageCircle className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Blogs;