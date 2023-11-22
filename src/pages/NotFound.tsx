import React from "react";
import { useAppSelector } from "../Types";
import { RootState } from "../Redux/store";
export const NotFound = () => {
  const darkTheme = useAppSelector((state: RootState) => state.themes.dark);
  return (
    <div className=" p-5 h-5/6">
      <div
        className={`${
          darkTheme ? "bg-gray-700 text-white" : " bg-white text-gray-900"
        } flex rounded-xl   items-center flex-col py-40 h-full`}
      >
        <div className=" text-4xl mb-10 xl:mb-20">404</div>
        <div className=" text-2xl">Такой страницы нет</div>
      </div>
    </div>
  );
};
