"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcaseMedical, faHeartbeat, faSchool, faHome, faPersonWalking, faPeopleArrows } from "@fortawesome/free-solid-svg-icons";

const Card_rotation = () => {
    const cardData = [
        {
          title: "Employers",
          description: "Streamline employee health with our comprehensive testing solutions. Ensure a safe workplace environment with efficient and reliable testing services tailored for employers.",
          icon: faBriefcaseMedical // Solid icon for medical services in workplaces
        },
        {
          title: "Patients",
          description: "Your health, our priority. Access accurate and timely diagnostic testing, fostering proactive healthcare for individuals. Stay informed, stay well.",
          icon: faHeartbeat // Solid icon for individual health and care
        },
        {
          title: "Schools",
          description: "Create a secure learning environment with our testing services designed for educational institutions. Prioritize the health of students and staff for a confident return to the classroom.",
          icon: faSchool // Solid icon for educational institutions
        },
        {
          title: "Nursing Homes",
          description: "Elevate resident care with our specialized testing solutions for nursing homes. Ensure the health and well-being of residents through advanced diagnostics and proactive healthcare measures.",
          icon: faPeopleArrows // Solid icon for communal care and senior living facilities
        },
        {
          title: "Rehabilitation Centers",
          description: "The purpose of our services is to help individuals recover from illness, injury, or surgery, and drug abuse. Our features include physical, occupational, medical supervision, and both short-term and long-term care.",
          icon: faPersonWalking // Solid icon symbolizing recovery and rehabilitation
        },
        {
          title: "Home Health",
          description: "The purpose of our services is to provide medical and personal care at home. Our features include skilled nursing, home-based therapies, personal care assistance, and medical services in the home environment.",
          icon: faHome // Solid icon representing home-based care
        }
      ];
      const [selectedCard, setSelectedCard] = useState<number>(0);

      const handleCardClick = (index:number):void => {
        setSelectedCard(index);
        // scrollToAuth();
      };
  return (
    <div>
        <div className="my-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`group relative border-2 border-gray-300 rounded-lg p-4 transition-colors duration-300 cursor-pointer ${selectedCard === index ? "bg-blue-300 text-white" : "bg-white hover:bg-blue-600 transition-all transform hover: hover:shadow-2xl hover:translate-y-1 active:shadow-inner"
                }`}
              onClick={() => handleCardClick(index)}
            >
              <span className={`absolute top-[-24px] left-1/2 transform -translate-x-1/2 p-2 rounded-full transition-transform duration-700 ${selectedCard === index ? "bg-white rotate-[180]" : "bg-blue-100 group-hover:rotate-[360deg]  "}`}>
                <FontAwesomeIcon className={`${selectedCard === index ? "text-red-200" : "text-red-600"} text-2xl`} icon={card.icon} />
              </span>
              <p className={`mt-2 mb-4 font-bold text-2xl font-poppins tracking-wide ${selectedCard === index ? "text-black" : "text-black"}`}>{card.title}</p>
              <p className={`text-lg font-rubik leading-6 tracking-wide ${selectedCard === index ? "text-gray-700" : "text-gray-700"}`}>{card.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Card_rotation
