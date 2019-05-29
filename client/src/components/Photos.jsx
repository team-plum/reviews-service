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
    axios.get(`/photos/${id}`)
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
      <Modal show={this.state.show} onHide={this.handleClose} className="photo_modal">
            <Modal.Body>
              <Carousel>
                {this.state.photos.map((photo) => {
                  return (
                    <Carousel.Item key={photo.id}>
                    <table>
                    <tbody>
                      <tr>
                        <td>
                      <img width="100%"
                        src={photo.url}
                        alt={photo.caption} />
                        </td>
                        <td>
                        <img className="user" src={this.props.review.avatar} /> {this.props.review.user}
                    <p className="user_stats"><IoMdPeople /> {this.props.review.friends} friends</p>
                    <p className="user_stats"><MdStars /> {this.props.review.reviews} reviews</p>
                    <p>{photo.caption}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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