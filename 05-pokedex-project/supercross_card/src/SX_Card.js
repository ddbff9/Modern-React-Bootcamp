import React, { Component } from 'react';
import './SX_Card.css'
import SX_Number from './SX_Number';

export default class SX_Card extends Component {


  render() {
    return (
      <div className='SX_Card'>
        <h1 className='SX_Card-name'>{this.props.name}</h1>
        <h4 className='SX_Card-data'>{this.props.home_town}</h4>
        <img src={this.props.img_address} alt={this.props.name} className='SX_Card-image'></img>
        <SX_Number 
          number = {this.props.number}  
        />
      </div>
    )
  }
}
