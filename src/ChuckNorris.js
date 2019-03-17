import React, { Component } from 'react'
import axios from 'axios'

class ChuckNorris extends Component {
  state = {
    id: '',
    norrisjoke: '',
    photos: []
  }
  getPhotoUrl = (photos) => {
    this.setState({ photos: photos })

  }

  componentDidMount() {

    let id = this.props.match.params.id
    this.setState({ id: id })
    axios.get('http://api.icndb.com/jokes/' + this.props.match.params.id)
      .then(response => {
        this.setState({ norrisjoke: response.data.value.joke })
      }).catch(error => {
        console.log(error);
      })

  }
  render() {
    //let myId = this.state.id
    //console.log(this.props)
    return (
      <div className="centered" style={{ backgroundColor: '#D' + 98880, padding: 1 + 'rem', marginTop: 15 + 'rem' }}>
        <label className="label label-warning" style={{ fontSize: 3 + 'rem' }}  >Chuck Norris Fact with ID: {this.state.id}</label>
        <h1 style={{ marginBottom: 2 + 'rem' }}>{this.state.norrisjoke}</h1>
      </div>
    )
  }
}
export default ChuckNorris