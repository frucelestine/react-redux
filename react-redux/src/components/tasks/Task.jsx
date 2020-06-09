import React from "react";

const Task = () => {
  return (
    <>
      <tr>
        <th scope="row">Learn Redux</th>
        <td>10/06/2020</td>
        <td>
          <span className="material-icons text-success">check_circle</span>
        </td>
        <td>
          <span className="material-icons text-danger" style={{cursor: "pointer"}}>delete</span>
        </td>
      </tr>
    </>
  );
};

export default Task;
