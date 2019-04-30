import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    front: true
  }

  clickHandler= ()=> {
    this.setState({
        front: !this.state.front
    })
  }

  findHP= ()=> {
    let statObj = this.props.pokemon.stats.find(obj=> obj.name === 'hp')
    return statObj.value
  }

  render() {
    let pokemon = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image">
            <img
              alt={pokemon.name}
              onClick={this.clickHandler}
              src={ this.state.front ?
                pokemon.sprites.front :
                pokemon.sprites.back }
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
