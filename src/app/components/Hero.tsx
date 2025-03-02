import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero(){
    return (
        <>
        <Navbar/>
        <div className="relative w-screen h-screen">
            <div className="absolute inset-0 z-10">
                <div className="h-full flex items-center justify-between px-20">
                    <div className="max-w-xl">
                        <h1 className="font-poppins text-5xl text-white mb-4">
                            Trust your future & <br/>
                            <span className="text-red-500 font-bold">Peaceful life</span>
                        </h1>
                        <p className="font-poppins text-white/80 text-lg">
                            Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam amet donec enim. Et viverra mauris.
                        </p>
                    </div>
                    <div className="relative w-[400px] h-[400px]">
                        <Image 
                            src="/white-round.png"
                            alt="white-round"
                            fill
                            className="object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-[380px] h-[380px]">
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