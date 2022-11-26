import styled from 'styled-components';

export const FriendCont = styled.ul`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const Status = styled.span`
  margin-right: 24px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const FriendPhoto = styled.img`
  margin-right: 24px;
`;
export const FriendName = styled.p`
  color: #3a6356;
`;
