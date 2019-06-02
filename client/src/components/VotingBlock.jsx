import React from 'react'

class VotingBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  componentDidMount() {
    this.setState({
      funny: this.props.review.funny,
      useful: this.props.review.useful,
      cool: this.props.review.cool
    })
  }

  render() {
    return(
    <div>
      <button className="vote">Useful {this.state.useful}</button>&nbsp;
      <button className="vote">Funny {this.state.funny}</button>&nbsp;
      <button className="vote">Cool {this.state.cool}</button>
    </div>
    )
  }
}

export default VotingBlock