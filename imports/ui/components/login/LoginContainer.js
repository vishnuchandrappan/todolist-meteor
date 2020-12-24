import React, { useState } from "react";
import { Login } from "./Login";
import { Meteor } from "meteor/meteor";
import { useHistory } from "react-router-dom";

export const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
    history.push("/");
  };

  return (
    <Login
      handleSubmit={handleSubmit}
      setPassword={setPassword}
      setUsername={setUsername}
      username={username}
      password={password}
    />
  );
};
