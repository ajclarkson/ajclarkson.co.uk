import styled from 'styled-components';
import gatsbyLink from 'gatsby-link';

const Anchor = styled.a`
    color: ${props => props.theme.colors.base};
    text-decoration:none;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    
    &:hover {
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        transition: color .2s, border .3s;
    }
`;

const Link = Anchor.withComponent(gatsbyLink);

module.exports = {
  Anchor,
  Link,
};
