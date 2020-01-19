import React from "react";
import PostPreview from "../post-preview/";
import "./posts-view.css";

const getPosts = props => {
  return props.posts.map(post => (
    <PostPreview
      key={post.id}
      title={post.title}
      date={post.date}
      slug={post.slug}
    />
  ));
};

const PostsPage = props => {
  const posts = getPosts(props);

  return (
    <div>
      <h1>Writing</h1>
      <ul className="gf-post-previews">{posts}</ul>
    </div>
  );
};

export default PostsPage;
