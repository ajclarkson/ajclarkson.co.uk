import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import { Nav, NavItem, Tabs, Tab } from 'react-bootstrap'
import include from 'underscore.string/include'


class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
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
              <p>I&#39;m a bit of a coffee nerd, and I spend more time hacking this site around than actually <a>writing blog posts</a>. Want to <a>read more</a>?</p>
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
