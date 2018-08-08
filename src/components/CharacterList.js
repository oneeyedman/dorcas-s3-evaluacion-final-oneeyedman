import React from "react";
import Card from './Card';
import {Link} from 'react-router-dom';
import './CharacterList.css';

class CharacterList extends React.Component {
  render() {
    return (
      <ul className="characters">
        {this.props.characters
          .filter(item => {
            return item.name.toLowerCase().includes(this.props.titleFilter.toLowerCase())
          })
          .map((item, index) =>{
            return (
              <li className="character" key={item.id}>
                <Link to={`/profile/${item.id}`} className="character__link"><Card item={item} /></Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default CharacterList;