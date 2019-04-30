import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemons: [],
    searchTerm: "",
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(allPokemons => this.setState({allPokemons}))
  }

  changeSearchTerm = (e, data) => {
    this.setState({searchTerm: data.value})
  }

  searchedResult = () => {
    return this.state.allPokemons.filter((pokemon)=> { return pokemon.name.includes(this.state.searchTerm)})
  }

  addPokemon = (pokemon) => {
    this.setState({
      allPokemons: [...this.state.allPokemons, pokemon]
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((e, data) => this.changeSearchTerm(e, data), 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemons={this.searchedResult()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
