import React, { Component } from 'react'
import './SX_Number.css'

export default class SX_Number extends Component {
  render() {
    return (
      <div className='SX_Number'>
        <h2 className='SX_Number-number'>{this.props.number}</h2>
      </div>
    )
  }
}
