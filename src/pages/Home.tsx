import React from "react";
import { useEffect, useState } from "react";
import { Item } from "../components/Item";
import { Categories } from "../components/Categories";
import Skelet from "../components/Skelet";
import { Search } from "../components/Search";
import { Pagination } from "../components/Pagination";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import axios from "axios";
import { setPhotos } from "../Redux/Slice/photoSlice";
import { PhotoMap, useAppDispatch, useAppSelector } from "../Types";
import { RootState } from "../Redux/store";
export const Home = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector((state: RootState) => state.photo.photos);
  const { selectedCateg, search, currentPage } = useAppSelector(
    (state: RootState) => state.filter
  );
  const [isLoading, setLoading] = useState<boolean>(true);
  const category = selectedCateg > 0 ? `category=${selectedCateg}` : "";
  const filteredphoto = photos
    .filter((el: PhotoMap) => {
      if (el.topic.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((el: PhotoMap) => <Item {...el} key={el.id} />);
  const skeletons = [...new Array(3)].map((_, index: number) => (
    <Skelet key={index} />
  ));
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://653f60259e8bd3be29e06d90.mockapi.io/photos?page=${currentPage}&limit=3&${category}`
      )
      .then((res) => {
        dispatch(setPhotos(res.data));
        setLoading(false);
      });
  }, [selectedCateg, currentPage]);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <Categories />
      <Search />
      <div className=" xl:hidden block mb-5">
        <Pagination />
      </div>
      <motion.div
        className=" flex flex-wrap justify-center xl:justify-between"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {isLoading ? skeletons : filteredphoto}
      </motion.div>
      <div className=" xl:block hidden ">
        <Pagination />
      </div>
      <Footer />
    </>
  );
};
