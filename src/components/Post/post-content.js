import styled from 'styled-components';

const PostContent = styled.div`   
    a {
        color: ${props => props.theme.colors.base};
        text-decoration:none;
        border-bottom: 2px solid ${props => props.theme.colors.secondary};
        
        &:hover {
            color: ${props => props.theme.colors.primary};
            border-color: ${props => props.theme.colors.primary};
            transition: color .2s, border .3s;
        }
    }
    
   h2 {
        font-size: 1.5em;
        margin-top: 1.5em;
        border-bottom: 1px solid ${props => props.theme.colors.secondary};
    }
    
    h3 {
        font-size: 1.125em;
        margin: 1.5em 0 0em;
        padding-left: 0.5em;
        border-left: 5px solid ${props => props.theme.colors.primary};
        
        
    }
    
    code {
        background: ${props => props.theme.colors.secondaryLighter};
        padding: 0.25em 0.5em;
        border-radius: 5px;
        font-family: ${props => props.theme.typography.fontStack.code};
        font-size:0.75em;
        
        a {
            border-bottom: none;
        }
        
    }
    
    pre {
        code {
            padding: 0;  
             background: none;
        }
        
        border-radius: 5px;
        
        a {
            color: ${props => props.theme.colors.secondaryLighter};
            text-decoration: none;
            border-bottom: none;
        }
        
    }
    
    img {
        display:block;
        width: 100%;
        margin: 1.5em 0;
    }
    
    .gatsby-resp-image-link {
        border-bottom: none;
    }
    
    .gatsby-resp-image-wrapper {
        margin: 3em 0;
    }
  
`;

module.exports = PostContent;
