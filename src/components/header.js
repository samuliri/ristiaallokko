import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from 'react-helmet';

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      fontFamily: `Portland-Medium`,
      textTransform: `uppercase`,
      letterSpacing: `0.1em`,
      padding: `0 1rem`
    }}
  >
    <Helmet defer={false}>
      <script src="/vanta.waves.min.js"></script>
    </Helmet>
    <div
      style={{
        margin: `3rem auto 0`,
        maxWidth: 960,
        padding: `1rem 0`,
        borderTop: `3px rgb(70,156,121) solid`
      }}
    >
      <span style={{ marginRight: "3rem" }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`
          }}
        >
          Exhibition
        </Link>
      </span>
      <span>
        <Link
          to="/artists/"
          style={{
            textDecoration: `none`
          }}
        >
          Artists
        </Link>
      </span>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
