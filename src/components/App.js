import { Profile } from './Profile';
import user from '../data/user.json';
import { Stat } from './Stat';
import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Stat title="Upload stats" stats={data} />
    </>
  );
};
