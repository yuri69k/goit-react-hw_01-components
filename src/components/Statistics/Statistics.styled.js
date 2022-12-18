import { default as styled } from 'styled-components';

export const StatisticsStyled = styled.section`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 1px 1px 4px 1px rgba(33, 33, 33, 0.21);
  border-radius: 4px 4px 12px 12px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const StatListStyled = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0 0 12px 12px;
`;

const randomBgColor = () => `#${Math.random().toString(16).slice(2, 8)}`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: calc(100% / 5);
  padding: 10px;

  color: ${props => props.theme.colors.white};
  background-color: ${randomBgColor};
  box-shadow: 1px 1px 2px 1px ${props => props.theme.colors.grey};

  transition: var(--time) var(--cubic) transform;

  :focus-within,
  :hover {
    background-color: ${props => props.theme.colors.black};
  }

  :first-of-type {
    border-bottom-left-radius: 12px;
  }

  :last-of-type {
    border-bottom-right-radius: 12px;
  }
`;

export const StatItemLabel = styled.span`
  font-size: 0.9rem;
`;

export const StatItemPercentage = styled.span`
  font-size: 1.4rem;
`;
