import React from "react";
import './Card.css';

class Card extends React.Component {
  render() {
    const mini = this.props.mini;
    
    const miniCard = (
      <div className="card">
        <div className="card__cover" style={{backgroundImage:`url(${this.props.item.image})`}}>
          <img src={this.props.item.image} alt={this.props.item.name} className="card__image"/>
        </div>
        <div className="card__data">
          <h2 className="card__data-item card__data-item--name">{this.props.item.name}</h2>
          <p className="card__data-item card__data-item--house">{this.props.item.house}</p>
        </div>
      </div>
    );

    const notAlive = <i className="fas fa-skull"></i>;
    const alive = <i className="fas fa-heart"></i>;
    const house = (
      <p className="card__data-item card__data-item--house">
        <span className="card__data-label">Casa:</span> {this.props.item.house}
      </p>
    );
    const yob = (
      <p className="card__data-item card__data-item--yob">
        <span className="card__data-label">Nacimiento:</span> {this.props.item.yearOfBirth}
      </p>
    );
    const patronus = (
      <p className="card__data-item card__data-item--patronus">
        <span className="card__data-label">Patronus:</span> {this.props.item.patronus}
      </p>
    );

    const fullCard = (
      <div className={(this.props.item.house !== '') ? `card card--full card--${this.props.item.house.toLowerCase()}` : "card card--full"}>
        <div className="card__cover" style={{backgroundImage:`url(${this.props.item.image})`}}>
          <img src={this.props.item.image} alt={this.props.item.name} className="card__image"/>
        </div>
        <div className="card__data">
          <h2 className="card__data-item card__data-item--name">{this.props.item.name}</h2>
          {(this.props.item.house !== '') ? house : null}
          {(this.props.item.yearOfBirth !== '') ? yob : null}
          {(this.props.item.patronus !== '') ? patronus : null}
          <p className="card__data-item card__data-item--alive">{this.props.item.alive?alive:notAlive}</p>
        </div>
      </div>
    );
    
    return (
      <React.Fragment>
        {mini?miniCard:fullCard}
      </React.Fragment>
    );
  }
}

export default Card;