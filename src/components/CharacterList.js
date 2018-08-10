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
          .filter(item => {
            if (this.props.aliveFilter === 'all') {
              return true;
            } else {
              if (this.props.aliveFilter === 'true') {
                return item.alive === true;
              } else {
                return item.alive === false;
              }
            }
          })
          .map((item, index) =>{
            return (
              <li className="character" key={item.id}>
                <Link to={`/profile/${item.id}`} className="character__link"><Card item={item} mini={this.props.miniCard} /></Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default CharacterList;