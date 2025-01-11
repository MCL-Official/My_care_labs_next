"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image"; // Import Next.js Image component

export const Insurance = () => {
  return (
    <div>
      <div className="container mb-3 mx-auto">
        <div className="flex flex-col items-center mt-1">
          <h2 className="text-[#5084ff] text-5xl font-bold mr-2 py-12">
            Our <span className="text-gray-500">Partners</span>
          </h2>
          <div className="w-full md:w-10/12">
            <div className="flex items-center h-20">
              <Marquee speed={55} gradient={false} pauseOnHover={true}>
                <div className="flex items-center space-x-24">
                  {[
                    "/assets/insurance1.jpeg",
                    "/assets/insurance2.png",
                    "/assets/insurance3.png",
                    "/assets/insurance4.png",
                    "/assets/insurance5.png",
                    "/assets/insurance6.png",
                    "/assets/insurance7.png",
                    "/assets/insurance8.png",
                    "/assets/insurance9.png",
                    "/assets/insurance10.jpeg",
                    "/assets/insurance11.png",
                    "/assets/insurance12.png",
                    "/assets/insurance13.png",
                  ].map((src, index) => (
                    <div key={index}>
                      <Image
                        src={src}
                        alt={`Insurance ${index + 1}`}
                        width={64} 
                        height={64} 
                        className="object-contain" 
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
