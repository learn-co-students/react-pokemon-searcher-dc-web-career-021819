import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  changeInput = (e) =>{
    this.setState({
      name: e.currentTarget.name.value,
      hp: e.currentTarget.hp.value,
      frontUrl: e.currentTarget.frontUrl.value,
      backUrl: e.currentTarget.backUrl.value
    })
  }

  handleSubmit = (e) => {
    const obj = {
      name: this.state.name,
      stats: [
        {}, {}, {}, {}, {}, {value: this.state.hp, name: "hp"}
      ],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(obj)
    }
    fetch('http://localhost:3000/pokemon', options)
      .then(r => r.json())
      .then(pokemon => this.props.addPokemon(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.changeInput}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
