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
          I have almost 10 years of experience working in a range of different
          roles in the software industry. I currently work as a software
          architect with <a href="https://www.guidewire.com">Guidewire</a> on
          their Cloud Assurance and Production Services team.
        </p>
        <p>
          On a daily basis, I work with a language called Gosu. It's a cool
          little JVM language we use here at Guidewire. Outside of my day job, I
          usually code in Kotlin, Java, and JavaScript.
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
