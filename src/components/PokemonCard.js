import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  clickHandler = event => {
    event.target.src === this.props.pokemon.sprites.front
      ? (event.target.src = this.props.pokemon.sprites.back)
      : (event.target.src = this.props.pokemon.sprites.front);
  };
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={this.props.pokemon.sprites.front}
              alt="oh no!"
              onClick={this.clickHandler}
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
