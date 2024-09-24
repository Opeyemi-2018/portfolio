import finder from "../../public/finder.png";
import ecommerce from "../../public/e-commerce.png";
import dictionary from "../../public/dictionary.png";
import { useContext } from "react";
import { GlobalContext } from "../global";
import { BsFillSendFill } from "react-icons/bs";
import { LiaCodeSolid } from "react-icons/lia";

const Project = () => {
  let { themeMode } = useContext(GlobalContext);
  return (
    <div>
      <h1
        className={`text-2xl mb-3 ${
          themeMode === "light" ? "text-[#030712]" : "text-[#f3f4f6]"
        }`}
      >
        Some of my amazing projects:
      </h1>

      <div className="flex items-center md:flex-row flex-col gap-5">
        {/* first project  */}
        <a
          href="https://mern-estate-xjyv.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
            <div className="relative">
              <img
                src={finder}
                alt=""
                className="w-full object-cover h-48  rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-t-lg"></div>
              <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                Finder{" "}
                <span>
                  <BsFillSendFill />
                </span>
              </h1>
            </div>
          </div>
        </a>

        {/* second project  */}
        <a href="#">
          <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
            <div className="relative">
              <img
                src={ecommerce}
                alt=""
                className="w-full object-cover h-48  rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-t-lg"></div>

              <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                in progress{" "}
                <span>
                  <LiaCodeSolid size={20} />
                </span>
              </h1>
            </div>
          </div>
        </a>

        {/* third project  */}
        <a
          href="https://opeyemi-2018.github.io/dictionary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white  shadow-md rounded-lg overflow-hidden mb-4 relative">
            <div className="relative">
              <img
                src={dictionary}
                alt=""
                className="w-full object-cover h-48  rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 rounded-t-lg"></div>
              <h1 className="absolute flex justify-between text-white bg-black bg-opacity-80 p-2 w-full bottom-0">
                Dictionary{" "}
                <span>
                  <BsFillSendFill />
                </span>
              </h1>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
