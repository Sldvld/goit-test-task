import css from './UserCard.module.css';
import { ReactComponent as GoItLogo } from '../Images/goItLogo.svg';
import { ReactComponent as CardBackground } from '../Images/picture.svg';
import { ReactComponent as Line } from '../Images/line.svg';
import { ReactComponent as Elipse } from '../Images/ellipse.svg';
import { useDispatch } from 'react-redux';
import { putUsers } from 'Redux/users-operations';
import { useState } from 'react';
import { toast } from 'react-toastify';

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
      followers: parseFloat(
        isFollowing ? parseFloat(followers) - 1 : parseFloat(followers) + 1
      ),
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
        {/* <img src={avatar} alt={user} /> */}
        <div className={css.tweetsBox}>
          <p className={css.tweets}>{tweets.toLocaleString('en-US')} tweets</p>
          <p className={css.followers}>
            {followers.toLocaleString('en-US')} followers
          </p>
          <button
            className={`${css.button} ${isFollowing ? css.following : ''}`}
            isLoading={isLoading ? 'true' : 'false'}
            disabled={isLoading}
            data-isfollowing={true}
            onClick={handleFollow}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </li>
  );
}
// UserItem.propTypes = {
//   user: PropTypes.shape({
//     avatar: PropTypes.string.isRequired,
//     user: PropTypes.string.isRequired,
//     tweets: PropTypes.number.isRequired,
//     followers: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }).isRequired,
// };
