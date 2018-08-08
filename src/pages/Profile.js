import React from "react";
import Card from '../components/Card';

class Profile extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const characters = this.props.characters;

    if (characters.length >= 1) {
      return (
        <Card item={characters[id]} mini={this.props.miniCard} />
      );
    } else {
      return (
        <p className="warning">No hay nada que mirar aquí</p>
      );
    }

  }
}

export default Profile;