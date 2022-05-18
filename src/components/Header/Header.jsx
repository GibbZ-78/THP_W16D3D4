import { useState } from 'react';
import { Link } from 'react-router-dom';
import SunsetImg from '../../assets/images/sunset.svg';
import SunriseImg from '../../assets/images/sunrise.svg';
import './Header.css';

function Header() {

  let myHeaderMode = "light";
  let myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
  let myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
  let myHeaderModeSwitchImage = myHeaderMode === "light" ? SunsetImg : SunriseImg;
  let myContraryMode = myHeaderMode === "light" ? "dark" : "light";

  const SwitchMode = () => {
    myHeaderMode = myContraryMode;
    myContraryMode = myHeaderMode === "light" ? "dark" : "light";
  };

  return (
    <header className={myHeaderClassMode}>
      <div>
        <Link className='myHeaderLogo' to='/'>React Estate</Link>
      </div>
      <div className="myHeaderMenu">
        <Link className='myHeaderLink' to='/'>Accueil</Link>
        <Link className='myHeaderLink' to='/about'>l'Agence</Link>
        <Link className='myHeaderLink' to='/works'>Nos projets</Link>
      </div>
      <div>
        <button className={myHeaderModeSwitchButton} onClick={SwitchMode}>
          <img src={myHeaderModeSwitchImage}></img>
          &nbsp;Switch to {myContraryMode} mode&nbsp;
          <img src={myHeaderModeSwitchImage}></img>
        </button>
      </div> 
    </header>
  );
}

export default Header;
