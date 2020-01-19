import React from "react";
import "./about-view.css";

const AboutView = props => {
  return (
    <div>
      <h1>About</h1>
      <div className="gf-about-image"></div>
      <p>
        Hi. I'm Gavin. I'm a software engineer living and working in Dublin,
        Ireland.
      </p>
      <p>
        I have over 7 years of experience working in a range of different roles,
        mostly customer-facing. I currently work with Guidewire, working as a
        senior developer with some of our customers deployed in the cloud.
      </p>
      <p>
        On a daily basis, I work with a language called Gosu. It's a cool little
        JVM language we use here at Guidewire. Outside of my day job, I usually
        code in Kotlin and JavaScript.
      </p>
      <p>
        In my spare time, I play football and run (sometimes even in races). I
        can usually be found checking out new movies and books, or occasionally
        binge-watching a series on Netflix.
      </p>
    </div>
  );
};

export default AboutView;
