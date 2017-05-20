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
        <div className="slide-wrapper">
          <div className="slide">
          <div className="container">
            <div className="masthead">

            <div className="masthead__introduction">
              I&#39;m Adam, a developer with the amazing people at <a href="http://ocadotechnology.com">Ocado Technology</a>, focusing on devops and making releases awesome.
            </div>
            <div className="masthead__blurb">
              <p>I&#39;m a bit of a coffee nerd, and I spend more time hacking this site around than actually <Link to={prefixLink('/blog/')}>writing blog posts</Link>. Want to <Link to={prefixLink('/about/')}>read more</Link>?</p>
            </div>
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
