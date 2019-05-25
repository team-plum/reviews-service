import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  
  render() {
    return(<div>
      <input type="text" onChange={this.handleChange.bind(this)} placeholder="Search within the reviews" />
    </div>)
  }
}

export default Search