import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GlobalContext } from "../global";
import { useContext } from "react";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";

const Technology = () => {
  let { themeMode } = useContext(GlobalContext);
  return (
    <>
      <h1
        className={`font-semibold ${
          themeMode === "light" ? "text-black" : "text-[#6b7280]"
        }`}
      >
        Some technologies I'm good at:{" "}
      </h1>
      <div className="flex items-center sm:flex-nowrap flex-wrap md:gap-5 gap-3 mt-2">
        <span className={`flex flex-col items-center justify-between `}>
          <IoLogoJavascript className="bg-yellow-400 sm:text-4xl text-2xl" />{" "}
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">
            Javascript
          </h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <FaReact className="text-[#61DAFB] sm:text-4xl text-2xl" />{" "}
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">React</h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <SiNextdotjs
            className={`${
              themeMode === "light" ? "text-black" : "text-white"
            } sm:text-4xl text-2xl`}
          />{" "}
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">Next.js</h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <FaNodeJs className="text-green-600 sm:text-4xl text-2xl" />
          <h1 className="text-[#6b7280] sm:text-[16px] text-[12px]">Node.js</h1>
        </span>

        <span className={`flex flex-col items-center justify-between `}>
          <SiExpress
            className={`sm:text-4xl text-2xl ${
              themeMode === "light" ? "text-black" : "text-white"
            } `}
          />
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">
            Express.js
          </h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <FaGitAlt
            className={`${
              themeMode === "light" ? "text-red-700" : "text-red-700"
            } sm:text-4xl text-2xl`}
          />
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">Git</h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <SiMongodb className="text-green-700  sm:text-4xl text-2xl" />
          <h1 className="text-[#6b7280] sm:text-[16px] text-[12px]">MongoDB</h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <RiTailwindCssFill className="text-[#61DAFB] sm:text-4xl text-2xl" />{" "}
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">
            Tailwind CSS
          </h1>
        </span>
        <span className={`flex flex-col items-center justify-between `}>
          <SiPostman
            className={`${
              themeMode === "light" ? "text-red-700" : "text-red-700"
            } sm:text-4xl text-2xl`}
          />
          <h1 className="text-[#6b7280] sm:text-[14px] text-[12px]">Postman</h1>
        </span>
      </div>
    </>
  );
};

export default Technology;
