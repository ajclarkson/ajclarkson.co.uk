import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Col, Row } from 'react-styled-flexboxgrid';
import PostSummary from '../../components/Post/summary';
import { H2 } from '../../components/Typography';

const blogIndex = ({ data }) => {
  const { allMarkdownRemark: { edges: posts }, site: { siteMetadata: metaData } } = data;
  return (
    <Row>
      <Helmet title={metaData.title} />
      <Col xs={10} xsOffset={1} md={8} mdOffset={2}>
        <H2>Archive</H2>
        {posts.map((post) => {
                if (post.node.path !== '/404/') {
                    return (
                      <PostSummary data={post.node.frontmatter} key={post.node.frontmatter.path} />
                    );
                }
                return ('No posts');
            })}
      </Col>
    </Row>
  );
};

blogIndex.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          excerpt: PropTypes.string,
          frontmatter: PropTypes.shape({
            path: PropTypes.string,
            date: PropTypes.string,
            title: PropTypes.string,
          }),
        }),
      })),
    }),
  }).isRequired,
};

export default blogIndex;

/* eslint-disable */
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
            title
          }
        }
      }
    }
  }
`;
/* eslint-enable */
