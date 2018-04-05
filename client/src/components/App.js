import React, { Component } from 'react';
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diceValue: undefined,
    }

    axios.get('/api/random/dice')
      .then((response) => {
        return response.data.value;
      })
      .then((diceValue) => {
        this.setState({diceValue})
      })
  }

  render() {
    return (
      <div>
        Random Dice Roll: {this.state.diceValue}
      </div>
    );
  }
}

export default App;
