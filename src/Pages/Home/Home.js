import React from 'react';
import { Link } from 'react-router-dom';
import HeaderJose from '../../Components/Header/index';
import Card from '../../Components/Card/index'

function Home() {
  return (
    <div className='App dark'>
      <HeaderJose title="José Anônimo" text="José nunca se contentou, nem entendeu grande parte da existência humana e da vida como um todo. Passeie por sua mente, e conheça todos seus dilemas, suas dúvidas, pensamentos e tudo que ele já conseguiu expressar ou refletir de alguma forma." />    
      <div className="Poems"> 
        <Link to="/VolumeI" className="Link"><Card title="Volume I" /></Link>
        <Link to="/Amigos" className="Link"><Card title="Amigos" /></Link>  
      </div>
    </div>
  );
}

export default Home;
