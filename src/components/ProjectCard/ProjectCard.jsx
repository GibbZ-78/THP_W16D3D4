import { useEffect, useState, useContext } from "react";
import ColorModeContext from '../../contexts/ColorModeContext';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {

  console.log("Entering 'ProjectCard' component");
  const {colorMode, toggleGlobalColorMode} = useContext(ColorModeContext);
  console.log("  > Global var 'colorMode': " + colorMode);
  const [myProjectCardMode, setMyProjectCardMode] = useState(colorMode);
  const myProjectCardClassMode = `myProjectCard myProjectCard-${myProjectCardMode}`;

  // Switching 'ProjectCard' color mode (dark <=> light)... 
  function SwitchProjectCardMode() {
    myProjectCardMode === "light" ? setMyProjectCardMode("dark") : setMyProjectCardMode("light");
  }

  // ... each time the global variable 'colorMode' switches
  useEffect(SwitchProjectCardMode, [colorMode]);

  if (props.project) {
    return (
      <Link to={'/works/project-'+ props.project.id}>
        <div className={myProjectCardClassMode}>
          <h2>{props.project.name}</h2>
          <p>Project ID: {props.project.id}</p>
          <p>Client: {props.project.customer}</p>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={myProjectCardClassMode}>
        Sorry, no project was given as a 'prop'...
      </div>
    );
  }
} 

export default ProjectCard;