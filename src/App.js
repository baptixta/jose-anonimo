import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home/Home'
import VolumeUm from './Pages/Poemas/VolumeOne'
import Amigos from './Pages/Poemas/Amigos'
import Abecede from './Pages/Poemas/Abecede';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/VolumeI" exact component={VolumeUm}></Route>
        <Route path="/Amigos" exact component={Amigos}></Route>
        <Route path="/Abecede" exact component={Abecede}></Route>
      </Router>
    </>
  );
}

export default App;
