"use client"
interface CardProps {
    image: string;
    index: number;
    title: string;
    shortDescription: any;
    category: string;
    location: string;
    Contact: string;
}
export const Card = ({ image, index, title, shortDescription, category, location, Contact }: CardProps) => {
    return (
        <div>
            <div
                key={index}
                className="relative group  rounded-xl  overflow-hidden flex-shrink-0 w-80 h-112 transition-transform transform  hover:shadow-2xl shadow-lg flex flex-col "
            >
                <img
                    src={image}
                    className="h-64 w-full rounded-xl  object-cover" // Adjust height and width
                    alt={title}
                />

                <div className="absolute bg-gradient-to-l from-[#a3beff] to-[#5084ff]  top-[-100%] left-0  rounded-xl  right-0 group-hover:top-0 transition-top duration-[150ms] ease-in-out z-20 p-4"
                >
                    <h5 className="text-xl font-extrabold text-white text-left">{title}</h5>
                    {Array.isArray(shortDescription) ? (
                        <ul className="text-base mb-1 text-white text-left list-inside pl-0 mt-2 ">
                            {shortDescription.map((item, idx) => (
                                <li key={idx} className="list-disc">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-base mb-1 text-white text-left mt-2">
                            {shortDescription}
                        </p>
                    )}

                </div>

                <div className="p-6 bg-white flex flex-col justify-between flex-grow z-10 relative">
                    <div>
                        <h5 className="text-lg whitespace-nowrap text-red-600 text-ellipsis max-w-full font-bold mb-1 font-inter">
                            {category}
                        </h5>
                        <h3
                            className="text-lg font-bold mt-2  font-inter mb-[-6px] bg-[#5084ff]"
                            style={{
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Operation Hours
                        </h3>
                        {/* <div className="flex text-black justify-center ">
                            <p className="text-mb font-medium font-inter text-black ">
                                {card.category === "Riverside Gurdwara Pop-Up"
                                    ? "Sunday :"
                                    : card.category === "At-home Test Kit"
                                        ? ""
                                        : "Mon - Fri : "}
                            </p>
                            <p className="text-black font-medium ml-2">
                                {" "}
                                {card.category === "At-home Test Kit" ? "We bring the lab to your doorstep!" : card.timing}
                            </p>
                        </div> */}

                        <h3
                            className="text-lg mt-2 p font-bold font-inter mb-[-4px] bg-[#5084ff]"
                            style={{

                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Location
                        </h3>
                        <p className="text-black font-medium ">{location}</p>

                        <div className="flex flex-wrap justify-center mt-4 hover:cursor-pointer "
                        // onClick={sample}
                        >
                            <p
                                className="bg-[#5084ff] text-xl font-bold  hover:cursor-pointer font-inter mb-[-15px]"
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                <span className="font-bold"> </span>
                                {Contact}
                            </p>
                        </div>

                        <div className="mb-1">
                            <span
                                className="text-lg font-extrabold bg-[#5084ff]"
                                style={{
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {category === "Northern California: Fremont Lab" ? "Walk-ins Welcome!" : ""}
                                {category === "Riverside City Mobile Testing" ? " Appointment only" : ""}
                                {category === "Bay Area Mobile Testing" ? " Appointment only" : ""}
                                {category === "At-Home Test Kit" ? "At Your Home" : ""}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center mt-auto">
                        {/* <NeumorphismButton cardData={{ ...card, imageUrl: images[index % images.length] }} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}