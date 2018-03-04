import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Masthead, QuickLinks } from '../components/Masthead';

const index = ({ data }) => {
  const { site: { siteMetadata: metaData } } = data;
  return (
    <Row>
      <Col xs={10} xsOffset={1} md={8}>
        <Helmet title={metaData.title} />
        <Masthead />
        <QuickLinks />
      </Col>
    </Row>
  );
};

index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default index;

/* eslint-disable */
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
/* eslint-enable */
