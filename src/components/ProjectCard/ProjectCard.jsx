import "./ProjectCard.css";

function ProjectCard(props) {

  const myProjectCardMode = "light";  // To be modified using CONTEXT
  const myProjectCardClassMode = `myProjectCard myProjectCard-${myProjectCardMode}`;
  const myContraryMode = myProjectCardMode.mode === "light" ? "dark" : "light";

  if (props.project) {
    return (
      <div className={myProjectCardClassMode}>
        <h2>{props.project.name}</h2>
        <p>Project ID: {props.project.id}</p>
        <p>Client: {props.project.customer}</p>
      </div>
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