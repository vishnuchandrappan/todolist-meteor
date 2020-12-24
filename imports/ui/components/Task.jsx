import React from "react";
import { Trash } from "react-feather";

export const Task = ({ task, handleClick, handleDelete }) => {
  return (
    <div className="task">
      <div className="task--contents">
        <input
          type="checkbox"
          className="checkbox"
          checked={!!task.completed}
          onClick={() => handleClick(task._id, !task.completed)}
          readOnly
        />
        <span className={`task--text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      </div>
      <div className="task--actions">
        <Trash onClick={() => handleDelete(task._id)} />
      </div>
    </div>
  );
};
