import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
export const PhotoCart = ({ photo, title, desc }) => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);
  const [isOpenDesc, setIsOpenDesc] = useState(false);
  const liked = (event) => {
    setLike((current) => !current);
    setDisLike(false);
  };
  const disliked = (event) => {
    setLike(false);
    setDisLike((current) => !current);
  };
  const counter = (event) => {
    count === 0
      ? setCount((count) => count + 1)
      : setCount((count) => count - 1);
  };
  return (
    <div className=" flex flex-wrap justify-center xl:justify-normal">
      <div
        className={`w-full  xl:w-2/3 border-2 border-black rounded-2xl overflow-hidden`}
      >
        <Link to={`/`}>
          <img src={photo} className=" w-full " />
        </Link>
        <div className=" p-5 flex align-middle justify-between">
          <div className=" flex items-center justify-center">
            {count === 0 ? (
              <AiOutlineHeart
                className=" text-2xl hover:cursor-pointer"
                onClick={counter}
              />
            ) : (
              <AiFillHeart
                className=" text-2xl mr-2 hover:cursor-pointer"
                onClick={counter}
              />
            )}
            {count === 1 && <div className="">{count}</div>}
          </div>
          <div>
            {isOpenDesc ? (
              <IoMdArrowDropup
                className=" text-5xl hover:cursor-pointer"
                onClick={() => setIsOpenDesc((current) => !current)}
              />
            ) : (
              <IoMdArrowDropdown
                className=" text-5xl hover:cursor-pointer"
                onClick={() => setIsOpenDesc((current) => !current)}
              />
            )}
          </div>
          <div className=" flex items-center justify-center">
            {like ? (
              <AiFillLike
                className=" text-2xl hover:cursor-pointer mr-5"
                onClick={liked}
              />
            ) : (
              <AiOutlineLike
                className=" text-2xl hover:cursor-pointer mr-5"
                onClick={liked}
              />
            )}
            {dislike ? (
              <AiFillDislike
                className=" text-2xl hover:cursor-pointer"
                onClick={disliked}
              />
            ) : (
              <AiOutlineDislike
                className=" text-2xl hover:cursor-pointer"
                onClick={disliked}
              />
            )}
          </div>
        </div>
      </div>
      {isOpenDesc && (
        <div className=" w-full xl:w-1/3 flex mt-6 items-center flex-col">
          <motion.div
            className=" m-5"
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              default: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <div className=" text-3xl font-bold mb-3">{title}</div>
            <div className=" text-gray-500">{desc}</div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
