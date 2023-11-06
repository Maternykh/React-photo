import React from "react";
import { motion } from "framer-motion";
export const Categories = ({ selectedCateg, OnClickCateg }) => {
  const categ = ["Все", "Море", "Горы", "Архитектура", "Города"];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className=" flex flex-wrap ">
      <motion.div
        className=" flex flex-wrap"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {categ.map((cat, index) => (
          <motion.div
            className={` ${
              selectedCateg === index
                ? "bg-black text-white hover:cursor-auto "
                : "bg-white hover:bg-gray-500"
            }  hover:text-white hover:cursor-pointer mr-3 p-3 rounded-xl mb-3`}
            key={index}
            onClick={() => OnClickCateg(index)}
            variants={item}
          >
            {cat}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
