import React from "react";
import Card from './Card';
import './CharacterList.css';

class CharacterList extends React.Component {
  render() {
    return (
      <ul className="characters">
        {this.props.characters.map((item, index)=>{
          return (
            <li className="character" key={index}>
              <Card item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CharacterList;