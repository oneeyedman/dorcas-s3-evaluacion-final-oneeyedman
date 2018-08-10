import React from "react";
import Card from '../components/Card';

class Profile extends React.Component {
  componentWillUnmount() {
    this.props.resetFilters();
  }
  render() {
    const {character, miniCard} = this.props;
    return (
      <Card item={character} mini={miniCard} />
    );
  }
}

Profile.defaultProps = {
  mini: false,
  character : {
    name: "Full name",
    alive: false,
    house: "House name",
    patronus: "undefined",
    yearOfBirth: '19XX',
    image: 'https://placehold.it/218x290'
  }
}

export default Profile;