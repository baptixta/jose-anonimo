import React from 'react';
import './poem.scss';
import Poema from '../../Components/Poem/index';
import Abc from '../../Data/poems3.json';
import HeaderJose from '../../Components/Header';
import Arrow from '../../Components/Arrow/arrow';
import Toggle from '../../Components/Toggle/Toggle';
import { Link } from 'react-router-dom';

function Abecede() {
  const [theme, setTheme] = React.useState(false)

  function switchTheme() {
    setTheme(!theme)
  }

  return (
    <div className={theme ? "App" : "App dark"} onClick={switchTheme}>
        <Toggle text={theme ? "Dia" : "Noite"}/>
        <Link to="/" className="Link"><Arrow /></Link>
        <HeaderJose title="Abecedê" text="Terceira noite de insônia, ansiedade, confusão, reflexão, e nada de dormir." />
        <Poema conteudo={Abc} />
    </div>
  );
}

export default Abecede;
