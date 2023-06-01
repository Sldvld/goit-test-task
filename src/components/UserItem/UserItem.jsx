import css from './UserItem.module.css';
import { ReactComponent as GoItLogo } from '../Images/goItLogo.svg';
import { ReactComponent as CardBackground } from '../Images/picture.svg';
import { ReactComponent as Line } from '../Images/line.svg';
import { ReactComponent as Elipse } from '../Images/ellipse.svg';

export function UserItem() {
  return (
    <li className={css.userItem}>
      <div className={css.userCard}>
        <GoItLogo className={css.goItLogo} />
        <CardBackground className={css.bckLogo} />
        <Line className={css.line} />
        <Elipse className={css.elipse} />
        <div className={css.tweetsBox}>
          <p className={css.tweets}>777 tweets</p>
          <p className={css.followers}>100 500 followers</p>
          <button type="button" className={css.button}>
            follow
          </button>
        </div>
      </div>
    </li>
  );
}
