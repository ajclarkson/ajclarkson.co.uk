import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Col, Grid, Row} from 'react-styled-flexboxgrid';
import {Anchor, Link} from '../Base/anchor';

const FooterWrapper = styled.footer`
    border-top: 1px solid ${props => props.theme.colors.secondary};
    padding: 1.5em 0;
    margin-top: 3em;
    font-size: 0.65em;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.tertiary};
`;

const Text = styled.div`
    
`;

const Links = styled.ul`
    text-align: right;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const LinkItem = styled.li`
    display: inline-block;
    margin-right: 1.5em;
    padding-right: 1.5em;
    border-right: 1px solid ${props => props.theme.colors.secondary};
    
    &:last-child {
        margin-right:0;
        border-right: 0;
    }
    
    a {
        border-bottom: none;
        color: ${props => props.theme.colors.tertiary};
        
        &:hover {
            transition: color .2s;
        }
    }
`;

const LinkItemIcon = styled(FontAwesomeIcon)`
    margin-left: 0.5em;
`;

const FooterAnchor = styled(Anchor)`
    border-bottom: none;
    color: ${props => props.theme.colors.tertiary};
    
    &:hover {
        transition: color .2s;
    }
`;

const Footer = () => (
  <Grid fluid>
    <FooterWrapper>
      <Row>
        <Col md={4}>
          <Text>

            <FooterAnchor href="https://gatsbyjs.org" title="GatsbyJs">Gatsby</FooterAnchor> + <FooterAnchor href="https://netlify.com" title="Netlify">Netlify</FooterAnchor> = <FontAwesomeIcon icon="thumbs-up" />
          </Text>
        </Col>
        <Col md={8}>
          <Links>
            <LinkItem>
              <Anchor href="https://twitter.com/ajclarkson">Follow Me On Twitter <LinkItemIcon icon={['fab', 'twitter']} /></Anchor>
            </LinkItem>
            <LinkItem>
              <Link to="/rss.xml">Feed <LinkItemIcon icon="rss" /></Link>
            </LinkItem>
          </Links>
        </Col>
      </Row>
    </FooterWrapper>
  </Grid>
);

export default Footer;
