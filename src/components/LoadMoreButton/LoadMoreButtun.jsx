import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from 'Redux/users-slice';
import { selectIsLoading, selectLoadMore } from 'Redux/users-selector';
import css from './LoadMoreButton.module.css';

export function LoadMoreButton() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const loadMore = useSelector(selectLoadMore);

  return (
    loadMore && (
      <button
        className={css.loadMoreButton}
        disabled={isLoading}
        onClick={() => {
          dispatch(incrementPage());
        }}
      >
        Load more
      </button>
    )
  );
}
