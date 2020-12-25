import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import "/imports/api/taskMethods";
import "/imports/api/taskPublications";

const USERNAME = "admin";
const PASSWORD = "password";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(USERNAME)) {
    Accounts.createUser({
      username: USERNAME,
      password: PASSWORD,
    });
  }
});
