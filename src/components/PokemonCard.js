import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  flipPic = (e) => {
    if (e.currentTarget.dataset.imgSide === 'front') {
      e.target.src = this.props.pokemon.sprites.back
      e.currentTarget.dataset.imgSide = 'back'
    } else {
      e.target.src = this.props.pokemon.sprites.front
      e.currentTarget.dataset.imgSide = 'front'
    }
  }
  render() {
    const poke = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={(e)=>this.flipPic(e)} data-img-side="front">
            <img alt={poke.name} src={poke.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poke.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
