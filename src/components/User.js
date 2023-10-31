import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy user",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/salonishaw11");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
    this.timer = setInterval(() => {
      console.log("hey");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { name, location, avatar_url } = this.state?.userInfo;
    return (
      <div m-4 p-4 bg-gray-50 rounded-lg>
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default User;
