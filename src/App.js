import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

const potterUrl = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }

  getCharacters(url) {
    fetch(url)
      .then(res=>res.json())
      .then(data=>{

        const dataWithID = data.map((item, index)=>{
          return {
            ...item,
            id: index
          }
        });

        this.setState({
          characters: dataWithID
        });
      })
  }

  componentDidMount() {
    this.getCharacters(potterUrl);
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Harry Potter Characters</h1>
        </header>
        <main className="app__main">
          <section className="app__content">
            <div className="app__filters">
              <Filters />
            </div>
            
            <div className="app__characters">
              <CharacterList characters={this.state.characters} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
