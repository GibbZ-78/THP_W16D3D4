import { useState } from 'react';
import ColorModeContext from './ColorModeContext';

const ColorModeContextProvider = (props) => {

  const [colorMode, setColorMode] = useState(localStorage.getItem('ReactEstateColorMode') === "dark" ? "dark" : "light");

  const toggleGlobalColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    localStorage.setItem('ReactEstateColorMode', colorMode);
  }

  return(
    <ColorModeContext.Provider value={{colorMode, toggleGlobalColorMode}}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeContextProvider;