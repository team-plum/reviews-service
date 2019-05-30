import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { sortBy } from 'lodash'

import Review from './components/Review.jsx'
import Search from './components/Search.jsx'
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
    this.sort = this.sort.bind(this)
  }

  componentDidMount() {
    let id = this.getUrlID()
    this.getReviews(id)
    this.getRestaurant(id)
  }

  getUrlID() {
    let base = window.location.pathname
    let arr = base.split('/')
    let url = arr[1]
    return url
  }

  handleSearch(id, term) {
    if(!id) {
      id = 1
    }

    axios.get(`/reviews/${id}`)
      .then(results => {
        let matches = []
        console.log(`Searching reviews...`)
        for (let i = 0; i < results.data.length; i++) {
          let words = results.data[i].text.split(' ')
          for(let x = 0; x < words.length; x++) {
            if(words[x] === term) {
              matches.push(results.data[i])
            }
          }
        }
        this.setState({reviews: matches})
        })
        .catch(err => {
          console.log(`Error searching reviews: ${err}`)
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

  sort(id, type) {
    let reviews = this.state.reviews.slice()

    if (type === 'Newest First') {
      let sorted = _.sortBy(reviews, (review) => {
        return review.date
      })
      let reversed = _.reverse(sorted)
      this.setState({reviews: reversed})

    } else if (type === 'Oldest First') {
      let sorted = _.sortBy(reviews, (review) => {
        return review.date
      })
      this.setState({reviews: sorted})
    } else if (type === 'Highest Rated') {
      let sorted = _.sortBy(reviews, (review) => {
        return review.rating
      })
      let reversed = _.reverse(sorted)
      this.setState({reviews: reversed})

    } else if (type === 'Lowest Rated') {
      let sorted = _.sortBy(reviews, (review) => {
        return review.rating
      })
      this.setState({reviews: sorted})

    } else {
      this.getReviews(id)
    }
  }

  render() {
    return (
      <div>
        <h2>Recommended Reviews</h2>
        <p className="subtitle"> for {this.state.restaurant.map((restaurant) => {
          return (restaurant.name)})}</p>
            
            <div className="wrapper">
              <div className="search">
              <Search search={this.handleSearch} getUrl={this.getUrlID} update={this.getReviews} sort={this.sort} />
            </div>
            </div>

        <table><tbody>
          <tr>
            <td>
              <img src="empty_profile@2x.png" width="148" height="68" />
            </td>
            <td>
              <Create info={this.state} getUrl={this.getUrlID.bind(this)} update={this.getReviews} />
            </td>
          </tr>
        {this.state.reviews && this.state.reviews.map((review) => {
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