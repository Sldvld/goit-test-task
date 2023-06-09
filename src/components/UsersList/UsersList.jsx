import { UserItem } from 'components/UserCard/UserCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firstFetch, fetchMore } from 'Redux/users-operations';
import { selectUsers, selectPage, selectIsLoading } from 'Redux/users-selector';
import css from './UsersList.module.css';
import BigLoader from 'components/Loader/BigLoader';

export function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const isFirstFetch = page === 1;

  useEffect(() => {
    const fetchParams = { page };
    if (isFirstFetch) {
      dispatch(firstFetch(fetchParams));
    } else {
      dispatch(fetchMore(fetchParams));
    }
  }, [dispatch, page, isFirstFetch]);

  return (
    <ul className={css.tweetsList}>
      {isLoading && isFirstFetch ? (
        <BigLoader />
      ) : (
        users.map(user => <UserItem user={user} key={user.id} />)
      )}
    </ul>
  );
}
