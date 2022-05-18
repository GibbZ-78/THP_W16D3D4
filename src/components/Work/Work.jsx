import React from 'react';
import myProjectTab from '../../assets/contents/Projects'
import ProjectCard from '../ProjectCard/ProjectCard';
import "./Work.css";

function Work() {

  const myWorkMode = "light";  // To be modified using CONTEXT
  const myWorkClassMode = `myWork myWork-${myWorkMode}`;
  const myContraryMode = myWorkMode.mode === "light" ? "dark" : "light";
  const myProjectCardContainerMode = "light";  // To be modified using CONTEXT
  const myProjectCardContainerClassMode = `myProjectCardContainer myProjectCardContainer-${myProjectCardContainerMode}`;
  const myProjectContainerMode = "light";  // To be modified using CONTEXT
  const myProjectContainerClassMode = `myProjectContainer myProjectContainer-${myProjectContainerMode}`;

  return (
    <React.Fragment>
    <section className={myWorkClassMode}>
      <h2>
        Au fil des années, nous avons pu accompagner les meilleurs.
      </h2>
      <p>
        Découvrez pas à pas comment nous avons été présents et avons procédé pour lancer vos marques préférées.
        Pour ce faire, parcourez donc les exemples de projets ci-après !
      </p>
    </section>
    <section className={myProjectCardContainerClassMode}>
      {myProjectTab.map(myProject => (
        <ProjectCard key={myProject.id} project={myProject} />
      ))}
    </section>
    <section className={myProjectContainerClassMode}>
      Insérer ici du vide ou le détail de l'un des projets sélectionnés, le cas échéant (i.e. composant "StudyCase")
    </section>
    </React.Fragment>
  );
}

export default Work;
