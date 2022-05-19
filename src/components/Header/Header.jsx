import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MoonImg from '../../assets/images/moon.svg';
import SunImg from '../../assets/images/sun.svg';
import ColorModeContext from '../../contexts/ColorModeContext';
import './Header.css';

function Header() {

  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);

  const [myHeaderMode, setHeaderMode] = useState(colorMode === "light" ? "light" : "dark");
  const [myContraryMode, setContraryMode] = useState(colorMode === "light" ? "dark" : "light"); // use colorMode instead ?
  // const [myHeaderClassMode, setHeaderClassMode] = useState(`myHeader myHeader-${myHeaderMode}`);
  // const [myHeaderModeSwitchButton, setHeaderModeSwitchButton] = useState(`myModeSwitchButton myModeSwitchButton-${myHeaderMode}`);
  // const [myHeaderModeSwitchImage, setHeaderModeSwitchImage] = useState(myHeaderMode === "light" ? MoonImg : SunImg);
  // let myContraryMode = myHeaderMode === "light" ? "dark" : "light";
  let myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
  let myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
  let myHeaderModeSwitchImage = myHeaderMode === "light" ? MoonImg : SunImg;
  console.log("Initializing Header state vars...");
  console.log("  > Initial mode: " + myHeaderMode);
  console.log("  > Initial 'contrary' mode: " + myContraryMode);

  const SwitchMode = () => {
    console.log("Switching mode button pressed...");
    console.log("  > Current mode: " + myHeaderMode);
    console.log("  > Current 'contrary' mode: " + myContraryMode);
    toggleGlobalColorMode(colorMode === "light" ? "dark" : "light");
    setHeaderMode(colorMode);
    setContraryMode(colorMode === "light" ? "dark" : "light");
    // setHeaderClassMode(`myHeader myHeader-${myHeaderMode}`);
    // setHeaderModeSwitchButton(`myModeSwitchButton myModeSwitchButton-${myHeaderMode}`);
    // setHeaderModeSwitchImage(myHeaderMode === "light" ? MoonImg : SunImg);
    // myContraryMode = myHeaderMode === "light" ? "dark" : "light";
    myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
    myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
    myHeaderModeSwitchImage = myHeaderMode === "light" ? MoonImg : SunImg;
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
