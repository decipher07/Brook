import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component{

  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({searchField: e.target.value})
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((users) => {
      this.setState({ monsters: users})
    })
  }

  render(){

    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
      <SearchBox 
          placeholder='Search Monsters'
          handleChange={e => this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//// <CardList monsters={this.state.monsters}/>
export default App;
