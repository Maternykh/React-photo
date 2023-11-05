import { React, useEffect, useState } from "react";
import { Item } from "../components/Item";
import { Categories } from "../components/Categories";
import Skelet from "../components/Skelet";
import { Search } from "../components/Search";

export const Home = ({ OnClickPhoto, photos, setPhotos }) => {
  const [selectedCateg, setSelectedCateg] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const category = selectedCateg > 0 ? `category=${selectedCateg}` : "";
  const filteredphoto = photos
    .filter((el) => {
      if (el.topic.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((el) => <Item {...el} key={el.id} OnClickPhotoFunc={OnClickPhoto} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skelet key={index} />);
  useEffect(() => {
    setLoading(true);
    fetch(`https://653f60259e8bd3be29e06d90.mockapi.io/photos?${category}`)
      .then((res) => res.json())
      .then((arr) => {
        setPhotos(arr);
        setLoading(false);
      });
  }, [selectedCateg]);
  return (
    <>
      <Categories
        selectedCateg={selectedCateg}
        OnClickCateg={(index) => setSelectedCateg(index)}
      />
      <Search search={search} setSearch={(e) => setSearch(e)} />
      <div className=" flex flex-wrap justify-center xl:justify-between">
        {isLoading ? skeletons : filteredphoto}
      </div>
    </>
  );
};
