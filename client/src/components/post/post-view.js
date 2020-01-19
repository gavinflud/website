import React from "react";
import moment from "moment";

const Post = props => {
  const date = moment(props.date).format("ll");

  return (
    <div>
      <h1>{props.title}</h1>
      <p className="gf-post-date">{date}</p>
      <p>{props.content}</p>
    </div>
  );
};

export default Post;
