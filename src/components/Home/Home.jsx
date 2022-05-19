import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import "./Home.css";

function Home() {

  console.log("Entering 'Home' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myHomeMode, setMyHomeMode] = useState(colorMode);
  const myHomeClassMode = `myHome myHome-${myHomeMode}`;

  // Switching 'Home' color mode (dark <=> light)... 
  function SwitchHomeMode() {
    myHomeMode === "light" ? setMyHomeMode("dark") : setMyHomeMode("light");
  }

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchHomeMode, [colorMode]);

  return (
    <section className={myHomeClassMode}>
      <h2>
        Confiez vos rêves à des experts du Web !
      </h2>
      <p>
        Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de sites et applications web : étude, UX, conception, design, développement, SEO.  
        Notre agence web est capable de répondre à tous vos besoins afin d'élaborer, de A à Z, une véritable stratégie digitale, impactante, cohérente et évolutive.
      </p>
    </section>
  );
}

export default Home;
