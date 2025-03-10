import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  position: "left" | "right";
}

const Feature = ({ title, description, icon, position }: FeatureProps) => {
  if (position === "left") {
    return (
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-end mb-12 md:mb-16">
        <div className="text-center md:text-right mb-4 md:mb-0 md:mr-6 max-w-xs">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm md:text-base">{description}</p>
        </div>
        <div className="bg-slate-700 rounded-full p-4 w-16 h-16 flex items-center justify-center">
          <Image src={icon} alt={title} width={28} height={28} className="object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mb-12 md:mb-16">
      <div className="bg-slate-700 rounded-full p-4 w-16 h-16 flex items-center justify-center">
        <Image src={icon} alt={title} width={28} height={28} className="object-contain" />
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0 md:ml-6 max-w-xs">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const leftFeatures = [
    {
      title: "Expert & Verified Lawyers",
      description: "Professional support 24/7",
      icon: "/icons/lawyers.svg"
    },
    {
      title: "Secure & Confidential",
      description: "Blockchain-backed tamper-proof documents",
      icon: "/icons/secure.svg"
    },
    {
      title: "User-Centric",
      description: "Community-led support for maximum satisfaction",
      icon: "/icons/user-centric.svg"
    }
  ];

  const rightFeatures = [
    {
      title: "Saves Time",
      description: "Instant legal advice anytime, anywhere",
      icon: "/icons/time.svg"
    },
    {
      title: "Affordable & Accessible",
      description: "Get legal help without financial burden",
      icon: "/icons/affordable.svg"
    },
    {
      title: "AI-Powered Multilingual Chatbot",
      description: "Get instant legal guidance in your preferred language",
      icon: "/icons/chatbot.svg"
    }
  ];

  return (
    <div className="py-16 md:py-20 px-4 container mx-auto relative">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-700 text-center mb-16 md:mb-20">
        Why Choose Us
      </h2>

      <div className="flex flex-col md:flex-row">
        {/* Left column */}
        <div className="w-full md:w-1/3 order-2 md:order-1">
          {leftFeatures.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              position="left"
            />
          ))}
        </div>

        {/* Center column with image */}
        <div className="w-full md:w-1/3 flex justify-center items-center mb-12 md:mb-0 order-1 md:order-2">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 bg-slate-700 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/lawyer-avatar.png"
                alt="Legal Assistant"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/3 order-3">
          {rightFeatures.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              position="right"
            />
          ))}
        </div>
      </div>

      {/* Quote mark */}
      <div className="text-slate-200 text-6xl md:text-9xl font-serif absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 opacity-30 md:opacity-50 z-0">
        "
      </div>
    </div>
  );
} 