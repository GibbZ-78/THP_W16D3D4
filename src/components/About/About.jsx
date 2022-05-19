import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import "./About.css";

function About() {

  console.log("Entering 'About' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myAboutMode, setMyAboutMode] = useState(colorMode);
  const myAboutClassMode = `myAbout myAbout-${myAboutMode}`;

  // Switching 'About' color mode (dark <=> light)... 
  const SwitchAboutMode = () => {
    myAboutMode === "light" ? setMyAboutMode("dark") : setMyAboutMode("light");
  };

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchAboutMode, [colorMode]);

  return (
    <section className={myAboutClassMode}>
      <h2>
        React Estate est une agence de communication digitale orléanaise dédiée au secteur de l'immobilier ayant pour mission de vous accompagner sur vos projets digitaux.
      </h2>
      <p>
        De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs. 
        Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "Solane" ou encore "Sedal" vers les sommets de la réussite.
      </p>
    </section>
  );
}

export default About;