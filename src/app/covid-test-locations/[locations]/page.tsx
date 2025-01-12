
export default async function Locations({ params }: { params: Promise<{ locations: string }> }) {
  const resolvedParams = await params;
  const data = resolvedParams.locations;
  console.log(data);
  const cardData = [
    {
      id: 1,
      category: "northern-california-fremont-lab",
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
      category: "at-home-test-kit",
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
      longDescription:
        " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
      timing: "11:00 AM - 2:30 PM",
      location: "7940 Mission Blvd, Riverside Valley, CA 92509",
      Contact: "1-800-790-4550",
      image: "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg "
    },

  ];

  const filteredLocations = cardData.filter((item) => item.category === data);
  console.log(filteredLocations[0].title);


  return (
    <div className="mt-20">
      <div
        className="relative bg-cover bg-center h-[30rem]"
        style={{ backgroundImage: `url(${filteredLocations[0].image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold sm:mt-1 mt-10 mb-2">{filteredLocations[0].title}</h1>
          {filteredLocations[0].title !== "Fremont Laboratory" &&
            <p className="text-lg font-bold">{filteredLocations[0].shortDescription}</p>}
          <p className="text-lg mt-2">{filteredLocations[0].longDescription}</p>
        </div>
      </div>
      {data}
      {/* <LocationComponent/> */}
    </div>
  );
}
