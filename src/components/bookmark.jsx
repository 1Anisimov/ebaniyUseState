import React from "react";

const Bookmark = ({ bookmark, ...onClick }) => {
  return (
    <>
      <button {...onClick}>
        <i className={"bi bi-octagon" + (bookmark ? "-half" : " ")}></i>
      </button>
    </>
  );
};

export default Bookmark;
