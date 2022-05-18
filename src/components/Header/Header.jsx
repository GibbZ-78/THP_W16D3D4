import { useState } from 'react';
import { Link } from 'react-router-dom';
import SunsetImg from '../../assets/images/sunset.svg';
import SunriseImg from '../../assets/images/sunrise.svg';
import './Header.css';

function Header() {

  const [myHeaderMode, setHeaderMode] = useState("light");
  const [myContraryMode, setContraryMode] = useState(myHeaderMode === "light" ? "dark" : "light");
  const [myHeaderClassMode, setHeaderClassMode] = useState(`myHeader myHeader-${myHeaderMode}`);
  const [myHeaderModeSwitchButton, setHeaderModeSwitchButton] = useState(`myModeSwitchButton myModeSwitchButton-${myHeaderMode}`);
  const [myHeaderModeSwitchImage, setHeaderModeSwitchImage] = useState(myHeaderMode === "light" ? SunsetImg : SunriseImg);
  console.log("Initialized Header state vars...");
  console.log("  > Initial mode :" + myHeaderMode);
  console.log("  > Initial 'contrary' mode :" + myContraryMode);

  const SwitchMode = () => {
    console.log("Switch mode button pressed...");
    setHeaderMode(myContraryMode);
    setContraryMode(myHeaderMode === "light" ? "dark" : "light");
    setHeaderClassMode(`myHeader myHeader-${myHeaderMode}`);
    setHeaderModeSwitchButton(`myModeSwitchButton myModeSwitchButton-${myHeaderMode}`);
    setHeaderModeSwitchImage(myHeaderMode === "light" ? SunsetImg : SunriseImg);
    console.log("  > New mode: " + myHeaderMode);
    console.log("  > New 'contrary' mode: " + myContraryMode);
    console.log("  > New header style: " + myHeaderClassMode);
    console.log("  > New button style: " + myHeaderModeSwitchButton);
    console.log("  > New button icon: " + myHeaderModeSwitchImage)
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
          <img src={myHeaderModeSwitchImage} alt={`icon figuring the alternate color mode: ${myContraryMode}`} />
          &nbsp;Switch to {myContraryMode} mode&nbsp;
          <img src={myHeaderModeSwitchImage} alt={`icon figuring the alternate color mode: ${myContraryMode}`} />
        </button>
      </div> 
    </header>
  );
}

export default Header;
