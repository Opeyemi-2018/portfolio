import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../global";
import { BsFillSendFill } from "react-icons/bs";
import { LiaCodeSolid } from "react-icons/lia";
import ProjectData from "./ProjectData";

const Project = () => {
  let { themeMode } = useContext(GlobalContext);
  let [projects, setProjects] = useState(ProjectData);
  console.log(projects);

  // let selectedProject = projects.filter(
  //   (project) => project.category === category
  // );

  return (
    <div>
      <h1
        className={`sm:text-2xl text-[16px] mb-3 ${
          themeMode === "light" ? "text-[#030712]" : "text-[#f3f4f6]"
        }`}
      >
        Some of my amazing projects
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {projects.map((project) => {
          let { id, category, image, link, name } = project;
          return (
            <div key={id}>
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
