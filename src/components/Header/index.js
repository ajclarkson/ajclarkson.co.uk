import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import {Col, Grid, Row} from 'react-styled-flexboxgrid';
import logo from './logo.png';

const HeaderContainer = styled.header`
    margin-bottom:1.5em;
    padding: 1em;
    
`;

const Navigation = styled.nav`
    margin:0;
    text-align:right;
    
    
`;

const NavigationLink = styled(Link)`
    display:inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: #BBB;
    padding-bottom: 0.5em;
    margin-left: 3em;
    font-size: 0.75em;
    font-weight: 800;
    
    
    &:hover {
        border-bottom: 2px solid #FF9600;
        color: #FF9600;
        transition: color .2s;
    }
`;

const Logo = styled.img`
    display: inline-block;
`

const Header = () => {
    return(
        <Grid fluid>
        <HeaderContainer>

            <Row>
                <Col xs={1}>
                    <Link to="/"><Logo src={logo} /></Link>
                </Col>
                <Col xs={11}>
                    <Navigation>
                    <NavigationLink to="/blog">Blog</NavigationLink>

                    <NavigationLink to="/about">About</NavigationLink>
                    </Navigation>
                </Col>
            </Row>

        </HeaderContainer>
        </Grid>
    )
};

export default Header;