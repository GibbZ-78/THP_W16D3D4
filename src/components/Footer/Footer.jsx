import "./Footer.css";

function Footer() {

  const myFooterMode = "light";  // To be modified using CONTEXT
  const myFooterClassMode = `myFooter myFooter-${myFooterMode}`;
  const myContraryMode = myFooterMode.mode === "light" ? "dark" : "light";

  return (
    <footer className={myFooterClassMode}>
      <p>
        Page footer
      </p>
    </footer>
  );
}

export default Footer;