import Navbar from "../components/Navbar";
import LegalServices from "../components/LegalServices";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-slate-800 py-20">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-white text-center">Our Legal Services</h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your specific needs. Our expert team is ready to assist you with a wide range of legal matters.
          </p>
        </div>
      </div>
      <LegalServices />
      <Footer />
    </div>
  );
} 