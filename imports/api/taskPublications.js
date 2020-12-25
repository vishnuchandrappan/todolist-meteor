import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/db/TasksCollection";

Meteor.publish("tasks", function publishTasks() {
  return TasksCollection.find({ user_id: this.userId });
});
