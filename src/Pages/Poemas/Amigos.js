import React from 'react';
import './poem.scss';
import Poema from '../../Components/Poem/index';
import AmigosTexto from '../../Data/poems2.json';
import HeaderJose from '../../Components/Header';
import Arrow from '../../Components/Arrow/arrow';
import Toggle from '../../Components/Toggle/Toggle';
import { Link } from 'react-router-dom';

function Amigos() {
  const [theme, setTheme] = React.useState(false)

  function switchTheme() {
    setTheme(!theme)
  }

  return (
    <div className={theme ? "App" : "App dark"} onClick={switchTheme}>
        <Toggle text={theme ? "Dia" : "Noite"}/>
        <Link to="/" className="Link"><Arrow /></Link>
        <HeaderJose title="Amigos" text="Em sua segunda noite de insônia, lembrou da importância de certas pessoas em sua vida." />
        <Poema conteudo={AmigosTexto} />
    </div>
  );
}

export default Amigos;
