import React from 'react'
import { FaStar } from 'react-icons/fa'

class Rating extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let stars;
    let rating = this.props.review.rating
    if(rating === 1) {
      stars = <div><FaStar className="onestar" /><FaStar className="zerostars" /><FaStar className="zerostars" /><FaStar className="zerostars" /><FaStar className="zerostars" /></div>
    } else if (rating === 2) {
      stars = <div className="twostars"><FaStar /><FaStar /><FaStar className="zerostars" /><FaStar className="zerostars" /><FaStar className="zerostars" /></div>
    } else if (rating === 3) {
      stars = <div className="threestars"><FaStar/><FaStar/><FaStar/><FaStar className="zerostars" /><FaStar className="zerostars" /></div>
    } else if (rating === 4) {
      stars = <div className="fourstars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="zerostars" /></div>
    } else if (rating === 5) {
      stars = <div className="fivestars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
    } else {
      stars = <div className="zerostars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
    }

    return (
      <div>
      {stars}
      </div>
    )
  }
}

export default Rating