import { check } from "meteor/check";
import { TasksCollection } from "../db/TasksCollection";

Meteor.methods({
  "tasks.insert"(text) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error("Not authorized");
    }

    TasksCollection.insert({
      text,
      completed: false,
      created_at: new Date(),
      user_id: this.userId,
    });
  },

  "tasks.remove"(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error("Unauthorized");
    }

    const task = TasksCollection.findOne({
      _id: taskId,
      user_id: this.userId,
    });

    if (!task) {
      throw new Meteor.Error("Access denied.");
    }

    TasksCollection.remove(taskId);
  },

  "tasks.update"(taskId, completed) {
    check(taskId, String);
    check(completed, Boolean);

    if (!this.userId) {
      throw new Meteor.Error("Unauthorized");
    }

    const task = TasksCollection.findOne({
      _id: taskId,
      user_id: this.userId,
    });

    if (!task) {
      throw new Meteor.Error("Access denied.");
    }

    TasksCollection.update(taskId, {
      $set: {
        completed,
        updated_at: new Date(),
      },
    });
  },
});
