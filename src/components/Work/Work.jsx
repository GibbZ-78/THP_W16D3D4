import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import { Routes, Route } from 'react-router-dom';
import myProjectTab from '../../assets/contents/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import CaseStudy from '../CaseStudy/CaseStudy';
import "./Work.css";

function Work() {

  console.log("Entering 'Work' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myWorkMode, setMyWorkMode] = useState(colorMode);
  const myWorkClassMode = `myWork myWork-${myWorkMode}`;
  const myProjectCardContainerMode = "light";  // To be modified using CONTEXT
  const myProjectCardContainerClassMode = `myProjectCardContainer myProjectCardContainer-${myProjectCardContainerMode}`;
  const myProjectContainerMode = "light";  // To be modified using CONTEXT
  const myProjectContainerClassMode = `myProjectContainer myProjectContainer-${myProjectContainerMode}`;

  // Switching 'Work' color mode (dark <=> light)... 
  function SwitchWorkMode() {
    myWorkMode === "light" ? setMyWorkMode("dark") : setMyWorkMode("light");
  }

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchWorkMode, [colorMode]);

  return (
    <section className={myWorkClassMode}>
      <div className={myWorkClassMode}>
        <h2>
          Au fil des années, nous avons pu accompagner les meilleurs.
        </h2>
        <p>
          Découvrez pas à pas comment nous avons été présents et avons procédé pour lancer vos marques préférées.
          Pour ce faire, parcourez donc les exemples de projets ci-après !
        </p>
      </div>
      <div className={myProjectCardContainerClassMode}>
        {myProjectTab.map(myProject => (
          <ProjectCard key={myProject.id} project={myProject} />
        ))}
      </div>
      <div className={myProjectContainerClassMode}>
        <Routes>
          <Route path='/:myProjectPath' element={<CaseStudy/>} />
        </Routes>
      </div>
    </section>
  );
}

export default Work;
