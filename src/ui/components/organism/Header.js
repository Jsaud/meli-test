import React from "react";
//img
import logo from "../../assets/img/logo.png"

import Wrapper from "./StylesHeader";


const Header = () => {
  return (
    <>
      <Wrapper>
        <nav class="navbar head">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                src={logo}
                alt="compreLibre"
                width="40"
                height="44"
              />
              CompraLibre
            </a>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

export default Header;
