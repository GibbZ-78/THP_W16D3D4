import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import myProjectTab from '../../assets/contents/Projects';
import './StudyCase.css';

function StudyCase() {

  const myStudyCaseMode = "light";  // To be modified using CONTEXT
  const myStudyCaseClassMode = `myStudyCase myStudyCase-${myProjectCardMode}`;
  const myContraryMode = myStudyCaseMode === "light" ? "dark" : "light";

  const { myProjectPath } = useParams();
  const [displayProject, setProjectToDisplay] = useState("")

  const findProject = () => {
    const myProjectSearch = myProjectTab.find((myProject) => myProject.id === myProjectPath.split('-')[1].parseInt());
    setProjectToDisplay(myProjectSearch);
  }

  useEffect(findProject , [myProjectPath]);

  if (displayProject !== "") {
    return(
      <div className={myStudyCaseClassMode}>
        <h2>{displayProject.name} (ID: {displayProject.id.toString()})</h2>
        <p>{displayProject.customer}</p>
        <p>{displayProject.short_descr}</p>
        <p>{displayProject.long_descr}</p>
      </div>
    )
  } else {
    return(
      <div className={myStudyCaseClassMode}>
        <p>
          No project selected (yet ?)
        </p>
      </div>
    )
  }
};

export default StudyCase;
