import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to={`/`}>
        <div className=" text-3xl font-bold mb-4">Моя коллекция фотографий</div>
      </Link>
    </div>
  );
};
