import { UsersList } from 'components/UsersList/UsersList';
import { BackButton } from 'components/BackButton/BackButton';
import css from './Tweets.module.css';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButtun';
import { ScrollUpButton } from 'components/SrollUpButton/ScrollUpButton';

export default function Tweets() {
  return (
    <>
      <section className={css.tweetsSection}>
        <BackButton />
      </section>
      <section className={css.tweetsSection}>
        <UsersList />
        <LoadMoreButton />
        <ScrollUpButton />
      </section>
    </>
  );
}
