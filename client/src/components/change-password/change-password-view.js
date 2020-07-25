import React from "react";

const ChangePassword = (props) => {
  return (
    <div>
      <h1>Change Password</h1>

      {props.shouldRender ? (
        <div>
          <label>Old Password</label>
          <input
            type="password"
            name="oldPassword"
            value={props.oldPassword}
            onChange={props.functions.handleChange}
          />

          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={props.newPassword}
            onChange={props.functions.handleChange}
          />

          <label>New Password (repeat)</label>
          <input
            type="password"
            name="newPasswordAgain"
            value={props.newPasswordAgain}
            onChange={props.functions.handleChange}
          />

          {props.validationError !== "" ? (
            <p className="gf-validation-error">{props.validationError}</p>
          ) : (
            ""
          )}

          <button onClick={props.functions.requestPasswordChange}>
            Update
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChangePassword;
