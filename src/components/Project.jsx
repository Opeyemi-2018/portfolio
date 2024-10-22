import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../global";
import { BsFillSendFill } from "react-icons/bs";
import ProjectData from "./ProjectData";

const Project = () => {
  let { themeMode } = useContext(GlobalContext);
  let [projects, setProjects] = useState(ProjectData);
  let [category, setCategory] = useState("all");
  let [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Trigger the fade-out transition
    setIsTransitioning(true);
    // Delay for the duration of the fade-out transition (e.g., 300ms)
    const timeoutId = setTimeout(() => {
      if (category === "all") {
        setProjects(ProjectData);
      } else {
        setProjects(
          ProjectData.filter((project) => project.category === category)
        );
      }

      // Trigger the fade-in transition after projects are set
      setIsTransitioning(false);
    }, 300);

    // Cleanup the timeout when the component unmounts or when category changes
    return () => clearTimeout(timeoutId);
  }, [category]);

  return (
    <div>
      <h1
        className={`sm:text-2xl text-[16px] mb-3 underline ${
          themeMode === "light" ? "text-[#030712]" : "text-[#f3f4f6]"
        }`}
      >
        Projects
      </h1>

      <span
        className={`flex items-center md:gap-8 gap-4  mb-2 md:text-2xl text-[20px] ${
          themeMode === "light" ? "text-[#030712]" : "text-[#f3f4f6]"
        }`}
      >
        <button
          className={`${category === "all" ? "underline" : ""}`}
          onClick={() => setCategory("all")}
        >
          all
        </button>
        <button
          className={`${category === "fullstack" ? "underline" : ""}`}
          onClick={() => setCategory("fullstack")}
        >
          fullstack-MERN
        </button>
        <button
          className={`${category === "frontend" ? "underline" : ""}`}
          onClick={() => setCategory("frontend")}
        >
          frontend-JS
        </button>
      </span>

      <div
        className={`grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5 transition-opacity duration-200 ease-in-out ${
          isTransitioning ? "opacity-10" : "opacity-100"
        }`}
      >
        {" "}
        {projects.map((project) => {
          let { id, image, link, name } = project;
          return (
            <div key={id} className="">
              <a
                className=""
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
                  <div className="relative group">
                    <img
                      src={image}
                      alt=""
                      className="w-full object-cover h-48  rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-black ${
                        themeMode === "light"
                          ? "bg-opacity-70"
                          : "bg-opacity-30"
                      }  rounded-t-lg`}
                    ></div>
                    <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                      {name}
                      <span>
                        <BsFillSendFill />
                      </span>
                    </h1>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
        {/* <a
          className=""
          href="https://mern-estate-xjyv.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
            <div className="relative group">
              <img
                src={finder}
                alt=""
                className="w-full object-cover h-48  rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black ${
                  themeMode === "light" ? "bg-opacity-70" : "bg-opacity-30"
                }  rounded-t-lg`}
              ></div>
              <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                Finder{" "}
                <span>
                  <BsFillSendFill />
                </span>
              </h1>
            </div>
          </div>
        </a>

        <a href="#">
          <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
            <div className="relative group">
              <img
                src={ecommerce}
                alt=""
                className="w-full object-cover h-48  rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black ${
                  themeMode === "light" ? "bg-opacity-70" : "bg-opacity-30"
                }  rounded-t-lg`}
              ></div>
              <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                in progress{" "}
                <span>
                  <LiaCodeSolid size={20} />
                </span>
              </h1>
            </div>
          </div>
        </a>

        <a
          href="https://opeyemi-2018.github.io/dictionary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
            <div className="relative group">
              <img
                src={dictionary}
                alt=""
                className="w-full object-cover h-48  rounded-t-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-black ${
                  themeMode === "light" ? "bg-opacity-70" : "bg-opacity-30"
                }  rounded-t-lg`}
              ></div>{" "}
              <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                Dictionary{" "}
                <span>
                  <BsFillSendFill />
                </span>
              </h1>
            </div>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Project;
