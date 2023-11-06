import React from "react";
import { motion } from "framer-motion";
export const Search = ({ search, setSearch }) => {
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
        className=" p-2 outline-none border-gray-400 border-2 rounded-xl text-lg"
      />
    </div>
  );
};
