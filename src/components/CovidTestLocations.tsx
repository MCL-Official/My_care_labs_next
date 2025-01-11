import { Card } from "@/Ui-Components/Card";

export const CovidTestLocations=()=>{
    const cardData = [
        {
            id: 1,
            category: "Northern California: Fremont Lab",
            title: "Fremont Laboratory",
            shortDescription: [
                "COVID-19, RSV & FLU A/B",
                "Wellness Testing ",
                "Toxicology Testing",
                "UTI Testing (coming soon)",
            ],
            longDescription: "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week for patients experiencing Covid-19 symptoms: high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours. Our smart combo test is no-cost with most major insurances.",
            timing: "8:30 AM - 5:00 PM",
            location: "5500 Stewart Avenue, Suite 108, Fremont, CA 94538",
            Contact: "1-800-790-4550",
            image: "https://i.ibb.co/Jswx1fx/afljsdg.png"
        },
        {
            id: 2,
            category: "Bay Area Mobile Testing",
            title: "Bay Area Mobile Testing",
            addedDescription: "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
            shortDescription: [
                "Available by appointment only",
                "Must be within a 15 mile radius of Fremont Lab",
                "Same day or 24 hour results"
            ],
            // "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
            longDescription:
                " Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
            timing: "10:00 AM - 3:00 PM",
            location: "Must be within a 15 mile radius of Fremont Lab",
            Contact: "1-800-790-4550",
            image: "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png"
        },
        {
            id: 3,
            category: "At-Home Test Kit",
            title: "At-Home Test Kit",
            addedDescription: "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
            shortDescription: [
                "Delivered right to your door step!",
                "We provide the shipping and testing materials",
                "Results within 24-48 hours"
            ],
            // "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, e to My Care Labs Medical Lab, your dedicated partner in health diagnostics, pe to My Care Labs Medicaproudly serving the Fremont, California community.",
            longDescription: "In our commitment to making healthcare accessible and convenient, we present our comprehensive range of At-Home Test Kits. Discover the power of self-testing with our user-friendly kits, including the At-Home Influenza Test Kit and the At-Home COVID Test Kit. ",
            timing: "Anytime",
            location: "Order Online - We Bring the Lab to Your Doorstep",
            Contact: "1-800-790-4550",
            image: "https://i.ibb.co/W2h5h1J/DGDF.png"
        },
        {
            id: 4,
            category: "Riverside City Mobile Testing",
            title: "Riverside Mobile Testing",
            addedDescription: "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
            shortDescription:
                [
                    "Available by appointment only",
                    "Must be within Riverside City",
                    "Results within 24-48 hours"
                ],

            // "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
            longDescription:
                "pre-register and you’ll breeze through our testing site in about five minutes. This service is by appointment only.",
            timing: "10:00 AM - 3:00 PM",
            location: "Must be within a 10 mile radius of Riverside City",
            Contact: "1-800-790-4550",
            image: "https://i.ibb.co/NCz8Kt8/dadfs.png"
        },

        {
            id: 5,
            category: "Riverside Gurdwara Pop-Up",
            title: "Riverside Gurdwara",
            addedDescription: "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
            shortDescription:
                [
                    "Available by appointment only",
                    "Only on Sundays",
                    "Results within 24-48 hours"
                ],

            // "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
            longDescription:
                " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
            timing: "11:00 AM - 2:30 PM",
            location: "7940 Mission Blvd, Riverside Valley, CA 92509",
            Contact: "1-800-790-4550",
            image: "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg "
        },

    ];
    return (
        <div>
           <div className="mt-5 via-transparent to-white">
        <div className="text-center mb-4">
          <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
            <div className="relative inline-block pt-6 md:pt-12 px-4 sm:px-6 md:px-10 bg-transparent pb-3">
              <span className="text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mr-2">
                Our Testing
              </span>
              <span className="text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Locations...
              </span>
            </div>
          </h3>
          <div className="container mx-auto px-4">
            <p className="info-description mt-3 text-bold text-base sm:text-sm md:text-xl lg:text-2xl pb-6">
              My Care Labs offers quick, hassle-free, and accurate COVID-19, RSV,
              and Influenza RT-PCR testing. With same-day or 24-hour results, we
              provide fast turnaround for busy patients on-site at our laboratory
              and at pop-ups throughout California.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardData.slice(0, 8).map((card, index) => (
                <Card image={card.image}  key={card.id} index={index} title={card.title} timing={card.timing} shortDescription={card.shortDescription} category={card.category} location={card.location} Contact={card.Contact}
                />
            ))}
          </div>
        </div>
      </div>
        </div>
    )
}