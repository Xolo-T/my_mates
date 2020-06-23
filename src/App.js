import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list'
import { SearchBox } from "./components/search-box/search-box";
import './App.css';
import {classMates} from './mates';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
      mates: classMates,
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => this.setState({monsters: res}))
  }

  // Note: defining it as an arrow function Lexical binds 
  // so we dont have to bin in the constructor

  handleChange = (e) => this.setState({ searchField: e.target.value })
  
  render(){
    const { monsters, searchField, mates } = this.state;
    const filteredMonsters = mates.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    )

    
    return(
      <div className="App">
        {/* <input 
          type='search' 
          placeholder='search student' 
          // onChange={(ek) => console.log(ek.target.value)}
          onChange={ (ek) => {
            // React allows you to pass a callback that will get executed after setstate is finished
            this.setState({ searchField: ek.target.value }, () => console.log(this.state));
            // console.log(this.state);
            // You can not log there because setState is an Async Function
          }}
        ></input> */}
        {/* <CardList monsters={this.state.monsters} /> */}
        <h1>NY jan 2020 cohort</h1>
        <SearchBox
          placeholder = "Search for devs"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
        {/* <CardList monsters={this.state.mates} />           */}
      </div>
    )
  }
}

export default App;
