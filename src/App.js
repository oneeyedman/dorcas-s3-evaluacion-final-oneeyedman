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
    this.resetFilter = this.resetFilter.bind(this);

    this.state = {
      characters: [],
      titleFilter: ''
    }
  }

  resetFilter() {
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
          <Switch>
            <Route path="/profile" render={() => <Link to="/" className="app__back-btn">Volver</Link>} />
          </Switch>
        </header>
        <main className="app__main">
        <Switch>
          <Route exact path="/" render={ () => <Home titleFilterAction={this.updateTitleFilter} characters={this.state.characters} titleFilter={this.state.titleFilter} miniCard={true}
          />} />
          <Route path="/profile/:id" render={(props) => <Profile match={props.match} characters={this.state.characters} miniCard={false} resetFilter={this.resetFilter} />} />
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
