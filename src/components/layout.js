import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import GlobalStyles from "../pages/styles/GlobalStyles";
import Typography from "../pages/styles/Typography";
import Posts from "../pages/styles/Posts";
// import Nav from "./nav";

const SiteNavBorder = styled.div`
  .nav {
    display: block;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Posts />
      <Header siteTitle={data.site.siteMetadata.title || `Eastend Links`} />
      <SiteNavBorder>
        {/* <Nav className="nav" /> */}
        <main>{children}</main>
      </SiteNavBorder>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
