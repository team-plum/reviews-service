import React from 'react'
import RatingBar from './RatingBar.jsx'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

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
    this.setState({show: true})
  }

  handleClose() {
    this.setState({show: false})
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }
  handleTextChange(e) {
    this.setState({text: e.target.value})
  }
  handleRatingChange(e) {
    this.setState({rating: e.target.value})
  }

  handleRating(e) {
    this.setState({rating: e.target.value})
  }

  submitReview(id) {
    id = this.props.getUrl()
    axios.post(`/reviews/${id}`, {
      restaurant_id: this.props.getUrl(),
      user: this.state.name,
      rating: this.state.rating,
      text: this.state.text
    })
    .then(data => {
      console.log(data)
      this.handleClose()
      this.update()
    })
    .catch(err => {
      console.log(`Error occurring posting review: ${err}`)
    }) 
  }


  render() {
    return (
            <div className="island">
          <RatingBar rate={this.handleRating} rating={this.state.rating} />
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
                <RatingBar rate={this.handleRating} rating={this.state.rating} />
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