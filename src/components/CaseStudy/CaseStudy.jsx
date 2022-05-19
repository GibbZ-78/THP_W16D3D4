import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import myProjectTab from '../../assets/contents/Projects';
import './CaseStudy.css';

function CaseStudy() {

  console.log("Entering 'CaseStudy' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myCaseStudyMode, setCaseStudyMode] = useState(colorMode);
  const myCaseStudyClassMode = `myCaseStudy myCaseStudy-${myCaseStudyMode}`;

  const { myProjectPath } = useParams();
  const [displayProject, setProjectToDisplay] = useState(undefined)
  
  console.log(myProjectPath);

  // Seeking the project with the ID built in the URI...
  const FindProject = () => {
    const myProjectSearch = myProjectTab.find((myProject) => myProject.id === myProjectPath.split('-')[1]);
    setProjectToDisplay(myProjectSearch);
  }

  // ... each time the path to project changes (while component is rendered / updated or not ~ Manages "side-effects")
  useEffect(FindProject, [myProjectPath]);

  // Switching Header color mode (dark <=> light)... 
  const SwitchHeaderMode = () => {
    myCaseStudyMode === "light" ? setCaseStudyMode("dark") : setCaseStudyMode("light");
  };

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchHeaderMode, [colorMode]);

  // If the 'displayProject' state var is not 'undefined' (i.e. not just initialized via 'useState' or inducing a vain search via 'find')
  // Then display the content of the related project information within 'CaseStudy', the lowest component in the 'Work' page
  if (displayProject !== undefined) {
    return(
      <div className={myCaseStudyClassMode}>
        <h2>{displayProject.name} (ID: {displayProject.id})</h2>
        <p>{displayProject.customer}</p>
        <p>{displayProject.short_descr}</p>
        <p>{displayProject.long_descr}</p>
      </div>
    )
  } else {
    return(
      <div className={myCaseStudyClassMode}>
        <p>
          No project selected (yet ?)
        </p>
      </div>
    )
  }
};

export default CaseStudy;
