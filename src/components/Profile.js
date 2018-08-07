import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <p>Card {this.props.match.params.id}</p>
    );
  }
}

export default Profile;