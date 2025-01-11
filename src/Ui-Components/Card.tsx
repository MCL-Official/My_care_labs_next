"use client";

import { FiSend } from "react-icons/fi";
import { Button } from "./Button";
import { DropDown } from "./Dropdown";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
// import { useRouter } from 'next/router'
// import {dataState} from "../../app/context/DataContext"

interface CardProps {
  image: string;
  index: number;
  title: string;
  shortDescription: any;
  category: string;
  location: string;
  Contact: string;
  timing: string;
}

export const Card = ({
  image,
  index,
  title,
  shortDescription,
  category,
  location,
  Contact,
  timing,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()
  // const setData = useSetRecoilState(dataState);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    console.log("Button clicked");

    const queryParameters = new URLSearchParams({
      title,
      category,
      location,
    }).toString();
    const formattedCategory = category
      .replace(/[&%@!#^*+\|"'<>?]/g, '-')
      .replace(/\s+|\.|,|:/g, '-')
      .replace(/-+/g, '-')
      .replace(/-+$/, '')
      .toLowerCase();

    // router.push({
    //   pathname: `/covid-test-locations/${formattedCategory}`,
    //   query: { pid: post.id },
    // })
    if (title === "Bay Area Mobile Testing") {
      // setData({ title: "Dynamic Title", content: "Dynamic Content" });
      router.push(`/covid-test-locations/${formattedCategory}`);
    } else if (title === "Fremont Laboratory") {
      router.push(`/covid-test-locations/${formattedCategory}`);
    } else if (title === "At-Home Test Kit") {
      router.push(`/covid-test-locations/${formattedCategory}`);
    } else if (title === "Riverside Mobile Testing") {
      router.push(`/covid-test-locations/${formattedCategory}`);
    } else if (title === "Riverside Gurdwara") {
      router.push(`/covid-test-locations/${formattedCategory}`);
    }
    else {
      router.push(`/bookingcompletion/${formattedCategory}`);
      // navigate(`/bookingcompletion`, { state: { cardData } });
    }
  };

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touchStartX = e.touches[0].clientX;
      if (carouselRef.current) {
        (carouselRef.current as any).touchStartX = touchStartX;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!carouselRef.current || !(carouselRef.current as any).touchStartX) {
        return;
      }
      const touchEndX = e.touches[0].clientX;
      const touchDiffX =
        (carouselRef.current as any).touchStartX - touchEndX;

      // Logic for swipe actions if needed
      (carouselRef.current as any).touchStartX = null;
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchmove", handleTouchMove);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, []);

  return (
    <div
      key={index}
      className="relative group rounded-xl overflow-hidden flex-shrink-0 w-80 h-112 transition-transform transform hover:shadow-2xl shadow-lg flex flex-col"
    >
      <img
        src={image}
        className="h-64 w-full rounded-xl object-cover"
        alt={title}
      />

      <div className="absolute bg-gradient-to-l from-[#a3beff] to-[#5084ff] top-[-100%] left-0 rounded-xl right-0 group-hover:top-0 transition-top duration-[150ms] ease-in-out z-20 p-4">
        <h5 className="text-xl font-extrabold text-white text-left">
          {title}
        </h5>
        <DropDown shortDescription={shortDescription} />
      </div>

      <div className="p-6 bg-white flex flex-col justify-between flex-grow z-10 relative">
        <div>
          <h5 className="text-lg whitespace-nowrap text-red-600 text-ellipsis max-w-full font-bold mb-1 font-inter">
            {category}
          </h5>
          <h3
            className="text-lg font-bold mt-2 font-inter mb-[-6px] bg-[#5084ff]"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Operation Hours
          </h3>
          <div className="flex text-black justify-center">
            <p className="text-mb font-medium font-inter text-black">
              {category === "Riverside Gurdwara Pop-Up"
                ? "Sunday :"
                : category === "At-home Test Kit"
                  ? ""
                  : "Mon - Fri : "}
            </p>
            <p className="text-black font-medium ml-2">
              {category === "At-home Test Kit"
                ? "We bring the lab to your doorstep!"
                : timing}
            </p>
          </div>

          <h3
            className="text-lg mt-2 p font-bold font-inter mb-[-4px] bg-[#5084ff]"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Location
          </h3>
          <p className="text-black font-medium">{location}</p>

          <div className="flex flex-wrap justify-center mt-4 hover:cursor-pointer">
            <p
              className="bg-[#5084ff] text-xl font-bold hover:cursor-pointer font-inter mb-[-15px]"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {Contact}
            </p>
          </div>

          <div className="mb-1">
            <span
              className="text-lg font-extrabold bg-[#5084ff]"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {category === "Northern California: Fremont Lab"
                ? "Walk-ins Welcome!"
                : category === "Riverside City Mobile Testing"
                  ? " Appointment only"
                  : category === "Bay Area Mobile Testing"
                    ? " Appointment only"
                    : category === "At-Home Test Kit"
                      ? "At Your Home"
                      : ""}
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-auto">
          <Button
            className="px-4 py-2 rounded-full flex items-center  hovered:#6e9eff gap-2 text-lg font-bold shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all text-white bg-[#5084ff] hover:bg-[#6e9eff] hover:shadow-[0px_4px_15px_rgba(0,0,0,0.2)]"
            onClick={handleClick}
            disable={false}
            name="Book Now"
            Icon={<FiSend />}
          // style={{
          //   background: isHovered ? "#6e9eff" : "#5084ff",
          //   boxShadow: isHovered
          //     ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
          //     : "0px 4px 10px rgba(0, 0, 0, 0.1)",
          // }}
          />
        </div>
      </div>
    </div>
  );
};
