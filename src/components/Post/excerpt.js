import styled from 'styled-components';

const Excerpt = styled.div`
    margin-bottom: 3em;
    padding-bottom: 3em;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

module.exports = Excerpt;
