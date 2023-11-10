import React, { useContext } from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReact } from "react-icons/tb";
import { ColorTheme } from "../App";
export const Footer = () => {
  const { darkTheme } = useContext(ColorTheme);
  return (
    <>
      <div className=" mt-5 flex">
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <TbBrandReact className="  text-4xl //text-sky-400" />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <SiReactrouter className="  text-4xl //text-sky-400" />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <BiLogoTailwindCss className="  text-4xl //text-sky-400" />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <TbBrandFramerMotion className="  text-4xl //text-sky-400" />
        </div>
      </div>
      <div
        className={`${darkTheme ? "text-neutral-100" : " text-neutral-700"}`}
      >
        created by Maternykh Egor
      </div>
    </>
  );
};
