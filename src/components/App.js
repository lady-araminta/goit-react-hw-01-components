import { Profile } from './Profile';
import user from '../data/user.json';
import { Stat } from './Stat';
import data from 'data/data.json';
import { FriendList } from './FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from 'data/transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Stat title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </>
  );
};
