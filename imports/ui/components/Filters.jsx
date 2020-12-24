import React from "react";
import { Eye, EyeOff } from "react-feather";

export const Filters = ({
  showCompleted,
  setShowCompleted,
  pendingTasksCount,
}) => {
  return (
    <div className="filters">
      <div
        className={`filters--tag ${showCompleted ? "show" : ""}`}
        onClick={() => setShowCompleted(!showCompleted)}
      >
        {showCompleted ? <Eye /> : <EyeOff />}
        Show Completed
      </div>

      <span className="pending">Pending : {pendingTasksCount}</span>
    </div>
  );
};
