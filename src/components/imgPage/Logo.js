import React from "react";
import LogoBlack from "../logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  position: fixed;
  top: 2.2vh;
  left: 5vw;
  z-index: 20;
  opacity: ${props => props.theme.close.opacity};
  transition: ${props =>
    props.theme.close.opacity && "opacity 0.5s ease-out 0.3s"};
`;

export default ({ show }) => {
  return (
    <Logo theme={show}>
      <Link to="/">
        <img style={{ display: "block" }} src={LogoBlack} alt="Logo" />
      </Link>
    </Logo>
  );
};
