import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../global";
import { PiHandWavingFill } from "react-icons/pi";
import homeImage from "/ope-profile-cropped.jpg";
import Technology from "../components/Technology";
import Project from "../components/Project";
import Contact from "../components/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Home = () => {
  let { themeMode } = useContext(GlobalContext);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      <div
        // Scroll animation
        className={`px-2 ${
          themeMode === "light" ? "bg-white" : "bg-[#030712]"
        }`}
      >
        <div className="max-w-6xl mx-auto sm:pt-28 pt-10 pb-2  flex lg:flex-row flex-col   justify-between">
          <div data-aos="fade-down" className="flex flex-col gap-2 flex-1">
            <h1
              className={`mb-4 flex items-center gap-2 text-nowrap capitalize font-bold md:text-6xl text-3xl ${
                themeMode === "dark" ? "text-white" : "text-[#030712]"
              }`}
            >
              Hi, i'm opeyemi
              <span className="text-yellow-500 ">
                <PiHandWavingFill />
              </span>
            </h1>
            <p
              className={`sm:text-1xl text-[18px] ${
                themeMode === "dark" ? "text-white" : "text-[#4b5563]"
              }`}
            >
              A software engineer proficient with the MERN stack(MongoDB,
              Express.js, React, and Node.js.) I specialize in building
              full-stack web applications, developing robust server-side APIs,
              and creating dynamic, responsive frontend interfaces.{" "}
            </p>
            <div className="md:inline hidden">
              <Technology />
            </div>
          </div>
          <div data-aos="fade-down" className="">
            <img
              src={homeImage}
              className=" lg:w-52 lg:h-52 w-full h-full inline border rounded-lg border-gray-400 object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* technologies for mobile section */}
      <div className="mb-4 md:hidden inline">
        <div
          className={` ${themeMode === "light" ? "bg-white" : "bg-[#030712]"}`}
        >
          <div className="max-w-6xl mx-auto px-2 py-8">
            <Technology />
          </div>
        </div>
      </div>

      {/* project section */}
      <div
        className={` ${
          themeMode === "light" ? "bg-[#f3f4f6]" : "bg-[#111827]"
        }`}
      >
        <div id="projects" className="max-w-6xl mx-auto px-2 md:py-8 py-4">
          <Project />
        </div>
      </div>

      {/* contact section */}
      <div
        className={` ${themeMode === "light" ? "bg-white" : "bg-[#030712]"}`}
      >
        <div
          id="contact"
          className="max-w-6xl mx-auto px-2 py-8 flex items-center justify-center"
        >
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
