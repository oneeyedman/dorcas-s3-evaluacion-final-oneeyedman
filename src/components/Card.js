import React from "react";
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card__cover" style={{backgroundImage:`url(${this.props.item.image})`}}>
          <img src={this.props.item.image} alt={this.props.item.name} className="card__image"/>
        </div>
        <div className="card__data">
          <h2 className="card__name">{this.props.item.name}</h2>
          <p className="card__house">{this.props.item.house}</p>
        </div>
      </div>
    );
  }
}

export default Card;