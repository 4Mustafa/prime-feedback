import React, { Component } from 'react';
/* import axios from 'axios';
 */import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';


import Feelings from '../Feelings/Feelings'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Home from '../Home/Home';
import Review from '../Review/Review';
import Submit from '../Submit/Submit'


class App extends Component {
  state = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: ''

  }




  render() {
    return (
      <div className="App">
        <Router>

          <Route exact path='/' component={Home} />
          <Route exact path='/Feelings' component={Feelings} />
          <Route ecact path='/Understanding' component={Understanding} />
          <Route exact path='/Support' component={Support} />
          <Route exact path='/Comments' component={Comments} />
          <Route exact path='/Review' component={Review} />
          <Route exact path='/Submit' component={Submit} />







          <br />
        </Router>

      </div>
    );
  }
}

export default App;
