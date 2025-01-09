
import Marquee from "react-fast-marquee";

export const Insurance =()=>{
return (
    <div>
           <div className='container mb-3 mx-auto'>
      <div className="flex flex-col items-center mt-1">
        <h2 className="text-[#5084ff] text-5xl font-bold mr-2 py-12">Our <span className='text-gray-500'>Partners</span> </h2>
        <div className="w-full md:w-10/12">
          <div className="flex items-center h-20"> {/* Increased height */}
            {/* <span className=" text-blue-600 relative text-2xl font-bol top-4 left-0 md:left-5 w-32 mr-10"> Adjusted position */}
            {/* Trusted by */}
            {/* </span> */}

            <Marquee speed={55} gradient={false} pauseOnHover={true}>
              <div className="flex items-center space-x-24"> {/* Increased horizontal spacing */}
                <div>
                  <img src='/assets/insurance1.jpeg' className="h-16 object-contain" alt="Insurance" /> {/* Increased image height */}
                </div>
                <div>
                  <img src='/assets/insurance2.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                {/* <div>
                  <img src={svg4} className="h-16 object-contain" alt="Insurance" />
                </div> */}
                <div>
                  <img src='/assets/insurance3.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance4.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance5.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance6.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance7.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance8.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance9.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance10.jpeg' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance11.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance12.png' className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src='/assets/insurance13.png' className="h-16 object-contain" alt="Insurance" />
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
    </div>
)
}