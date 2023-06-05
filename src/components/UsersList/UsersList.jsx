import { UserItem } from 'components/UserCard/UserCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firstFetch, fetchMore } from 'Redux/users-operations';
import {
  selectUsers,
  selectPage,
  // selectIsError,
  // selectIsLoading,
} from 'Redux/users-selector';
import css from './UsersList.module.css';

export function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  // const isError = useSelector(selectIsError);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    const fetchPararms = { page };
    if (page === 1) {
      dispatch(firstFetch(fetchPararms));
    } else {
      dispatch(fetchMore(fetchPararms));
    }
  }, [dispatch, page]);

  return (
    <ul className={css.tweetsList}>
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  );
}
