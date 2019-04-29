import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      img: props.pokemonObj.sprites.front,
    }
  }

  onClickEventHandler = (event) => {
    this.setState({
      img: this.state.img === this.props.pokemonObj.sprites.back ? this.props.pokemonObj.sprites.front : this.props.pokemonObj.sprites.back
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.img} onClick={this.onClickEventHandler}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
