import styled from "styled-components"
import { GREEEN_HEX, smBreakingPoint, WHITE_HEX } from "../../config/constants";
import { mediaMaxWidth } from "../../config/helpers";

export const LangWrapper = styled.div`
  max-width: 200px;
  width: 80%;
  position: absolute;
  right: 25px;
  bottom: -75px;
  height: 50px;
  overflow: hidden;
  display: flex;
  ${props => mediaMaxWidth(smBreakingPoint, `
    display: ${props.isActive?'block':'none'};
    position: fixed;
    bottom: 12.5px;
    max-width: 64vw;
    right: 8vw;
    height: 12vw;
    `)}

`;

export const FlagList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  width: 64vw;
  max-width: 200px;
  height: 50px;
  opacity: ${props => props.isActive?1:0};
  transition: 0.2s linear all;
  ${mediaMaxWidth(smBreakingPoint,`
    max-width: 300px;
    height: 12vw;
  `)}
`;

export const Flag = styled.div`
  width: 50px;
  height: 37.5px;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid ${GREEEN_HEX};
  margin: 0 6.25px;
  cursor: pointer;
  &:first-child {
    margin-left: 12.5px;
  }
  &:last-child {
    margin-right: 75px;
  }
  ${
  mediaMaxWidth(smBreakingPoint, `
    width: 16vw;
    height: 12vw;
    margin: 0 2vw;
    &:first-child {
      margin-left: 24vw;
    }
    &:last-child {
      margin-right: 4vw;
    }
  `)
  }
`;

export const MainFlag = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12.5px;
  margin: auto ;
  width: 50px;
  height: 37.5px;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid ${props => props.isActive?GREEEN_HEX:WHITE_HEX};
  cursor: pointer;
  z-index: 1;
  ${mediaMaxWidth(smBreakingPoint, `
    width: 16vw;
    height: 12vw;
    left: 4vw;
  `)}
`;