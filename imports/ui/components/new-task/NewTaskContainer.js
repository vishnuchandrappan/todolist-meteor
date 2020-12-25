import React, { useState } from "react";
import { NewTask } from "./NewTask";

export const NewTaskContainer = (props) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;

    tasks = task.split(",");

    tasks.forEach((text) => {
      Meteor.call("tasks.insert", text);
    });

    setTask("");
  };

  return (
    <NewTask
      {...props}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      task={task}
    />
  );
};
