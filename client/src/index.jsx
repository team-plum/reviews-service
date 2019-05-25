import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

import Review from './components/Review.jsx'
import Search from './components/Search.jsx'
import Sorter from './components/Sorter.jsx'
import Create from './components/Create.jsx'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      restaurant: [],
      hovered: false
    }
    this.getReviews = this.getReviews.bind(this)
    this.getRestaurant = this.getRestaurant.bind(this)
    this.getUrlID = this.getUrlID.bind(this)
    this.getPhotos = this.getPhotos.bind(this)
    this.hover = this.hover.bind(this)
  }

  componentDidMount() {
    let id = this.getUrlID()
    this.getReviews(id)
    this.getRestaurant(id)
    this.getPhotos(id)
  }

  hover() {
    this.setState({hovered: !this.state.hovered})
  }

  getUrlID() {
    let base = window.location.pathname
    let arr = base.split('/')
    let url = arr[1]
    return url
  }

  getRestaurant(id) {
    if(!id) {
      id = 1
    }
    axios.get(`/restaurant/${id}`)
      .then(results => {
        console.log('Restaurant retrieved.')
        this.setState({restaurant: results.data})
      })
      .catch(err => {
        console.log('Error retrieving restaurant: ', err)
      })
  }

  getReviews(id) {
    if(!id) {
      id = 1
    }
    axios.get(`/reviews/${id}`)
      .then(results => {
        console.log('Reviews retrieved.')
        this.setState({ reviews: results.data })
      })
      .catch(err => {
        console.log(`Error retrieving reviews: ${err}`)
      })
  }

  getPhotos(id, callback) {
    if(!id) {
      id = 1
    }
    axios.get(`/photos/${id}`)
      .then(results => {
        callback(null, results.data)
        this.setState({photos: results.data})
      })
      .catch(err => {
        callback(err)
        console.log(`Error retrieving photos: ${err}`)
      })
  }

  render() {
    return (
      <div>
        <h2>Recommended Reviews</h2><p className="subtitle"> for {this.state.restaurant.map((restaurant) => {
          return (restaurant.name)})}</p>
        <table width="100%"><tbody><tr>
          <td><Search /></td><td><Sorter /></td>
          </tr></tbody></table> 
        <table><tbody><tr>
          <td><img src="empty_profile@2x.png" width="148" height="68" /></td><td><Create info={this.state} /></td>
            </tr></tbody></table>
        {this.state.reviews.map((review) => {
          return (<div key={review.id}>
            <table><tbody>
              <tr>
              <td>
              </td>
              <td>
            <Review review={review} getPhotos={this.getPhotos.bind(this)} 
              getUrl={this.getUrlID.bind(this)} />
              </td>
              </tr>
              </tbody></table>
              <hr />
            </div>)
        })}

        
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'))