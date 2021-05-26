import React, { Component } from "react";
import CardList from "./components/CardList/CardList.component";
import styles from "./App.module.scss";
import Searchbox from "./components/SearchBox/Searchbox.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      //Monsters prop array
      monsters: [],
      searchField: "",
    };
  }

  //Lifecycle Method
  //on Component Mount Fetches user data and adds to state
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      //to lowercase prevents case sensitivity
      //monster.name -> lowercase then checks the string if includes the searchfield state
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className={styles.app}>
        <h1 className={styles.title}>Monster Rolodex</h1>
        <Searchbox handleChange={this.handleChange} placeholder={"Text"} />
        {/* Filtered array of monsters is passed to the component to be re-rendered */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
