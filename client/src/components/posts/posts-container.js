import React from "react";
import PostsPage from "./posts-view";
import { sendRequest, RequestType } from "../../utils/";

class PostsContainer extends React.Component {
  state = {
    posts: [],
    currentPage: 0,
    totalPages: 0,
  };

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = () => {
    sendRequest(RequestType.GET, "/api/posts", null, null, true).then(
      (response) =>
        this.setState({
          posts: response.data.content,
          currentPage: response.data.number,
          totalPages: response.data.totalPages,
        })
    );
  };

  render() {
    return (
      <PostsPage
        posts={this.state.posts}
        currentUser={this.props.currentUser}
      />
    );
  }
}

export default PostsContainer;
