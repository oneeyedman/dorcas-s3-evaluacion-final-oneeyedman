import React from "react";
import CharacterList from '../components/CharacterList';
import Filters from '../components/Filters';

class Home extends React.Component {
  render() {
    return (
      <section className="app__content">
        <div className="app__filters">
          <Filters 
          titleFilterAction={this.props.titleFilterAction}
          aliveFilterAction= {this.props.aliveFilterAction}
          aliveFilter={this.props.aliveFilter}
           />
        </div>
        
        <div className="app__characters">
          <CharacterList 
          characters={this.props.characters} 
          titleFilter={this.props.titleFilter}
          miniCard={this.props.miniCard}
          aliveFilter={this.props.aliveFilter}
          />
        </div>
      </section>
    );
  }
}

export default Home;