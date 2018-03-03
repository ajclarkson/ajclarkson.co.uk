import React from 'react';
import Base from '../components/Base';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Grid} from 'react-styled-flexboxgrid';

require("prismjs/themes/prism-tomorrow.css");
require('../components/Typography/font-awesome-library');

class Template extends React.Component {
  render() {
    const { children, location } = this.props;

    const header = (
          <Header />
    );

    let footer;
    if ( location.pathname !== '/') {
      footer = (<Footer />)
    }

    return (
      <Base>
        {header}
          <Grid>
          {children()}
          </Grid>
          {footer}
      </Base>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
