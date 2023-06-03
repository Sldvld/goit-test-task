import { UsersList } from 'components/UsersList/UsersList';
import { BackButton } from 'components/BackButton/BackButton';

export default function Tweets() {
  return (
    <section>
      <BackButton />
      <UsersList />
    </section>
  );
}
