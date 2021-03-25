import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({backgroundColor}) => backgroundColor}
`

export const InnerCont = styled.div`
    width: 100%;
    margin-bottom: 16px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainText = styled.div`
    font-size: 80px;
    line-height: 1.2;
    font-family: sans-serif;
    font-weight: bold;
    z-index:2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto ;
    padding: 0 2rem;
    background-color: ${({backgroundColor}) => backgroundColor } ;
    color: ${({color}) => color};
`;

export const Devider = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    height: 0.5rem;
    background-color: ${({backgroundColor}) => backgroundColor};
    width: 100%;
    margin: auto;
`;

export const SecondaryText = styled.div`
    font-size: 28.2px;
    line-height: 1.2;
    font-weight: bold;
    color: ${({color}) => color};
    font-family: 'SegoeUIBold';
`;