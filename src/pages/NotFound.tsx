import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <SEO 
        title="404 Page Not Found | Tattoo Daddy"
        description="The page you're looking for doesn't exist. Return to our homepage to explore our tattoo services and portfolio."
        keywords="404 page, page not found, tattoo studio, tattoo services"
      />
      <div className="text-center">
        <h1 className="heading-xl text-primary mb-4">404</h1>
        <p className="body-text mb-8">Oops! Page not found</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
