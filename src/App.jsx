import React, { useEffect } from 'react';
import FlickerState from './context/flicker/FlickerState';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize';

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <FlickerState>
      <div className="App">
        <h1>hello</h1>
      </div>
    </FlickerState>
  );
}

export default App;
