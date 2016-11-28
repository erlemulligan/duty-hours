import React, { PropTypes } from 'react';

const Layout = props => (
  <div className="row">
    <div className="columns">
      { props.children }
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.isRequired,
};

export default Layout;
