import React from 'react'
import { Link } from 'react-router'
import Typekit from 'react-typekit'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Footer from '../components/Footer';
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
          <div className="page-content">
            <div className="main-nav">
              <img src="/logo.png" className="nav-icon" />
              <ul className="main-nav__menu">
              <li className="main-nav__item main-nav__item--home">
                <Link to={prefixLink('/')}> Home</Link>
              </li>
                <li className="main-nav__item">
                  <Link to={prefixLink('/blog/')}> Blog</Link>
                </li>
                <li className="main-nav__item">
                  <Link to={prefixLink('/about/')}> About</Link>
                </li>
              </ul>
            </div>
              {children}
          </div>


      )
    }
    return (
      <div>
      <div>
        {content}
      </div>
      <Footer />
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
