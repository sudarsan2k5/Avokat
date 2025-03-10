import Image from "next/image";

export default function LegalAdvisors(){
    return(
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Legal Advisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-[400px] md:h-[500px]">
                    <Image 
                        src="/LegalAdvisors.png"
                        alt="Legal Advisors"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                
                <div className="bg-amber-50 p-8 rounded-lg flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Expert Legal Guidance</h3>
                    <p className="text-gray-700 mb-6">
                        Our team of experienced legal professionals is dedicated to providing you with the highest quality legal services. We understand that legal matters can be complex and stressful, which is why we're committed to making the process as smooth and straightforward as possible.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Personalized legal solutions
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Experienced legal professionals
                        </li>
                        <li className="flex items-center">
                            <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Transparent communication
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}