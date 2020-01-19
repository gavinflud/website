import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import HomePage from "../home/";
import AboutPage from "../about/";
import ContactPage from "../contact/";
import PostsPage from "../posts/";
import LoginPage from "../login/";
import Post from "../post/";
import "./main-view.css";

const Main = props => {
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
            <PostsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/writing/:slug" children={<PostPage />} />
          <Route path="/login">
            <LoginPage functions={props.functions} />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

function PostPage() {
  let { slug } = useParams();
  return <Post slug={slug} />;
}

export default Main;
