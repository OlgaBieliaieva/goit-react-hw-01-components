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
    <section className="appContainer">
      <Profile
        user={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="Upload stats" data={statData} />
      <FriendList friends={userFriends} />
      <TransactionHistory transactions={userTransactions} />
    </section>
  );
};
