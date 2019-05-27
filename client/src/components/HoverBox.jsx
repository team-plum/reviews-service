import React from 'react'

const HoverBox = (props) => {
  return (<div>
    {props.hovered
      ?     <div className="hovered">
      <a href="#" className="a hoverbox">Share review</a>
      <hr />
      <a href="#" className="a hoverbox">Embed review</a>
      <hr />
      <a href="#" className="a hoverbox">Compliment</a>
      <hr />
      <a href="#" className="a hoverbox">Send message</a>
      <hr />
      <a href="#" className="a hoverbox">Follow {props.user.user}</a>
    </div>
      : <div className="unhovered">
      <a href="#" className="a hoverbox">Share review</a>
      <hr />
      <a href="#" className="a hoverbox">Embed review</a>
      <hr />
      <a href="#" className="a hoverbox">Compliment</a>
      <hr />
      <a href="#" className="a hoverbox">Send message</a>
      <hr />
      <a href="#" className="a hoverbox">Follow {props.user.user}</a>
    </div>
    }
    </div>
  )
}

export default HoverBox