import React from 'react'
import { Form } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa'

class Sorter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'Welp Sort'
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(e) {
    let id = this.props.getUrl()
    this.setState({selected: e.target.value}, () => {
      this.props.sort(id, this.state.selected)
    })
  }
  
  render() {
    return (
      <div className="sorter">
        <Form.Control as="select" onChange={this.handleSelect} value={this.state.selected}>
          <option value={this.state.selected}>{this.state.selected}</option>
          <option value="Welp Sort">Welp Sort</option>
          <option value="Newest First">Newest First</option>
          <option value="Oldest First">Oldest First</option>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Lowest Rated">Lowest Rated</option>
        </Form.Control>
      </div>
    )
  }
}

export default Sorter