import Image from "next/image";
import { FC } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  bgColor: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, iconSrc, bgColor }) => {
  return (
    <div className={`rounded-lg p-8 ${bgColor} transition-transform hover:scale-105`}>
      <div className="flex justify-center mb-6">
        <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
          <Image 
            src={iconSrc}
            alt={title}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-center text-gray-700">{description}</p>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      title: "Immigration",
      description: "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
      iconSrc: "/icons/immigration.svg",
      bgColor: "bg-blue-100"
    },
    {
      title: "Matrimonial",
      description: "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
      iconSrc: "/icons/matrimonial.svg",
      bgColor: "bg-red-50"
    },
    {
      title: "Property",
      description: "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
      iconSrc: "/icons/property.svg",
      bgColor: "bg-amber-50"
    },
    {
      title: "Personal",
      description: "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
      iconSrc: "/icons/personal.svg",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-start justify-between mb-12">
        <div className="max-w-xl mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Trust your future &<br />
            <span className="text-red-500">Peaceful life</span>
          </h2>
          <p className="text-gray-700">
            Secure your future with trusted legal solutions
            designed for peace of mind. Whether it&apos;s estate
            planning, will creation, or legal protection,
            BharatNyay ensures your rights and assets are
            safeguarded for a stress-free tomorrow.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Service cards slider */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scrollbar-hide relative z-10">
          {services.map((service, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
              <ServiceCard
                title={service.title}
                description={service.description}
                iconSrc={service.iconSrc}
                bgColor={service.bgColor}
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-20 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md z-20 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 