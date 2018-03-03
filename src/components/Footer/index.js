import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Col, Grid, Row} from 'react-styled-flexboxgrid';

const FooterWrapper = styled.footer`
    border-top: 1px solid #D4D7D9;
    padding: 1.5em 0;
    margin-top: 3em;
    font-size: 0.75em;
    font-weight: 800;
    color: #BBB;
`;

const Text = styled.div`
    
`;

const Links = styled.div`
    text-align: right;
`



const Footer = () => {
    return (
        <Grid fluid>
            <FooterWrapper>
                <Row>
                    <Col md={4}>
                        <Text>

                            <FontAwesomeIcon icon={['fab', 'react']}/> + <FontAwesomeIcon icon={['fab', 'gitlab']}/>
                        </Text>
                    </Col>
                    <Col md={8}>
                        <Links>
                            Feed <FontAwesomeIcon icon='rss'/>
                        </Links>
                    </Col>
                </Row>
            </FooterWrapper>
        </Grid>
    )
};

module.exports = Footer;