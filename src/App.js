import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';

const potterUrl = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTitleFilter = this.updateTitleFilter.bind(this);

    this.state = {
      characters: [],
      titleFilter: ''
    }
  }

  updateTitleFilter(e) {
    const titleFilter = e.currentTarget.value;
    this.setState({
      titleFilter: titleFilter
    }) 
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
          <Home titleFilterAction={this.updateTitleFilter} characters={this.state.characters} titleFilter={this.state.titleFilter}
          />
        </main>
      </div>
    );
  }
}

export default App;
