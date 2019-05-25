import React from 'react'
import RatingBar from './RatingBar.jsx'

const Create = (props) => {
  return (
          <div className="island">
        <RatingBar />
        <hr />
        <a href="#">Start your review of <b>{props.info.restaurant.map(restaurant => {
          return (restaurant.name)})}.</b></a>
      </div>
  )
}

export default Create