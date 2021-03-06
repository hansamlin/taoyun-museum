import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import Hamburger from "./Hamburger";
import styled from "styled-components";

const Toolbar = styled.div`
  position: fixed;
  display: unset;
  right: 0;
  z-index: 10;
  top: 2.59vh;
`;

export default () => {
  return (
    <Toolbar className="Toolbar">
      <Nav />
      <Search />
      <Hamburger />
    </Toolbar>
  );
};
