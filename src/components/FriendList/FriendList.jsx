import { default as PropTypes } from 'prop-types';
import { FriendListStyled } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return <FriendListStyled> {friends.map(FriendListItem)} </FriendListStyled>;
};

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };