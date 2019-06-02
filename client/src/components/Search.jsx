import React from 'react'
import Sorter from './Sorter.jsx'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
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
    e.preventDefault()
    if(this.state.input) {
      let id = this.props.getUrl()
      let term = this.state.input
      this.props.search(id, term)
      this.setState({input: ''})
    } else {
      let id = this.props.getUrl()
      this.props.update(id)
    }
  }

  render() {
    return(
      <div>
        <InputGroup className="mb-3">
          <FormControl value={this.state.input}
            onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit}
            placeholder="Search within the reviews"
            aria-label="Search within the reviews"
            aria-describedby="basic-addon2" />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.handleSubmit.bind(this)}><IoMdSearch /></Button>
          </InputGroup.Append>
          <Sorter getUrl={this.props.getUrl} sort={this.props.sort} />
        </InputGroup>
      </div>
    )
  }
}

export default Search