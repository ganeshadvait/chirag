// File: app/medical-tourism/page.tsx
import Header from "@/components/header/header";
import MtHero from "@/components/medicalTourism/mtHero";
import Doctors from "@/components/medicalTourism/doctors";
import Why from "@/components/medicalTourism/why";
import Treatments from "@/components/medicalTourism/treatments";
import Journey from "@/components/medicalTourism/journey";
import Services from "@/components/medicalTourism/services";
import Testimonials from "@/components/medicalTourism/testimonials";
import FAQs from "@/components/medicalTourism/faqs";
import MtBottomCta from "@/components/medicalTourism/ctaBanner";
import WhatsAppFloat from "@/components/medicalTourism/whatsAppFloat";
import FooterComponent from "@/components/footer/footer";

export default function MedicalTourismPage() {
  return (
    <>
      <Header
        PhoneNumber={"08065916415"}
        mobilectatext={"Call Now"}
        mobileNumberHeader={"tel:08065916415"}
      />
      <MtHero />
      <Doctors />
      <Why />
      <Treatments />
      <Journey />
      <Services />
      <Testimonials />
      <FAQs />
      {/* <MtBottomCta /> */}
      <WhatsAppFloat />
      <FooterComponent
        footerdesc="About Chirag Global Hospitals"
        extradesc="Providing trusted care with decades of experience in diagnosing and treating colorectal and digestive health conditions."
        footernumber="08065916415"
      />
    </>
  );
}