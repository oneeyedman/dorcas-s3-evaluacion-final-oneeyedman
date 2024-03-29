import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import {Link, Switch, Route} from 'react-router-dom';

const potterUrl = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateTitleFilter = this.updateTitleFilter.bind(this);
    this.resetFilters = this.resetFilters.bind(this);

    this.state = {
      characters: [],
      titleFilter: ''
    }
  }

  filterCharacters() {
    const filteredResults = this.state.characters.filter(item => {
      return item.name.toLowerCase().includes(this.state.titleFilter.toLowerCase())
    });
    return filteredResults;
  }

  getCharacter(id) {
    const results = this.filterCharacters();
    return results[id];
  }
  
  resetFilters() {
    this.setState({
      titleFilter: ''
    })
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
        this.setState({
          characters: data
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
          <Switch>
            <Route path="/profile" render={() => <Link to="/" className="app__back-btn">Volver</Link>} />
          </Switch>
        </header>
        <main className="app__main">
        <Switch>
          <Route exact path="/" render={ () => <Home 
            characters={this.filterCharacters()} 
            miniCard={true} 
            titleFilter={this.state.titleFilter}
            titleFilterAction={this.updateTitleFilter}
          />} />
          <Route path="/profile/:id" render={(props) => <Profile 
            character={this.getCharacter(props.match.params.id)}
            miniCard={false} 
            resetFilters={this.resetFilters} 
            />} />
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
