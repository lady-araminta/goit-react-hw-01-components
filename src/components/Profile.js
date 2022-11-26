import PropTypes from 'prop-types';
import {
  ProfileCont,
  UserDescription,
  UserPhoto,
  UserName,
  UserTag,
  UserLocation,
  UserStat,
  UserStatItem,
  Label,
  LabelValue,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
    <ProfileCont>
      <UserDescription>
        <UserPhoto src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>
      <UserStat>
        <UserStatItem>
          <Label>Followers</Label>
          <LabelValue>{statsFollowers}</LabelValue>
        </UserStatItem>
        <UserStatItem>
          <Label>Views</Label>
          <LabelValue>{statsViews}</LabelValue>
        </UserStatItem>
        <UserStatItem>
          <Label>Likes</Label>
          <LabelValue>{statsLikes}</LabelValue>
        </UserStatItem>
      </UserStat>
    </ProfileCont>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
};
