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
                      <p className="quick-links"><Link to="/about/">About</Link> | <Link to="/blog/">Blog</Link></p>
                  </div>
                  <div className="col-md-4 offset-md-1">
                    <img src="./logo.png" alt="Adam James Clarkson" className="masthead__logo"/>
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
