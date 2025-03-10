import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="fixed top-5 left-4 right-4 bg-white z-50 rounded-lg shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="/navbar.jpeg"
                        alt="BharatNyay Logo"
                        height={40}
                        width={40}
                        className="object-contain"
                    />
                    <span className="ml-2 font-bold text-gray-800">BharatNyay</span>
                </div>
                
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
                    <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">Translator</Link>
                    <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</Link>
                </div>

                <div className="md:hidden">
                    <button className="text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}