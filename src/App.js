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
        <h1 className='heading'>Chuck Norris App</h1>  

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