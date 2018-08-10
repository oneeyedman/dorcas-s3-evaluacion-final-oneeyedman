import React from "react";
import './Card.css';

class Card extends React.Component {
  getPatronus() {
    return (
      <p className="card__data-item card__data-item--patronus">
        <span className="card__data-label">Patronus:</span> {this.props.item.patronus}
      </p>
    );
  }

  getYOB() {
    return (
      <p className="card__data-item card__data-item--yob">
        <span className="card__data-label">Nacimiento:</span> {this.props.item.yearOfBirth}
      </p>
    );
  }

  getAliveStatus() {
    const notAlive = <i className="fas fa-skull"></i>;
    const alive = <i className="fas fa-heart"></i>;

    return (<p className="card__data-item card__data-item--alive">{this.props.item.alive?alive:notAlive}</p>);
  }
  
  getHouse() {
    return (
      <p className="card__data-item card__data-item--house">
        <span className="card__data-label">Casa:</span> {this.props.item.house}
      </p>
    );
  }

  render() {
    const {mini} = this.props;
    const {house, name, image} = this.props.item;
    
    const miniCard = (
      <div className="card">
        <div className="card__cover" style={{backgroundImage:`url(${image})`}}>
          <img src={image} alt={name} className="card__image"/>
        </div>
        <div className="card__data">
          <h2 className="card__data-item card__data-item--name">{name}</h2>
          {<p className="card__data-item card__data-item--house">{house}</p>}
        </div>
      </div>
    );

    const fullCard = (
      <div className={(house !== '') ? `card card--full card--${house.toLowerCase()}` : "card card--full"}>
        <div className="card__cover" style={{backgroundImage:`url(${image})`}}>
          <img src={image} alt={name} className="card__image"/>
        </div>
        <div className="card__data">
          <h2 className="card__data-item card__data-item--name">{name}</h2>
          {this.getHouse()}
          {this.getYOB()}
          {this.getPatronus()}
          {this.getAliveStatus()}
        </div>
      </div>
    );
    
    return (
      <React.Fragment>
        {mini ? miniCard : fullCard}
      </React.Fragment>
    );
  }
}

export default Card;