import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import ReactDisqusThread from 'react-disqus-comments';
import { Col, Row } from 'react-styled-flexboxgrid';
import { H1 } from '../components/Typography';
import { MetaSeparator, PostDate } from '../components/Post/post-meta';
import Excerpt from '../components/Post/excerpt';
import Post from '../components/Post/post';


const ReactDisqus = styled(ReactDisqusThread)`
    margin-top: 3em;

    a {
        color: #FF9600;
    }
`;
const Template = ({ data }) => {
  const { markdownRemark: post, site: { siteMetadata: metaData } } = data;
  const {
    title, date, excerpt, path,
  } = post.frontmatter;
  return (
    <div>
      <Helmet title={`${title} | ${metaData.title}`} />
      <Post>
        <Row>
          <Col md={8} mdOffset={2}>

            <H1>{title}</H1>
            <PostDate>
              {date}
            </PostDate>
            <MetaSeparator />
            <Excerpt>
              {excerpt}
            </Excerpt>

          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            {/* eslint-disable react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {/* eslint-enable react/no-danger */}
          </Col>
        </Row>

        <Row>
          <Col md={10} mdOffset={1}>
            <ReactDisqus
              shortname="ajclarkson"
              title={title}
              identifier={path}
              url={metaData.siteUrl}
            />
          </Col>
        </Row>
      </Post>
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
