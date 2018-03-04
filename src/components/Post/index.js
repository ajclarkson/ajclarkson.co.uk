import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactDisqusThread from 'react-disqus-comments';
import { MetaSeparator, PostDate } from './post-meta';
import { H1 } from '../Typography';
import PostContent from './post-content';
import Excerpt from './excerpt';

const ReactDisqus = styled(ReactDisqusThread)`
    margin-top: 3em;

    a {
        color: #FF9600;
    }
`;

const PostWrapper = styled.div`
    margin-top: 6em;
`;

const Post = ({ data }) => {
  const {
    title, date, excerpt, html, path, siteUrl,
  } = data;
  return (
    <PostWrapper>
      <H1>{title}</H1>
      <PostDate>
        {date}
      </PostDate>
      <MetaSeparator />
      <Excerpt>
        {excerpt}
      </Excerpt>

      {/* eslint-disable react/no-danger */}
      <PostContent dangerouslySetInnerHTML={{ __html: html }} />
      {/* eslint-enable react/no-danger */}

      <ReactDisqus
        shortname="ajclarkson"
        title={title}
        identifier={path}
        url={siteUrl}
      />

    </PostWrapper>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    siteUrl: PropTypes.string,
    html: PropTypes.string,
  }).isRequired,
};

export default Post;
