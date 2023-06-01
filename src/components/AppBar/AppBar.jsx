import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.headerBox}>
      <NavLink className={css.headerLink} to="/">
        <span className={css.headerLink}>Home</span>
      </NavLink>
      <span className={css.headerElement}>
        <NavLink to="/tweets" className={css.headerLink}>
          Tweets
        </NavLink>
      </span>
    </header>
  );
}
