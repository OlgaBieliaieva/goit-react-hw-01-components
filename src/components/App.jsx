import userProfile from '../data/user-profile.json';
import statData from '../data/stat-data.json';
import userFriends from '../data/user-friends.json';
import userTransactions from '../data/user-transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={userProfile} />
      <Statistics title="Upload stats" data={statData} />
      <FriendList friends={userFriends} />
      <TransactionHistory transactions={userTransactions} />
    </>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    //
    // </div>
  );
};
