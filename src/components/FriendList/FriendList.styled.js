import { default as styled } from 'styled-components';
import { iconSize } from '../../constants';

export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  border-radius: 4px;
`;

export const FriendListItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  padding: 10px;

  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px ${props => props.theme.colors.boxShadowLight};
  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    transform: scale(1.03);
  }
`;

export const IsOnlineIndicator = styled.span`
  width: ${iconSize.sm}px;
  height: ${iconSize.sm}px;
  border-radius: 50%;
  background-color: ${({ isOnline, theme }) =>
    theme.colors[isOnline ? 'green' : 'red']};
`;

export const FriendName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const AvatarImg = styled.img`
  display: block;
  width: ${iconSize.lg}px;
  height: auto;
`;
