import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import FiltersContainer from './FiltersContainer';
import HogsContainer from './HogsContainer';

import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()
    this.state = {
      //puts hogs array into state
      hogsData: hogs,
      sort: 'name',
      filterGreased: false
    }
  }

  handleSortHogs = () => {
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    let currentHogs = this.state.hogsData
    let sortedHogs = this.state.sort === 'name' ?
        currentHogs.sort((a,b) => a.name.localeCompare(b.name))
      :
        currentHogs.sort((a,b) => a[weight] - b[weight])

    sortedHogs = this.state.filterGreased ? sortedHogs.filter(hog => hog.greased) : sortedHogs

    return sortedHogs
  }

  setSortState = (valueOfSelect) => {
    this.setState({
      sort: valueOfSelect
    })
  }

  setFilterState = () => {
    this.setState({
      filterGreased: !(this.state.filterGreased)
    })
  }


  render() {
    return (
      <div className="App">
        < Nav />
        <FiltersContainer setSortState={this.setSortState} setFilterState={this.setFilterState}/>
        <HogsContainer ourHogs={this.handleSortHogs()}/>
      </div>
      //have to invoke handleSortHogs so that HogsContainer has access to returned sortedHogs
    )
  }
}

export default App;
