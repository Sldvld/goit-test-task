import css from './Home.module.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className={css.homeLabel}>
        Welcome to your personal{' '}
        <NavLink to="/tweets" className={css.homeLink}>
          Tweeter!
        </NavLink>
      </h1>
    </div>
  );
}
