import React from "react";
import PropTypes from "prop-types";
const Bookmark = ({ bookmark, ...rest }) => {
  return (
    <>
      <button {...rest}>
        <i className={"bi bi-octagon" + (bookmark ? "-half" : " ")}></i>
      </button>
    </>
  );
};
Bookmark.propTypes = {
  status: PropTypes.bool,
};

export default Bookmark;
