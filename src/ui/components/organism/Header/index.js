import React from "react";
//img
import logo from "../../../assets/img/logo.png"

import Wrapper from "./styles";


const Header = () => {
  return (
    <>
      <Wrapper>
        <nav className="navbar head">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
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
