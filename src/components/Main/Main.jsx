import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Work from '../Work/Work';
import About from '../About/About';
import './Main.css';

function Main() {

  console.log("Entering 'Main' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myMainMode, setMyMainMode] = useState(colorMode);
  const myMainClassMode = `myMain myMain-${myMainMode}`;

  // Switching 'Home' color mode (dark <=> light)... 
  function SwitchMainMode() {
    myMainMode === "light" ? setMyMainMode("dark") : setMyMainMode("light");
  }

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchMainMode, [colorMode]);

  return (
    <main className={myMainClassMode}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/works/*' element={<Work/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </main>
  );
}

export default Main;

