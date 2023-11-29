import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookMark,
}) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          {qualities.map((qualitie) => (
            <Qualitie key={qualitie._id} {...qualitie} />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate}/5</td>
        <td>
          <Bookmark bookmark={bookmark} onClick={() => onToggleBookMark(_id)} />
        </td>
        <td>
          <button onClick={() => onDelete(_id)} className="btn btn-danger">
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
