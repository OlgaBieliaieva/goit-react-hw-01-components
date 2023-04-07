import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const showStatus = isOnline => {
    if (isOnline) {
      return 'green';
    }
    return 'red';
  };
  return (
    <>
      <span
        className={css.friendStatus}
        style={{ backgroundColor: showStatus(isOnline) }}
      >
        {isOnline}
      </span>
      <img
        className={css.friendAvatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendName}>{name}</p>
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
