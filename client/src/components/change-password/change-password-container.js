import React from "react";
import { RequestType, sendRequest } from "../../utils/";
import ChangePassword from "./change-password-view";

class ChangePasswordContainer extends React.Component {
  state = {
    oldPassword: "",
    newPassword: "",
    newPasswordAgain: "",
    validationError: "",
    shouldRender: true,
  };

  componentDidMount = () => {
    this.redirectIfNotLoggedIn();
  };

  redirectIfNotLoggedIn = () => {
    if (!this.props.currentUser) {
      this.setState({ shouldRender: false }, () =>
        setTimeout(() => this.finalCheckBeforeRedirect(), 1000)
      );
    }
  };

  finalCheckBeforeRedirect = () => {
    if (!this.props.currentUser) {
      window.location.replace("/");
    } else {
      this.setState({ shouldRender: true });
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  requestPasswordChange = () => {
    if (this.state.newPassword === this.state.newPasswordAgain) {
      sendRequest(
        RequestType.POST,
        "/api/users/current/password",
        null,
        {
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword,
        },
        true
      )
        .then(() => window.location.replace("/"))
        .catch(() =>
          this.setState({ validationError: "Error updating password" })
        );
    } else {
      this.setState({ validationError: "Passwords do not match" });
    }
  };

  functions = {
    handleChange: this.handleChange,
    requestPasswordChange: this.requestPasswordChange,
  };

  render() {
    return (
      <ChangePassword
        currentPassword={this.state.currentPassword}
        newPassword={this.state.newPassword}
        newPasswordAgain={this.state.newPasswordAgain}
        validationError={this.state.validationError}
        functions={this.functions}
        shouldRender={this.state.shouldRender}
      />
    );
  }
}

export default ChangePasswordContainer;
