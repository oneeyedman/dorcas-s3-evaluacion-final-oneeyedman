import React from "react";

import './Filters.css';

class Filters extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="filter">
          <label htmlFor="name-filter" className="filter__label">Nombre</label>
          <input type="text" name="name-filter" id="name-filter" className="filter__field filter__field--text" onChange={this.props.titleFilterAction} />
        </div>
        <div className="filter">
          <span className="filter__label">Nombre</span>
          <ul className="filter__multiple-options">
            <li className="filter__multiple-option">
              <input 
              type="radio" 
              id="alive-filter-all" 
              name="alive-filter" 
              value="all" 
              className="filter__multiple-radio" 
              onChange={this.props.aliveFilterAction} 
              checked={(this.props.aliveFilter === 'all')? 'checked':false}
              /> Todos
            </li>
            <li className="filter__multiple-option">
              <input 
              type="radio" 
              id="alive-filter-alive" 
              name="alive-filter" 
              value="true"
              className="filter__multiple-radio" 
              onChange={this.props.aliveFilterAction} 
              checked={(this.props.aliveFilter === 'true')? 'checked':false}
              /> Vivos
            </li>
            <li className="filter__multiple-option">
              <input 
              type="radio" 
              id="alive-filter-dead" 
              name="alive-filter" 
              value="false" 
              className="filter__multiple-radio" 
              onChange={this.props.aliveFilterAction} 
              checked={(this.props.aliveFilter === 'false')? 'checked':false}
              /> Muertos
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;