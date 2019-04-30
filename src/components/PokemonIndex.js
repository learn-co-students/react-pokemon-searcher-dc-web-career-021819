import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchTerm: "",
    searchedPokemon: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({
          allPokemon: pokemon
        });
      });
  }

  searchChangeHandler = (event, data) => {
    this.setState({
      searchTerm: data.value,
      searchedPokemon: this.state.allPokemon.filter(p =>
        p.name.includes(data.value)
      )
    });
  };

  submitNewPokemonHandler = pokedata => {
    let newPokemon = {
      height: 10,
      weight: 130,
      id: 1,
      name: pokedata.name,
      abilities: ["overgrow", "chlorophyll"],
      moves: [],
      stats: [
        {
          value: 80,
          name: "special-defense"
        },
        {
          value: 80,
          name: "special-attack"
        },
        {
          value: 63,
          name: "defense"
        },
        {
          value: 62,
          name: "attack"
        },
        {
          value: 60,
          name: "speed"
        },
        {
          value: 60,
          name: "hp"
        }
      ],
      types: ["grass", "poison"],
      sprites: {
        front: pokedata.frontUrl,
        back: pokedata.backUrl
      }
    };
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(resp => resp.json())
      .then(p => {
        this.setState({
          allPokemon: [p, ...this.state.allPokemon]
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(
            (event, data) => this.searchChangeHandler(event, data),
            500
          )}
          showNoResults={false}
        />
        <br />
        <PokemonCollection
          allPokemon={
            this.state.searchTerm === ""
              ? this.state.allPokemon
              : this.state.searchedPokemon
          }
        />
        <br />
        <PokemonForm newPokemon={this.submitNewPokemonHandler} />
      </div>
    );
  }
}

export default PokemonPage;
