import React from "react";
import { Link } from "react-router-dom";
import PostPreview from "../post-preview/";
import "./posts-view.css";

const getPosts = (props) => {
  var isUserLoggedIn = props.currentUser !== null;
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
  const navClass = "gf-posts-navigation-link button-clear";
  const prevClass = props.hasPrevious
    ? navClass
    : navClass + " gf-posts-navigation-link-disabled";
  const nextClass = props.hasNext
    ? navClass
    : navClass + " gf-posts-navigation-link-disabled";

  return (
    <div>
      <h1>Writing</h1>

      {props.currentUser !== null ? (
        <div className="gf-new-post-container">
          <p>
            <Link to={"/writing/new"}>New Post</Link>
          </p>
        </div>
      ) : (
        ""
      )}
      <ul className="gf-post-previews">{posts}</ul>

      <div className="gf-posts-navigation">
        <button className={prevClass} onClick={props.previousPage}>
          &laquo; Prev
        </button>
        <button className="gf-posts-navigation-page-number button-clear">
          {props.currentPage}
        </button>
        <button className={nextClass} onClick={props.nextPage}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default PostsPage;
