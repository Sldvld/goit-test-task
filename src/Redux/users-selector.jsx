export const selectUsers = state => state.users.items;

export const selectPage = state => state.users.page;

export const selectLoadMore = state => state.users.loadMore;

export const selectIsLoading = state => state.users.isLoading;

export const selectIsError = state => state.users.error;
