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

export const Profile = ({ user }) => {
  return (
    <ProfileCont>
      <UserDescription>
        <UserPhoto src={user.avatar} alt={user.username} />
        <UserName>{user.username}</UserName>
        <UserTag>@{user.tag}</UserTag>
        <UserLocation>{user.location}</UserLocation>
      </UserDescription>
      <UserStat>
        <UserStatItem>
          <Label>Followers</Label>
          <LabelValue>{user.stats.followers}</LabelValue>
        </UserStatItem>
        <UserStatItem>
          <Label>Views</Label>
          <LabelValue>{user.stats.views}</LabelValue>
        </UserStatItem>
        <UserStatItem>
          <Label>Likes</Label>
          <LabelValue>{user.stats.likes}</LabelValue>
        </UserStatItem>
      </UserStat>
    </ProfileCont>
  );
};
