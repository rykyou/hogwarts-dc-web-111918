import React from 'react'

export class HogCard extends React.Component {
  state = {
    showDetails: false
  }

  handleImageClick = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  //helper function to change name format
  imageURL = (hogName) => {
    let formattedName = hogName.toLowerCase().split(" ").join('_')
    // let pigName = props.hogData.name.toLowerCase().replace(/\s\g, "_")
    return require(`../hog-imgs/${formattedName}.jpg`)
  }

  // hogData:
  //   greased: true
  //   highest medal achieved: "wood"
  //   name: "Augustus Gloop"
  //   specialty: "Vacuum tubes"
  //   weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: 4.1


  render() {
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

    // console.log(this.props)
    return (
      <div className="ui link centered card">
        <div className="image">
          <img
            onClick={this.handleImageClick}
            alt="dinner"
            src={this.imageURL(this.props.hogData.name)}
            />
        </div>
        <div className="content">
          <a className="header">{this.props.hogData.name}</a>

          {this.state.showDetails ?
            <div>
              <p>Specialty: {this.props.hogData.specialty}</p>
              <p>Greased: {`${this.props.hogData.greased}`}</p>
              <p>{weight}: {this.props.hogData[weight]}</p>
              <p>Highest Medal Achieved: {this.props.hogData["highest medal achieved"]}</p>
            </div>
          :
            null
          }

        </div>
      </div>
    )
  }
}

// export default HogCard
