import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { MdCode } from 'react-icons/md'

class Embed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.setState({show: true})
  }

  handleClose() {
    this.setState({show: false})
  }

  render() {
    return(
      <div>

        <a href="#" className="a hoverbox" variant="primary" onClick={this.handleOpen}> Embed review</a>
        
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.review.text}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Embed