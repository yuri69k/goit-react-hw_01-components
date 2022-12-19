// import { Profile, Statistics, FriendList, TransactionHistory } from '../';

import { Profile } from '@components/Profile';
import { Statistics } from '@components/Statistics';
import { FriendList } from '@components/FriendList';
import { TransactionHistory } from '@components/TransactionHistory';
import { user, data, friends, transactions } from '../../data';
import { Container } from './App.styled';

export const App = () => {
  const {username, tag, location, avatar, stats} = user
  return (
    <Container>
      <Profile 
        username={username} 
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
         />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};