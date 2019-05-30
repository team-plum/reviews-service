import React from 'react'
import { IoIosCamera, IoMdPeople } from 'react-icons/io'
import { MdStars } from 'react-icons/md'

const User = (props) => {
  return (
    <div>
      <table><tbody>
        <tr>
          <td>
            <img src={props.user.avatar} className="user" />
          </td>
          <td>
            <p className="img user">{props.user.user}</p><br />
            <p className="user_location">{props.user.location}</p>
            <p className="user_stats"><IoMdPeople className="usericon" /> {props.user.friends} friends</p>
            <p className="user_stats"><MdStars  className="usericon" /> {props.user.reviews} reviews</p>
            <p className="user_stats"><IoIosCamera  className="usericon" /> {props.user.id} photos</p>
          </td>
        </tr>
      </tbody></table>
    </div>
  )
}

export default User