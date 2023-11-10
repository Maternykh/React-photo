import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ColorTheme } from "../App";
export const Search = ({ search, setSearch }) => {
  const { darkTheme } = useContext(ColorTheme);
  return (
    <div className=" mb-5">
      <motion.input
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          default: { duration: 0.5, ease: "easeInOut" },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введите тему"
        type="text"
        className={`${
          darkTheme
            ? "bg-gray-700 text-neutral-200"
            : "border-gray-400 text-black bg-white"
        } p-2 outline-none  border-2 rounded-xl text-lg`}
      />
    </div>
  );
};
