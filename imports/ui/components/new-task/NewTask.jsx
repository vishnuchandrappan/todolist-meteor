import React from "react";
import { Plus } from "react-feather";

export const NewTask = ({ handleChange, handleSubmit, task }) => {
  return (
    <form onSubmit={handleSubmit} className="new-task">
      <input
        type="text"
        placeholder="Type something... Eg: one, two, three"
        value={task}
        onChange={handleChange}
      />

      <div className="btn-container">
        <button className="btn" type="submit">
          <Plus />
          Create !
        </button>
      </div>
    </form>
  );
};
