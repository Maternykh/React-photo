import { React, useEffect, useState } from "react";
import { Item } from "../components/Item";
import { Categories } from "../components/Categories";
import Skelet from "../components/Skelet";
import { Search } from "../components/Search";
import { Pagination } from "../components/Pagination";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";
export const Home = ({ OnClickPhoto, photos, setPhotos }) => {
  const selectedCateg = useSelector((state) => state.categ.selectedCateg);
  const search = useSelector((state) => state.searchvalue.search);
  const currentPage = useSelector((state) => state.pages.currentPage);
  const [isLoading, setLoading] = useState(true);
  const category = selectedCateg > 0 ? `category=${selectedCateg}` : "";
  const filteredphoto = photos
    .filter((el) => {
      if (el.topic.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((el) => <Item {...el} key={el.id} OnClickPhotoFunc={OnClickPhoto} />);
  const skeletons = [...new Array(3)].map((_, index) => <Skelet key={index} />);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://653f60259e8bd3be29e06d90.mockapi.io/photos?page=${currentPage}&limit=3&${category}`
      )
      .then((res) => {
        setPhotos(res.data);
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
        <Pagination
          currentPage={currentPage}
          OnChangePage={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
};
