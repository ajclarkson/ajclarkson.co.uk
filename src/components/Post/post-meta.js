import React from 'react';
import styled from 'styled-components';

const PostDate = styled.div`
    font-weight:700;
`;

const MetaSeparator = styled.div`
    width: 100px;
    height: 0px;
    border-top: 5px solid #FF9600;
    margin: 1.5em 0;
`;

const MetaWrapper = styled.div`
    border-top: 1px solid #D4D7D9;
    margin-top: 3em;
    font-size: 0.75em;
`;

const PostMeta = () => (
  <MetaWrapper>
    <h3>Comments</h3>
  </MetaWrapper>
);

module.exports = {
  PostDate,
  MetaSeparator,
  PostMeta,
};
