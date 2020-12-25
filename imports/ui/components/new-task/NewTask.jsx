import React from "react";
import { Plus } from "react-feather";
import Typed from "react-typed";

export const NewTask = ({ handleChange, handleSubmit, task }) => {
  return (
    <form onSubmit={handleSubmit} className="new-task">
      <Typed
        strings={[
          "Add your todo; => Learn Meteor",
          "Add multiple tasks at a time; => Learn Python, Learn Flask",
          "foo, bar, baz",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" value={task} onChange={handleChange} />
      </Typed>

      <div className="btn-container">
        <button className="btn" type="submit">
          <Plus />
          Create !
        </button>
      </div>
    </form>
  );
};
