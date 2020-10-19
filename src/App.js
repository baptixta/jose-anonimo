import React from 'react';
import HeaderJose from './Components/Header/index';
import Card from './Components/Card/index'

function App() {
  return (
    <div className="App">
      <HeaderJose />
      <div className="Poems"> 
        <Card />  
      </div>
    </div>
  );
}

export default App;
