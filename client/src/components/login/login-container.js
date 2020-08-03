import React from "react";
import LoginPage from "./login-view";
import { sendRequest, RequestType, getLoggedInUser } from "../../utils";

class LoginContainer extends React.Component {
  state = {
    username: "",
    password: "",
    shouldRender: false,
  };

  componentDidMount = () => {
    document.title = "Gavin Flood - Login";
    this.redirectIfLoggedIn();
  };

  redirectIfLoggedIn = () => {
    setTimeout(() => {
      if (this.props.currentUser) {
        window.location.replace("/");
      } else {
        this.setState({ shouldRender: true });
      }
    }, 1000);
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    const formData = new FormData();
    formData.set("username", this.state.username);
    formData.set("password", this.state.password);
    sendRequest(RequestType.POST, "/api/login", null, formData, true)
      .then(getLoggedInUser)
      .then((user) => this.props.functions.login(user))
      .then(this.redirectIfLoggedIn);
  };

  render() {
    return (
      <LoginPage
        username={this.state.username}
        password={this.state.password}
        handleChange={this.handleChange}
        submitForm={this.submitForm}
        shouldRender={this.state.shouldRender}
      />
    );
  }
}

export default LoginContainer;
