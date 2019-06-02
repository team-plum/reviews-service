import React from 'react'
import User from './User.jsx'
import HoverBox from './HoverBox.jsx'
import Photos from './Photos.jsx'
import OwnerResponse from './OwnerResponse.jsx'
import VotingBlock from './VotingBlock.jsx'
import Rating from './Rating.jsx'

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
    this.onHover = this.onHover.bind(this)
    this.offHover = this.offHover.bind(this)
  }

  // methods for user interaction block visibility
  onHover() {
    this.setState({hovered: true})
  }
  offHover() {
    this.setState({hovered: false})
  }

  render() {
    return (
    <div onMouseEnter={this.onHover} onMouseLeave={this.offHover}>
      <table key={this.props.review.id}>
        <tbody>
      <tr key={this.props.review.id}>
      <td>
        <User user={this.props.review} />
      </td>
      <td rowSpan="2">
        <Rating review={this.props.review} /> <p className="review">{this.props.review.date && this.props.review.date.substr(0,10)}</p>
        <p className="review">{this.props.review.text}</p>
        <Photos review={this.props.review} getPhotos={this.props.getPhotos} getUrl={this.props.getUrl}/>
        <OwnerResponse review={this.props.review} restaurant={this.props.restaurant} />
        <VotingBlock review={this.props.review} />
        </td>
      </tr>
      <tr key={this.props.review.rowid}>
        <td><HoverBox user={this.props.review} review={this.props.review} hovered={this.state.hovered} /></td>
        </tr>
        </tbody>
      </table>
  </div>
  )}
}

export default Review