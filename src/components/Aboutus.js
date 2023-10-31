import React from "react";
import User from "./User";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Me</h1>

        <User />
      </div>
    );
  }
}

export default AboutUs;
