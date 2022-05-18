import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import myProjectTab from '../../assets/contents/Projects';
import './CaseStudy.css';

function CaseStudy() {

  const myCaseStudyMode = "light";  // To be modified using CONTEXT
  const myCaseStudyClassMode = `myCaseStudy myCaseStudy-${myCaseStudyMode}`;
  const myContraryMode = myCaseStudyMode === "light" ? "dark" : "light";

  const { myProjectPath } = useParams();
  const [displayProject, setProjectToDisplay] = useState("")

  const findProject = () => {
    const myProjectSearch = myProjectTab.find((myProject) => myProject.id === myProjectPath.split('-')[1]);
    setProjectToDisplay(myProjectSearch);
  }

  useEffect(findProject , [myProjectPath]);

  if (displayProject !== "") {
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
