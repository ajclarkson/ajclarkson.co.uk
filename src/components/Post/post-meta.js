import React from 'react';
import styled from 'styled-components';

const PostDate = styled.div`
    font-weight:700;
`;

const MetaSeparator = styled.div`
    width: 100px;
    height: 0px;
    border-top: 5px solid #FF9600;
    margin: 1.5em 0;
`;

const MetaWrapper = styled.div`
    border-top: 1px solid #D4D7D9;
    margin-top: 3em;
    font-size: 0.75em;
`;

const TagList = styled.ul`
    list-style-type: none;
    margin:0;
    padding: 0;
    
`;

const Tag = styled.li`
    display:inline-block;
    margin-right: 0.25em;
    
    &:last-child {
        margin-right: 0; 
        &:after {
            content: '';
        }
    }
    
    &:after {
        content:', ';
    }
`;

const TagListTitle = styled.p`
    display: inline-block;
    margin-right: 0.25em;
`;

const MetaLinks = styled.ul`
    list-style-type:none;
    margin:1em 0 0 0;
    padding:0;
`;

const MetaLinksItem = styled.li`
    
`;

const PostMeta = () => {
    return (
        <MetaWrapper>
            <h3>Comments</h3>
        </MetaWrapper>
    )
}

module.exports = {
    PostDate,
    MetaSeparator,
    PostMeta
};