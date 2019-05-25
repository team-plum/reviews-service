import React from 'react'
import User from './User.jsx'
import HoverBox from './HoverBox.jsx'
import Photos from './Photos.jsx'

const Review = (props) => {
  return (<div>
    <table key={props.review.id}>
      <tbody>
    <tr>
    <td>
      <User user={props.review}/>
    </td>
    <td rowSpan="2">
      <p className="review">{props.review.text}</p>
      <Photos review={props.review} getPhotos={props.getPhotos} />
      </td>
    </tr>
    <tr>
      <td><HoverBox user={props.review} /></td>
      </tr>
      </tbody>
    </table>
  </div>)
}

export default Review