import React, { Component } from 'react';

export default class FiltersContainer extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     checked: false
  //   }
  // }

  // valueOfCheckbox = (e) => {
  //   return e.target.value === 'checked' ? 'unchecked' : 'checked'
  // }

  // handleFilterCheck = () => {
  //   this.setState({
  //     checked: !(this.state.checked)
  //   })
  // }

  render() {
    return (
      <div>
        Sort by: <select onChange={(e) => this.props.setSortState(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <br />
        Filter Greased Hogs:
        <input
          type="checkbox"
          onChange={this.props.setFilterState}
        />
      </div>
    )
  }
}
