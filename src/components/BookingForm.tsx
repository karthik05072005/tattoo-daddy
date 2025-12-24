import { useState } from "react";
import { Send, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    tattooIdea: "",
    size: "",
    placement: "",
    preferredDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `*New Booking Request*
    
Name: ${formData.name}
Phone: ${formData.phone}
Tattoo Idea: ${formData.tattooIdea}
Size: ${formData.size}
Placement: ${formData.placement}
Preferred Date: ${formData.preferredDate}`;

    const whatsappUrl = `https://wa.me/919513169561?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Complete your booking on WhatsApp",
    });

    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="label-text text-primary mb-4 block">Book Your Session</span>
            <h2 className="heading-lg text-foreground mb-6">
              Request <span className="text-primary">Appointment</span>
            </h2>
            <p className="body-text mb-8">
              Fill in your details and we'll get back to you within 24 hours to 
              discuss your tattoo and schedule your session.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">Tattoo Idea *</label>
                <textarea
                  name="tattooIdea"
                  required
                  rows={4}
                  value={formData.tattooIdea}
                  onChange={handleChange}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Describe your tattoo idea..."
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Approximate Size</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select size</option>
                    <option value="Small (1-2 inches)">Small (1-2 inches)</option>
                    <option value="Medium (3-5 inches)">Medium (3-5 inches)</option>
                    <option value="Large (6-10 inches)">Large (6-10 inches)</option>
                    <option value="Full Sleeve/Back">Full Sleeve/Back</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Placement</label>
                  <input
                    type="text"
                    name="placement"
                    value={formData.placement}
                    onChange={handleChange}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="e.g., Forearm, Back, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-foreground mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <Button 
                type="submit" 
                variant="heroSolid" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Submit Request via WhatsApp"}
              </Button>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="bg-card border border-border p-6 mb-6">
              <h3 className="font-display text-xl text-foreground mb-4">Studio Location</h3>
              <div className="aspect-video mb-4 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9797!2d77.4859!3d12.9139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjAiTiA3N8KwMjknMDkuMiJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TATTOO DADDY Location"
                />
              </div>
              <address className="text-muted-foreground text-sm not-italic leading-relaxed">
                1890, 1st A Main Rd, near Railway Station Bus Stop,<br />
                Stage I, Kengeri Satellite Town,<br />
                Bengaluru, Karnataka – 560060
              </address>
            </div>

            <div className="bg-card border border-border p-6">
              <h3 className="font-display text-xl text-foreground mb-4">Contact Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Phone</span>
                  <a href="tel:+919513169561" className="text-primary hover:text-gold-light">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">WhatsApp</span>
                  <a href="https://wa.me/919513169561" className="text-primary hover:text-gold-light">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Hours</span>
                  <span className="text-foreground">Open till 10 PM</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="text-primary">⭐ 4.9 (264 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
