import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./post-preview-view.css";

const PostPreview = (props) => {
  const date = moment(props.date).format("ll");
  const publishedClass = props.published
    ? "gf-post-preview-published gf-post-preview-published-yes"
    : "gf-post-preview-published gf-post-preview-published-no";

  return (
    <li className="gf-post-preview">
      <div>
        <span>{date}</span>
        {props.isUserLoggedIn ? (
          <span className={publishedClass}>
            {props.published ? "Published" : "Not Published"}
          </span>
        ) : (
          ""
        )}
      </div>
      <Link to={"/writing/" + props.slug}>{props.title}</Link>
    </li>
  );
};

export default PostPreview;
