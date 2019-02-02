import React, { Component } from 'react';
import { HogCard } from '../components/HogCard';

export default class HogsContainer extends Component {
  render() {
    return (
      <div>
        {this.props.ourHogs.map((hogObj, idx) => <HogCard key={idx} hogData={hogObj}/>)}
      </div>
    )
  }
}
