import React from "react";
import { CheckCircle } from "react-feather";
import { HeaderContainer } from "../header/HeaderContainer.js";
import { NewTaskContainer } from "../new-task/NewTaskContainer";
import { Filters } from "../Filters";
import { Task } from "../Task.jsx";

export const Home = ({
  user = null,
  tasks,
  handleDelete,
  handleClick,
  tasksCount,
  ...filterProps
}) => {
  return (
    <>
      <HeaderContainer user={user} />
      <h1 className="page-title">
        <CheckCircle />
        Todo List
      </h1>

      <NewTaskContainer user={user} />

      {tasksCount > 0 ? (
        <>
          <Filters {...filterProps} />
          <div className="tasks">
            {tasks.map((task) => (
              <Task
                key={task._id}
                task={task}
                handleClick={handleClick}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </>
      ) : (
        <span className="notification">No tasks to show...</span>
      )}
    </>
  );
};
