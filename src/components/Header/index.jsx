import React from "react";
import * as C from "./style";
import logo from "../../assets/logo-mottu.svg";

const Header = () => {
  return (
    <C.Header>
      <C.Container>
        <C.Logo>
          <img src={logo} alt="logo-mottu" />
        </C.Logo>
      </C.Container>
    </C.Header>
  );
};

export default Header;
