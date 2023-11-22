import React from "react";
import { setCurrentPage } from "../Redux/Slice/filterSlice";
import { useAppDispatch, useAppSelector } from "../Types";
import { RootState } from "../Redux/store";
export const Pagination: React.FC = () => {
  const { currentPage } = useAppSelector((state: RootState) => state.filter);
  const darkTheme = useAppSelector((state: RootState) => state.themes.dark);
  const dispatch = useAppDispatch();
  const page = [1, 2, 3];
  return (
    <div className=" flex">
      {page.map((pag, indexpage) => (
        <div
          key={indexpage}
          onClick={() => dispatch(setCurrentPage(indexpage + 1))}
          className={` border-2  mr-3  ${
            currentPage === indexpage + 1
              ? darkTheme
                ? "bg-gray-500 text-white border-gray-500"
                : "bg-black text-white border-black"
              : darkTheme
              ? "bg-gray-700 hover:bg-gray-500 text-neutral-200 border-gray-700"
              : "bg-white text-black border-white"
          } w-10 h-10 flex justify-center items-center rounded-xl ${
            darkTheme ? "hover:border-white" : "hover:border-black"
          } hover:cursor-pointer`}
        >
          {pag}
        </div>
      ))}
    </div>
  );
};
