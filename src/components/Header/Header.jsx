import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoonImg from '../../assets/images/moon.svg';
import SunImg from '../../assets/images/sun.svg';
import BuildingImgLight from '../../assets/images/building-light.svg';
import BuildingImgDark from '../../assets/images/building-dark.svg';
import ColorModeContext from '../../contexts/ColorModeContext';
import './Header.css';

function Header() {

  console.log("Entering 'Header' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myHeaderMode, setHeaderMode] = useState(colorMode);
  
  const myContraryMode = myHeaderMode === "light" ? "dark" : "light";
  const myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
  const myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
  const myHeaderModeSwitchImage = myHeaderMode === "light" ? MoonImg : SunImg;
  const myBuildingImg = myHeaderMode === "light" ? BuildingImgDark : BuildingImgLight;

  function SwitchGlobalMode() {
    toggleGlobalColorMode(colorMode === "light" ? "dark" : "light");
    // console.log("  > Switching mode button pressed...");
    // console.log("    - Current mode: " + myHeaderMode);
    // console.log("    - Current 'contrary' mode: " + myContraryMode);
    // setHeaderMode(colorMode);
    // myContraryMode = myHeaderMode === "light" ? "dark" : "light";
    // myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
    // myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
    // myHeaderModeSwitchImage = myHeaderMode === "light" ? MoonImg : SunImg;
    // myBuildingImg = myHeaderMode === "light" ? BuildingImgDark : BuildingImgLight;
    // console.log("    - New mode: " + myHeaderMode);
    // console.log("    - New 'contrary' mode: " + myContraryMode);
    // console.log("    - New header style: " + myHeaderClassMode);
    // console.log("    - New button style: " + myHeaderModeSwitchButton);
    // console.log("    - New button icon: " + myHeaderModeSwitchImage)
  }

  // Switching 'Header' color mode (dark <=> light)... 
  function SwitchHeaderMode() {
    myHeaderMode === "light" ? setHeaderMode("dark") : setHeaderMode("light");
  }

  // ... each time the global variable 'colorMode' switches (because color mode button is pressed, BTW ;-)
  useEffect(SwitchHeaderMode, [colorMode]);

  return (
    <header className={myHeaderClassMode}>
      <div className='myHeaderLogo'>
        <Link className='myHeaderLogoText' to='/'>
          <img src={myBuildingImg} alt='Building - part of REACT ESTATE logo'/> 
          REACT ESTATE
        </Link>
      </div>
      <div className="myHeaderMenu">
        <Link className='myHeaderLink' to='/'>Accueil</Link>
        <Link className='myHeaderLink' to='/about'>l'Agence</Link>
        <Link className='myHeaderLink' to='/works'>Nos projets</Link>
      </div>
      <div>
        <button className={myHeaderModeSwitchButton} onClick={SwitchGlobalMode}>
          <img src={myHeaderModeSwitchImage} alt={`icon figuring the alternate color mode: ${myContraryMode}`} />
        </button>
      </div> 
    </header>
  );
}

export default Header;
