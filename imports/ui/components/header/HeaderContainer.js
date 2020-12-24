import React from "react";
import { Header } from "./Header";

export const HeaderContainer = (props) => {
  const logout = () => {
    const confirmation = confirm("Do you want to logout ?");
    if (!confirmation) return;
    Meteor.logout();
  };

  return <Header {...props} logout={logout} />;
};
