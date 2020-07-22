import React from "react";
import Post from "./post-view";
import { sendRequest, RequestType } from "../../utils";

class PostContainer extends React.Component {
  state = {
    title: "",
    content: "",
    date: new Date(),
  };

  componentDidMount = () => {
    this.getPost();
  };

  getPost = () => {
    sendRequest(RequestType.GET, "/api/posts/" + this.props.slug).then(
      (response) =>
        this.setState({
          title: response.data.title,
          content: response.data.content,
          date: response.data.date,
        })
    );
  };

  isUserLoggedIn = () => {
    return this.props.functions.getCurrentUser() !== null;
  };

  render() {
    return (
      <Post
        slug={this.props.slug}
        title={this.state.title}
        content={this.state.content}
        date={this.state.date}
        isUserLoggedIn={this.isUserLoggedIn()}
      />
    );
  }
}

export default PostContainer;
