import Navigation from "@/components/Navigation";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <SEO 
        title="Contact Us | Book Your Tattoo Appointment at Tattoo Daddy"
        description="Contact Tattoo Daddy to book your custom tattoo appointment. Get in touch with our team for consultations, pricing, and availability."
        keywords="tattoo appointment, contact tattoo studio, book tattoo, tattoo consultation, tattoo studio contact, tattoo booking"
      />
      <Navigation />
      <BookingForm />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Contact;
