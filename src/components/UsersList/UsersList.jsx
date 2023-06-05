import { UserItem } from 'components/UserCard/UserCard';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firstFetch, fetchMore } from 'Redux/users-operations';
import { selectUsers, selectPage } from 'Redux/users-selector';
import css from './UsersList.module.css';
import BigLoader from 'components/Loader/BigLoader';

export function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const page = useSelector(selectPage);
  const [isFirstFetch, setIsFirstFetch] = useState(true);

  useEffect(() => {
    const fetchParams = { page };
    if (page === 1 && isFirstFetch) {
      dispatch(firstFetch(fetchParams))
        .then(() => {
          setIsFirstFetch(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsFirstFetch(false);
        });
    } else {
      dispatch(fetchMore(fetchParams));
    }
  }, [dispatch, page, isFirstFetch]);

  return (
    <ul className={css.tweetsList}>
      {isFirstFetch ? (
        <BigLoader />
      ) : (
        users.map(user => <UserItem user={user} key={user.id} />)
      )}
    </ul>
  );
}
