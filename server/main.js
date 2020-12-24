import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../imports/api/TasksCollection";
import { Accounts } from "meteor/accounts-base";

const USERNAME = "admin";
const PASSWORD = "password";

const insertTask = (text) => {
  TasksCollection.insert({
    text,
    completed: false,
  });
};

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(USERNAME)) {
    Accounts.createUser({
      username: USERNAME,
      password: PASSWORD,
    });
  }

  // if (!TasksCollection.find().count()) {
  //   ["First Task", "Second Task", "Third Task"].forEach(insertTask);
  // }
});
