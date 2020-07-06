import React, { useState } from 'react';
import './App.css';

import NavBar from './components/Navbar/Navbar';
import Contains from './components/Contains/Contains';

const App = () => {

  const [displayState, setDisplayState] = useState({competition : false, match: false});

  const getDisplayNavbar = (state) => {
    setDisplayState(state);
  }

  return (
    <div className="App">
      <NavBar getDisplay={getDisplayNavbar}/>
      <Contains display={displayState}/>
    </div>
  );
}

export default App;
