import React from 'react'
import { Link } from 'react-router'

import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import { Nav, NavItem, Tabs, Tab } from 'react-bootstrap'
import include from 'underscore.string/include'


class BlogIndex extends React.Component {
  render () {

    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Developer with Ocado Technology, coffee nerd, ocassional blogger and cyclist"},
            {"name": "keywords", "content": "technology, blog"},
          ]}
        />
            <div className="masthead masthead--home">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-1">
                      <p>I&#39;m Adam.</p>
                      <p>A developer with the fantastic people at <a href="http://ocadotechnology.com">Ocado Technology</a>, where I focus on making releases awesome.</p>
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <img src="./logo.png" alt="Adam James Clarkson" className="masthead__logo"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-7  home-content">

                  <p>As well as being a software developer I&#39;m a bit of a coffee nerd, and I like to design things in my spare time. This site is usually home to my latest code experiment and I spend more time hacking it around than actually writing blog posts. That's what all good developers do though, right?</p>

                </div>

                <div className="col-md-2 offset-md-2">
                  <div className="home-nav  home-content">
                    <ul className="home-nav__menu">
                    <li className="home-nav__item">
                      <Link to={prefixLink('/blog/')}> Blog</Link>
                    </li>
                    <li className="home-nav__item">
                      <Link to={prefixLink('/about/')}> About</Link>
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


        </div>


    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
