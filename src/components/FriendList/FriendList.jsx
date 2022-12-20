import { default as PropTypes } from 'prop-types';
import { FriendListStyled } from './FriendList.styled';
import FriendListItem from './FriendListItem';

export const FriendList = ({ friends }) => {
  return <FriendListStyled>   {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))} </FriendListStyled>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};