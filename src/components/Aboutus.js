import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
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
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <User />
      </div>
    );
  }
}

export default AboutUs;
