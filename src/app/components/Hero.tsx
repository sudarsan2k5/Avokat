import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero(){
    return (
        <>
        <Navbar/>
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 z-10">
                <div className="h-full flex items-center justify-between px-4 md:px-20 container mx-auto">
                    <div className="max-w-xl">
                        <h1 className="font-poppins text-4xl md:text-5xl text-white mb-4 font-bold">
                            Trust your future & <br/>
                            <span className="text-red-500">Peaceful life</span>
                        </h1>
                        <p className="font-poppins text-white/80 text-base md:text-lg mb-8">
                            Secure your future with trusted legal solutions
                            designed for peace of mind. Whether it&apos;s estate
                            planning, will creation, or legal protection,
                            BharatNyay ensures your rights and assets are
                            safeguarded for a stress-free tomorrow.
                        </p>
                        <Link href="/services">
                            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
                                Explore Our Services
                            </button>
                        </Link>
                    </div>
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] hidden md:block">
                        <Image 
                            src="/white-round.png"
                            alt="white-round"
                            fill
                            className="object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
                                <Image 
                                    src="/law-round.png"
                                    alt="law-image"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image 
                src="/img1.png"
                alt="hero-background"
                fill
                className="object-cover"
                priority
            />
        </div>
        </>
    )
}