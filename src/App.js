import React, {
  Component
} from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChuckNorris from './ChuckNorris'
import Home from './Home'
import { link } from 'react-router-dom'
class App extends Component {
  state = {
    fact: []
  }

  /*componentDidMount() {
   
    axios.get('http://api.icndb.com/jokes/random/10?exclude=[nerdy,explicit]')
      .then(response => {
        this.setState({ fact: response.data.value });
        //console.log('response.data.value: ',response.data.value)
        //console.log('fact: ', this.state.fact)
        console.log('fact: ', this.state.fact)

      }).catch(error => {
        console.log(error);
      });
    }*/

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/*<h1> Param Tutorial Blog </h1> 

          <h1 className="text-center" > Chuck Norris Quote Generator </h1> <div className="text-center">
            <img src="http://vignette2.wikia.nocookie.net/deathbattle/images/a/a7/Chuck_Norris_BZ_WBK_0005-MasterNorris_com.jpg/revision/latest?cb=20150917035259" alt="chuck" />
          </div>

          <div className="text-center">
            <button onClick={this.getFact} className="btn btn-warning animated pulse">
              Chuck It </button>
           </div>*/}

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ChuckNorris' component={ChuckNorris} />
            <Route path='/:id' component={ChuckNorris} />
          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App;