import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Masthead } from '../../components/Masthead';
import { Anchor } from '../../components/Base/anchor';


const List = styled.ul`
   list-style-type: none;
   margin: 0 0 0 -1em;
   padding: 0;
`;

const ListItem = styled.li`
    display:inline-block;
    text-align: center;
    font-size: 1.25em;
    padding: 1.5em 0;
    width: 24.75%;
`;

const IconAnchor = styled.a`
    color: #FF9600;
    
    &:hover {
        color: black;
        transition: color .2s;
    }
`;

const Text = styled.p``;

const About = () => (
  <Row>
    <Col md={8} mdOffset={2}>
      <Masthead />
      {/* eslint-disable max-len */}
      <Text>
          I spend my days working in the e-commerce department on the new Ocado Smart Platform. My focus is on developer experience, and looking after the build and release process for our suite of 40+ web services and applications. I&apos;m a big <Anchor href="https://gitlab.com/ci" target="_blank">GitlabCI</Anchor> fan, and alongside that I have written and maintain a suite of custom tooling to support performing deployments to AWS. I get to work with modern stacks for both Java and Node applications, and write integrations for other tools such as Slack.
      </Text>
      <Text>
          In 2015 I submitted my Ph.D Thesis in Computer Science, on the topic of delivering content into Augmented Reality environments (if you&apos;re really keen, you can <Anchor href="http://etheses.dur.ac.uk/11332/">read it here</Anchor>). That gave me a great opportunity to work with some really exciting technology and spend a lot of time wearing head mounted displays (like a terminator).
      </Text>

      <Text>When I&apos;m not working I try to find time to follow my interest in design, and find excuses to make things that look nice. I&apos;m also pretty nerdy about coffee and have more methods of making it in the kitchen than space will reasonably allow.
      </Text>
      {/* eslint-enable max-len */}

    </Col>
    <Col md={8} mdOffset={2}>

      <List>
        <ListItem><IconAnchor href="https://twitter.com/ajclarkson" title="@ajclarkson on twitter"><FontAwesomeIcon icon={['fab', 'twitter']} /> </IconAnchor></ListItem>
        <ListItem><IconAnchor href="https://instagram.com/ajclarkson" title="ajclarkson on instagram"><FontAwesomeIcon icon={['fab', 'instagram']} /></IconAnchor></ListItem>
        <ListItem><IconAnchor href="https://uk.linkedin.com/ajclarkson" title="Adam Clarkson on LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin']} /></IconAnchor></ListItem>
        <ListItem><IconAnchor title="ajclarkson on untappd"><FontAwesomeIcon icon={['fab', 'untappd']} /></IconAnchor></ListItem>
      </List>
    </Col>
  </Row>
);

export default About;
