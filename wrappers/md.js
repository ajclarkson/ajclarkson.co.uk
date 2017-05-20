import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { config } from 'config'
import ReactDisqusThread from 'react-disqus-thread'
import '../styles/ajclarkson.scss'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
          meta={[
            {"property": "og:title", "content": post.title},
            {"property": "og:site_name", "content": config.blogTitle},
            {"property": "og:description", "content": post.excerpt},
            {"property": "og:url", "content": `${config.baseUrl}${route.page.path}`},
          ]}
        />
        <div className="masthead masthead--page">
          <div className="container">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-excerpt">{post.excerpt}</div>
          </div>
        </div>
        <div className="container">
          <div className="col-md-8 offset-md-2">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <ReadNext post={post} pages={route.pages} />

          <ReactDisqusThread
				    shortname="ajclarkson"
		        identifier={route.page.path}
            title={post.title}
            url={`${config.baseUrl}${route.page.path}`} />
          </div>
          </div>
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
