import React from 'react'
import { IoMdSearch } from 'react-icons/io'

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
  
  handleSubmit(e) {
    if(this.state.input) {
      e.preventDefault()
      let id = this.props.getUrl()
      let term = this.state.input
      this.props.search(id, term)
    } else {
      console.log('No search term provided.')
    }
  }

  render() {
    return(<div>
      <input type="text" onChange={this.handleChange.bind(this)} 
      placeholder="Search within the reviews" />&nbsp;
      <button onClick={this.handleSubmit.bind(this)} 
      className="search"><IoMdSearch className="search" /></button>
    </div>)
  }
}

export default Search