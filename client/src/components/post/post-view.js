import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./post-view.css";

class Post extends React.Component {
  componentDidMount = () => {
    setTimeout(() => window.Prism.highlightAll(), 500);
  };

  render() {
    const date = moment(this.props.date).format("ll");

    return (
      <div className="gf-post">
        <h1>{this.props.title}</h1>
        <p className="gf-post-date">{date}</p>
        {this.props.isUserLoggedIn ? (
          <div className="gf-post-toolbar">
            <Link
              className="button"
              to={"/writing/" + this.props.slug + "/edit"}
            >
              Edit
            </Link>
            <button className="button-outline" onClick={this.props.deletePost}>
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.content,
          }}
        ></div>
      </div>
    );
  }
}

export default Post;
