import PropTypes from 'prop-types';
import {
  FriendCont,
  FriendItem,
  FriendName,
  FriendPhoto,
  Status,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendCont>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id}>
          <Status isOnline={isOnline}></Status>
          <FriendPhoto src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendCont>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
