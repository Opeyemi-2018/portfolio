import React, { useContext } from "react";
import { GlobalContext } from "../global";

const Footer = () => {
  let { themeMode } = useContext(GlobalContext);
  return (
    <div
      className={`${
        themeMode === "light"
          ? "bg-[#f3f4f6] text-[#111827]"
          : "bg-[#111827] text-[#f3f4f6]"
      }`}
    >
      <h1 className="text-center sm:p-4 p-2 sm:font-2xl text-[16px]">
        &copy; {new Date().getFullYear()} Opeyemi. All rights reserved
      </h1>
    </div>
  );
};

export default Footer;
