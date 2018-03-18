import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-styled-flexboxgrid';
import {ThemeProvider} from 'styled-components';
import Base from '../components/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';

require('../components/Typography/font-awesome-library');

const theme = {
  colors: {
    primary: '#FF9600',
    secondary: '#D4D7D9',
    secondaryLighter: '#EFEFEF',
    tertiary: '#BBBBBB',
    base: '#222',
  },
  typography: {
    fontStack: {
      base: 'acumin-pro-semi-condensed,sans-serif',
      code: 'source-code-pro, monospaced',
    },
    fontWeight: {
      base: '200',
      bold: '800',
    },
  },
};

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
    <ThemeProvider theme={theme}>
      <Base>
        {header}
        <Grid>
          {children()}
        </Grid>
        {footer}
      </Base>
    </ThemeProvider>
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
