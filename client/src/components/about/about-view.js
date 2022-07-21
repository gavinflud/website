import React from "react";
import "./about-view.css";

class AboutView extends React.Component {
  componentDidMount() {
    document.title = "Gavin Flood - About";
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div className="gf-about-image"></div>
        <p>
          Hi. I'm Gavin. I'm a software engineer living and working in Dublin,
          Ireland.
        </p>
        <p>
          I have over 10 years of experience working in a range of different
          roles in the software industry. I currently work as a Staff Software
          Engineer with <a href="https://pos.toasttab.com">Toast</a> on
          the Cash & Close team.
        </p>
        <p>
          On a daily basis, I work with languages like Kotlin, Java, and JavaScript.
          Our teams are responsible for their own microservices and everything is
          deployed to the cloud through frequent releases, which is then used almost
          immediately by thousands of restaurants around the world.
        </p>
        <p>
          In my spare time, I enjoy playing football or heading to the gym. I
          can usually be found reading a book or checking out a new movie, or
          occasionally binge-watching a series on Netflix.
        </p>
      </div>
    );
  }
}

export default AboutView;
