import React, { Component } from 'react';

class Number extends Component{
  constructor(props){
    super(props);
    this.state = {num: 1}
  }

  getRand = ()=>{
    // pick random number 1-10
    let rand = Math.floor(Math.random() * 10) + 1

    // update state with new rand
    this.setState({num: rand})
  }

  

  render(){
    return(
      <div>
        <h1>Number is: {this.state.num}</h1>
        {this.state.num === 7 
        ? <h2>YOU WIN!</h2>
        : this.state.num != 7 && <button onClick={this.getRand}>Random Number</button>}
      </div>
    )
  }

  
}

export default Number;