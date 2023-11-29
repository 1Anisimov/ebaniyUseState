import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  console.log(selectedSort);

  console.log("========");
  const handleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={() => handleSort(columns[column].iter)}
            scope="col"
          >
            {columns[column].name}
          </th>
        ))}
        {/* <th onClick={() => handleSort("name")} scope="col"></th>
        <th scope="col">Качества</th>
        <th onClick={() => handleSort("profession")} scope="col">
          Профессия
        </th>
        <th onClick={() => handleSort("completedMeetings")} scope="col">
          Встретился, раз
        </th>
        <th onClick={() => handleSort("rate")} scope="col">
          Оценка
        </th>
        <th onClick={() => handleSort("bookmark")} scope="col">
          Избранное
        </th>
        <th /> */}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
