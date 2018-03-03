import React from 'react';
import Helmet from 'react-helmet';
import {Col, Row} from 'react-styled-flexboxgrid';
import PostSummary from '../../components/Post/summary';
import {H2} from '../../components/Typography';

const blogIndex = ({data}) => {
    const { allMarkdownRemark: { edges: posts }, site: { siteMetadata: metaData} } = data;
    return (
        <Row>
            <Helmet title={metaData.title} />
            <Col md={8} mdOffset={2}>
            <H2>Archive</H2>
            {posts.map(post => {
                if (post.node.path !== '/404/') {
                    return (
                            <PostSummary data={post.node.frontmatter} key={post.node.frontmatter.path}/>
                    )
                }
            })}
            </Col>
        </Row>
    )
};

blogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default blogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "DD MMM YYYY")
            excerpt

          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
