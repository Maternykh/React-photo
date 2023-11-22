import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { Photoses } from "../Types";
export const PhotoCart = ({ photo, title, desc }: Photoses) => {
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDisLike] = useState<boolean>(false);
  const [isOpenDesc, setIsOpenDesc] = useState<boolean>(false);
  const liked = (event) => {
    setLike((current) => !current);
    setDisLike(false);
  };
  const disliked = (event) => {
    setLike(false);
    setDisLike((current) => !current);
  };
  return (
    <div className=" flex flex-wrap justify-center xl:justify-normal">
      <div
        className={`w-full  xl:w-2/3 border-2 border-black rounded-2xl overflow-hidden`}
      >
        <Link to={`/`}>
          <img src={photo} className=" w-full " />
        </Link>
        <div className=" p-3 flex items-center justify-between">
          <div>
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
          <div>
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
