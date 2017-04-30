import React from 'react'
import { Link } from 'react-router'
import Typekit from 'react-typekit'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

require('bootstrap/dist/css/bootstrap-grid.min.css');
require('font-awesome/css/font-awesome.min.css');

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    if (location.pathname === prefixLink('/')) {
      header = (<div></div>)
    } else {
      header = (
        <header className="container">
        <div className="name-tag">
          <h1 className="name-tag__title">
            <Link className="name-tag__link" to={prefixLink('/')} >
              A
            </Link>
          </h1>
        </div>
        </header>
      )
    }
    return (
      <div>
        {header}
        {children}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
