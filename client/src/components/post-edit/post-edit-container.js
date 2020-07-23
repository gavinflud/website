import React from "react";
import PostEdit from "./post-edit-view";
import { RequestType, sendRequest } from "../../utils/";

class PostEditContainer extends React.Component {
  state = {
    title: "",
    content: "",
    date: new Date(),
    published: false,
    shouldRender: true,
  };

  componentDidMount = () => {
    this.redirectIfNotLoggedIn();

    if (this.isEdit()) {
      sendRequest(RequestType.GET, "/api/posts/" + this.props.slug).then(
        (response) => {
          this.setState({
            title: response.data.title,
            content: response.data.content,
            date: new Date(response.data.date),
            published: response.data.published,
          });
        }
      );
    }
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

  isEdit = () => {
    return this.props.slug !== undefined && this.props.slug !== null;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.name === "published" ? target.checked : target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };

  handleDateChange = (date) => {
    this.setState({ date: date });
  };

  handleContentChange = (value) => {
    this.setState({ content: value });
  };

  save = () => {
    if (this.isEdit()) {
      this.update();
    } else {
      this.create();
    }
  };

  create = () => {
    sendRequest(
      RequestType.POST,
      "/api/posts",
      null,
      {
        title: this.state.title,
        content: this.state.content,
        date: this.state.date,
        published: this.state.published,
      },
      true
    ).then((response) => {
      window.location.replace("/writing/" + response.data.slug);
    });
  };

  update = () => {
    sendRequest(
      RequestType.PUT,
      "/api/posts/" + this.props.slug,
      null,
      {
        title: this.state.title,
        content: this.state.content,
        date: this.state.date,
        published: this.state.published,
      },
      true
    ).then((response) => {
      window.location.replace("/writing/" + response.data.slug);
    });
  };

  togglePublishAndSave = () => {
    this.setState({ published: !this.state.published }, this.save);
  };

  functions = {
    handleChange: this.handleChange,
    handleDateChange: this.handleDateChange,
    handleContentChange: this.handleContentChange,
    save: this.save,
    togglePublishAndSave: this.togglePublishAndSave,
  };

  render() {
    return (
      <PostEdit
        isEdit={this.isEdit()}
        title={this.state.title}
        content={this.state.content}
        date={this.state.date}
        published={this.state.published}
        functions={this.functions}
        shouldRender={this.state.shouldRender}
      />
    );
  }
}

export default PostEditContainer;
