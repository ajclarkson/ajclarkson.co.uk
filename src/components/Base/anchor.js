import styled from 'styled-components';
import gatsbyLink from 'gatsby-link';

const linkStyles = `
    color: black;
    text-decoration:none;
    border-bottom: 2px solid #D4D7D9;
    
    &:hover {
        color: #FF9600;
        border-color: #FF9600;
        transition: color .2s, border .3s;
    }
`;

const Anchor = styled.a`
    ${linkStyles}
`;

const Link = styled(gatsbyLink)`
    ${linkStyles}
`;

module.exports = {
  linkStyles,
  Anchor,
  Link,
};
