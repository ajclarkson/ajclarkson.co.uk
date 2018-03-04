import styled from 'styled-components';

const Base = styled.div`
    font-family: ${props => props.theme.typography.fontStack.base};
    font-weight: ${props => props.theme.typography.fontWeight.base};
    margin:0;
    line-height: 1.75;
    font-size:1.5em;
    color: ${props => props.theme.colors.base}
`;

export default Base;
