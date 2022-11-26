import styled from 'styled-components';
import { getRandomHexColor } from 'utils/randomHexColor';

export const StatCont = styled.div`
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
  padding-top: 24px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Title = styled.h2`
  margin-bottom: 24px;
  color: #3a6356;
  font-size: 18px;
`;
export const Box = styled.ul`
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-basis: calc(100% / 4);
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${getRandomHexColor};
`;
export const StatLabel = styled.span`
  margin-bottom: 16px;
  color: #fff;
`;
export const Percentage = styled.span`
  color: #fff;
  font-weight: 700;
`;
