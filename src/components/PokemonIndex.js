import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

let baseURL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    currentSearch: "",
    filteredPokemon: [],
  }

  componentDidMount(){
    fetch(baseURL)
    .then(r=>r.json())
    .then(allPokemon=>{
      this.setState({
        allPokemon,
      })
    })
  }

  addPokemon= (pokemonObj)=> {
    console.log(pokemonObj)
    this.setState({
      allPokemon: [...this.state.allPokemon, pokemonObj]
    })
  }

  searchHandler= (e, data)=> {
    let filteredPokemon = this.state.allPokemon.filter(
      pokemon=> pokemon.name.includes(data.value)
    )
    this.setState({
      currentSearch: data.value,
      filteredPokemon: filteredPokemon
    })
  }

  pokemonList(){
    return this.state.currentSearch === "" ?
    this.state.allPokemon : this.state.filteredPokemon
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce((e, data) => this.searchHandler(e,data), 500)}
          showNoResults={false}
        /><br />
        <PokemonCollection allPokemon={this.pokemonList()}/>
        <br/>
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
