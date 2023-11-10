import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorTheme } from "../App";
import { BsSun } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
export const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ColorTheme);
  return (
    <div className=" flex flex-wrap justify-between items-center">
      <Link to={`/`}>
        <div
          className={`text-3xl font-bold mb-4 ${
            darkTheme ? "text-white" : " text-black"
          }`}
        >
          Моя коллекция фотографий
        </div>
      </Link>
      <div
        className={`${
          darkTheme ? "bg-gray-900 border-white" : "bg-white"
        } mb-5 p-2 hover:cursor-pointer rounded-xl border-slate-600 border-2`}
        onClick={() => setDarkTheme((current) => !current)}
      >
        {darkTheme ? (
          <BiSolidMoon className=" text-2xl text-white" />
        ) : (
          <BsSun className=" text-2xl" />
        )}
      </div>
    </div>
  );
};
