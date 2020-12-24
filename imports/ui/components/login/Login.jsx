import React from "react";

export const Login = ({ handleSubmit, setUsername, setPassword, username, password }) => {
  return (
    <div className="login">
      <h1 className="page-title">Login</h1>

      <form className="login--form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="btn-container">
          <button type="submit" className="btn">
            Login !
          </button>
        </div>
      </form>
    </div>
  );
};
