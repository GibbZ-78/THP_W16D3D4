import "./Work.css";

function Work() {

  const myWorkMode = "light";  // To be modified using CONTEXT
  const myWorkClassMode = `myWork myWork-${myWorkMode}`;
  const myContraryMode = myWorkMode.mode === "light" ? "dark" : "light";

  return (
    <section className={myWorkClassMode}>
      <h2>
        Au fil des années, nous avons pu accompagner les meilleurs.
      </h2>
      <p>
        Découvrez pas à pas comment nous avons été présents et avons procédé pour lancer vos marques préférées.
        Pour ce faire, parcourez donc les exemples de projets ci-après !
      </p>
    </section>
  );
}

export default Work;
