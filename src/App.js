import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      drinks: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((users) => this.setState({ drinks: users.drinks }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { drinks, searchField } = this.state;
    const filteredDrink = drinks.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Drinks Rolodex</h1>
        <SearchBox
          placeholder="Search Drinks"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList drinks={filteredDrink}></CardList>
      </div>
    );
  }
}

export default App;
