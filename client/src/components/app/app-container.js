import React from "react";
import App from "./app-view";
import { getLoggedInUser, sendRequest, RequestType } from "../../utils";

class AppContainer extends React.Component {
  state = {
    user: null
  };

  componentDidMount = () => {
    getLoggedInUser().then(user => this.login(user));
  };

  login = user => {
    this.setState({ user: user });
  };

  logout = () => {
    sendRequest(RequestType.POST, "/logout", null, null, true).then(() =>
      this.setState({ user: null })
    );
  };

  getCurrentUser = () => {
    return this.state.user;
  };

  functions = {
    login: this.login,
    logout: this.logout,
    getCurrentUser: this.getCurrentUser
  };

  render() {
    return <App functions={this.functions} />;
  }
}

export default AppContainer;
