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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className='heading'>Chuck Norris Facts</h1>

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