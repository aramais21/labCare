import styled from 'styled-components';

export const LayoutDiv = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow-x:hidden;
    ${props => {
        if(props?.background === 'green') {
            return 'background-color: #1aa55d;';
        }
        else if (props.background === 'orange') {
            return 'background-color: #e57424';
        }
        return '';
    }}
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;