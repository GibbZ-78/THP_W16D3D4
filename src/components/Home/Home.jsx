import "./Home.css";

function Home() {

  const myHomeMode = "light";  // To be modified using CONTEXT
  const myHomeClassMode = `myHome myHome-${myHomeMode}`;

  return (
    <section className={myHomeClassMode}>
      <h2>
        Confiez vos rêves à des experts du Web !
      </h2>
      <p>
        Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de sites et applications web : étude, UX, conception, design, développement, SEO.  
        Notre agence web est capable de répondre à tous vos besoins afin d'élaborer, de A à Z, une véritable stratégie digitale, impactante, cohérente et évolutive.
      </p>
    </section>
  );
}

export default Home;
