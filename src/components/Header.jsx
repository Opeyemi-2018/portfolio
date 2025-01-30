import { useContext, useState } from "react";
import { GlobalContext } from "../global";
import ThemeButton from "./ThemeButton";
import { FaBars } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  let [shownav, setShowNav] = useState(false);
  let { themeMode } = useContext(GlobalContext);

  let scrollToSection = (sectionId) => {
    let section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };
  return (
    <header
      className={`shadow-lg ${
        themeMode === "light" ? "bg-white" : "bg-[#030712] text-white"
      }`}
    >
      <div className="p-3 max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="font-bold md:text-3xl text-2xl">{"<op/>"}</h1>
        <div className="sm:flex hidden items-center gap-5 ">
          <ul
            className={`flex uppercase cursor-pointer items-center gap-4 font-semibold ${
              themeMode === "dark" ? "text-white" : "text-[#1f2937]"
            }`}
          >
            <li onClick={() => scrollToSection("projects")}>projects</li>
            <li onClick={() => scrollToSection("contact")}>contact</li>
          </ul>
          <ThemeButton />
          <a
            href="/opeyemi odunayo.pdf"
            download
            className={`${
              themeMode === "dark"
                ? "bg-white text-[#030712]"
                : "bg-[#030712] text-white"
            } px-2 py-1 rounded-md`}
          >
            Download CV
          </a>
        </div>
        <button
          className="sm:hidden inline"
          onClick={() => setShowNav(!shownav)}
        >
          {shownav ? (
            <LiaTimesSolid className="text-3xl font-semibold" />
          ) : (
            <FaBars className=" text-3xl" />
          )}
        </button>
      </div>

      {/* nav for mobile screen */}

      <div
        className={` sm:hidden px-3 overflow-hidden duration-300 transition-all  ${
          shownav ? "flex flex-col gap-4 max-h-screen" : "max-h-0"
        }`}
      >
        <ul
          className={`cursor-pointer flex flex-col capitalize text-[19px]  gap-4  ${
            themeMode === "dark" ? "text-white" : "text-[#1f2937]"
          }`}
        >
          <li onClick={() => scrollToSection("projects")}>projects</li>
          <li onClick={() => scrollToSection("contact")}>contact</li>
        </ul>
        <h1
          className={`flex justify-between text-[19px]  capitalize ${
            themeMode === "dark" ? "text-white" : "text-[#1f2937]"
          }`}
        >
          Switch Theme <ThemeButton />
        </h1>
        <a
          href="//opeyemi odunayo.pdf"
          download
          className={` w-full ${
            themeMode === "dark"
              ? "bg-white text-[#030712]"
              : "bg-[#030712] text-white"
          } p-2 rounded-md text-center`}
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
