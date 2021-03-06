import React, { useState } from "react";
import { Home } from "./Home";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "../../../db/TasksCollection";

export const HomeContainer = ({ user = null }) => {
  const [showCompleted, setShowCompleted] = useState(true);

  const conditions = {
    user_id: user._id,
  };

  const options = {
    sort: {
      created_at: -1,
    },
  };

  const { tasks, pendingTasksCount, tasksCount } = useTracker(() => {
    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return { ...noDataAvailable };
    }
    const handler = Meteor.subscribe("tasks");

    if (!handler.ready()) {
      return { ...noDataAvailable };
    }

    const tasks = TasksCollection.find(
      showCompleted ? conditions : { ...conditions, completed: showCompleted },
      options
    ).fetch();

    const pendingTasksCount = TasksCollection.find({
      ...conditions,
      completed: false,
    }).count();

    const tasksCount = TasksCollection.find(conditions).count();

    return { tasks, pendingTasksCount, tasksCount };
  });

  const handleDelete = (_id) => {
    confirmation = confirm(`Are you sure you want to delete task #${_id} ?`);
    if (!confirmation) return;
    Meteor.call("tasks.remove", _id);
  };

  const handleClick = (_id, completed) => {
    Meteor.call("tasks.update", _id, completed);
  };

  return (
    <Home
      user={user}
      setShowCompleted={setShowCompleted}
      tasks={tasks}
      showCompleted={showCompleted}
      handleDelete={handleDelete}
      handleClick={handleClick}
      pendingTasksCount={pendingTasksCount}
      tasksCount={tasksCount}
    />
  );
};
