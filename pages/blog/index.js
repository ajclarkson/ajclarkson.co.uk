import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import { prefixLink } from 'gatsby-helpers'
import include from 'underscore.string/include'
import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Helmet from "react-helmet"
import { config } from 'config'


class BlogArchive extends React.Component {
  render () {

    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date').reverse();
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const oldPosts = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))

    return (
      <div>
      <Helmet
        title={"Archive | " + config.blogTitle}
        meta={[
          {"name": "description", "content": "Developer with Ocado Technology, coffee nerd, ocassional blogger and cyclist"},
          {"name": "keywords", "content": "technology, blog"}
        ]}
      />
      <h2 className="page-title"><i className="fa fa-arrow-right "></i> Blog Archive</h2>
      <ul className="post-archive">
        {oldPosts.map((page) => (
            <li key={page.path} className="post-archive__item">
              <h3 className="post-archive__post-date">{moment(get(page, 'data.date', page.path)).format('DD MMM YY')}/&nbsp;
              <Link to={prefixLink(page.path)}>
                  {get(page, 'data.title', page.path)}
              </Link></h3>
              <div>{get (page, 'data.excerpt', page.path)}</div>
            </li>
        ))}
      </ul>
      </div>
    )
  }
}

export default BlogArchive

exports.data = {
  title: "Blog Archive",
}
