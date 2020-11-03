import React from 'react';
import './poem.scss';
import Poema from '../../Components/Poem/index';
import Poems from '../../Data/poems.json'
import HeaderJose from '../../Components/Header';
import Arrow from '../../Components/Arrow/arrow';
import Toggle from '../../Components/Toggle/Toggle';
import { Link } from 'react-router-dom';

function Poem() {
  const [theme, setTheme] = React.useState(false)

  function switchTheme() {
    setTheme(!theme)
  }

  return (
    <div className={theme ? "App" : "App dark"} onClick={switchTheme}>
        <Toggle text={theme ? "Dia" : "Noite"}/>
        <Link to="/" className="Link"><Arrow /></Link>
        <HeaderJose title="Volume I" text="A primeira noite de insônia, de muitas que ainda viriam." />
        <Poema conteudo={Poems} />
    </div>
  );
}

export default Poem;
