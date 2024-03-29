import React from "react";

import './Filters.css';

class Filters extends React.Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="name-filter" className="filter__label">Nombre</label>
        <input type="text" name="name-filter" id="name-filter" className="filter__field filter__field--text" value={this.props.titleFilter} onChange={this.props.titleFilterAction} placeholder="Escribe un nombre..." />
      </div>
    );
  }
}

export default Filters;