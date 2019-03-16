import React, { Component } from 'react'
import axios from 'axios'
import chuckcharge from "./assets/chuckcharge.jpg"
import chuckcowboy from "./assets/chuckcowboy.jpg"
import chuckgun from "./assets/chuckgun.jpg"
import chuckkick from "./assets/chuckkick.jpg"

class ChuckNorris extends Component {
  state = {
    id: '',
    norrisjoke: ''
  }

  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.id
    this.setState({ id: id })
    //http://api.icndb.com/jokes/15
    axios.get('http://api.icndb.com/jokes/'+ id)
      .then(response => {
        
        console.log('response: ',response)
        console.log(response.data.value.joke)
        this.setState({norrisjoke:response.data.value.joke})
        

      }).catch(error => {
        console.log(error);
      })

  }
  render() {
    let myId = this.state.id
    return (
      <div className="container">
        <h4>Chuck Norris Joke ID: {this.state.id}</h4>
        <h1>{this.state.norrisjoke}</h1>

      </div>
    )
  }
}
export default ChuckNorris