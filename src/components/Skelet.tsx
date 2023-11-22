import React from "react";
import ContentLoader from "react-content-loader";

const Skelet: React.FC = () => (
  <ContentLoader
    speed={2}
    width={416}
    height={370}
    viewBox="0 0 416 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="10" rx="20" ry="20" width="384" height="240" />
    <rect x="8" y="264" rx="20" ry="20" width="112" height="70" />
    <rect x="142" y="265" rx="20" ry="20" width="112" height="70" />
    <rect x="275" y="265" rx="20" ry="20" width="112" height="70" />
    <rect x="80" y="321" rx="0" ry="0" width="1" height="1" />
  </ContentLoader>
);

export default Skelet;
