import { default as PropTypes } from 'prop-types';

import {
  ProfileStyled,
  DescriptionStyled,
  Avatar,
  UserName,
  TagName,
  Location,
  ProfileStatListStyled,
  ProfileStatsLabel, 
  StatsItem, 
  Quantity
} from './Profile.styled';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats
}) => {
  return (
    <ProfileStyled>
      <DescriptionStyled>
        <Avatar avatar={avatar} alt={username} />
        <UserName>{username}</UserName>
        <TagName>&#64;{tag}</TagName>
        <Location>{location}</Location>
      </DescriptionStyled>
      <ProfileStatListStyled>
      {Object.entries(stats).map(([key,val]) => 
          <StatsItem key={key}>
          <ProfileStatsLabel>{key}</ProfileStatsLabel>
          <Quantity>{val}</Quantity>
          </StatsItem>
      )}
      </ProfileStatListStyled>
    </ProfileStyled>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};