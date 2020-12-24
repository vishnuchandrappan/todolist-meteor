import React from "react";
import { Switch, Route } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { LoginContainer } from "./login/LoginContainer";
import { HomeContainer } from "./home/HomeContainer";

export const Routes = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <Switch>
      <Route path="/" exact>
        {user ? <HomeContainer user={user} /> : <LoginContainer />}
      </Route>

      <Route path="/login" component={LoginContainer} />
    </Switch>
  );
};
