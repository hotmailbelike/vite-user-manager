import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '@/types/user';
import type { UsersResponse } from '@/types/users-response';

export const usersApiSlice = createApi({
	reducerPath: 'users-api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	endpoints: (builder) => ({
		getUsers: builder.query<
			UsersResponse,
			{ limit: number; skip: number; search?: string }
		>({
			query: ({ limit, skip, search }) => ({
				url: search ? `/users/search?q=${search}` : '/users',
				params: { limit, skip },
			}),
		}),
		getUserById: builder.query<User, number>({
			query: (id) => `/users/${id}`,
		}),
	}),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApiSlice;
