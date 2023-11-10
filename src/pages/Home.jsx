import { React, useEffect, useState } from "react";
import { Item } from "../components/Item";
import { Categories } from "../components/Categories";
import Skelet from "../components/Skelet";
import { Search } from "../components/Search";
import { Pagination } from "../components/Pagination";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
export const Home = ({ OnClickPhoto, photos, setPhotos }) => {
  const [selectedCateg, setSelectedCateg] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
    fetch(
      `https://653f60259e8bd3be29e06d90.mockapi.io/photos?page=${currentPage}&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setPhotos(arr);
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
      <Categories
        selectedCateg={selectedCateg}
        OnClickCateg={(index) => setSelectedCateg(index)}
      />
      <Search search={search} setSearch={(e) => setSearch(e)} />
      <div className=" xl:hidden block mb-5">
        <Pagination
          currentPage={currentPage}
          OnChangePage={(page) => setCurrentPage(page)}
        />
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
