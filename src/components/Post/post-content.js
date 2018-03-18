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
            text-decoration: none;
            border-bottom: none;
        }
    }
    
    pre {
        code {
            padding: 0;  
            background: none;
             
            a {
                color: ${props => props.theme.colors.secondaryLighter};
                text-decoration: none;
                border-bottom: none;
            }
        }
        
        border-radius: 5px;
       
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
    
    /**
     * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
     * Based on https://github.com/chriskempson/tomorrow-theme
     * @author Rose Pritchard
     */
    
    code[class*="language-"],
    pre[class*="language-"] {
        color: #ccc;
        background: none;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
    
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
    
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    
    }
    
    /* Code blocks */
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
    }
    
    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #2d2d2d;
    }
    
    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
    }
    
    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #999;
    }
    
    .token.punctuation {
        color: #ccc;
    }
    
    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
        color: #e2777a;
    }
    
    .token.function-name {
        color: #6196cc;
    }
    
    .token.boolean,
    .token.number,
    .token.function {
        color: #f08d49;
    }
    
    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
        color: #f8c555;
    }
    
    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
        color: #cc99cd;
    }
    
    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
        color: #7ec699;
    }
    
    .token.operator,
    .token.entity,
    .token.url {
        color: #67cdcc;
    }
    
    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }
    
    .token.entity {
        cursor: help;
    }
    
    .token.inserted {
        color: green;
}
  
`;

module.exports = PostContent;
