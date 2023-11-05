import React from "react";
import { PhotoCart } from "../components/PhotoCart";

export const Fullphoto = ({ photos, fullphoto }) => {
  return (
    <div className=" bg-white rounded-2xl">
      {photos.map((items, index) => (
        <div key={index}>
          {items.photos.map((ph, i) => {
            if (fullphoto === ph.photo) {
              return <PhotoCart {...ph} key={i} />;
            }
          })}
        </div>
      ))}
    </div>
  );
};
