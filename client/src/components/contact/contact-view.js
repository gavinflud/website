import React from "react";

class ContactPage extends React.Component {
  componentDidMount() {
    document.title = "Gavin Flood - Contact";
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>If you wish to get in touch, you can contact me by:</p>
        <ul>
          <li>
            <a href="mailto:gavin@gavinflood.com">Email</a> (preferred)
          </li>
          <li>
            <a href="https://linkedin.com/in/gavinflud/">LinkedIn</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactPage;
