import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (length) => {
    if (length > 4 || length === 1) {
      return length + " Человек тусанет с тобой сегодня";
    } else if (length <= 4 && length > 1) {
      return length + " Человека тусанут с тобой сегодня";
    } else if (length === 0) {
      return "Никто с тобой не тусанет";
    }
  };
  const classStatus = (length) => {
    let style = "badge text-bg-";
    if (length > 0) {
      style += "primary";
    } else {
      style += "danger";
    }
    return style;
  };
  return (
    <>
      <h2 className={classStatus(length)}>{renderPhrase(length)}</h2>
    </>
  );
};

export default SearchStatus;
