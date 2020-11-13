import React from 'react';
import './poem.scss';
import Poema from '../../Components/Poem/index';
import ElaTexto from '../../Data/poems5.json';
import HeaderJose from '../../Components/Header';
import Arrow from '../../Components/Arrow/arrow';
import Toggle from '../../Components/Toggle/Toggle';
import { Link } from 'react-router-dom';

function Ela() {
  const [theme, setTheme] = React.useState(false)

  function switchTheme() {
    setTheme(!theme)
  }

  return (
    <div className={theme ? "App" : "App dark"} onClick={switchTheme}>
        <Toggle text={theme ? "Dia" : "Noite"}/>
        <Link to="/" className="Link"><Arrow /></Link>
        <HeaderJose title="Ela" text="Quinta noite de insônia, lembrou dela." />
        <Poema conteudo={ElaTexto} />
    </div>
  );
}

export default Ela;
