import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import myProjectTab from '../../assets/contents/Projects';
import './CaseStudy.css';

function CaseStudy() {

  const myCaseStudyMode = "dark";  // To be modified using CONTEXT
  const myCaseStudyClassMode = `myCaseStudy myCaseStudy-${myCaseStudyMode}`;

  const { myProjectPath } = useParams();
  const [displayProject, setProjectToDisplay] = useState(undefined)

  console.log("Mounting 'CaseStudy' component");
  console.log(myProjectPath);

  // Seeking the project with the ID built in the URI...
  const findProject = () => {
    const myProjectSearch = myProjectTab.find((myProject) => myProject.id === myProjectPath.split('-')[1]);
    setProjectToDisplay(myProjectSearch);
  }

  // ... each time the CaseStudy component is rendered / updated
  useEffect(findProject, [myProjectPath]);

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
