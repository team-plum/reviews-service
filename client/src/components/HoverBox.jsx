import React from 'react'
import { FaShareSquare, FaMedal } from 'react-icons/fa'
import { MdCode, MdChatBubble, MdPersonAdd } from 'react-icons/md'

const HoverBox = (props) => {
  // box is doubled to prevent elements moving when they disappear
  // this way surrounding elements will respect the space it takes
  // even when it's not visible
  return (<div> 
    {props.hovered
      ?     <div className="hovered">
        <table width="100%"><tbody>
          <tr>
            <td>
              <FaShareSquare className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Share review</a>
              <hr />
            </td>
          </tr>
        <tr>
            <td>
              <MdCode className="hoverbox" />
            </td>
            <td>
            <a href="#" className="a hoverbox"> Embed review</a>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <FaMedal className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Compliment</a>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <MdChatBubble className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Send message</a>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <MdPersonAdd className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Follow {props.user.user}</a>
            </td>
          </tr>
        </tbody></table>
    </div>
      : <div className="unhovered">
      <table width="100%"><tbody>
          <tr>
            <td>
              <FaShareSquare className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Share review</a>
              <hr />
            </td>
          </tr>
        <tr>
            <td>
              <MdCode className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Embed review</a>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <FaMedal className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Compliment</a>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <MdChatBubble className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Send message</a>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <MdPersonAdd className="hoverbox" />
            </td>
            <td>
              <a href="#" className="a hoverbox"> Follow {props.user.user}</a>
            </td>
          </tr>
        </tbody></table>
    </div>
    }
    </div>
  )
}

export default HoverBox