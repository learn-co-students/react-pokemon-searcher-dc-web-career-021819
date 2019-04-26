import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      allPokemon: [],
    };
  }
  getPokemon = () => {
    return this.state.allPokemon.filter(p => p.name.includes(this.state.search));
  };

  handleSubmit = async pokemon => {
    if (pokemon.name) {
      const post = await fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(pokemon),
      });
      const newPokemon = await post.json();
      console.log(newPokemon);
      this.setState({ allPokemon: [...this.state.allPokemon, newPokemon] });
    }
  };
  componentDidMount = async () => {
    const res = await fetch("http://localhost:3000/pokemon");
    const pokemon = await res.json();
    this.setState({ allPokemon: [...pokemon] });
  };
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={e => this.setState({ search: e.target.value })} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.getPokemon()} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default PokemonPage;
