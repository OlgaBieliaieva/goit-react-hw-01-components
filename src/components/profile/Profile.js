import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ user, tag, location, avatar, stats }) => {
  const { followers = 0, views = 0, likes = 0 } = stats;
  return (
    <div className={css.profileContainer}>
      <div className={css.profileDescription}>
        <img src={avatar} alt="User avatar" className={css.profileAvatar} />
        <p className={css.userName}>{user}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.statsItem}>
          <span className={css.statLabel}>Followers</span>
          <span className={css.statQuantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statLabel}>Views</span>
          <span className={css.statQuantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statLabel}>Likes</span>
          <span className={css.statQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
