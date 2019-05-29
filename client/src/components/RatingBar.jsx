import React from 'react'
import { FaStar } from 'react-icons/fa'

const RatingBar = (props) => {
  return (
    <div>
      <div className="rating-group">
        {/* <input disabled checked className="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" /> */}
        <label aria-label="1 star" className="rating__label" htmlFor="rating3-1"><FaStar className="rating__icon rating__icon--star" onClick={props.rate} /></label>
        <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio" onClick={props.rate} />
        <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><FaStar className="rating__icon rating__icon--star" /></label>
        <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio" onClick={props.rate} />
        <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><FaStar className="rating__icon rating__icon--star" /></label>
        <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio" onClick={props.rate} />
        <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><FaStar className="rating__icon rating__icon--star" /></label>
        <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio" onClick={props.rate} />
        <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><FaStar className="rating__icon rating__icon--star" /></label>
        <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio" onClick={props.rate} />
      </div>
    </div>
  )
}

export default RatingBar