import Hero from "./components/Hero";
import LegalAdvisors from "./components/LegalAdvisors";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      <WhyChooseUs/>
      <LegalAdvisors/>
      <Footer/>
    </div>
  );
}
