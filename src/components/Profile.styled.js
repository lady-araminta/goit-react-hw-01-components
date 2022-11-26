import styled from 'styled-components';

export const ProfileCont = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  margin-bottom: 48px;
  padding-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserPhoto = styled.img`
  margin-bottom: 24px;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1px solid #3a6356;
`;

export const UserName = styled.p`
  margin-bottom: 8px;
  color: #3a6356;
  font-size: 18;
  font-weight: 700;
`;
export const UserTag = styled.p`
  margin-bottom: 8px;
  color: #3a6356;
`;
export const UserLocation = styled.p`
  margin-bottom: 36px;
  color: #3a6356;
`;

export const UserStat = styled.ul`
  display: flex;
`;

export const UserStatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #e4f5ef;
`;

export const Label = styled.span`
  color: #3a6356;
`;
export const LabelValue = styled.span`
  color: #3a6356;
  font-weight: 700;
`;
