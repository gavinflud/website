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
    document.title = "Gavin Flood - Writing";
    this.getPosts();
  };

  previousPage = () => {
    if (this.state.currentPage > 0) {
      this.setState({ currentPage: this.state.currentPage - 1 }, this.getPosts);
    }
  };

  nextPage = () => {
    if (this.state.currentPage + 1 < this.state.totalPages) {
      this.setState({ currentPage: this.state.currentPage + 1 }, this.getPosts);
    }
  };

  getPosts = () => {
    sendRequest(
      RequestType.GET,
      "/api/posts",
      {
        page: this.state.currentPage,
        size: 20,
      },
      null,
      true
    ).then((response) =>
      this.setState({
        posts: response.data.content,
        currentPage: response.data.number,
        totalPages: response.data.totalPages,
      })
    );
  };

  render() {
    const hasPrevious = this.state.currentPage > 0;
    const currentPage = this.state.currentPage + 1;
    const hasNext = this.state.currentPage < this.state.totalPages - 1;
    return (
      <PostsPage
        posts={this.state.posts}
        currentUser={this.props.currentUser}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        currentPage={currentPage}
        previousPage={this.previousPage}
        nextPage={this.nextPage}
      />
    );
  }
}

export default PostsContainer;
