import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./post-view.css";

const Post = (props) => {
  const date = moment(props.date).format("ll");

  return (
    <div className="gf-post">
      <h1>{props.title}</h1>
      <p className="gf-post-date">{date}</p>
      {props.isUserLoggedIn ? (
        <div className="gf-post-toolbar">
          <Link className="button" to={"/writing/" + props.slug + "/edit"}>
            Edit
          </Link>
          <button className="button-outline" onClick={props.deletePost}>
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      ></div>
    </div>
  );
};

export default Post;
