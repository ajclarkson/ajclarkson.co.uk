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
    let content
    if (location.pathname === prefixLink('/')) {
      content = (<div>{children}</div>)
    } else {
      content = (
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="menu">
              <h1 className="menu__title">
                <Link className="" to={prefixLink('/')} >
                  AJCLARKSON
                </Link>
                <ul className="sub-menu">
                  <li className="sub-menu__item">
                    <Link to={prefixLink('/blog/')}> Blog</Link>
                  </li>
                  <li className="sub-menu__item">
                    <Link to={prefixLink('/about/')}> About</Link>
                  </li>
                </ul>
              </h1>
              </div>
            </div>
            <div className="col-md-8">
              {children}
            </div>
          </div>
        </div>

      )
    }
    return (
      <div className="page-content">
        {content}
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
