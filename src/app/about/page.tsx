import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-slate-800 py-20">
        <Navbar />
        <div className="container mx-auto px-4 pt-20">
          <h1 className="text-4xl font-bold text-white text-center">Translator Tool</h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Use our powerful translation tool to translate text between multiple languages.
          </p>
        </div>
      </div>
      
      <div className="py-16 px-4 container mx-auto">
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe 
            src="https://nayabharat-translater.vercel.app/" 
            title="Naya Bharat Translator" 
            className="w-full h-full"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
