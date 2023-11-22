import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { setFullPhoto } from "../Redux/Slice/photoSlice";
import { Photoses, useAppDispatch, useAppSelector } from "../Types";
import { RootState } from "../Redux/store";
export const Item = ({
  photos,
  topic,
}: {
  photos: Photoses[];
  topic: string;
}) => {
  const darkTheme = useAppSelector((state: RootState) => state.themes.dark);
  const [mainImage, setMainImage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const dispatch = useAppDispatch();
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const counter = (event) => {
    count === 0
      ? setCount((count) => count + 1)
      : setCount((count) => count - 1);
  };
  return (
    <motion.div
      className={`${
        darkTheme ? "bg-gray-700 text-white" : "bg-white text-black"
      } p-4  rounded-lg mb-5`}
      variants={item}
    >
      <div className=" justify-center flex mb-4">
        {photos.map((ph, index: number) => {
          if (mainImage === index) {
            return (
              <div key={index}>
                <Link to={`/fullphot`}>
                  <div
                    className=" w-96"
                    onClick={() => dispatch(setFullPhoto(ph.photo))}
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
        {photos.map((ph, index: number) => {
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
      <div className=" text-xl font-bold mt-3 flex flex-grow justify-between items-center">
        <div> {topic}</div>
        <div className=" flex items-center justify-center">
          {count === 1 && <div>{count}</div>}
          {count === 0 ? (
            <AiOutlineHeart
              className=" text-2xl hover:cursor-pointer"
              onClick={counter}
            />
          ) : (
            <AiFillHeart
              className=" text-2xl ml-2 hover:cursor-pointer"
              onClick={counter}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};
