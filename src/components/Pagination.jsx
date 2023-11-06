import React from "react";

export const Pagination = ({ OnChangePage, currentPage }) => {
  const page = [1, 2, 3];
  return (
    <div className=" flex">
      {page.map((pag, indexpage) => (
        <div
          onClick={() => OnChangePage(indexpage + 1)}
          className={` border-2 border-white mr-3  ${
            currentPage === indexpage + 1
              ? "bg-black text-white border-transparent"
              : "bg-white text-black border-transparent"
          } w-10 h-10 flex justify-center items-center rounded-xl hover:border-black hover:cursor-pointer`}
        >
          {pag}
        </div>
      ))}
    </div>
  );
};
