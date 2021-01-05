import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Nav from "./nav";

const HeaderStyles = styled.header`
  h1 {
    margin: 50px;
    text-align: center;
  }

  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 400px) {
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
