import React from "react";
import { SiReactrouter } from "react-icons/si";
import {
  TbBrandFramerMotion,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
} from "react-icons/tb";
import { useSelector } from "react-redux";
export const Footer = () => {
  const darkTheme = useSelector((state) => state.themes.dark);
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
          <TbBrandReact className="  text-4xl " />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <TbBrandRedux className="  text-4xl " />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <SiReactrouter className="  text-4xl" />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <TbBrandTailwind className="  text-4xl " />
        </div>
        <div
          className={` ${
            darkTheme
              ? " bg-gray-700 border-white text-white"
              : "bg-white border-slate-600 text-gray-900"
          } p-2  rounded-xl mr-3  border-2`}
        >
          <TbBrandFramerMotion className="  text-4xl " />
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
