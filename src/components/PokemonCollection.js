import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Hello From Pokemon Collection</h1>
        </div>
        <br />
        <Card.Group itemsPerRow={6}>
          {this.props.allPokemon.map(p=> {
            return <PokemonCard pokemon={p} key={p.id}/>
          })}
        </Card.Group>
      </React.Fragment>
    )
  }
}

PokemonCollection.defaultProps = {
  allPokemon:[]
}

export default PokemonCollection
