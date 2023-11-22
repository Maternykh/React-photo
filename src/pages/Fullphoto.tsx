import React from "react";
import { PhotoCart } from "../components/PhotoCart";
import { motion } from "framer-motion";
import { PhotoMap, useAppSelector } from "../Types";
export const Fullphoto = ({ fullphoto }: { fullphoto: string }) => {
  const photos = useAppSelector((state) => state.photo.photos);
  const darkTheme = useAppSelector((state) => state.themes.dark);
  return (
    <motion.div
      className={` ${
        darkTheme ? " bg-gray-700 text-white" : "bg-white"
      } rounded-2xl`}
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
      {photos.map((items: PhotoMap, index: number) => (
        <div key={index}>
          {items.photos.map((ph, i: number) => {
            if (fullphoto === ph.photo) {
              return <PhotoCart {...ph} key={i} />;
            }
          })}
        </div>
      ))}
    </motion.div>
  );
};
