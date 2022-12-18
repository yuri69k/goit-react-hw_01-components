import { default as PropTypes } from 'prop-types';

import {
  AvatarImg,
  FriendListItemStyled,
  FriendName,
  IsOnlineIndicator,
} from './FriendList.styled';

const FriendListItem = ({
  id,
  name,
  avatar,
  isOnline,
}) => {
  return id ? (
    <FriendListItemStyled key={id}>
      <IsOnlineIndicator isOnline={isOnline} />
      <AvatarImg src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendListItemStyled>
  ) : (
    ''
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;