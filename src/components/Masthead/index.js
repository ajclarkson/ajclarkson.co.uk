import React from 'react';
import styled from 'styled-components';
import { Anchor, Link } from '../Base/anchor';


const Text = styled.div`
    font-size: 2em;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    line-height: 1.5em;
`;

const QuickLinksWrapper = styled.div`
    margin-top:1.5em;
    padding-top: 1.5em;
    border-top: 1px solid ${props => props.theme.colors.secondary};
`;

const MastheadWrapper = styled.div`
    margin-top: 6em;
`;

const Masthead = () => (

  <MastheadWrapper>
    <Text>
      <p>I&apos;m a developer with the fantastic people at <Anchor href="https://ocadotechnology.com" target="_blank">Ocado Technology</Anchor>, where I focus on making releases awesome. </p>
    </Text>
  </MastheadWrapper>
);

const QuickLinks = () => (
  <QuickLinksWrapper>
    <Link to="/blog">Blog</Link> / <Link to="/about">About</Link> / <Anchor href="https://twitter.com/ajclarkson" target="_blank">Twitter</Anchor> / <Anchor href="https://uk.linkedin.com/in/ajclarkson" target="_blank">LinkedIn</Anchor>
  </QuickLinksWrapper>
);

module.exports = {
  Masthead,
  QuickLinks,
};
