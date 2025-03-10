import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-slate-800 py-20">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-white text-center">About BharatNyay</h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            We are dedicated to making legal services accessible, affordable, and efficient for everyone.
            Our team of expert lawyers and cutting-edge technology work together to provide you with the best legal solutions.
          </p>
        </div>
      </div>
      
      <WhyChooseUs />
      
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            At BharatNyay, our mission is to democratize legal services by leveraging technology and expertise.
            We believe that everyone deserves access to quality legal advice and representation, regardless of their
            financial situation or location. Through our innovative platform, we aim to bridge the gap between
            legal professionals and those who need their services.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 