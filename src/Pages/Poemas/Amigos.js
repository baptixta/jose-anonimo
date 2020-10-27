import React from 'react';
import './poem.scss';
import Poema from '../../Components/Poem/index';
import AmigosTexto from '../../Data/poems2.json';
import HeaderJose from '../../Components/Header';
import Arrow from '../../Components/Arrow/arrow';
import { Link } from 'react-router-dom';

function Amigos() {
  return (
    <div className="App dark">
        <Link to="/" className="Link"><Arrow /></Link>
        <HeaderJose title="Amigos" text="Em sua segunda noite de insônia, lembrou da importância de certas pessoas em sua vida." />
        <Poema conteudo={AmigosTexto} />
    </div>
  );
}

export default Amigos;
