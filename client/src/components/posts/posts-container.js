import React from "react";
import PostsPage from "./posts-view";
import { sendRequest, RequestType } from "../../utils/";

class PostsContainer extends React.Component {
  state = {
    posts: [],
    currentPage: 0,
    totalPages: 0
  };

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = () => {
    sendRequest(RequestType.GET, "/api/posts").then(response =>
      this.setState({
        posts: response.data.content,
        currentPage: response.data.number,
        totalPages: response.data.totalPages
      })
    );
  };

  render() {
    return <PostsPage posts={this.state.posts} />;
  }
}

export default PostsContainer;
