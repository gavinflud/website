import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "../home/";
import AboutPage from "../about/";
import ContactPage from "../contact/";
import PostsPage from "../posts/";
import LoginPage from "../login/";
import ChangePasswordPage from "../change-password/";
import Post from "../post/";
import PostEditPage from "../post-edit";
import "./main-view.css";

const Main = (props) => {
  return (
    <main>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            exact
            path="/writing"
            element={<PostsPage currentUser={props.currentUser} />}
          />
          <Route
            exact
            path="/writing/new"
            element={<PostEditPage currentUser={props.currentUser} />}
          />
          <Route
            path="/writing/:slug/edit"
            element={<PostEditPageWrapper currentUser={props.currentUser} />}
          />
          <Route
            path="/writing/:slug"
            element={<PostPage currentUser={props.currentUser} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={
              <LoginPage
                currentUser={props.currentUser}
                functions={props.functions}
              />
            }
          />
          <Route
            path="/change-password"
            element={<ChangePasswordPage currentUser={props.currentUser} />}
          />
        </Routes>
      </div>
    </main>
  );
};

function PostEditPageWrapper(props) {
  let { slug } = useParams();
  return <PostEditPage slug={slug} currentUser={props.currentUser} />;
}

function PostPage(props) {
  let { slug } = useParams();
  return <Post slug={slug} currentUser={props.currentUser} />;
}

export default Main;
