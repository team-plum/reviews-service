import React from 'react'
import axios from 'axios'
import Rating from 'react-rating'
import { Modal, Button } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      name: '',
      text: '',
      rating: 0
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleRating = this.handleRating.bind(this)
  }

  handleOpen() {
    // opens review creation modal
    this.setState({show: true})
  }

  handleClose() {
    // closes review creation modal
    this.setState({show: false})
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handleTextChange(e) {
    this.setState({text: e.target.value})
  }
  handleRating(e) {
    this.setState({rating: e})
  }

  submitReview(id) {
    id = this.props.getUrl()
    axios.post(`http://34.202.25.245:3007/reviews/${id}`, {
      restaurant_id: this.props.getUrl(),
      user: this.state.name,
      rating: this.state.rating,
      text: this.state.text
    })
    .then(data => {
      this.handleClose()
      this.props.update(id)
    })
    .catch(err => {
      console.log(`Error occurring posting review: ${err}`)
    }) 
  }


  render() {
    return (
            <div className="island">
        <Rating onChange={this.handleRating} initialRating={this.state.rating} emptySymbol={<FaStar className="starbarlarge_empty" />}
          fullSymbol={<FaStar className="starbarlarge_full" />} />
          <hr />
          <a href="#" onClick={this.handleOpen}>Start your review of <b>{this.props.info.restaurant.map(restaurant => {
            return (restaurant.name)})}.</b></a>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><a href="#" className="title_create">{this.props.info.restaurant.map(restaurant => {
            return (restaurant.name)})}</a></Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <table><tbody><tr><td><input type="text" placeholder="Your name" onChange={this.handleNameChange.bind(this)}></input></td>
              <td>
                <label>Rating:&nbsp;</label>
                <select value={this.state.rating} onChange={this.handleRating}>
                  <option value="1">★</option>
                  <option value="2">★★</option>
                  <option value="3">★★★</option>
                  <option value="4">★★★★</option>
                  <option value="5">★★★★★</option>
                </select>
              </td>
              </tr></tbody></table>
              <br />
              <textarea onChange={this.handleTextChange.bind(this)} className="create" placeholder="Your review helps others learn about great local businesses."></textarea>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.submitReview.bind(this)}>
              Post Review
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
  }
}

export default Create