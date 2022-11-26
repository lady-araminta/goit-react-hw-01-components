import { Profile } from './Profile';
import user from '../data/user.json';
import { Stat } from './Stat';
import data from 'data/data.json';
import { FriendList } from './FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Stat title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
