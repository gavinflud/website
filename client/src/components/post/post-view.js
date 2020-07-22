import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Post = (props) => {
  const date = moment(props.date).format("ll");

  return (
    <div>
      <h1>{props.title}</h1>
      <p className="gf-post-date">{date}</p>
      {props.isUserLoggedIn ? (
        <p>
          <Link to={"/writing/" + props.slug + "/edit"}>Edit</Link>
        </p>
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
