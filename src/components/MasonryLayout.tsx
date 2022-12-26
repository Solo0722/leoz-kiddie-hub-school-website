import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import styled from "styled-components";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = () => {
  return (
    <Masonry
      breakpointCols={breakpointObj}
      style={{ width: "100%", display: "flex" }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
      <div className="divv">My Element</div>
    </Masonry>
  );
};

export default MasonryLayout;
