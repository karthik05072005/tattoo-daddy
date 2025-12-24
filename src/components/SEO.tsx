import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEO = ({
  title = "Tattoo Daddy - Professional Tattoo Studio",
  description = "Experience exceptional tattoo artistry at Tattoo Daddy. Book your custom tattoo appointment with our skilled artists today.",
  keywords = "tattoo, tattoo studio, tattoo artist, custom tattoo, body art, tattoo design, tattoo gallery",
  canonicalUrl = "https://tattoodaddy.com",
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = "/tattoo-og-image.jpg",
  twitterTitle,
  twitterDescription,
  twitterImage = "/tattoo-twitter-image.jpg"
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Tattoo Daddy" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tattoo Daddy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Helmet>
  );
};

export default SEO;