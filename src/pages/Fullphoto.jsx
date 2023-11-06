import React from "react";
import { PhotoCart } from "../components/PhotoCart";
import { motion } from "framer-motion";
export const Fullphoto = ({ photos, fullphoto }) => {
  return (
    <motion.div
      className=" bg-white rounded-2xl"
      initial={{
        opacity: 0,
        y: -50,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        default: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      {photos.map((items, index) => (
        <div key={index}>
          {items.photos.map((ph, i) => {
            if (fullphoto === ph.photo) {
              return <PhotoCart {...ph} key={i} />;
            }
          })}
        </div>
      ))}
    </motion.div>
  );
};
