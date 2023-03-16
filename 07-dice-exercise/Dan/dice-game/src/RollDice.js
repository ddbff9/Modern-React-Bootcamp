import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
    };
  }

  roll = () => {
    // get randome number from 1 to 6:
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;

    if (rand1 === 1) {
      this.setState({ die1: 'one' });
    } else if (rand1 === 2) {
      this.setState({ die1: 'two' });
    } else if (rand1 === 3) {
      this.setState({ die1: 'three' });
    } else if (rand1 === 4) {
      this.setState({ die1: 'four' });
    } else if (rand1 === 5) {
      this.setState({ die1: 'five' });
    } else {
      this.setState({ die1: 'six' });
    }

    if (rand2 === 1) {
      this.setState({ die2: 'one' });
    } else if (rand2 === 2) {
      this.setState({ die2: 'two' });
    } else if (rand2 === 3) {
      this.setState({ die2: 'three' });
    } else if (rand2 === 4) {
      this.setState({ die2: 'four' });
    } else if (rand2 === 5) {
      this.setState({ die2: 'five' });
    } else {
      this.setState({ die2: 'six' });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Die num={this.state.die1} />
          <Die num={this.state.die2} />
        </div>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
