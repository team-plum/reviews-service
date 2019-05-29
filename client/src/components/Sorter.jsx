import React from 'react'

class Sorter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }
  
  render() {
    return (<div>
      {this.state.clicked ? <div>
        <span onClick={this.handleClick}>Yelp Sort</span>
        <select>
    <option>Newest First</option>
    <option>Oldest First</option>
    <option>Highest Rated</option>
    <option>Lowest Rated</option>
  </select>
      </div> :
      <div>
      Yelp Sort
      </div>}
      </div>
    )
  }
}

export default Sorter