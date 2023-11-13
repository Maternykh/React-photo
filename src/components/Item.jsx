import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
export const Item = ({ photos, OnClickPhotoFunc, topic }) => {
  const darkTheme = useSelector((state) => state.themes.dark);
  const [mainImage, setMainImage] = useState(0);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className={`${
        darkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
      } p-4  rounded-lg mb-5`}
      variants={item}
    >
      <div className=" justify-center flex mb-4">
        {photos.map((ph, index) => {
          if (mainImage === index) {
            return (
              <div key={index}>
                <Link to={`/fullphot`}>
                  <div
                    className=" w-96"
                    onClick={() => OnClickPhotoFunc(ph.photo)}
                  >
                    <img src={ph.photo} className=" w-full rounded-2xl" />
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
      <div className=" flex justify-between">
        {photos.map((ph, index) => {
          if (mainImage !== index) {
            return (
              <div className=" w-28" key={index}>
                <img
                  src={ph.photo}
                  className=" w-full rounded-2xl"
                  onClick={() => setMainImage(index)}
                />
              </div>
            );
          }
        })}
      </div>
      <div className=" text-xl font-bold mt-3 flex flex-col flex-grow">
        {topic}
      </div>
    </motion.div>
  );
};
