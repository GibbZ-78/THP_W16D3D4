import React from 'react';
import myProjectTab from '../../assets/contents/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import StudyCase from '../StudyCase/StudyCase';
import "./Work.css";

function Work() {

  const myWorkMode = "light";  // To be modified using CONTEXT
  const myWorkClassMode = `myWork myWork-${myWorkMode}`;
  const myContraryMode = myWorkMode === "light" ? "dark" : "light";
  const myProjectCardContainerMode = "light";  // To be modified using CONTEXT
  const myProjectCardContainerClassMode = `myProjectCardContainer myProjectCardContainer-${myProjectCardContainerMode}`;
  const myProjectContainerMode = "light";  // To be modified using CONTEXT
  const myProjectContainerClassMode = `myProjectContainer myProjectContainer-${myProjectContainerMode}`;

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
        <Route path='/:myProjectPath' element={<StudyCase/>} />
      </div>
    </section>
  );
}

export default Work;
