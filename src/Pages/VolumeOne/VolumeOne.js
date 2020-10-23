import React from 'react';
import './poem.scss';
import Poema from '../../Components/Poem/index';
import HeaderJose from '../../Components/Header';
import Arrow from '../../Components/Arrow/arrow';
import { Link } from 'react-router-dom';

function Poem() {
  return (
    <div className="App dark">
        <Link to="/" className="Link"><Arrow /></Link>
        <HeaderJose title="Volume I" text="A primeira noite de insônia, de muitas que ainda viriam." />
        <Poema />
    </div>
  );
}

export default Poem;
