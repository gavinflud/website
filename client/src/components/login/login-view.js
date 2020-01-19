import React from "react";

const LoginPage = props => {
  return (
    <div>
      <h1>Login</h1>
      <div className="gf-login-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={props.handleChange}
          value={props.username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={props.handleChange}
          value={props.password}
        />
        <button onClick={props.submitForm}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
