import React, { Component } from 'react'
//import Home from './Home'
class ChuckNorris extends Component {
  state = {
    id: ''
  }

  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.id
    this.setState({ id: id })

  }
  render() {
    let myId = this.state.id
    return (
      <div className="container">
        <h4>route params: {this.props.match.params.id}</h4>
      </div>
    )
  }
}
export default ChuckNorris