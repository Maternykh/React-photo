import React from "react";

export const Search = ({ search, setSearch }) => {
  return (
    <div className=" mb-5">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Введите тему"
        type="text"
        className=" p-2 outline-none border-gray-400 border-2 rounded-xl text-lg"
      />
    </div>
  );
};
