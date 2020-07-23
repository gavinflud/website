import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
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
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/writing">
            <PostsPage currentUser={props.currentUser} />
          </Route>
          <Route exact path="/writing/new">
            <PostEditPage currentUser={props.currentUser} />
          </Route>
          <Route
            path="/writing/:slug/edit"
            children={<PostEditPageWrapper currentUser={props.currentUser} />}
          />
          <Route
            path="/writing/:slug"
            children={<PostPage currentUser={props.currentUser} />}
          />
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/login">
            <LoginPage
              currentUser={props.currentUser}
              functions={props.functions}
            />
          </Route>
          <Route path="/change-password">
            <ChangePasswordPage currentUser={props.currentUser} />
          </Route>
        </Switch>
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
