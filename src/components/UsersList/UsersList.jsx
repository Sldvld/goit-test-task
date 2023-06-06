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

  useEffect(() => {
    const fetchParams = { page };
    if (page === 1) {
      dispatch(firstFetch(fetchParams));
    } else {
      dispatch(fetchMore(fetchParams));
    }
  }, [dispatch, page]);

  return (
    <ul className={css.tweetsList}>
      {isLoading ? (
        <BigLoader />
      ) : (
        users.map(user => <UserItem user={user} key={user.id} />)
      )}
    </ul>
  );
}
