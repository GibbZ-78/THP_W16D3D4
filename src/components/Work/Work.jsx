import React from 'react';
import { Routes, Route } from 'react-router-dom';
import myProjectTab from '../../assets/contents/Projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import CaseStudy from '../CaseStudy/CaseStudy';
import "./Work.css";

function Work() {

  console.log("Mounting 'Work' component");

  const myWorkMode = "light";  // To be modified using CONTEXT
  const myWorkClassMode = `myWork myWork-${myWorkMode}`;
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
        <Routes>
          <Route path='/:myProjectPath' element={<CaseStudy/>} />
        </Routes>
      </div>
    </section>
  );
}

export default Work;
