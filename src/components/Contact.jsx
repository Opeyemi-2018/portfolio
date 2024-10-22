import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../global";

const Contact = () => {
  let { themeMode } = useContext(GlobalContext);
  return (
    <div>
      <h1
        className={`font-semibold text-center mb-2 md:text-2xl text-[16px] ${
          themeMode === "light" ? "text-black" : "text-white"
        }`}
      >
        Get in touch
      </h1>
      <div className="flex items-center gap-10">
        <a href="mailto:opeyemiodunayo2018@gmail.com">
          <MdEmail
            className={`text-4xl ${
              themeMode === "light" ? "text-[#030712]" : "text-[#d1d5db]"
            }`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rabiu-opeyemi-ab759723b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className={`text-3xl ${
              themeMode === "light" ? "text-[#030712]" : "text-[#d1d5db]"
            }`}
          />
        </a>
        <a
          href="https://github.com/Opeyemi-2018"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare
            className={`text-3xl ${
              themeMode === "light" ? "text-[#030712]" : "text-[#d1d5db]"
            }`}
          />
        </a>
        <a
          href="https://x.com/ope_guchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter
            className={`text-3xl ${
              themeMode === "light" ? "text-[#030712]" : "text-[#d1d5db]"
            }`}
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
