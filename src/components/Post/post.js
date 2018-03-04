import styled from 'styled-components';
import { linkStyles } from '../Base/anchor';

const Post = styled.div`
 
    margin-top: 6em;
    a {
        ${linkStyles}
    }
    
   h2 {
        font-size: 1.5em;
        margin-bottom: 1.5em;
        border-bottom: 1px solid #D4D7D9;
        
        span {
            font-weight: 800;
        }
    }
    
    h3 {
        font-size: 1.25em;
        margin: 1.5em 0 0em;
        padding-left: 0.5em;
        border-left: 5px solid #FF9600;
        
        
    }
    
    code {
        background: #efefef;
        padding: 0.25em 0.5em;
        border-radius: 5px;
        font-family: source-code-pro, monospaced;
        font-size:0.75em;
       
    }
    
    pre {
        code {
            padding: 0;  
             background: none;
        }
        
        border-radius: 5px;
    }
  
`;

module.exports = Post;
