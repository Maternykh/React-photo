import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Item = ({ photos, OnClickPhotoFunc, topic }) => {
  const [mainImage, setMainImage] = useState(0);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div className=" p-4 bg-white rounded-lg mb-5" variants={item}>
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
