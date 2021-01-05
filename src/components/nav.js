import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-style: italic;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
      color: var(--gray);
    }
    &[aria-current="page"] {
      color: var(--gray);
    }
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;
