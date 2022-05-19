import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import GithubDarkImg from '../../assets/images/github-dark.svg';
import GithubLightImg from '../../assets/images/github-light.svg';
import LinkedinDarkImg from '../../assets/images/linkedin-dark.svg';
import LinkedinLightImg from '../../assets/images/linkedin-light.svg';
import "./Footer.css";

function Footer() {

  console.log("Entering 'Footer' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myFooterMode, setMyFooterMode] = useState(colorMode);
  const myFooterClassMode = `myFooter myFooter-${myFooterMode}`;
  const myGithubImg = myFooterMode === "light" ? GithubDarkImg : GithubLightImg;
  const myLinkedinImg = myFooterMode === "light" ? LinkedinDarkImg : LinkedinLightImg;

  // Switching 'Footer' color mode (dark <=> light)... 
  const SwitchFooterMode = () => {
    myFooterMode === "light" ? setMyFooterMode("dark") : setMyFooterMode("light");
  };

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchFooterMode, [colorMode]);

  return (
    <footer className={myFooterClassMode}>
      <p className='myLeftFooter'>&copy; 2022 - Tous droits réservés à Jean-Baptiste VIDAL (GibbZ) pour THP Developer</p>
      <p className='myRightFooter'>
        .<img src={myGithubImg} alt='logo Github dark ou light pour lien vers le repo de GibbZ'/>.
        &nbsp;|&nbsp;
        <img src={myLinkedinImg} alt='logo Linkedin dark ou light pour lien vers le profil de GibbZ'/>
      </p>
    </footer>
  );
}

export default Footer;