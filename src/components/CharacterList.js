import React from "react";
import Card from './Card';
import {Link} from 'react-router-dom';
import './CharacterList.css';

class CharacterList extends React.Component {
  render() {
    return (
      <ul className="characters">
        {this.props.characters.map((item, index) =>{
            return (
              <li className="character" key={index}>
                <Link to={`/profile/${index}`} className="character__link"><Card item={item} mini={this.props.miniCard} /></Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default CharacterList;