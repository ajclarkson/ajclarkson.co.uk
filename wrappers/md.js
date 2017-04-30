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
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <ReadNext post={post} pages={route.pages} />

        <ReactDisqusThread
				    shortname="ajclarkson"
		        identifier={route.page.path}
            title={post.title}
            url={`http://ajclarkson.co.uk/${route.page.path}`} />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
