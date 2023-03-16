import React, {Component} from 'react';
import './Die.css'

class Die extends Component {
  render(){
    return(
      <div className='Die'>
        <i className='Die-dice' class={`fas fa-dice-${this.props.num}`}></i>
      </div>
    )
  }
}

export default Die;