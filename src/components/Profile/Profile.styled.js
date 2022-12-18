import { default as styled } from 'styled-components';

export const ProfileStyled = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 2px 2px 2px 1px ${props => props.theme.colors.boxShadow};
`;

export const DescriptionStyled = styled.div`
  padding: 10px;
  text-align: center;
`;

const placeholderImg =
  'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

const setAttr = props => ({ src: props.avatar || placeholderImg });

export const Avatar = styled.img.attrs(setAttr)`
  display: block;

  width: 64%;
  height: auto;
  margin: 0 auto;

  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;

export const TagName = styled.p`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.lightGrey};
`;

export const Location = styled(TagName)``;

export const ProfileStatListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  border-top: 1px solid ${props => props.theme.colors.lightLightGrey};
`;

export const ProfileStatsLabel = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.lightGrey};
`;

export const StatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 10px;

  background-color: ${props => props.theme.colors.grey};
  transition: var(--time) var(--cubic) transform;

  :first-of-type {
    border-bottom-left-radius: 12px;
  }

  :last-of-type {
    border-bottom-right-radius: 12px;
  }

  :not(:last-of-type) {
    border-right: 1px solid #e4e9f0;
  }
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
`;
