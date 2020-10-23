import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css'
import Home from './Pages/Home/Home'
import VolumeUm from './Pages/VolumeOne/VolumeOne'

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/VolumeI" exact component={VolumeUm}></Route>
      </Router>
    </>
  );
}

export default App;
