import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-styled-flexboxgrid';
import Base from '../components/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';

require('../components/Typography/font-awesome-library');
// Load Prism styles (provided by Gatsby)
require('prismjs/themes/prism-tomorrow.css'); // eslint-disable-line import/no-extraneous-dependencies


const Template = (props) => {
  const { children, location } = props;
  const header = (
    <Header />
  );

  let footer;
  if (location.pathname !== '/') {
    footer = (<Footer />);
  }

  return (
    <Base>
      {header}
      <Grid>
        {children()}
      </Grid>
      {footer}
    </Base>
  );
};

Template.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.shape({
    action: PropTypes.string,
    pathname: PropTypes.string,
    key: PropTypes.string,
  }).isRequired,
};

export default Template;
