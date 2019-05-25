import React from 'react'

class Photos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.props.getPhotos(this.props.review.id, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(data)
        console.log('Photos retrieved!')
        this.setState({photos: data})
      }
    })
  }

  render() {
    return(<div>
      {this.state.photos.map((photo) => {
        return (<img className="review" src={photo.url} />)
      })}
    </div>)
  }
}

export default Photos