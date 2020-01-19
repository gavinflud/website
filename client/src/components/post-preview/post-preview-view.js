import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "./post-preview-view.css";

const PostPreview = props => {
  const date = moment(props.date).format("ll");

  return (
    <li className="gf-post-preview">
      <span>{date}</span>
      <Link to={"/writing/" + props.slug}>{props.title}</Link>
    </li>
  );
};

export default PostPreview;
