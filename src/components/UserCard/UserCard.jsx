import css from './UserCard.module.css';
import { ReactComponent as GoItLogo } from '../Images/goItLogo.svg';
import { ReactComponent as CardBackground } from '../Images/picture.svg';
import { ReactComponent as Line } from '../Images/line.svg';
import { ReactComponent as Elipse } from '../Images/ellipse.svg';
import { useDispatch } from 'react-redux';
import { putUsers } from 'Redux/users-operations';

export const UserItem = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  isFollow = false,
}) => {
  const dispatch = useDispatch();
  const handleFollow = () => {
    dispatch(putUsers(id));
  };

  return (
    <>
      <li className={css.userItem} key={id}>
        <div className={css.userCard}>
          <GoItLogo className={css.goItLogo} />
          <CardBackground className={css.bckLogo} />
          <Line className={css.line} />
          <Elipse className={css.elipse} />
          {/* <img src={avatar} alt={user} /> */}
          <div className={css.tweetsBox}>
            <p className={css.tweets}>{tweets} tweets</p>
            <p className={css.followers}>{followers} followers</p>
            <button type="button" onClick={handleFollow} className={css.button}>
              follow
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
