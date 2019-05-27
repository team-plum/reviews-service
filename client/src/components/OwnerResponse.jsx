import React from 'react'

const OwnerResponse = (props) => {
  return (
    <div>
    {props.review.hasOwnerResponse ? <div>
      {props.restaurant.map((restaurant) => {
        return (
        <div key={restaurant.id} className="island">
        <table><tbody><tr>
        <td>{<img className="owner" src={restaurant.ownerAvatar}/>}</td>
        <td><h5>Comment from {restaurant.owner} of {restaurant.name}<br />Business Owner</h5></td>
        </tr>
        <tr>
          <td colSpan="2"><p className="review">{props.review.ownerResponse}</p></td>
        </tr>
        </tbody></table>
        </div>
        )
      })}
      </div> : <div></div>}
    </div>
  )
}

export default OwnerResponse