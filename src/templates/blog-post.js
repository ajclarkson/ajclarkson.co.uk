import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Post from '../components/Post/';


const Template = ({ data }) => {
  const { markdownRemark: post, site: { siteMetadata: metaData } } = data;
  const {
    title, date, excerpt, path,
  } = post.frontmatter;

  return (
    <div>
      <Helmet title={`${title} | ${metaData.title}`} />
      <Post data={{
 title, date, excerpt, path, html: post.html, siteUrl: metaData.siteUrl,
}}
      />
    </div>

  );
};

Template.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        siteUrl: PropTypes.string,
      }),
    }),
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        excerpt: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Template;
/* eslint-disable no-undef */
export const pageQuery = graphql` 
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        path
      }
    }
  }
`;
/* eslint-enable no-undef */
