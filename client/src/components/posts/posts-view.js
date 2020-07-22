import React from "react";
import { Link } from "react-router-dom";
import PostPreview from "../post-preview/";
import "./posts-view.css";

const getPosts = (props) => {
  var isUserLoggedIn = props.functions.getCurrentUser() !== null;
  return props.posts.map((post) => (
    <PostPreview
      key={post.id}
      title={post.title}
      date={post.date}
      slug={post.slug}
      published={post.published}
      isUserLoggedIn={isUserLoggedIn}
    />
  ));
};

const PostsPage = (props) => {
  const posts = getPosts(props);

  return (
    <div>
      <h1>Writing</h1>

      {props.functions.getCurrentUser() !== null ? (
        <div className="gf-new-post-container">
          <p>
            <Link to={"/writing/new"}>New Post</Link>
          </p>
        </div>
      ) : (
        ""
      )}
      <ul className="gf-post-previews">{posts}</ul>
    </div>
  );
};

export default PostsPage;
