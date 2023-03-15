import React, { Component } from 'react';
import SX_Card from './SX_Card';
import './SX_Card.css';

export default class SX_Top3 extends Component {
  static defaultProps = {
    rider: [
      {
        id: 1,
        name: 'Chase Sexton',
        number: '23',
        home_town: 'LaMoline, IL',
        img_address:
          'https://rxi.iscdn.net/2022/12/259937_sx23_chase_sexton_smile_691x691px-removebg-preview.png',
      },
      {
        id: 2,
        name: 'Christian Craig',
        number: '28',
        home_town: 'San Diego, CA',
        img_address:
          'https://rxi.iscdn.net/2022/12/259958_sx23_christian_craig_smile_691x691px-removebg-preview.png',
      },
      {
        id: 3,
        name: 'Eli Tomac',
        number: '1',
        home_town: 'Cortez, CO',
        img_address:
          'https://rxi.iscdn.net/2022/12/260077_tomac_2023_yamaha_octopi_lm_0553-removebg-preview.png',
      },
    ],
  };
  render() {
    return (
      <div className='Sx_Top3'>
        <h1>SX Top 3 in Points!</h1>
        <div className="Sx_Top3-cards">
          {this.props.rider.map((rider) => (
            <SX_Card
              id={rider.id}
              name={rider.name}
              home_town={rider.hometown}
              img_address={rider.img_address}
              number={rider.number}
            />
          ))}
        </div>
      </div>
    );
  }
}
