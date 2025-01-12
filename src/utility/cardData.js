
export const cardData = [
  {
    id: 1,
    category: "Northern California: Fremont Lab",
    title: "Fremont Laboratory",
    shortDescription:
      "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week.",
    longDescription:
      "high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours. Our smart combo test is $0 with any health insurance coverage.",
    timing: "8:30 AM - 5:00 PM",
    location: "Fremont, CA 94538"
  },
  {
    id: 2,
    category: "Riverside City Mobile Testing",
    title: "Riverside Mobile Testing",
    shortDescription:
      "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      "pre-register and you’ll breeze through our testing site in about five minutes. This service is by appointment only.",
    timing: "10:00 AM - 3:00 PM",
    location: "Riverside County"
  },
  {
    id: 3,
    category: "Bay Area Mobile Testing",
    title: "SF Bay Area / Silicon Valley Mobile Testing",
    shortDescription:
      "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
    longDescription:
      " Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
    timing: "10:00 AM - 3:00 PM",
    location: "Alameda County"
  },
  {
    id: 4,
    category: "Riverside Gurdwara Pop-Up",
    title: "Riverside Gurdwara",
    shortDescription:
      "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
    timing: "Sun 11:00 AM - 2:30 PM",
    location: "Riverside County"
  },
  {
    id: 5,
    category: "At-Home Test Kit",
    title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
    shortDescription:
      "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
    longDescription: "In our commitment to making healthcare accessible and convenient, we present our comprehensive range of At-Home Test Kits. Discover the power of self-testing with our user-friendly kits, including the At-Home Influenza Test Kit and the At-Home COVID Test Kit. ",
    timing: "Anytime",
    location: "At Your Home"
  },
  {
    id: 6,
    category: "NorCal: Union City Pop-up",
    title: "Union City Pop-up",
    shortDescription:
      "My Care Labs offers $0 out of pocket COVID-19 PCR and Rapid testing in Union City.",
    longDescription: "Detailed information about our light solutions...",
    timing: "Mon, Wed, Fri 8:30 AM - 6:00 PM",
    location: "Union City, CA 94587"
  },
  {
    id: 7,
    category: "SoCal: Corona Mobile Testing",
    title: "Mobile Testing: Corona, CA",
    shortDescription:
      "Same-day Covid/Flu PCR results available. To speed up your testing.",
    longDescription: "Detailed information about our audio solutions...",
    timing: "Mon-Fri 8:30 AM - 6:00 PM",
    location: "Corona, CA 92882"
  },
  {
    id: 8,
    category: "SoCal: Corona Mobile Testing",
    title: "Mobile Testing: Corona, CA",
    shortDescription:
      "Same-day Covid/Flu PCR results available. To speed up your testing.",
    longDescription: "Detailed information about our audio solutions...",
    timing: "Mon-Fri 8:30 AM - 6:00 PM",
    location: "Corona, CA 92882"
  },
];

export const images = [
  "https://i.ibb.co/Jswx1fx/afljsdg.png",
  "https://i.ibb.co/NCz8Kt8/dadfs.png",
  "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png",
  "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg",
  "https://i.ibb.co/W2h5h1J/DGDF.png",
  "https://i.ibb.co/ZBLZ7zp/7.jpg", "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg",
];


export const testingSolutions = [
  {
    category: "UTI Testing Solutions",
    route: "/uti", // Add category route
    tests: [],
  },
  {
    category: "Infectious Disease Testing Solutions",
    route: "/testing-solutions/infectious-disease-testing-solutions", // Add category route
    tests: [
      {
        name: "Travel PCR Testing",
        route: "/travel-testing",
      },
      {
        name: "Testing for Groups",
        route: "/group-covid-testing",
      },
      {
        name: "Testing for Schools",
        route: "/testing-for-schools",
      },
      {
        name: "Testing for Nursing Homes",
        route: "/testing-for-nursing-homes",
      },
      {
        name: "At-Home COVID-19 PCR Test Kit",
        route: "/covid-rt-pcr-home-test-kit",
      },
    ],
  },

  {
    category: "Wellness Testing Solutions",
    route: "/testing-solutions/wellness-testing-solutions/", // Add category route
    tests: [
      {
        name: "Anemia Profile Test",
        route: "/testing-solutions/wellness-testing-solutions/anemia-profile-test",
      },
      {
        name: "Basic Metabolic Panel",
        route: "/testing-solutions/wellness-testing-solutions/basic-metabolic-panel",
      },
      {
        name: "Liver Function Panel Tests",
        route: "/testing-solutions/wellness-testing-solutions/liver-function-panel-tests",
      },
      {
        name: "Renal Function Panel Test",
        route: "/testing-solutions/wellness-testing-solutions/renal-function-panel-test",
      },
      {
        name: "Thyroid Function Panel Test",
        route: "/testing-solutions/wellness-testing-solutions/thyroid-function-panel-test",
      },
      {
        name: "Comprehensive Metabolic Panel (CMP) Test",
        route: "/testing-solutions/wellness-testing-solutions/comprehensive-metabolic-panel-cmp-test",
      },
    ],
  },
  {
    category: "Toxicology Testing Solutions",
    route: "/testing-solutions/toxicology-testing-solutions", // Add category route
    tests: [],
  },

  {
    category: "Oncology Testing Solutions",
    route: "/testing-solutions/oncology-testing-solutions", // Add category route
    tests: [],
  },
  {
    category: "Other Tests",
    route:  "/other-tests", // Add category route
    tests: [
      {
        name: "Creatine Kinase",
        route: "/creatine-kinase",
      },
      {
        name: "CRP Tests",
        route: "/crp-tests",
      },
      {
        name: "Free Psa Testing",
        route: "/free-psa-testing",
      },
      {
        name: "Magnesium Test in Blood",
        route: "/magnesium-test-in-blood",
      },
      {
        name: "Anticonvulsant Test Services",
        route: "/anticonvulsant-test-services",
      },
      {
        name: "Vitamin D Test Services",
        route: "/vitamin-d-test-services",
      },
      {
        name: "Total PSA Test Services",
        route: "/total-psa-test-services",
      },
    ],
  },
];
