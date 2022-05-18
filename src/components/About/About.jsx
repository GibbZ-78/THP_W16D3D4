import "./About.css";

function About() {

  const myAboutMode = "light";  // To be modified using CONTEXT
  const myAboutClassMode = `myAbout myAbout-${myAboutMode}`;
  const myContraryMode = myAboutMode.mode === "light" ? "dark" : "light";

  return (
    <section className={myAboutClassMode}>
      <h2>
        React Estate est une agence de communication digitale orléanaise dédiée au secteur de l'immobilier ayant pour mission de vous accompagner sur vos projets digitaux.
      </h2>
      <p>
        De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs. 
        Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "Solane" ou encore "Sedal" vers les sommets de la réussite.
      </p>
    </section>
  );
}

export default About;