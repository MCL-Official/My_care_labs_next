import Card_rotation from "./client/Card_rotation"

export const Communities = () => {

    return (
        <div className=" text-center bg-white" id="services">
            <div className="my-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6C2FAC] to-white">
                <h3 className="font-poppins text-4xl font-bold">
                    <span className="text-red-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mr-2 ">Communities </span>
                    <span className="text-gray-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        We Serve
                    </span>
                </h3>
                <p className="my-10 mx-4 text-center text-gray-700 font-rubik tracking-wide leading-7 text-base sm:text-sm md:text-xl lg:text-xl pb-6">
                    We provide quick, hassle-free, and accurate diagnostic testing solution.
                    With same day results or within 24 hours, we offer testing on-site at our laboratory,
                    pop-up location and concierge mobile testing throughout California.
                </p>
            </div>
            <Card_rotation />

        </div>
    )
}