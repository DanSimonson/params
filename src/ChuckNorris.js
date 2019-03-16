import React, { Component } from 'react'
import axios from 'axios'
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
        //this.setState({ facts: response });
        console.log('response: ',response)
        console.log(response.data.value.joke)
        this.setState({norrisjoke:response.data.value.joke})
        //console.log('fact: ', this.state.facts)
        //console.log(this.state.facts[0].id)
        //console.log(this.state.facts[0].joke)

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