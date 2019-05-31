import React from 'react'
import axios from 'axios'
import { IoMdPeople } from 'react-icons/io'
import { MdStars } from 'react-icons/md'
import { Modal, Carousel } from 'react-bootstrap'

class Photos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      show: false,
      index: 0,
      direction: null
    }
    this.getPhotos = this.getPhotos.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    this.getPhotos(this.props.review.id)
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  getPhotos(id) {
    axios.get(`http://18.207.85.123:3007/photos/${id}`)
      .then(results => {
        this.setState({photos: results.data})
      })
      .catch(err => {
        console.log(`Error retrieving photos: ${err}`)
      })
  }

  handleOpen() {
    this.setState({show: true})
  }

  
  handleClose() {
    this.setState({show: false})
  }

  render() {
    const { index, direction } = this.state
    return(
    <div>
      {this.state.photos.map((photo) => {
        return (
            <img key={photo.id} onClick={this.handleOpen} className="review" src={photo.url} />
          )
      })}
      <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Body>
              <Carousel>
                {this.state.photos.map((photo) => {
                  return (
                    <Carousel.Item key={photo.id}>
                      <img className="carousel"
                        src={photo.url}
                        alt={photo.caption} />
                      <Carousel.Caption>
                        <h3 className="carousel_caption">{photo.caption}</h3>
                        <p class="carousel_caption">{this.props.review.user}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                })}
                
              </Carousel>
            </Modal.Body>
        </Modal>
    </div>)
  }
}

export default Photos