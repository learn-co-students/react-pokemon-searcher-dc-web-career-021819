import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // handleSubmit = () => {
  //   let newPokemon = {
  //     height: 10,
  //     weight: 130,
  //     id: 1,
  //     name: this.state.name,
  //     abilities: ["overgrow", "chlorophyll"],
  //     moves: [],
  //     stats: [
  //       {
  //         value: 80,
  //         name: "special-defense"
  //       },
  //       {
  //         value: 80,
  //         name: "special-attack"
  //       },
  //       {
  //         value: 63,
  //         name: "defense"
  //       },
  //       {
  //         value: 62,
  //         name: "attack"
  //       },
  //       {
  //         value: 60,
  //         name: "speed"
  //       },
  //       {
  //         value: 60,
  //         name: "hp"
  //       }
  //     ],
  //     types: ["grass", "poison"],
  //     sprites: {
  //       front: this.state.frontUrl,
  //       back: this.state.backUrl
  //     }
  //   };
  //   fetch("http://localhost:3000/pokemon", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newPokemon)
  //   })
  //     .then(resp => resp.json())
  //     .then(p => console.log(p));
  // };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form
          onSubmit={() => this.props.newPokemon(this.state)}
          onChange={this.handleChange}
        >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
