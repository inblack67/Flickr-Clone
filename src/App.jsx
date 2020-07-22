import React, { lazy, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import FlickerState from './context/flicker/FlickerState';

// components import
import Home from './components/Home'
import Groups from './components/Group/Groups'
import NotFound from './components/NotFound'
import Preloader from './components/Preloader'

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';

// Lazy Loads
const Gallery = lazy(() => import('./components/Gallery/Gallery'));

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
          <Suspense fallback={<Preloader />}>
            <Route exact path='/gallery/:groupId' component={Gallery} />
          </Suspense> 
          <Route component={NotFound} /> 
        </Switch>
      </div>
      </Router>
    </FlickerState>
  );
}

export default App;
