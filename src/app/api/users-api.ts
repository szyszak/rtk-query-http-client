import { createApi } from 'ngrx-rtk-query';
import { angularBaseQuery } from './angular-base-query';
import { UsersResponse } from './models';

const baseUrl: string = 'https://jsonplaceholder.typicode.com/';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: angularBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getUsers: build.query<UsersResponse, void>({
      query: () => ({
        url: `users`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi;
