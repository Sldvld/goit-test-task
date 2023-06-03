import { UserItem } from 'components/UserCard/UserCard';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'Redux/users-operations';
import { selectAllUsers } from 'Redux/users-selector';

export function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {users.map(user => (
          <UserItem key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
}
