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
      restaurant: []
    }
    this.getReviews = this.getReviews.bind(this)
    this.getRestaurant = this.getRestaurant.bind(this)
    this.getUrlID = this.getUrlID.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    let id = this.getUrlID()
    this.getReviews(id)
    this.getRestaurant(id)
    // this.getPhotos(id)
  }

  getUrlID() {
    let base = window.location.pathname
    let arr = base.split('/')
    let url = arr[1]
    return url
  }

  handleSearch(id, term) {
    axios.get(`/search/${id}`, {
      id: id,
      term: term
    })
      .then(results => {
        if(results.data) {
          console.log(`${term} searched.`)
          this.setState({reviews: results.data})
        } else {
          console.log(`No reviews containing ${term}.`)
        }
      })
      .catch(err => {
        console.log(`Error occurred during search: ${err}`)
      })
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

  render() {
    return (
      <div>
        <h2>Recommended Reviews</h2>
        <p className="subtitle"> for {this.state.restaurant.map((restaurant) => {
          return (restaurant.name)})}</p>
        <table width="100%"><tbody>
          <tr>
            <td>
              <Search search={this.handleSearch} getUrl={this.getUrlID} />
            </td>
            <td>
              <Sorter />
            </td>
          </tr>
        </tbody></table> 
        <table><tbody>
          <tr>
            <td>
              <img src="empty_profile@2x.png" width="148" height="68" />
            </td>
            <td>
              <Create info={this.state} getUrl={this.getUrlID.bind(this)} update={this.getReviews} />
            </td>
          </tr>
        {this.state.reviews.map((review) => {
          return (
            <tr>
              <td colSpan="2">
                <div key={review.id}>
                  <Review review={review} restaurant={this.state.restaurant}
                    getUrl={this.getUrlID.bind(this)}/>
                  <hr />
                </div>
              </td>
            </tr>
          )
        })}
        </tbody></table>
      </div>
    )
  }
}

ReactDOM.render(<Reviews />, document.getElementById('reviews'))