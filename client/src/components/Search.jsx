import React from 'react'
import { IoMdSearch } from 'react-icons/io'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(e) {
    this.setState({ input: e.target.value })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    let id = this.props.getUrl()
    let term = this.state.input
    this.props.search(id, term)
  }

  render() {
    return(<div>
      <input type="text" onChange={this.handleChange.bind(this)} placeholder="Search within the reviews" /><button onClick={this.handleSubmit} className="search"><IoMdSearch className="search" /></button>
    </div>)
  }
}

export default Search