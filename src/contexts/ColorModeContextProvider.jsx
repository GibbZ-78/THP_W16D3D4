import { useState } from 'react';
import ColorModeContext from './ColorModeContext';

const ColorModeContextProvider = (props) => {

  // Initializing global color mode with local storage content (if any) or "light" by default
  const [colorMode, setColorMode] = useState(localStorage.getItem('ReactEstateColorMode') === "dark" ? "dark" : "light");

  // State function modifying the global color mode variable AND updateing the local storage adequately
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