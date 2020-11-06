import React from 'react';
import { Link } from 'react-router-dom';
import HeaderJose from '../../Components/Header/index';
import Card from '../../Components/Card/index';
import Toggle from '../../Components/Toggle/Toggle';

function Home() {
  const [theme, setTheme] = React.useState(false)

  function switchTheme() {
    setTheme(!theme)
  }

  return (
    <div className={theme ? "App" : "App dark"} onClick={switchTheme}>
      <Toggle text={theme ? "Dia" : "Noite"}/>
      <HeaderJose title="José Anônimo" text="José nunca se contentou, nem entendeu grande parte da existência humana e da vida como um todo. Passeie por sua mente, e conheça todos seus dilemas, suas dúvidas, pensamentos e tudo que ele já conseguiu expressar ou refletir de alguma forma." />    
      <div className="Poems"> 
        <Link to="/VolumeI" className="Link"><Card title="Volume I" /></Link>
        <Link to="/Amigos" className="Link"><Card title="Amigos" /></Link>
        <Link to="/Abecede" className="Link"><Card title="Abecedê" /></Link>
        <Link to="/VolumeII" className="Link"><Card title="Volume II" /></Link>        
      </div>
    </div>
  );
}

export default Home;
