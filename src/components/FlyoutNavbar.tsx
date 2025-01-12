"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useMotionValueEvent, AnimatePresence, useScroll, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardData, images, testingSolutions } from '../utility/cardData'
import { faPhone, faStar, faChevronDown, faDownload } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

interface ComponentProps {
  handleClick?: () => void; 
}

interface LinkData {
  text:string
  href: string;
  component?: React.ComponentType<ComponentProps>;
}


const Navbar = () => {
  return <FlyoutNav />;
};

const FlyoutNav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const isHome = pathname === "/";

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious();
    setScrolled(latest > 20);
    if (previous !== undefined) {
      if (latest > previous && latest > 250) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ease-out lg:px-12 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled || !isHome ? "bg-white py-2 shadow-xl" : "bg-white py-2 shadow-none"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex items-center justify-between">
          <Links isHome={isHome} scrolled={scrolled} />
          <CTAs isHome={isHome} scrolled={scrolled} />
        </div>
        <MobileMenu isHome={isHome} scrolled={scrolled} />
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="flex items-start md:mr-5 xl:mr-0 2xl:ml-[-70px] space-x-3 rtl:space-x-reverse">
      <Image
        src="/assets/mycare_logo_ch.png"
        className="max-w-[250px] max-h-[75px]"
        alt="My care labs"
        width={400}
        height={400}
      />
    </Link>
  );
};

const Links = ({ isHome, scrolled }: { isHome: boolean; scrolled: boolean }) => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((l) => (
        <NavLink
          key={l.text}
          href={l.href}
          FlyoutContent={l.component}
          isHome={isHome}
          scrolled={scrolled}
        >
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};
interface FlyoutContentProps {
  handleClick?: () => void; 
}

const NavLink = ({
  children,
  href,
  FlyoutContent,
  isHome,
  scrolled,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ComponentType<FlyoutContentProps>;
  isHome: boolean;
  scrolled: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link
        href={href}
        onClick={handleClick}
        className={`relative font-semibold no-underline text-xl ${
          isHome ? (scrolled ? "text-black" : "text-black") : "text-black"
        }`}
      >
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = ({ isHome, scrolled }: { isHome: boolean; scrolled: boolean }) => {
  const data = () => {
    window.location.href = "https://patient-us.creliohealth.com/patient/login";
  };
  return (
    <div className="flex items-center gap-3">
      {/* Add your CTA buttons here */}
      <button
        className={`flex items-center gap-2 rounded-lg border-2 px-4 py-2 font-semibold transition-colors ${isHome
          ? scrolled
            ? "bg-yellow-600 text-white"
            : "text-white border-white bg-yellow-600 hover:text-white"
          : "bg-yellow-600 text-white"
          }`}
        onClick={data}
      >
        <FaUserCircle />
        <span>Check Your Test Result</span>
      </button>
      <a
        href="tel:+1-800-790-4550"
        className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 font-semibold transition-colors no-underline ${isHome
          ? scrolled
            ? "bg-orange-600 text-white"
            : "text-white border-white bg-orange-600 hover:text-white"
          : "bg-orange-600 text-white"
          }`}
      >
        <FontAwesomeIcon icon={faPhone}  />
        <span>+1-800-790-4550</span>
      </a>
      <a
        href="/MY Care Labs TRF Master.pdf"
        download
        className={`flex items-center gap-1 rounded-lg border-2 px-3 py-2 font-semibold transition-colors no-underline ${isHome
          ? scrolled
            ? "bg-orange-600 text-white"
            : "text-white border-white bg-orange-600 hover:text-white"
          : "bg-orange-600 text-white"
          }`}
      >
        <FontAwesomeIcon icon={faDownload} size="lg" />
        <span>TRF</span>
      </a>
    </div>
  );
};
interface MobileMenuLinkProps {
  children: React.ReactNode;
  href: string;
  FoldContent?: React.ComponentType;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-2 text-start text-base font-medium"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            // to={href}
            href={href}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href={href}
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-2 text-start text-base font-medium"
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "8px" : "0px",
            marginTop: open ? "4px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = ({ isHome, scrolled }: { isHome: boolean; scrolled: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
         <button
        onClick={() => setOpen(true)}
        className={`block text-xl ${isHome ? (scrolled ? "text-neutral-950" : "text-white") : "text-neutral-950"
          }`}
        style={{ padding: "4px 8px" }}
      >
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            {/* Mobile Menu Content */}
            <div className="flex items-center justify-between p-3">
              <Logo  />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-3">
              {LINKS.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-3">
              <CTAs isHome={isHome} scrolled={false} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};


interface CardProps{
  id: number;
  category: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  timing: string;
  location: string;
}
// const AboutUsContent = ({ handleClick }: any) => {
const AboutUsContent = () => {
  // const navigate = useNavigate(); // Initialize useNavigate


  // const sample = {{...cardData , imageUrl: images[index % images.length] }} 
  if (!cardData || !images || cardData.length === 0 || images.length === 0) {
    return null; // Return null to render nothing if the arrays are not available
  }

  // const formatCategoryName = (categoryName: String) => {
  //   return categoryName
  //     .replace(/[&%@!#^*+\|"'<>?]/g, '-') // Replaces special characters with hyphens
  //     .replace(/\s+|\.|,|:/g, '-') // Replaces spaces, dots, commas, and colons with hyphens
  //     .replace(/-+/g, '-') // Removes consecutive hyphens
  //     .replace(/-+$/, '') // Removes trailing hyphens
  //     .toLowerCase();
  // };

  // const handleBookNowClick = (cardData: any) => {
  //   console.log(cardData, 'sdvkjvnsvnsdjvsdnjvcnsjsdnv');

  //   const formattedCategory = formatCategoryName(cardData.category);
  //   // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData: cardData } });

  //   // THE BOOKING SYSTEM TTHAT I HAVE CREATED 

  //   //   if(cardData?.title=="PCR COVID-19, RSV, and Influenza A/B Test Kit"){
  //   //     navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
  //   //  }else{

  //   //    // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData } });
  //   //    navigate(`/covid-test-locations/${formattedCategory}`, { state: { cardData } });
  //   //    // navigate(`/bookingcompletion`, { state: { cardData } });
  //   //    console.log("Navigating with card data:", cardData);
  //   //  }
  //   // navigate(`/bookingcompletion/${formattedCategory}`, { state: { cardData: card } });
  //   // console.log("Navigating with card data:", card);
  //   handleClick();
  // };
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[950px] xl:grid-cols-12">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-4 lg:col-span-4 xl:col-span-4">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Testing Locations
          </h2>
          <p className="mb-4 max-w-xs text-xs text-neutral-400">
            Choose the Location or Service That is Most Convenient for You!
          </p>
          <p className="mb-4 max-w-xs text-lg text-neutral-400">
            5500 Stewart Avenue, Suite 108,
            Fremont, CA 94538
          </p>
        </div>
        <Link
          href="/covid-test-locations"
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
        >
          Learn more <FiArrowRight />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-1 gap-3 bg-white p-3 lg:col-span-8 xl:col-span-8 xl:grid-cols-3">

        {cardData.slice(0, 6).map((card: CardProps) => (
          <div
            key={card?.id}
            className="rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
          >
            {/* <img
              // src={images[index % images.length]}
              alt={card?.title}
              className="h-24 w-full object-cover" // Adjusted image height for larger size
            /> */}
            <div className="p-3 flex-grow flex flex-col justify-between">
              <div>
                {/* <h2 className="font-bold text-sm my-1">{card?.card?.category}</h2> */}
                <p className="text-xs text-gray-800 mt-1">
                  <strong>Hours:</strong> {card?.timing}
                </p>
                <p className="text-xs text-gray-800">
                  <strong>Location:</strong> {card?.location}
                </p>
              </div>
              <button
                // onClick={() => handleBookNowClick({ ...card, imageUrl: images[index % images.length] })}
                className="mt-3 px-3 py-2 text-center text-white bg-green-600 hover:bg-green-500 rounded-lg text-xs font-semibold w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};


interface Test {
  name: string;
  route: string;
}

interface TestingSolution {
  category: string;
  route: string;
  tests: Test[];
}
const PricingContent1 = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="w-full bg-white border-2 border-slate-300 shadow-none lg:w-[340px] p-2 rounded-lg ">
      <div className="grid grid-cols-2 mt-2 lg:grid-cols-1">
    
        {testingSolutions.map((solution: TestingSolution, index: number) => (
          <div key={index} className="mb-3 space-y-3  relative">
            {/* Main Category */}
            <Link
              href={solution?.route}
              className={`block text-base text-black no-underline text-left p-3 rounded-lg  hover:bg-slate-200 py-2 ${isHovered === index ? "bg-slate-200 hover:shadow-lg" : ""
                }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {solution.category}

              {solution.tests.length > 0 && (
                <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-gray-500" />
              )}

              {solution.category === "UTI Testing Solutions" && (
                <span className="ml-2 text-red-500">
                  <FontAwesomeIcon icon={faStar} />
                  <span className="ml-1 text-sm text-red-500">New</span>
                </span>
              )}
            </Link>

            {/* Submenu if tests exist */}
            {isHovered === index && solution.tests.length > 0 && (
              <div
                className="absolute -top-3 left-full w-[250px] text-left bg-white shadow-lg p-2 space-y-2 rounded-lg"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {solution.tests.map((test: Test, testIndex: number) => (
                  <Link
                    key={testIndex}
                    href={test?.route}
                    className="block text-base text-black no-underline hover:bg-slate-200 p-2 rounded-lg"
                  >
                    {test?.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



const PricingContent = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="w-full bg-slate-50 p-6 shadow-none lg:w-[250px] lg:shadow-xl rounded-xl">
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className="mb-3 space-y-3 relative">
          {/* Main Links */}
          <Link
            href="/about"
            className="block text-lg text-black no-underline hover:underline "
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            About Us
          </Link>
          {isHovered === 1 && (
            <div
              className="absolute top-0 left-full w-[250px] bg-slate-50 shadow-lg p-3 space-y-2"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/company-overview"
                className="block text-lg text-black no-underline hover:underline"
              >
                Company Overview
              </Link>
              <Link
                href="/company-mission"
                className="block text-lg text-black no-underline hover:underline"
              >
                Our Mission
              </Link>
            </div>
          )}

          <Link
            href="/management-team"
            className="block text-lg text-black no-underline hover:underline"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            Management Team

          </Link>
          {/* {isHovered === 2 && (
            <div
              className="absolute top-0 left-full w-[250px] bg-slate-50 rounded-xl shadow-lg p-3 space-y-2"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/team-members"
                className="block text-lg text-black no-underline hover:underline"
              >
                Team Members
              </Link>
              <Link
                to="/leadership"
                className="block text-lg text-black no-underline hover:underline"
              >
                Leadership
              </Link>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



const LINKS: LinkData[] = [
  {
    text: "Testing Locations",
    href: "/covid-test-locations",
    component: AboutUsContent,
  },
  {
    text: "Solutions",
    href: "/testing-solutions/infectious-disease-testing-solutions",
    component: PricingContent1,
  },
  {
    text: "Company",
    href: "/about",
    component: PricingContent,
  },
  {
    text: "Blog",
    href: "/blog",
  },
];
