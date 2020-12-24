import React from "react";
import { LogOut } from "react-feather";

export const Header = ({ user, logout }) => {
  return (
    <>
      {user && (
        <div className="header">
          <span>LoggedIn as {user.username}</span>
          <button className="btn" onClick={logout}>
            <LogOut />
            Logout
          </button>
        </div>
      )}
    </>
  );
};
