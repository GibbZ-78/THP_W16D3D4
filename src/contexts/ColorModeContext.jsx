import { createContext, useState } from 'react';

export const ColorModeContext = createContext();

const ColorModeContextProvider = (props) => {

  const [colorMode, setColorMode] = useState(localStorage.getItem('ReactEstateColorMode') === "dark" ? "dark" : "light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light").then(localStorage.setItem('ReactEstateColorMode', colorMode));
  }

  return(
    <ColorModeContext.Provider value={{colorMode, toggleColorMode}}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeContextProvider;