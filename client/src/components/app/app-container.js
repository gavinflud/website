import React from "react";
import App from "./app-view";
import { getLoggedInUser, sendRequest, RequestType } from "../../utils";

class AppContainer extends React.Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    getLoggedInUser()
      .then((user) => this.login(user))
      .catch(() => {});
  };

  login = (user) => {
    this.setState({ user: user });
  };

  logout = () => {
    sendRequest(RequestType.POST, "/logout", null, null, true).then(() =>
      this.setState({ user: null })
    );
  };

  functions = {
    login: this.login,
    logout: this.logout,
  };

  render() {
    return <App currentUser={this.state.user} functions={this.functions} />;
  }
}

export default AppContainer;
