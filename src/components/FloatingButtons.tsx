import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const whatsappMessage = encodeURIComponent("Hi Tattoo Daddy, I'd like to book a tattoo consultation.");
  const whatsappUrl = `https://wa.me/919513169561?text=${whatsappMessage}`;

  return (
    <>
      {/* WhatsApp Button - Always visible */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary hover:bg-accent text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Button - Mobile only */}
      <a
        href="tel:+919513169561"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 border-2 border-primary bg-background hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 md:hidden"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
