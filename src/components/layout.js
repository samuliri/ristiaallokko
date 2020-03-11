/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Background from "./background";
import "./layout.css";
import PageTransition from 'gatsby-plugin-page-transitions';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <PageTransition>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `3rem`,
            textAlign: `center`,
            fontSize: `0.75rem`,
            visibility: `hidden`
          }}
        >
          © {new Date().getFullYear()}
        </footer>
      </div>
      <Background/>
    </PageTransition>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
