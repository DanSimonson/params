import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import chuckcharge from "./assets/chuckcharge.jpg"
import chuckcowboy from "./assets/chuckcowboy.jpg"
import chuckgun from "./assets/chuckgun.jpg"
import chuckkick from "./assets/chuckkick.jpg"
//import ChuckNorris from './ChuckNorris'
import './Home.css'
class Home extends Component {
  state = {
    facts: [],
    photos: [],
    chuckwarn: []
  }
  setPhotoUrl = (photos) => {
    this.setState({ photos: photos })
  }
  setChuckWarn = (chuckwarn) => {
    this.setState({chuckwarn: chuckwarn})
  }

  componentDidMount() {
    let photos = [chuckcharge, chuckcowboy, chuckgun, chuckkick];
    this.setPhotoUrl(photos)
    let chuckwarn = ['Chuck Norris will hurt you', 'Chuck Norris will attack', 'Chuck Norris is tougher than you', 'Chuck Norris has exception fighting skill']
    this.setChuckWarn(chuckwarn)    
    axios.get('https://api.icndb.com/jokes/random/4?exclude=[nerdy,explicit]')
      .then(response => {
        this.setState({ facts: response.data.value });
      }).catch(error => {
        console.log(error);
      })
  }


  render() {    
    //id: {norrisfact.id}
    const facts = this.state.facts    
    const norrisList = facts.map((norrisfact, index) => {
      return (
        <div className='norrisgrid'>
          <div className='norris' key={norrisfact.id}>
            <Link to={'/' + norrisfact.id}>
              <img src={this.state.photos[index]} style={{width: 310 + 'px',height: 163 + 'px'}} alt='chuck photo'/>
              <span style={{fontSize: 4 +'rem'}}> 
                {this.state.chuckwarn[index]}
                <label className="label label-warning" style={{ fontSize: 3 + 'rem', margin: 5 + 'px' }}  >ID: {norrisfact.id}</label> 
              </span>
            </Link>
          </div>
        </div>
      )
    })
    return (
      <div className="container">
        {norrisList}
      </div>
    )
  }
}
export default Home