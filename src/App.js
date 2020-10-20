import React from 'react';
import HeaderJose from './Components/Header/index';
import Card from './Components/Card/index'
import Toggle from './Components/Toggle/index'
import Poem from './Components/Poem/index'
import './index.css'

function App() {
  const [theme, setTheme] = React.useState(false)

  return (
    <div className={theme ? 'App dark' : 'App'} theme={theme}>
      <Toggle setTheme={setTheme} text={theme ? 'noite' : 'dia'} />
      <Poem name={'Teste'} text={"Poema teste."} />
      <HeaderJose />    
      <div className="Poems"> 
        <Card />  
      </div>
    </div>
  );
}

export default App;
