import React from "react";
export const Categories = ({ selectedCateg, OnClickCateg }) => {
  const categ = ["Все", "Море", "Горы", "Архитектура", "Города"];
  return (
    <div className=" flex flex-wrap ">
      <div className=" flex flex-wrap">
        {categ.map((cat, index) => (
          <div
            className={` ${
              selectedCateg === index
                ? "bg-black text-white hover:cursor-auto"
                : "bg-white hover:bg-gray-500"
            }  hover:text-white hover:cursor-pointer mr-3 p-3 rounded-xl mb-3`}
            key={index}
            onClick={() => OnClickCateg(index)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};
