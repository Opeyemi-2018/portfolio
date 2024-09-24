import React, { useContext } from "react";
GlobalContext;
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { GlobalContext } from "../global";

const ThemeButton = () => {
  const { themeMode, toggleThemeMode } = useContext(GlobalContext);

  return (
    <span
      className=" rounded-full focus:outline-none"
      onClick={toggleThemeMode}
    >
      {/* Conditionally render icons based on theme */}
      {themeMode === "light" ? (
        <IoMoonSharp className="text-3xl text-slate-900" /> // Moon icon for dark mode
      ) : (
        <IoIosSunny className="text-3xl text-white" /> // Sun icon for light mode
      )}
    </span>
  );
};

export default ThemeButton;
