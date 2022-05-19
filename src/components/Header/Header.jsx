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
  
  let myContraryMode;
  let myHeaderClassMode;
  let myHeaderModeSwitchButton;
  let myHeaderModeSwitchImage;
  let myBuildingImg;
  
  function InitMode() {
    myContraryMode = myHeaderMode === "light" ? "dark" : "light";
    myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
    myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
    myHeaderModeSwitchImage = myHeaderMode === "light" ? MoonImg : SunImg;
    myBuildingImg = myHeaderMode === "light" ? BuildingImgDark : BuildingImgLight;
    console.log("  > Initializing Header state vars...");
    console.log("    - Initial mode: " + myHeaderMode);
    console.log("    - Initial 'contrary' mode: " + myContraryMode);
  }

  function SwitchMode() {
    toggleGlobalColorMode(colorMode === "light" ? "dark" : "light");
    console.log("  > Switching mode button pressed...");
    console.log("    - Current mode: " + myHeaderMode);
    console.log("    - Current 'contrary' mode: " + myContraryMode);
    setHeaderMode(colorMode);
    myContraryMode = myHeaderMode === "light" ? "dark" : "light";
    myHeaderClassMode = `myHeader myHeader-${myHeaderMode}`;
    myHeaderModeSwitchButton = `myModeSwitchButton myModeSwitchButton-${myHeaderMode}`;
    myHeaderModeSwitchImage = myHeaderMode === "light" ? MoonImg : SunImg;
    myBuildingImg = myHeaderMode === "light" ? BuildingImgDark : BuildingImgLight;
    console.log("    - New mode: " + myHeaderMode);
    console.log("    - New 'contrary' mode: " + myContraryMode);
    console.log("    - New header style: " + myHeaderClassMode);
    console.log("    - New button style: " + myHeaderModeSwitchButton);
    console.log("    - New button icon: " + myHeaderModeSwitchImage)
  }

  // Infinite loops inside ;-)
  // useEffect(SwitchMode, [myHeaderMode]);
  // useEffect(SwitchMode, [myColorMode]);
  
  InitMode();

  return (
    <header className={myHeaderClassMode}>
      <div className='myHeaderLogo'>
        <Link to='/'><img src={myBuildingImg} alt='icon of a building'/> REACT ESTATE</Link>
      </div>
      <div className="myHeaderMenu">
        <Link className='myHeaderLink' to='/'>Accueil</Link>
        <Link className='myHeaderLink' to='/about'>l'Agence</Link>
        <Link className='myHeaderLink' to='/works'>Nos projets</Link>
      </div>
      <div>
        <button className={myHeaderModeSwitchButton} onClick={SwitchMode}>
          <img src={myHeaderModeSwitchImage} alt={`icon figuring the alternate color mode: ${myContraryMode}`} />
          {/*
          &nbsp;Switch to {myContraryMode} mode&nbsp;
          <img src={myHeaderModeSwitchImage} alt={`icon figuring the alternate color mode: ${myContraryMode}`} />
          */}
        </button>
      </div> 
    </header>
  );
}

export default Header;
