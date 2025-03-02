import Image from "next/image";

export default function Navbar(){
    return (
        <nav className="fixed top-5 left-4 right-4 bg-white z-50 rounded-sm">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="/navbar.jpeg"
                        alt="Navbar Logo"
                        height={40}
                        width={40}
                        className="object-contain"
                    />
                </div>
                
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
                    <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
                    <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
                    <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
                </div>
            </div>
        </nav>
    )
}