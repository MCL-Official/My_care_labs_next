import Image from "next/image";

export default function  Testimonials() {
    const testimonials = [
        {
            avatar: "https://i.ibb.co/NV3sJ4S/1.png",
            name: "Jen S.",
            quote: "I just got tested here last week and My Care Labs took care of me. It was easy and quick. I called ahead and they told me I could just walk-in that day. The staff got me situated and took my sample and I got results the same day later in the afternoon. so quick!"
        },
        {
            avatar: "https://i.ibb.co/xmmTd5v/2.png",
            name: "Simon andrew",
            quote: "Amazing place!!! Mateo and Nathaly were so supportive when my mother and I went there today to get our PCR tests before travel. It is so nerve-wrecking to travel nowadays and they had the results THE SAME DAY!!! That is so amazing ."
        },
        {
            avatar: "https://i.ibb.co/tDHSWFS/3.png",
            name: "Paul A,",
            quote: "My family and I both needed a PCR test for COVID clearance for travel. It’s actually difficult to find a anyone that could perform it without hefty charges. Olivia went out of her way to come to our house to perform the PCR test for my wife."
        },
    ];

    interface Testomonial {
        avatar: string;
        name: string;
        quote: string;
    }
    return (
        <section className="relative py-14 bg-gradient-to-r from-[#d5dff7] to-[#7698e6]">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-bold sm:text-4xl">
                        Patients Love My Care Labs
                    </h3>
                    <p className="mt-3 text-gray-600"></p>
                </div>
                <div className="mt-12">
                    <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((item:Testomonial, idx:number) => (
                            <li key={idx} className="bg-white rounded-xl border shadow-md">
                                <div className="p-4">
                                    {/* Display Stars */}
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946h4.255c.67 0 .943.842.406 1.255l-3.046 2.34 1.286 3.946c.3.921-.755 1.683-1.56.97L10 11.868l-3.578 2.516c-.805.713-1.859-.049-1.56-.97l1.286-3.946-3.046-2.34c-.537-.413-.264-1.255.406-1.255h4.255l1.286-3.946z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <figure>
                                        <blockquote>
                                            <p className="text-gray-800 text-lg font-semibold px-4 py-1">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                        <div className="flex items-center gap-x-4 p-4 mt-6 bg-indigo-50">
                                            <Image alt="haresdh" width={400} height={400} src={item.avatar} className="w-16 h-16 rounded-full border-2 border-indigo-500" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
