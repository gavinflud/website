import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import HomePage from "../home/";
import AboutPage from "../about/";
import ContactPage from "../contact/";
import PostsPage from "../posts/";
import LoginPage from "../login/";
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
            <PostsPage functions={props.functions} />
          </Route>
          <Route exact path="/writing/new">
            <PostEditPage functions={props.functions} />
          </Route>
          <Route
            path="/writing/:slug/edit"
            children={<PostEditPageWrapper functions={props.functions} />}
          />
          <Route
            path="/writing/:slug"
            children={<PostPage functions={props.functions} />}
          />
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/login">
            <LoginPage functions={props.functions} />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

function PostEditPageWrapper(props) {
  let { slug } = useParams();
  return <PostEditPage slug={slug} functions={props.functions} />;
}

function PostPage(props) {
  let { slug } = useParams();
  return <Post slug={slug} functions={props.functions} />;
}

export default Main;
