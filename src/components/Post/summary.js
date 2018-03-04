import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from '../Base/anchor';


const SummaryWrapper = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
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
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    
`;

const PostTitle = styled.h3`
    font-size:1.5em;
`;


const Summary = ({ data }) => {
  const {
    date, title, excerpt, path,
  } = data;
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
  );
};

Summary.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    path: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
};

module.exports = Summary;
