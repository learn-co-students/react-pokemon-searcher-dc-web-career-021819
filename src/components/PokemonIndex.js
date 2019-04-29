import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super();
    this.state = {
      allPokemon: [],
      pokemonList: [],
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(data => this.setState({
        allPokemon: data,
        pokemonList: data
      }))
  }

  onSearchChangeHandler = (event) => {
    this.setState({
      pokemonList: this.state.allPokemon.filter( pokemon => pokemon.name.includes(event.target.value))
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChangeHandler} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.pokemonList} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
