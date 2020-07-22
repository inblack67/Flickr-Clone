import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FlickerState from './context/flicker/FlickerState';

// components import
import Home from './components/Home'
import Groups from './components/Groups'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <FlickerState>
      <Router>
      <div className="container center">
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/groups' component={Groups} /> 
          <Route exact path='/gallery' component={Gallery} /> 
          <Route component={NotFound} /> 
        </Switch>
      </div>
      </Router>
    </FlickerState>
  );
}

export default App;
