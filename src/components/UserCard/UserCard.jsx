import { ReactComponent as GoItLogo } from '../Images/goItLogo.svg';
import { ReactComponent as CardBackground } from '../Images/picture.svg';
import { ReactComponent as Line } from '../Images/line.svg';
import { ReactComponent as Elipse } from '../Images/ellipse.svg';
import { useDispatch } from 'react-redux';
import { putUsers } from 'Redux/users-operations';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './UserCard.module.css';
import { toast } from 'react-toastify';
import Loader from '../Loader/Loader';
import Tooltip from '@mui/joy/Tooltip';

export function UserItem({
  user: { isFollowing, id, user, avatar, tweets, followers },
}) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const cancelLoading = () => setLoading(false);

  const handleFollow = async () => {
    const payload = {
      id: id,
      isFollowing: !isFollowing,
      followers: isFollowing ? followers - 1 : followers + 1,
    };
    setLoading(true);

    dispatch(putUsers(payload))
      .then(() =>
        isFollowing
          ? toast.info(`You have unfollowed from the user ${user}.`)
          : toast.success(`Wow! You have just followed to the user ${user}.`)
      )
      .catch(() => toast.error('Something went wrong. Try to reload this page'))
      .finally(cancelLoading);
  };

  return (
    <li className={css.userItem}>
      <div className={css.userCard}>
        <GoItLogo className={css.goItLogo} alt="logo" />
        <CardBackground className={css.bckLogo} />
        <Line className={css.line} />
        <Elipse className={css.elipse} />
        <Tooltip
          size="md"
          placement="top"
          arrow
          title={user}
          variant="outlined"
          color="info"
        >
          <img className={css.userAvatar} src={avatar} alt="User avatar" />
        </Tooltip>
        <div className={css.tweetsBox}>
          <p className={css.tweets}>{tweets.toLocaleString('en-US')} tweets</p>
          <p className={css.followers}>
            {followers.toLocaleString('en-US')} followers
          </p>
          <button
            className={`${css.button} ${isFollowing ? css.following : ''}`}
            disabled={isLoading}
            data-isfollowing={true}
            onClick={handleFollow}
          >
            {isLoading ? <Loader /> : isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </li>
  );
}
UserItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
