import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {Col, Row} from 'react-styled-flexboxgrid';
import {H1} from '../components/Typography';
import {MetaSeparator, PostDate} from '../components/Post/post-meta';
import Excerpt from '../components/Post/excerpt';
import Post from '../components/Post/post.js';
import ReactDisqusThread from 'react-disqus-thread';


const ReactDisqus = styled(ReactDisqusThread)`
    margin-top: 3em;
    
    a {
        color: #FF9600;
    }
`;
const Template = ({data}) => {
    const { markdownRemark: post, site: { siteMetadata: metaData} } = data;
    return (
        <div>
            <Helmet title={`${post.frontmatter.title} | ${metaData.title}`} />
            <Post>
            <Row>
                <Col md={8} mdOffset={2}>

                    <H1>{post.frontmatter.title}</H1>
                    <PostDate>
                    {post.frontmatter.date}
                    </PostDate>
                    <MetaSeparator/>
                    <Excerpt>
                        {post.frontmatter.excerpt}
                    </Excerpt>

                </Col>
            </Row>
            <Row>
                <Col md={10} mdOffset={1}>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Col>
            </Row>

            <Row>
                <Col md={10} mdOffset={1}>
                    <ReactDisqus
                        shortname='ajclarkson'
                        title={post.frontmatter.title}
                        identifier={post.frontmatter.path}
                        url={metaData.siteUrl}
                    />
                </Col>
            </Row>
        </Post>
        </div>

    )
};

export default Template

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
