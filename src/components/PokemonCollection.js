import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const allPoke = this.props.allPokemons
    return (
      <Card.Group itemsPerRow={6}>
        {allPoke.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Card.Group>
    )
  }
}

PokemonCollection.defaultProps = {
  allPoke: []
}

export default PokemonCollection
