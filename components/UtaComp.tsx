import Timer from "./Client_components/Timer"; 

const UtaComp = () => {
  return (
    <section
      className="sm:pt-24 pt-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/assets/uti-background.png')`, 
      }}
    >
      <div className="mx-4 px-4 sm:px-6 md:px-8 flex flex-col min-[1025px]:flex-row  items-center min-[1025px]:justify-between relative z-10">
        <div className="text-left md:text-left min-[1025px]:w-3/6 sm:pl-4 grow w-full sm:mb-24">
          <div className="xl:text-[5rem] sm:text-6xl text-3xl text-gray-800 font-extrabold font-montserrat">
            <span className="text-orange-500">UTI</span> TESTING
          </div>
          <div className="xl:text-[5rem] sm:text-6xl text-3xl text-gray-800 font-extrabold mt-0 font-montserrat">
            LAUNCHING SOON
          </div>
          <div className="text-gray-700 lg:text-2xl text-lg text-left leading-relaxed min-[1025px]:w-9/12 sm:w-11/12 w-full font-poppins">
            Say goodbye to uncertainty with our accurate and convenient UTI
            Testing.
          </div>

          <div
            style={{ fontSize: "2.5rem" }}
            className="font-bold text-center mt-3 font-poppins"
          >
            Launching in:
          </div>

          {/* Timer Component */}
          <Timer />

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 justify-center mt-4">
            <a
              href="/uti"
              className="py-2 px-4 text-xl text-white text-center font-medium bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-500 no-underline w-72"
            >
              Learn More & Pre-Book
            </a>
            <a
              href="tel:800-790-4550"
              className="py-2 text-3xl px-4 flex items-center gap-2 text-orange-600 font-bold border border-orange-600 rounded-lg hover:bg-orange-50 no-underline w-72 flex justify-center"
            >
              <span className="text-xl">📞</span> 800-790-4550
            </a>
          </div>
        </div>

        {/* Right Side Image Section */}
        <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-md h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="absolute lg:top-[27%] sm:top-[10%] top-[15%] sm:right-[60%] right-[50%] w-40 h-32 sm:w-56 sm:h-40 xl:w-72 xl:h-52 outline-1 rounded-2xl bg-white drop-shadow-lg p-2 xl:text-xl sm:text-md sm:leading-6 text-xs font-poppins">
            Get ready for fast, reliable, and professional UTI testing at My
            Care Labs. Be the first to experience our seamless booking and
            accurate diagnostics.
          </div>
          {/* Circle Behind */}
          <img
            src='/assets/uti-circle1.png'
            // width={10}
            alt="Circle Design"
            className="absolute top-2/4 left-1/4 w-[400px] -translate-y-1/2 sm:w-[500px] xl:w-[800px] -z-10"
          />
          {/* Lady Image */}
          <img
            src='/assets/uti-lady2.png'
            alt="Doctor"
            className="absolute bottom-0 right-0 md:right-[-10%] w-[400px] md:w-[500px] lg:w-[650px] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default UtaComp;
