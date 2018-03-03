import React from 'react';
import Helmet from 'react-helmet';
import {Col, Row} from 'react-styled-flexboxgrid';
import {Masthead, QuickLinks} from '../components/Masthead';

const index = ({data}) => {
    const { allMarkdownRemark: { edges: posts }, site: { siteMetadata: metaData} } = data;
    return (
        <Row>
            <Col md={8}>
            <Helmet title={metaData.title} />
            <Masthead/>
            <QuickLinks />
            </Col>
        </Row>
    )
};

index.propTypes = {
  route: React.PropTypes.object,
}

export default index

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
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
