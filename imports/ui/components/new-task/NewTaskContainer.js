import React, { useState } from "react";
import { TasksCollection } from "../../../api/TasksCollection";
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

    tasks.forEach((data) => {
      TasksCollection.insert({
        text: data,
        completed: false,
        created_at: new Date(),
        user_id: user._id,
      });
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
