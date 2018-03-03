import React from 'react';
import styled from 'styled-components';
import {Link} from '../Base/anchor';


const SummaryWrapper = styled.div`
    border-bottom: 1px solid #D4D7D9;
    margin-bottom: 3em;
    padding-bottom: 1.5em;
    
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    
`;
const Date = styled.div`
    font-size:0.5em;
    margin-top: 1em;
    color: #FF9600;
    font-weight: 800;
    
`;

const PostTitle = styled.h3`
    font-size:1.5em;
`;


const Summary = ({data}) => {
    const { date, title, excerpt, path } = data;
    return (
    <SummaryWrapper>
        <PostTitle>
            <Link to={path}>{title}</Link>
            <Date>
                {date}
            </Date>
        </PostTitle>

        <p>{excerpt}</p>




        </SummaryWrapper>
    )
};

module.exports = Summary;