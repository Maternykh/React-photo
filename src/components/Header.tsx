import React from "react";
import { Link } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
import { setDarkTheme } from "../Redux/Slice/themeSlice";
import { useAppDispatch, useAppSelector } from "../Types";
import { RootState } from "../Redux/store";
export const Header: React.FC = () => {
  const darkTheme = useAppSelector((state: RootState) => state.themes.dark);
  const dispatch = useAppDispatch();
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
      <div className=" flex flex-nowrap">
        <div
          className={`${
            darkTheme ? "bg-gray-900 border-white" : "bg-white"
          } mb-5 p-2 hover:cursor-pointer rounded-xl border-slate-600 border-2`}
          onClick={() => dispatch(setDarkTheme())}
        >
          {darkTheme ? (
            <BiSolidMoon className=" text-2xl text-white" />
          ) : (
            <BsSun className=" text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};
