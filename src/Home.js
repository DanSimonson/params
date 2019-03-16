import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ChuckNorris from './ChuckNorris'
class Home extends Component {
  state = {
    facts: []
  }

  componentDidMount() {
    //console.log(this.props.match.params.id)
    //let id = this.props.match.params.id

    axios.get('http://api.icndb.com/jokes/random/10?exclude=[nerdy,explicit]')
      .then(response => {
        this.setState({ facts: response.data.value });
        //console.log('response.data.value: ',response.data.value)
        //console.log('fact: ', this.state.fact)
        //console.log(this.state.facts[0].id)
        //console.log(this.state.facts[0].joke)

      }).catch(error => {
        console.log(error);
      })
  }


  render() {
    const facts = this.state.facts
    const norrisList = facts.map((norrisfact, index) => {
      return (
        <div key={norrisfact.id}>
          <Link to={'/' + norrisfact.id}>
          <span>{norrisfact.joke} </span>
          </Link>
      </div>      
    )
  })
  return(  
    <div className = "container" >
      { norrisList }
    </div>
  )
  }
}
export default Home