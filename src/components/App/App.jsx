// import { Profile, Statistics, FriendList, TransactionHistory } from '../';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
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