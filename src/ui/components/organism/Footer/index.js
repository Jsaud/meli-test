import React from "react";

import Wrapper from "./styles";

const Footer = () => {
  return (
    <>
      <Wrapper>
      <footer>
      <div className="containerFooter">
        <div className="containerContact">
          <a
            href="mailto:jinettsaud@gmail.com"
            className="linkContact"
            title="Enviar E-mail"
          >
            jinettsaud@gmail.com
          </a>
          <a
            href="tel:+56964325081"
            className="linkContact"
            title="Llamar"
          >
            +56 9 64325081
          </a>
        </div>
        <small className="copyRight">
          &copy; Todos los derechos reservados
        </small>
      </div>
    </footer>
      </Wrapper>
    </>
  );
};

export default Footer;
