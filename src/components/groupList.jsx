import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem,
}) => {
  //   console.log(Object.keys(items));
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => (
        <li
          className={
            "list-group-item" + (items[item] === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(items[item])}
          role="button"
          key={items[item][valueProperty]}
        >
          {items[item][contentProperty]}
        </li>
      ))}
      {/* <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li> */}
    </ul>
  );
};
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};
GroupList.protoTypes = {
  items: PropTypes.object.isRequired,
  contentProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default GroupList;
