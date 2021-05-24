import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      //Monsters prop array
      monsters: [],
    };
  }

  //Lifecycle Method
  //on Component Mount Fetches user data and adds to state
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  render() {
    return (
      <div>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}
