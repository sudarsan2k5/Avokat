import Image from "next/image";

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  borderClasses?: string;
}

const ServiceItem = ({ icon, title, description, bgColor, borderClasses = "border-b border-r" }: ServiceItemProps) => {
  return (
    <div className={`p-8 ${borderClasses} border-gray-200 flex flex-col items-start`}>
      <div className={`${bgColor} p-4 rounded-lg mb-6`}>
        <Image 
          src={icon} 
          alt={title} 
          width={32} 
          height={32}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function LegalServices() {
  const services = [
    {
      icon: "/icons/immigration-doc.svg",
      title: "Immigration assistance",
      description: "Expert legal support for visas & residency",
      bgColor: "bg-amber-50",
      borderClasses: "border-b border-r"
    },
    {
      icon: "/icons/intellectual-property.svg",
      title: "Intellectual property",
      description: "Protect your ideas with ease",
      bgColor: "bg-green-50",
      borderClasses: "border-b border-r"
    },
    {
      icon: "/icons/compliance.svg",
      title: "Compliance lawyer",
      description: "Navigate legal regulations hassle-free",
      bgColor: "bg-pink-50",
      borderClasses: "border-b"
    },
    {
      icon: "/icons/will.svg",
      title: "Making a will",
      description: "Secure your future legally",
      bgColor: "bg-purple-100",
      borderClasses: "border-r"
    },
    {
      icon: "/icons/documentation.svg",
      title: "Legal documentation",
      description: "Verified, tamper-proof documents",
      bgColor: "bg-purple-100",
      borderClasses: "border-r"
    },
    {
      icon: "/icons/estate.svg",
      title: "Estate planning",
      description: "Secure your assets and ensure a hassle-free future",
      bgColor: "bg-purple-100",
      borderClasses: ""
    }
  ];

  return (
    <div className="py-16 px-4 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-700 mb-4">
          Experience a Smarter
        </h2>
        <h2 className="text-4xl font-bold text-red-500 mb-12">
          Legal Solution at Your Fingertips
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg overflow-hidden">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
            borderClasses={service.borderClasses}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
          Talk to lawyer
        </button>
      </div>
    </div>
  );
} 